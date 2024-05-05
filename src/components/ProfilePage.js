import React, { useState, useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import {
    Button,
    View
} from "@aws-amplify/ui-react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import Navigation from '../ui-components/Navigation';
import Profile from '../ui-components/Profile';
import Footer from '../ui-components/Footer';
import Signout from '../ui-components/Signout';
import { fetchAuthSession } from 'aws-amplify/auth';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

const ProfilePage = () => {
    const navigate = useNavigate();
    const { user, signOut } = useAuthenticator((context) => [context.user]);

    const [username, setUsername] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [billing, setBilling] = useState('');
    const [shipping, setShipping] = useState('');


    const client = generateClient();

    useEffect(() => {
        //Admin Fetch Users
        // const fetchTodos = async () => {
        //   try {
        //     const allTodos = await client.graphql({
        //       query: queries.listUsers,
        //       authMode: 'userPool'
        //     });
        //     console.log('All Todos:', allTodos);
        //   } catch (error) {
        //     console.error('Error fetching todos:', error);
        //   }
        // };

        // fetchTodos();

        //AWS Cognito Fetch User
        const checkUser = async () => {
            try {
                const userData = await fetchAuthSession();
                if (userData) {
                    console.log('User data retrieved:', userData);
                } else {
                    console.log('No user signed in');
                }
            } catch (error) {
                console.log('Failed to retrieve user:', error);
            }
        };
        checkUser();

        async function handleFetchUserAttributes() {
            try {
                const userAttributes = await fetchUserAttributes();
                console.log(userAttributes);
                setBirthday(userAttributes.birthdate);
            } catch (error) {
                console.log(error);
            }
        }

        // checkUser();
        console.log("This is using Authenticator.Provider", user)
        handleFetchUserAttributes();

        const fetchUserData = async () => {
            try {
                const userData = await client.graphql({
                    query: queries.getUser,
                    variables: { id: user.userId },  // Pass `id` to the query
                    authMode: 'userPool'        // Specify the authentication mode if necessary
                });
                console.log('User Data:', userData);
                setUsername(userData.data.getUser.username); // Use setUsername to update state
                setEmail(userData.data.getUser.email)
                setBilling(userData.data.getUser.billingAddress)
                setShipping(userData.data.getUser.shippingAddress)

            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchUserData();

    }, []);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleShippingChange = (event) => {
        setShipping(event.target.value);
    };

    const handleBillingChange = (event) => {
        setBilling(event.target.value);
    };

    const handleBirthdayChange = (event) => {
        setBirthday(event.target.value);
    };

    const handleBasketClick = () => {
        navigate('/cart');
    };

    const handleAboutClick = () => {
        navigate('/home');
    };

    const handleShopClick = () => {
        navigate('/produce')
    };

    const handleHistoryClick = () => {
        navigate('/history')
    };

    const handleSaveClick = async () => {
        try {
            const updateDetails = {
                id: user.userId,
                email: email,
                billingAddress: billing,
                shippingAddress: shipping
            };

            const updatedUser = await client.graphql(
                {
                    query: mutations.updateUser,
                    variables: { input: updateDetails },
                    authMode: 'userPool'
                });

            console.log('Update successful', updatedUser);
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Failed to update profile. Please try again.');
        }
    };

    const handleSignOut = async () => {
        await signOut();
        localStorage.clear();
        sessionStorage.clear();
        navigate('/login');
    };

    return (
        <View className="App">

            <Navigation  style={{ width: '100%' }} overrides={{

                Basket: {
                    onClick: handleBasketClick
                },

                "Who we are": {
                    onClick: handleAboutClick
                },

                Shop: {
                    onClick: handleShopClick
                }

            }} />

            <Profile style={{ width: '100%' }} overrides={{

                "order history": {
                    onClick: handleHistoryClick
                },

                "your name": {
                    children: (
                        <div>
                            {username}
                        </div>
                    )
                },

                "eg. alaa.mohamed.gmail.com": {
                    children: (
                        <div>
                            <input
                                className="input-field"
                                type="text"
                                value={email}
                                style={{ width: '100%' }}
                                onChange={handleEmailChange}
                            />
                        </div>
                    )
                },

                "eg. 12345 billing st. San Jose, CA, 94233": {
                    children: (
                        <div>
                            <input
                                className="input-field"
                                type="text"
                                value={billing}
                                style={{ width: '100%' }}
                                onChange={handleBillingChange}
                            />
                        </div>
                    )
                },

                "eg. 12345 shipping st. San Jose, CA, 94231": {
                    children: (
                        <div>
                            <input
                                className="input-field"
                                type="text"
                                value={shipping}
                                style={{ width: '100%' }}
                                onChange={handleShippingChange}
                            />
                        </div>
                    )
                },

                "Cancel Button": {
                    onClick: handleAboutClick
                },

                "Save Button": {
                    onClick: handleSaveClick
                },

                "eg. 12/31/2000": {
                    children: (
                        <div>
                            <input
                                className="input-field"
                                type="text"
                                value={birthday}
                                style={{ width: '100%' }}
                                onChange={handleBirthdayChange}
                            />
                        </div>
                    )
                }

            }} />

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                <Signout onClick={handleSignOut}>
                    Sign Out
                </Signout>
            </div>


            <Footer style={{ width: '100%' }}/>

        </View>
    );
};

export default ProfilePage;
