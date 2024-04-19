import React, { useEffect, useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';

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
    const [user, setUser] = useState(null);

    return (
        <Authenticator formFields={formFields} signUpAttributes={signUpAttributes}>
            {({ signOut, user: authUser }) => {
                if (authUser && !user) {
                    setUser(authUser); // Update local user state if authUser is present
                    navigate('/home', { replace: true });
                }

                if (!authUser) {
                    // Optionally handle the case where there is no user
                    return (
                        <div>
                            <h1>Welcome! Please sign in.</h1>
                        </div>
                    );
                }

                // Handle the sign-out state
                return (
                    <div>
                        <h1>You are signed in!</h1>
                        <button onClick={signOut}>Sign out</button>
                    </div>
                );
            }}
        </Authenticator>
    );
};

export default LoginPage;
