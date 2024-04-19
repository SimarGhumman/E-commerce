import React, { useState } from 'react';
import {
    Button,
    View
  } from "@aws-amplify/ui-react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import Item  from '../ui-components/Item2';
import Navigation  from '../ui-components/Navigation';
import Summary  from '../ui-components/Summary';
import Footer  from '../ui-components/Footer';

const CartPage = () => {
    const navigate = useNavigate();
    const { user, signOut } = useAuthenticator((context) => [context.user]);

    const handleBasketClick = () => {
        navigate('/cart');
    };

    const handleCheckoutClick = () => {
      navigate('/checkout');
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
      navigate('/profile');
    };

    const [quantities, setQuantities] = useState(Array.from({ length: 12 }, () => 0));


    const handleQuantityChange = (index, event) => {
      const value = parseInt(event.target.value);
      const newValue = value >= 0 ? value : 0;
      setQuantities(prevQuantities => ({
          ...prevQuantities,
          [index]: newValue
      }));
    };

    //TO-DO WRITE TO THE TABLE TO STORE THE PRODUCT AND QUANTITY
    const handleAddtoCartClick = (index) => {
      console.log("Button clicked for index:", index);
      // Add your logic here to handle the click event
    };
    

    const prices = [
        2.99,   
        0.89,   
        1.49,   
        1.88,   
        3.59,   
        3.49,   
        3.99,  
        1.23,  
        0.79,  
        1.49,  
        1.99,  
        1.59   
    ];

    const fruits = [
      'Apple',
      'Banana',
      'Orange',
      'Grapes',
      'Strawberry',
      'Plum',
      'Tomato',
      'Mango',
      'Kiwi',
      'Peach',
      'Pear',
      'Cherry'
  ];

  

  const calculateTotalPrice = () => {
    return prices.reduce((acc, price, index) => {
        return acc + (price * quantities[index]);
    }, 0)
  };

  const totalPrice = calculateTotalPrice();
  const tax = (totalPrice * 0.09); 
  const orderTotal = (totalPrice + (totalPrice* 0.09)); 

  

    const tableRows = [];
    for (let i = 0; i < 4; i++) {
        const tableCells = [];
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;

            tableCells.push(
                <td key={`item-${i}-${j}`}>
                    <Item
                        overrides={{
                              "add to cart": {
                                onClick: () => handleAddtoCartClick(index)
                              },

                              quantity: {
                                children: (
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <input type="number" value={quantities[index]} onChange={(event) => handleQuantityChange(index, event)} style={{ fontSize: '12px', width: '50px', border: 'none' }} />
                                    </div>
                                )
                            },
                          
                            UnitPrice: {  //Price
                              children: (
                                  <div>
                                      {prices[index]} /lb
                                  </div>
                              )
                            },

                            ItemName: { //Name of product
                              children: (
                                  <div>
                                      {fruits[index]}
                                  </div>
                              )
                            }
                  



                        }}
                    />
                </td>
            );
        }
        tableRows.push(<tr key={`row-${i}`}>{tableCells}</tr>);
    }

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

          <div class="container">
              <div class="left-column">
                  <div style= {{paddingTop: '50px', paddingBottom: '50px'}}>
                      <table class="Grid">
                          <tbody>
                            {tableRows}
                          </tbody>
                      </table>
                  </div>
              </div>
              <div class="right-column">
                  <Summary overrides = {{

                  "Total Price": { //Total Price
                      children: (
                          <div>
                              {totalPrice.toFixed(2)}
                          </div>
                      )
                    },

                    "Order Total": { //Order Total
                      children: (
                          <div>
                              {orderTotal.toFixed(2)}
                          </div>
                      )
                    },   

                    Tax11614: { //Tax
                      children: (
                          <div>
                              {tax.toFixed(2)}
                          </div>
                      )
                    }, 

                    "Shipping of product": { //Shipping of product
                      children: (
                          <div>
                              {"Calculated at checkout"}
                          </div>
                      )
                    },

                    "Continue to payment": { //Name of product
                      onClick: handleCheckoutClick 
                    }

                  }}/>
              </div>
          </div>

            
         <Button onClick={handleSignOut}>Sign Out</Button>

         <Footer />

        </View>
      );
};

export default CartPage;
