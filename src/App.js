import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './view/Home';
import Header from './component/Header';
import Detect from './view/Detect';
import AddStudent from './view/AddStudent';
import AddParent from './view/AddParent';
import Show from './view/Show';
import Edit from './view/Edit';
import ShowParent from './view/ShowParent';
import Pick from './view/Pick';
import Login from './view/Login';
import Line from './api/line'
import Signup from './view/Signup';
import Firebase from 'firebase';


import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; 
import { render } from 'react-dom';

var user = Firebase.auth().currentUser;
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: user
    }
  }

  componentDidMount() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        })
      }
    })
  }
  render() {
    const {currentUser} = this.state
    if(currentUser) {
      return(
        

        <div>
          
          <Router>
            <div>
            <Header/>
            </div>
            
            <div className="ui container">
            
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/detect" component={Detect}/>
              <Route path="/addstudent" component={AddStudent}/>
              <Route path="/addparent/:id" component={AddParent}/>
              <Route path="/show/:id" component={Show}/>
              <Route path="/edit/:id" component={Edit}/>
              <Route path="/showparent/:id" component={ShowParent}/>
              <Route path="/pick/:id" component={Pick}/>
              <Route path="/line/" component={Line}/>

            </Switch>

           
      
            <br></br><br></br> <br></br><br></br>
            </div>
            </Router>

            
            <div class="footer" id="footer" > 
            <Footer
              columns={[
                {
                  title: 'About',
                  items: [
                    {
                      title: 'Why Parent Face?',
                      url: '#',
                      openExternal: true,
                    },
                    {
                      title: 'Privacy Policy',
                      url: '#',
                      openExternal: true,
                    },
                    {
                      title: 'License',
                      url: '#',
                      description: 'Disclaimer',
                    },
                  ],
                },
                {
                  title: 'Contact Us',
                  items: [
                    {
                      icon: (
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg"/>
                      ),
                      title: 'Parent Face',
                      url: '#',
                      openExternal: true,
                    },
                    {
                      icon: (
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"/>
                      ),
                      title: 'Parent Face Page',
                      url: 'https://mobile.ant.design/',
                      openExternal: true,
                    },
                    {
                      icon: (
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/New_Logo_Gmail.svg"/>
                      ),
                      title: 'Mail',
                      url: '#',
                      description: 'test@test.com',
                    },
                  ],
                },
               
                {
                  icon: (
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                      alt="more products"
                    />
                  ),
                  title: 'Group 1',
                  items: [
                    {
                      icon: (
                        <img
                          src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
                          alt="#"
                        />
                      ),
                      title: 'Term of Services',
                      url: '#',
                      description: 'Student Pickup',
                      openExternal: true,
                    },
                    {
                      icon: (
                        <img
                          src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
                          alt="yuque"
                        />
                      ),
                      title: 'Software Use',
                      url: '#',
                      description: 'tools',
                      openExternal: true,
                    },
                   
                  ],
                },
              ]}
              

              
              
              bottom="Made with ❤️ by Group 1"
          />
          </div>
         
          
         
        </div>
       


   
       
 
       
      )
      
    }
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
  )

  

  
}
}
export default App;