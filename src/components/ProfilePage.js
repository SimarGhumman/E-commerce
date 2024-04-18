import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import {
    Button,
    View
  } from "@aws-amplify/ui-react";
import { useAuth } from '../AuthContext';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import Navigation  from '../ui-components/Navigation';
import Profile from '../ui-components/Profile';
import Footer  from '../ui-components/Footer';

const CartPage = () => {
    const navigate = useNavigate();
    const { signOut } = useAuth();

    const handleBasketClick = () => {
        navigate('/cart');
    };
    
    const handleAboutClick = () => {
        navigate('/home');
    };

    const handleShopClick = () => {
        navigate('/produce')
    };

    const handleSignOut = async () => {
        await signOut();
        navigate('/login');
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

            Shop : {
                onClick: handleShopClick
              }

            }} />
        
            <Profile />
        
            <Button onClick={handleSignOut}>Sign Out</Button>

            <Footer />

        </View>
      );
};

export default CartPage;
