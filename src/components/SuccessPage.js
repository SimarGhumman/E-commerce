import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import {
    Button,
    View
  } from "@aws-amplify/ui-react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import Success from '../ui-components/SuccessPayment';
import Navigation  from '../ui-components/Navigation';

const CartPage = () => {
    const navigate = useNavigate();
    const { user, signOut } = useAuthenticator((context) => [context.user]);

    const handleBasketClick = () => {
        navigate('/cart');
    };
    
    const handleAboutClick = () => {
        navigate('/home');
    };

    const handleSignOut = async () => {
        await signOut();
        localStorage.clear();
        sessionStorage.clear();
        navigate('/login');
    };

    const handleProfileClick = () => {
      navigate('/profile')
    };

    const handleProduceClick = () => {
        navigate('/produce');
    };

    return (
        <View className="App">
    
          <Navigation overrides={{
                Basket: {
                onClick: handleBasketClick
                },

                "Who we are": {
                onClick: handleAboutClick 
                },

                "My profile": {
                onClick: handleProfileClick 
                }

          }} />
    
            <Success overrides={{
                "Back To Merchants": {
                onClick: handleProduceClick
                }

            }} />

      
            <Button onClick={handleSignOut}>Sign Out</Button>
        </View>
      );
};

export default CartPage;
