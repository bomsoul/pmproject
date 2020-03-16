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
            <div className="ui container">
                <h2>Create a New Account</h2>
                <hr/>
                <FormErrors formErrors={this.state.formErrors} />
                <Form>
                    
                    <Form.Field
                        id='form-input-control-error-email'
                        control={Input}
                        label='Email'
                        name ="email"
                        value={this.state.email}
                          onChange={this.handleUserInput} />
                        
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Password'
                        placeholder='Last name'
                    />
                    <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Register'
                        />
                </Form>
            </div>
        )
    }
}
export default Signup;