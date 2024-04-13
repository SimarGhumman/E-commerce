// src/components/LoginPage.js
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';

const formFields = {
    signUp: {
        email: { order: 1 },
        family_name: { order: 2 },
        preferred_username: { order: 4 },
        birthdate: { order: 3 },
        password: { order: 5 },
        confirm_password: { order: 6 },
    },
};

const signUpAttributes = ['birthdate', 'family_name', 'preferred_username'];

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <Authenticator formFields={formFields} signUpAttributes={signUpAttributes}>
            {({ signOut, user }) => {
                if (user) {
                    navigate('/home', { replace: true }); 
                    return null;
                }
                return (
                    <div>
                        <h1>Welcome! Please sign in.</h1>
                        <button onClick={signOut}>Sign out</button>
                    </div>
                );
            }}
        </Authenticator>
    );
};

export default LoginPage;
