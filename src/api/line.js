import React,{Component} from 'react';
// import { Link } from 'react-router-dom';
// import Pick from '../view/Pick.js'
import axios from 'axios';
// import { Divider } from 'semantic-ui-react';
class Line extends Component{
    constructor(props){
        super(props);
        this.state = {
            studentId : "",
            parentId : "",
            StudentName :"",
            ParentName:""
            
        }
    }
    
    transfer = () =>{
       let header = {
                'Authorization': 'Bearer {3Rs86FmcOG2lGszCFEEuQqO6eLIzoOPQwXjXY3pGHzVjYfmXvj3d5hNUWPS5c4wyN8k0a+Qfx5GULhCmBRAYmHSew7DXbgme5FJPbMYv4kUXgEXIxed6KEf9jiGlunkTnCv3cw0XjT9vFbwrAUafdgdB04t89/1O/w1cDnyilFU=}',

                'Access-Control-Allow-Origin' : '*',
                'Content-Type': 'application/json',
                 'Access-Control-Allow-Methods':'POST',
               }
       let data ={ 
                replyToken : "0839eb0d232509b911f185ae94f6eaf5",
                // to: " U1acf7962739e020dd8d47a2f3875e672",
                messages : [{
                            studentId : "Go",
                            parentId : "g",
                            studentName :"r",
                            parentName: "h"
                }]
            }

        axios.post('https://api.line.me/v2/bot/message/reply',header,data).then(function(res){
                console.log(res);
        }).catch(function(err){
            console.log(err);
        })

        // const cors = require('cors');

        // axios.use(cors({ origin: true }));
        //  axios({
        //     method: 'get',
        //     url: 'https://my-project-1570175172905.firebaseapp.com/',
        //     headers : {
        //         'Access-Control-Allow-Origin' : "*",
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Methods':'GET',
        //         'Authorization': 'Bearer {3Rs86FmcOG2lGszCFEEuQqO6eLIzoOPQwXjXY3pGHzVjYfmXvj3d5hNUWPS5c4wyN8k0a+Qfx5GULhCmBRAYmHSew7DXbgme5FJPbMYv4kUXgEXIxed6KEf9jiGlunkTnCv3cw0XjT9vFbwrAUafdgdB04t89/1O/w1cDnyilFU=}'
        //       },
        //       messages: [{
        //         studentId : "Go",
        //         parentId : "g",
        //         studentName :"r",
        //         parentName:"h"

        //     }],
        //     replyToken : "0839eb0d232509b911f185ae94f6eaf5"
        // }).then(res=>{
        //     console.log(res.messages.studentName)
            
        // }).catch(err=>{
        //     console.log(err)
        // })

    }
    render(){
        return(
            <div>
                <button onClick={this.transfer}>Acecpt</button>
            </div>
        )
    }
    
}

   
export default Line;