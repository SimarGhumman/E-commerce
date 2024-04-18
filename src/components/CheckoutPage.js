import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import {
    Button,
    View
  } from "@aws-amplify/ui-react";
import { useAuth } from '../AuthContext';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import Checkout from '../ui-components/Checkout';
import Navigation  from '../ui-components/Navigation';

const CartPage = () => {
    const navigate = useNavigate();
    const { signOut } = useAuth();

    const handleBasketClick = () => {
        navigate('/cart');
    };
    
    const handleCheckoutClick = () => {
        navigate('/ordercomplete');
    };
    
    const handleAboutClick = () => {
        navigate('/home');
    };

    const handleSignOut = async () => {
        await signOut();
        navigate('/login');
    };

    const handleProfileClick = () => {
      navigate('/profile')
    };

    const handleShopClick = () => {
      navigate('/produce')
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
            },

            Shop : {
              onClick: handleShopClick
            }

          }} />
    
            <Checkout overrides={{

                "checkout item": {
                onClick: handleCheckoutClick 
                }

            }} />
      
            <Button onClick={handleSignOut}>Sign Out</Button>
        </View>
      );
};

export default CartPage;
