import React,{Component} from 'react';
import{Link} from 'react-router-dom';
import { Menu, Button, MenuMenu,Dropdown } from 'semantic-ui-react';
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
     
        // <Menu pointing secondary>

          

        //   <Link to="/">
        //     <Menu.Item
        //         name='home'
        //         active={this.state.activeItem === 'home'}
        //         onClick={this.handleItemClick}
        //     />
        //   </Link>
        //   <Link to="/detect">
        //     <Menu.Item
        //         name='detect'
        //         active={this.state.activeItem === 'detect'}
        //         onClick={this.handleItemClick}
        //     />
        //   </Link>
        //   <Link to="/addstudent">
        //     <Menu.Item
        //         name='add student'
        //         active={this.state.activeItem === 'add student'}
        //         onClick={this.handleItemClick}
        //     />
        //   </Link>
        //   <Menu.Menu position='right'>
        //   <Link to="/">
        //     <Menu.Item
        //       name='logout'
        //       active={this.state.activeItem === 'logout'}
        //       onClick={this.logout}
              
        //     />
        //     </Link>
        //   </Menu.Menu>
          
        // </Menu>
        
      

     
      <div class="ui large menu">
        


        
        
         <div>
                <img class="ku-logo-signup" src='images/KU_Logo.png'></img>
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
       
        
     
          
        {/* <a class="active item"  href="/detect" active={this.state.activeItem === 'detect'}
            onClick={this.handleItemClick}>
            Detect
        </a> */}
        <div className="home-menu ">
        <Link to="/detect"  >
          <Menu.Item
                name='detect'
                active={this.state.activeItem === 'detect'}
                onClick={this.handleItemClick}
            />
          </Link>
        </div>

        {/* <a class="active item" href="/addstudent" active={this.state.activeItem === 'add student'}
            onClick={this.handleItemClick}>
            Add Student
        </a> */}
        <div class="home-menu">
        <Link to="/addstudent"  >
          <Menu.Item
                name='add student'
                active={this.state.activeItem === 'add student'}
                onClick={this.handleItemClick}
            />
          </Link>
        </div>

         

        
          
       
       
  <div class="right menu">
    
  
    <div class="item">
    
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