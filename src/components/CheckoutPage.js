import React, { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import {
    Button,
    View
  } from "@aws-amplify/ui-react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import Checkout from '../ui-components/Checkout';
import Navigation  from '../ui-components/Navigation';
import Summary  from '../ui-components/Checkouttotal';
import Header  from '../ui-components/Checkoutheader';
import Item from '../ui-components/Checkoutitem';
import Signout from '../ui-components/Signout';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const { user, signOut } = useAuthenticator((context) => [context.user]);

    const fruitPrices = {
      'Apple': 2.99,
      'Banana': 0.89,
      'Orange': 1.49,
      'Grapes': 1.88,
      'Strawberry': 3.50,
      'Plum': 3.49,
      'Tomato': 3.99,
      'Mango': 1.23,
      'Kiwi': 0.79,
      'Peach': 1.49,
      'Pear': 1.99,
      'Cherry': 1.59
    };

  const fruitCart = {
    'Apple': 2,
    'Banana': 4,
    'Orange': 3,
    'Grapes': 2,
    'Strawberry': 1,
    'Plum': 6,
    'Tomato': 5,
    'Mango': 2,
    'Kiwi': 4,
    'Peach': 2,
    'Pear': 1,
    'Cherry': 2
  };

  let totalPrice = 0;


  const [userBillingAddress, setBillingAdd] = useState('');
  const [userShippingAddress, setShippingAdd] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvc, setCvc] = useState(0); 


  for (const fruit in fruitCart) {
    const quantity = fruitCart[fruit];
    const price = fruitPrices[fruit];
    
    totalPrice += quantity * price;
  }

  const itemsWithQuantity = Object.entries(fruitCart).filter(([fruit, quantity]) => quantity > 0);

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
        localStorage.clear();
        sessionStorage.clear();
        navigate('/login');
    };

    const handleProfileClick = () => {
      navigate('/profile')
    };

    const handleShopClick = () => {
      navigate('/produce')
    };


    // Event handlers to update the state variables
    const handleBillingChange = (event) => {
      setBillingAdd(event.target.value);
    };

    const handleShippingChange = (event) => {
      setShippingAdd(event.target.value);
    };    

    // Event handlers to update the state variables
    const handleCardholderNameChange = (event) => {
      setCardholderName(event.target.value);
    };

    const handleCardNumberChange = (event) => {
      setCardNumber(event.target.value);
    };

    const handleExpDateChange = (event) => {
      setExpDate(event.target.value);
    };

    const handleCvcChange = (event) => {
      const value = event.target.value;
      
      // Check if the entered value is a valid integer
      if (!isNaN(value) && value !== '') {
        // If valid, convert CVC to an integer and update the state
        setCvc(parseInt(value));
      } else {
        // If not valid, set CVC to an empty string
        setCvc('');
      }
    };

    return (
        <View className="App">
    
          <Navigation style={{ width: '100%' }} overrides={{
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

          <div class="container">

              <div class="left-column">

                <Checkout style={{ width: '100%' }} overrides={{
                  Address73192: { 
                    children: (
                      <div>
                        <input
                        className="input-field" 
                          type="text"
                          placeholder="Shipping Address"
                          value={userShippingAddress}
                          style={{ width: '250%'}}
                          onChange={handleShippingChange}
                        />
                      </div>
                    )
                  },      

                  Address73307: { 
                    children: (
                      <div>
                        <input
                        className="input-field" 
                          type="text"
                          placeholder="Billing Address"
                          value={userBillingAddress}
                          style={{ width: '250%'}}
                          onChange={handleBillingChange}
                        />
                      </div>
                    )
                  },           

                  "Cardholder Name": { 
                    children: (
                      <div>
                        <input
                          className="input-field" 
                          type="text"
                          placeholder="Cardholder Name"
                          value={cardholderName}
                          onChange={handleCardholderNameChange}
                          style={{ width: '250%'}}
                        />
                    </div>
                    )
                  }, 

                  "Card Number": { 
                    children: (
                      <div>
                        <input
                         className="input-field" 
                          type="text"
                          placeholder="Card Number"
                          value={cardNumber}
                          style={{ width: '250%'}}
                          onChange={handleCardNumberChange}
                        />
                      </div>
                    )
                  }, 

                  "EXP Date": { 
                    children: (
                      <div>
                      <input
                        className="input-field" 
                        type="text"
                        placeholder="EXP Date"
                        value={expDate}
                        style={{ width: '70%'}}
                        onChange={handleExpDateChange}
                      />
                      </div>
                    )
                  }, 

                  CVC: { 
                    children: (
                      <div>
                        <input
                          className="input-field" 
                          type="text"
                          placeholder="CVC"
                          value={cvc}
                          style={{ width: '80%'}}
                          onChange={handleCvcChange}
                        />
                      </div>
                    )
                  }, 
                }} />

              </div>
          
              <div class="summary">

                <Header style={{ padding: '10px', width: '100%', marginBottom: '10px' }}></Header>
                
                {itemsWithQuantity.map(([fruit, quantity]) => (
                  
                  <Item  style={{ padding: '10px', width: '100%', marginBottom: '10px' }} overrides ={{

                    item : {
                      children : (
                        <div>{fruit}    x{quantity} lbs</div>
                      )
                    },

                    price : {
                      children : (
                        <div>{(fruitPrices[fruit] * quantity).toFixed(2)}</div>
                      )
                    },

                  }} />

                ))}


                <Summary style={{ padding: '10px', width: '100%', marginBottom: '10px' }} overrides={{

                    subtotal: { //Billing Address
                      children: (
                          <div>
                              ${totalPrice}
                          </div>
                      )
                    },  

                    shipping: { //Billing Address
                      children: (
                          <div>
                              $4.99
                          </div>
                      )
                    }, 

                    total: { //Billing Address
                      children: (
                          <div>
                              ${(totalPrice * 1.09 + 4.99).toFixed(2)}
                          </div>
                      )
                    },  

                    tax: { //Billing Address
                      children: (
                          <div>
                              ${(totalPrice * 0.09).toFixed(2)}
                          </div>
                      )
                    },  

                    Checkout: {
                      onClick: handleCheckoutClick 
                    }


                }} />

              </div>

          </div>
    
      
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Signout onClick={handleSignOut}>
                    Sign Out
                </Signout>
          </div>
          
        </View>
      );
};

export default CheckoutPage;
