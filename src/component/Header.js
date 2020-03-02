import React,{Component} from 'react';
import{Link} from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
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

    render() { 
        
        return(
            <div>
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item
                name='home'
                active={this.state.activeItem === 'home'}
                onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/detect">
            <Menu.Item
                name='detect'
                active={this.state.activeItem === 'detect'}
                onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/addstudent">
            <Menu.Item
                name='add student'
                active={this.state.activeItem === 'add student'}
                onClick={this.handleItemClick}
            />
          </Link>
          <Menu.Menu position='right'>
          <Link to="/">
            <Menu.Item
              name='logout'
              active={this.state.activeItem === 'logout'}
              onClick={this.logout}
              
            />
            </Link>
          </Menu.Menu>
          
        </Menu>
      
      </div>
      
        )
    }
}
export default Header;
