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

    let total = "123.52"
    let orderNum = 12325221;

    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const milliseconds = currentTime.getMilliseconds();
    const timeString = `${hours}:${minutes}:${seconds}.${milliseconds}`;


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

    const handleSearchClick = () => {
      navigate('/search');
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

                "My profile": {
                onClick: handleProfileClick 
                },

                Search116156  :{
                  onClick: handleSearchClick 
                },

          }} />
    
            <Success  style={{ width: '100%' }} overrides={{
                "Back To Merchants": {
                onClick: handleProduceClick
                },

                total7464:{ //Order Total in Big
                  children: (
                    <div>${total}</div>
                )},

                total7476:{ //Order Total in Small
                  children: (
                    <div>${total}</div>
                )},

                refnumber:{ 
                  children: (
                    <div>{String(orderNum).padStart(9, '0')}</div>
                )},

                time:{ 
                  children: (
                    <div>{timeString}</div>
                )},


                "your name":{ 
                  children: (
                    <div>{total}</div>
                )},
            }} />

      
            <Button onClick={handleSignOut}>Sign Out</Button>
        </View>
      );
};

export default CartPage;
