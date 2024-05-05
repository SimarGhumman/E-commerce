import React, { useState, useEffect } from 'react';
import {
    Button,
    View
  } from "@aws-amplify/ui-react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import CheckoutHeading from '../ui-components/CheckoutHeading';
import Navigation  from '../ui-components/Navigation';
import Footer  from '../ui-components/Footer';
import Item from '../ui-components/Itemcheckout';
import Summary  from '../ui-components/Summary';
import Signout from '../ui-components/Signout';
import UpdateButton from  '../ui-components/Updatecart'
import './styles.css'; 


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

    const handleUpdateClick = () => {
      const differences = {};

      for (const fruit in fruitCart) {
        if (Object.prototype.hasOwnProperty.call(fruitCart, fruit)) {
          const difference = newFruitCart[fruit] - fruitCart[fruit];
          if (difference !== 0) {
            differences[fruit] = difference;
          }
        }
      }

      console.log(differences);
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

    const handleSearchClick = () => {
      navigate('/search')
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

    const [newFruitCart, setNewFruitCart] = useState({
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
    });

  
    const handleQuantityChange = (fruit, newQuantity) => {
      setNewFruitCart(prevFruitCart => ({
        ...prevFruitCart,
        [fruit]: newQuantity >= 0 ? newQuantity : 0 // Ensure quantity is non-negative
      }));
    };

    let [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
      // Calculate total price based on newFruitCart
      let totalPrice = 0;
      for (const fruit in newFruitCart) {
        totalPrice += newFruitCart[fruit] * fruitPrices[fruit];
      }
      setTotalPrice(totalPrice);
    }, [newFruitCart]);
  

    const itemsWithQuantity = Object.entries(newFruitCart).filter(([fruit, quantity]) => quantity > 0);    

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

            Shop: {
              onClick: handleShopClick
            },

            Search116156 :{
              onClick: handleSearchClick
            } ,

          }} />

          <CheckoutHeading style={{ width: '100%' }} overrides ={{

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
                <div style={{ paddingBottom: '10px',paddingLeft: '50px' }}>
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
                        <input
                          id={fruit}
                          type="number"
                          min="0"
                          value={quantity}
                          onChange={(event) => handleQuantityChange(fruit, parseInt(event.target.value))}
                          style={{ width: '80px' }}
                        />
                      )
                    }

                    }}
                  />
                </div>
            ))}

            <UpdateButton 
              style={{
                display: 'block',
                margin: 'auto',
              }}
              onClick={handleUpdateClick}
            >
              Update
            </UpdateButton>

          </div>
        <div className="summary">
          <Summary style={{ width: '100%' }} overrides = {{

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
      


        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Signout onClick={handleSignOut}>
                  Sign Out
            </Signout>
          </div>
        
        <Footer />

        </View>
      );
};

export default CartPage;
