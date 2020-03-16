import React,{Component} from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

class Signup extends Component{
    render(){
        return(
            <div className="ui container">
                <h2>Create a New Account</h2>
                <hr/>
                <Form>
                    <Form.Field
                        id='form-input-control-error-email'
                        control={Input}
                        label='Email'
                        placeholder='joe@schmoe.com'
                        error={{
                            content: 'Please enter a valid email address',
                            pointing: 'below',
                        }}
                        />
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