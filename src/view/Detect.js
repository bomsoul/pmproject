import React,{Component} from 'react';
import { loadModels, getFullFaceDescription } from '../api/face';
import { Image } from 'semantic-ui-react'

// Initial State
const INIT_STATE = {
    imageURL: null,
    fullDesc: null
  };

class Detect extends Component{
    constructor(props) {
        super(props);
        this.state = { ...INIT_STATE };
      }

    componentWillMount = async () => {
        await loadModels();
        if(this.state.imageURL != null){
            await this.handleImage(this.state.imageURL);
        }
    }

    handleImage = async (image = this.state.imageURL) => {
        await getFullFaceDescription(image).then(fullDesc => {
            if (!!fullDesc) {
                this.setState({
                    fullDesc,
                    detections: fullDesc.map(fd => fd.detection)
                });
            }
        });
        console.log(this.state.fullDesc[0].descriptor);
    };

    handleFileChange = async event => {
        var file = event.target.files[0];
        this.resetState();
        await this.setState({
            imageURL: URL.createObjectURL(file),
            loading: true
        });
        this.handleImage();
    };

    resetState = () => {
        this.setState({ ...INIT_STATE });
    };

    render() {
        const { imageURL, detections } = this.state;
    
        let drawBox = null;
        if (!!detections) {
          drawBox = detections.map((detection, i) => {
            let _H = detection.box.height;
            let _W = detection.box.width;
            let _X = detection.box._x;
            let _Y = detection.box._y;
            return (
              <div key={i}>
                <div
                  style={{
                    position: 'absolute',
                    border: 'solid',
                    borderColor: 'pink',
                    height: _H,
                    width: _W,
                    transform: `translate(${_X}px,${_Y}px)`
                  }}
                />
              </div>
            );
          });
        }
    
        return (
          <div>
            <input
              id="myFileUpload"
              type="file"
              onChange={this.handleFileChange}
              accept=".jpg, .jpeg, .png"
            />
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute' }}>
              <Image src={imageURL} />
              </div>
              {!!drawBox ? drawBox : null}
            </div>
          </div>
        );
      }
}

export default Detect;