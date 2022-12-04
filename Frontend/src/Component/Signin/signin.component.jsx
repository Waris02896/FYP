import React, {Component} from "react";

import FormInput from '../forminput/forminput.component';
import CustomButton from "../Button/button.component";

import {
    SiginContainer,
    SigninTitle,
    ButtonbarContainer
} from './signin.styles';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handlesubmit = async event => {
        event.preventDefault();
        const {email, password } = this.state;
    //     try {
    //         await auth.signinwithemailandpassword(email, password);
             this.setState({ email: '', password: '' });
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return(
            <SiginContainer>
                <SigninTitle>
                    I already have an account
                </SigninTitle>
                <span>Sign in with your email and passeord</span>

                <form onSubmit={this.handlesubmit}>
                    <FormInput 
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label='Enter your Email'
                    required 
                    />
                    <FormInput 
                    name='password'
                    type='password'
                    handleChange={this.handleChange}
                    value={this.state.password}
                    label='Password'
                    required />
                    <ButtonbarContainer style={{ margin: 30}}>
                        <CustomButton type='submit' style = {{width:150,marginTop:20}}>
                            Sign in </CustomButton>
                            <h5>Or</h5>
                        <CustomButton style = {{width: 150, marginTop: 20}}>
                            Sign in with Google 
                            </CustomButton>
                    </ButtonbarContainer>
                </form>
            </SiginContainer>
        );
    }
}

export default SignIn;