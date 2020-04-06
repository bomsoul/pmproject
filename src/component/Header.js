import React,{Component} from 'react';
import{Link} from 'react-router-dom';
import { Menu, Button, MenuMenu } from 'semantic-ui-react';
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
    
    {/* <a href="/"> <div  class="negative ui button" active={this.state.activeItem === 'logout'}
              onClick={this.logout} >Sign out</div> </a> */}

              <div class="dropdown-list" >
              {/* <div class="ui right pointing dropdown icon button" id="select">
                    <i class="settings icon"></i>
                    <div class="menu">
                      
                      
                      <div class="item">
                        <div class="ui red empty circular label"></div>
                        Important
                      </div>
                      <div class="item">
                        <div class="ui blue empty circular label"></div>
                        Announcement
                      </div>
                      <div class="item">
                        <div class="ui black empty circular label"></div>
                        Discussion
                      </div> */}


                    {/* </div> */}
                  {/* </div> */}
                  <div class="dropdown">
    <button type="button" class="btn btn-outline-secondary  dropdown-toggle" data-toggle="dropdown">
    <i class="settings icon"></i>
    </button>
    <div class="dropdown-menu dropdown-menu-right" >
    <a class="dropdown-item"  href="/"><div   active={this.state.activeItem === 'logout'}
              onClick={this.logout} >Log in</div></a>
     <a class="dropdown-item"  href="/signup"><div   active={this.state.activeItem === 'signup'}
              onClick={this.signup} >Sign in</div></a>
      
      <a class="dropdown-item"  href="/"><div   active={this.state.activeItem === 'logout'}
              onClick={this.logout} >Sign out</div></a>
      
    </div>
  </div>





  </div>
  
              
              
              
            
    </div>
   
    
  </div>

  
  </div>
      






        )
    }
}
export default Header;