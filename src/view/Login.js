import React from 'react';
import Firebase from '../Firebase';
import App from '../App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

class Login extends React.Component {
  componentDidMount() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        })
      }
    })
  }
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      currentUser: null,
      message: ''
    }
  }

  onEmailChange = e => {
    this.setState({ 
      email: e.target.value
    })
    console.log(this.state.email);
  }

  onPasswordChange = e => {
    this.setState({ 
      password: e.target.value
    })
    console.log(this.state.password);
  }

  onSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({
          currentUser: response.user
        })
        console.log("pass");
      })
      .catch(error => {
        this.setState({
          message: error.message,
          password: ''
        })
      })

  }
  render() {
    const { message, currentUser } = this.state
    if (currentUser) {
      return (
        <App/>
      )
    }

    return (
      <Router>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='https://react.semantic-ui.com/logo.png' /> Log-in to your account
          </Header>
          <Form size='large' onSubmit={this.onSubmit}>
            <Segment stacked>
              {message ? <p className="ui negative message">Wrong Username or Password.</p> : null}
              <Form.Input fluid 
                          icon='user' 
                          iconPosition='left' 
                          placeholder='E-mail address'
                          value={this.state.email}
                          onChange={this.onEmailChange} />
              <Form.Input fluid
                          icon='lock'
                          iconPosition='left'
                          placeholder='Password'
                          type='password'
                          value={this.state.password}
                          onChange={this.onPasswordChange}/>
              <Button color='teal' fluid size='large' type='submit'>
                Login
              </Button>
            </Segment>
            <Message>
              New to us? <a href='#'>Sign Up</a>
            </Message>
          </Form>
        </Grid.Column>
      </Grid>
      </Router>
      // <section className="section container">
      //   <div className="columns is-centered">
      //     <div className="column is-half">
      //       <form onSubmit={this.onSubmit}>
      //         <div className="field">
      //           <label className="label">Email</label>
      //           <div className="control">
      //             <input
      //               className="input"
      //               type="email"
      //               name="email"
      //               onChange={this.onChange}
      //             />
      //           </div>
      //         </div>

      //         <div className="field">
      //           <label className="label">Password</label>
      //           <div className="control">
      //             <input
      //               className="input"
      //               type="password"
      //               name="password"
      //               onChange={this.onChange}
      //             />
      //           </div>
      //         </div>

      //         <div className="field is-grouped">
      //           <div className="control">
      //             <button className="button is-link">Submit</button>
      //           </div>
      //           <div className="control">
      //             <button className="button is-text">Cancel</button>
      //           </div>
      //         </div>
      //       </form>
      //     </div>
      //   </div>
      // </section>
      
    )
  }
}

export default Login