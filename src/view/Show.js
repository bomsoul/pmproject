import React,{ Component } from 'react';
import Firebase from '../Firebase';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

class Show extends Component{
    constructor(props) {
        super(props);
        this.state={
            name: '',
            imageURL: '',
            stdId: '',
            email: '',
            address: '',
            parent: []
        };
    }

    componentDidMount = () =>{
        Firebase.firestore().collection('student')
        .doc(this.props.match.params.id).get()
        .then(doc =>{
            this.setState({
                name : doc.data().name,
                imageURL : doc.data().imageURL,
                stdId : doc.data().stdId,
                email: doc.data().email,
                address : doc.data().address
            })
            Firebase.firestore().collection('parent')
            .where('studentID','==',this.props.match.params.id).get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    this.setState({
                        parent: [...this.state.parent, doc]
                    })
                    console.log(doc);
                })
            })
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
    }
    render(){
        return(
            <div>
                <Card fluid>
                    <Card.Content>
                        <Image fluid
                        src={this.state.imageURL}
                        />
                        <Card.Header>{this.state.name}</Card.Header>
                        <Card.Meta>{this.state.stdId}</Card.Meta>
                        <Card.Description>
                        Email: {this.state.email}
                        <br/>
                        {this.state.address}
                        <br/>
                        Parent: {this.state.parent.map((key, index) =>
                            
                                <li><Link to={'/showparent/'+ key.id}>{key.data().name}</Link></li>
                        )}
                        
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Link  to={'/edit/'+ this.props.match.params.id} class="ui yellow basic button">Edit Profile</Link>
                        <Link  to={'/addparent/'+ this.props.match.params.id} class="ui violet basic button">AddParent</Link>
                        </div>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}
export default Show;