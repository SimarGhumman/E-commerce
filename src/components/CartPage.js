import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import {
    Button,
    View
  } from "@aws-amplify/ui-react";
import { useAuth } from '../AuthContext';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import CheckoutHeading from '../ui-components/CheckoutHeading';
import Navigation  from '../ui-components/Navigation';
import Footer  from '../ui-components/Footer';
import Item from '../ui-components/Itemcheckout';
import Summary  from '../ui-components/Summary';
import './styles.css'; 

const CartPage = () => {
    const navigate = useNavigate();
    const { signOut } = useAuth();

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
        navigate('/login');
    };

    const handleProfileClick = () => {
      navigate('/profile')
    };

    const handleShopClick = () => {
      navigate('/produce')
    };

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

    for (const fruit in fruitCart) {
      const quantity = fruitCart[fruit];
      const price = fruitPrices[fruit];
      
      totalPrice += quantity * price;
    }

    const itemsWithQuantity = Object.entries(fruitCart).filter(([fruit, quantity]) => quantity > 0);
  

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

            Shop: {
              onClick: handleShopClick
            }

          }} />

          <CheckoutHeading overrides ={{

            "3 items" : {
              children : (
                <div>{itemsWithQuantity.length} items</div>
              )
            }
           }}
          />
          
        <div className="cartcontainer">
          <div className="items">
            {itemsWithQuantity.map(([fruit, quantity]) => (
                <div style={{ paddingBottom: '10px' }}>
                  <Item overrides ={{

                    itemName : {
                      children : (
                        <div>{fruit}</div>
                      )
                    },

                    unitprice : {
                      children : (
                        <div>{fruitPrices[fruit]}</div>
                      )
                    },

                    price : {
                      children : (
                        <div>{(fruitPrices[fruit] * quantity).toFixed(2)}</div>
                      )
                    },

                    Qty : {
                      children : (
                        <div>{quantity}</div>
                      )
                    }

                    }}
                  />
                </div>
            ))}
          </div>
          <div className="summary">
          <Summary overrides = {{

            "Order Total": { //Total Price
                children: (
                    <div>
                        ${(totalPrice * 1.09 + 4.99).toFixed(2)}
                    </div>
                )
              },

              "Total Price" : { //Order Total
                children: (
                    <div>
                        ${totalPrice.toFixed(2)}
                    </div>
                )
              },   

              Tax11614: { //Tax
                children: (
                    <div>
                        ${(totalPrice * 0.09).toFixed(2)}
                    </div>
                )
              }, 

              "Shipping of product": { //Shipping of product
                children: (
                    <div>
                        $4.99
                    </div>
                )
              },

              "Continue to payment": { //Name of product
                onClick: handleCheckoutClick 
              }

            }}/>
          </div>
        </div>

        <Footer />

          

      


        <Button onClick={handleSignOut}>Sign Out</Button>

        </View>
      );
};

export default CartPage;
