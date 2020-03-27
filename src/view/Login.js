import React from 'react';
import Firebase from '../Firebase';
import App from '../App';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { FormErrors } from './FormErrors';

class Login extends React.Component {

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
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
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      currentUser: null,
      message: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
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
          <Header as='h2' color='ui positive  ' textAlign='center'>
            <Image src='images/KU_Logo.png' /> Log in to your Account
          </Header>
          <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
          <Form size='large' onSubmit={this.onSubmit} >
            
            <Segment stacked>
              {message ? <p className="ui negative message">Wrong Username or Password.</p> : null}
              <Form.Input fluid 
                          name= 'email'
                          icon='user' 
                          iconPosition='left' 
                          placeholder='E-mail address'
                          value={this.state.email}
                          onChange={this.handleUserInput} />
              <Form.Input fluid
                          name= 'password'
                          icon='lock'
                          iconPosition='left'
                          placeholder='Password'
                          type='password'
                          value={this.state.password}
                          onChange={this.handleUserInput}/>
              <Button color="ui positive button" fluid size='large' type='submit'>
                Login
              </Button>
            </Segment>
            <Message>
              New for us? <Link to='/signup'> Sign Up</Link>
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