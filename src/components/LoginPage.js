import React, { useEffect } from 'react';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import { Hub } from 'aws-amplify/utils';  // Ensure correct import
import Signout from '../ui-components/Signout';

const formFields = {
    signUp: {
        email: { order: 1 },
        preferred_username: { order: 2 },
        birthdate: { order: 3 },
        password: { order: 4 },
        confirm_password: { order: 5 },
    },
};

const signUpAttributes = ['birthdate', 'preferred_username'];

const LoginPage = () => {
    const navigate = useNavigate();
    const { user } = useAuthenticator();

    const { signOut } = useAuthenticator();

    useEffect(() => {
        // Navigate when user is authenticated
        if (user) {
            console.log('User is signed in, navigating to home.');
            navigate('/home', { replace: true });
        }
    }, [user, navigate]);

    return (
        <Authenticator formFields={formFields} signUpAttributes={signUpAttributes}>
            {({ handleSignOut }) => {
                if (!user) {
                    return <h1>Welcome! Please sign in.</h1>;
                }

                // Redirect logic should prevent this from showing if already navigated
                return (
                    <div>
                        <h1>You are signed in!</h1>
                        <button onClick={handleSignOut}>Sign out</button>
                    </div>
                );
            }}
        </Authenticator>
    );
};

export default LoginPage;
