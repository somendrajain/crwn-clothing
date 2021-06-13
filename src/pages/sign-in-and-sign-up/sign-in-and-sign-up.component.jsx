import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <div><SignIn /></div>
        <div><SignUp /></div>
        
    </div>

)

export default SignInSignUpPage;