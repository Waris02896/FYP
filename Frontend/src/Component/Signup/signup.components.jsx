import React , {Component} from "react";

import FormInput from '../forminput/forminput.component';
import CustomButton from '../Button/button.component';
import { SignupContainer, SignupTitle } from './signup.styles';

class Signup extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDeffault();
        const { displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword)
        {
            alert("Password don't match");
            return;
        }
    //     try {
    //         // const { user } = await auth.createuserwithemailandpassword(
    //         //     email,
    //         //     password
    //         // );
    //         //await createUserProfileDocument(user, {displayName});
    //         this.setState({
    //             displayName: '',
    //             email: '',
    //             password: '',
    //             confirmPassword: ''
    //         });
    //     }
    //     catch (error) {
    //         console.error(error);
    //     }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        return (
            <SignupContainer>
                <SignupTitle>
                    I do not have an account
                </SignupTitle>
                <span>
                    Sign up with your email and password
                </span>
                <form className="signupform" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Enter Full Name'
                        required
                    />
                    <FormInput 
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Enter Valid Email'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='Password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit' style = {{width:150, margin: 20}}>
                        SIGN UP
                    </CustomButton>
                </form>
            </SignupContainer>
        );
    }
}

export default Signup;