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
import Signup from './view/Signup';
import Firebase from 'firebase';

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
        <div className="ui container">
          <Router>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/detect" component={Detect}/>
              <Route path="/addstudent" component={AddStudent}/>
              <Route path="/addparent/:id" component={AddParent}/>
              <Route path="/show/:id" component={Show}/>
              <Route path="/edit/:id" component={Edit}/>
              <Route path="/showparent/:id" component={ShowParent}/>
              <Route path="/pick/:id" component={Pick}/>
            </Switch>
          </Router>
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
