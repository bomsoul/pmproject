import React,{Component} from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import { FormErrors } from './FormErrors';

class Signup extends Component{
    
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



  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      message: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }


    
    render(){
        return(
          <div>
{/*             
              < div className="ui orange inverted segment" >
              <div className="ui inverted secondary menu">
                <div>
                <img class="ku-logo-signup" src='images/KU_Logo.png'></img>
                </div>
                <a className="active item" href="#">
                  Why Parent Face?
                </a>
                <a className="active item" href="/">
                  Log in
                </a>
                <a className="active item" href="/signup">
                  Sign up
                </a>
              </div> 
              
              
        </div> */}
         
         <div class="ui large menu">
         <div>
                <img class="ku-logo-signup" src='images/KU_Logo.png'></img>
                </div>
  <a class="active item" href="#">
      Why Parent Face?
  </a>
  <div class="right menu">
    
    
    <div class="item">
    <a href="/"> <div  class="positive ui button"  >Log in</div> </a>
    </div>
   
    <div class="item">
    <a href="/signup">   <div class="ui primary button">Sign Up</div> </a>
    </div>
  </div>
</div>


          <div className="ui container">
              <br></br>
              <center><h4 id="join-parent">Join Parent Face</h4>

              <h1>
              <span class="text_1">Hi, User do you have an Account?</span><span class="text_2">Create your Account.</span>
              </h1></center>
              <h3>Getting started with Parent Face</h3>
              <h4 class="sign-up-content-h4">Sign up an account to Parent Face - A simple way to help parents pick their kids !</h4>
              <p class ="sign-up-content-p">Just have your account and take a face scan then they will connect to family.</p>
              <br></br>
              <FormErrors formErrors={this.state.formErrors} />
              <Form>
                  
                  <Form.Field
                      id='form-input-control-error-email'
                      control={Input}
                      label='Email'
                      placeholder='ex: your.email@gmail.com'
                      name ="email"
                      value={this.state.email}
                        onChange={this.handleUserInput} />
                      
                  <Form.Field
                      id='form-input-control-last-name'
                      control={Input}
                      label='Password'
                      placeholder='enter password'
                  />
                  <Form.Field
                      
                      id='form-button-control-public'
                      control={Button}
                      content='Register'
                      />
</Form>
</div>




<div class="social-media">
  
<button class="ui facebook button">
  <i class="facebook icon"></i>
  Facebook
</button>


<button class="ui linkedin button">
  <i class="linkedin icon"></i>
  LinkedIn
</button>


<button class="ui red button"  >
  <i class="google icon"></i>
  Sign up with Google
</button>
</div>





          
          </div>
          
        )
    }
}
export default Signup;