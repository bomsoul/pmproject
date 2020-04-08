import React,{Component} from 'react';
import{Link} from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';
import Firebase from 'firebase';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { activeItem: 'home' }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    logout = e => {
      e.preventDefault()
      Firebase.auth().signOut().then(response => {
        this.setState({
          currentUser: null
        })
      })
      window.location.href = "/";
    }

    signup = e => {
      e.preventDefault()
      Firebase.auth().signOut().then(response => {
        this.setState({
          currentUser: null
        })
      })
      window.location.href = "/signup";
    }




 

    render() { 
        
        return(
     
      <div className="ui large menu">
         <div>
            <img className="ku-logo-signup" src='images/KU_Logo.png'/>
         </div>
       <div className="home-menu">
          <Link to="/"  >
          <Menu.Item
                name='home'
                active={this.state.activeItem === 'home'}
                onClick={this.handleItemClick}
            />
          </Link>
        </div>
 
        <div className="home-menu ">
        <Link to="/detect"  >
          <Menu.Item
                name='detect'
                active={this.state.activeItem === 'detect'}
                onClick={this.handleItemClick}
            />
          </Link>
        </div>

        <div className="home-menu">
        <Link to="/addstudent"  >
          <Menu.Item
                name='add student'
                active={this.state.activeItem === 'add student'}
                onClick={this.handleItemClick}
            />
          </Link>
        </div>

  <div className="right menu">
    <div className="item">
    
    <Dropdown text='Menu'>
     <Dropdown.Menu>
     <Dropdown.Item text='Logout' icon='logout' onClick={this.logout} />
     
      <Dropdown.Item text='Signup' icon='signup' as={Link} to="/signup"/>
     </Dropdown.Menu>

   </Dropdown>
              
              
              
            
    </div>
   
    
  </div>

  
  </div>
      






        )
    }
}
export default Header;