import React, { useState, useEffect } from 'react';
import {
  Button,
  View
} from "@aws-amplify/ui-react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import CheckoutHeading from '../ui-components/CheckoutHeading';
import Navigation from '../ui-components/Navigation';
import Footer from '../ui-components/Footer';
import Item from '../ui-components/Itemcheckout';
import Summary from '../ui-components/Summary';
import Signout from '../ui-components/Signout';
import UpdateButton from '../ui-components/Updatecart'
import './styles.css';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { generateClient } from 'aws-amplify/api';

const CartPage = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const client = generateClient(); // Make sure you have a configured GraphQL client

  const [fruitCart, setFruitCart] = useState({});
  const [newFruitCart, setNewFruitCart] = useState({});
  const [fruitImages, setFruitImages] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const { data } = await client.graphql({
          query: queries.listCartItems,
          authMode: 'userPool'
        });
        const items = data.listCartItems.items;

        const cart = {};
        const newCart = {};
        const images = {};

        items.forEach(item => {
          cart[item.Product.name] = {
            id: item.id,
            quantity: item.quantity,
            price: item.Product.price
          };
          newCart[item.Product.name] = item.quantity; // Initially set the new cart to mirror the quantity
          images[item.Product.name] = item.Product.Image.url; // Store the image URL
        });

        setFruitCart(cart);
        setNewFruitCart(newCart);
        setFruitImages(images); // Set the image URLs in state
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);



  const handleBasketClick = () => {
    navigate('/cart');
  };

  const handleCheckoutClick = () => {
    navigate('/checkout');
  };

  const handleAboutClick = () => {
    navigate('/home');
  };

  const handleUpdateClick = async () => {
    const differences = {};

    for (const fruit in fruitCart) {
      const oldQuantity = fruitCart[fruit].quantity;
      const newQuantity = newFruitCart[fruit];

      if (newQuantity !== oldQuantity) {
        differences[fruit] = newQuantity - oldQuantity;
      }
    }

    console.log("Differences to update:", differences);

    // Iterate over differences to update the cart items
    Object.entries(differences).forEach(async ([fruit, difference]) => {
      const updatedQuantity = fruitCart[fruit].quantity + difference;

      if (updatedQuantity < 0) {
        console.error("Cannot have negative quantity for product:", fruit);
        return;
      }

      try {
        const updateCartItemResponse = await client.graphql({
          query: mutations.updateCartItem,
          variables: {
            input: {
              id: fruitCart[fruit].id,
              quantity: updatedQuantity
            },
          },
          authMode: 'userPool'
        });
        console.log(`CartItem updated for ${fruit}:`, updateCartItemResponse.data.updateCartItem);
      } catch (error) {
        console.error(`Error updating cart item for ${fruit}:`, error);
      }
    });
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

  const handleQuantityChange = (fruit, newQuantity) => {
    setNewFruitCart(prevFruitCart => ({
      ...prevFruitCart,
      [fruit]: Math.max(0, newQuantity) // Ensure quantity is non-negative and integer handling is inside
    }));
  };

  useEffect(() => {
    let totalPrice = 0;
    for (const fruit in newFruitCart) {
      if (fruitCart[fruit]) {
        totalPrice += newFruitCart[fruit] * (fruitCart[fruit]?.price || 0);
      }
    }
    setTotalPrice(totalPrice);
  }, [newFruitCart, fruitCart]); // Calculate total price based on changes in newFruitCart or fruitCart



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

        Search116156: {
          onClick: handleSearchClick
        },

      }} />

      <CheckoutHeading style={{ width: '100%' }} overrides={{

        "3 items": {
          children: (
            <div>{itemsWithQuantity.length} items</div>
          )
        }
      }}
      />

      <div className="cartcontainer">
        <div className="items">
          {Object.entries(newFruitCart).filter(([fruit, quantity]) => quantity > 0).map(([fruit, quantity]) => (
            <div style={{ paddingBottom: '10px', paddingLeft: '50px' }}>
              <Item overrides={{
                itemName: {
                  children: (<div>{fruit}</div>)
                },
                "ed-o-neil-AvvdZlhDowA-unsplash 1": {
                  src: fruitImages[fruit] || "",
                  alt: fruit
                },
                unitprice: {
                  children: (
                    <div>{fruitCart[fruit]?.price?.toFixed(2) || 'N/A'}</div>
                  )
                },
                price: {
                  children: (
                    <div>{(fruitCart[fruit]?.price * quantity).toFixed(2) || '0.00'}</div>
                  )
                },
                Qty: {
                  children: (
                    <input
                      id={fruit}
                      type="number"
                      min="0"
                      value={quantity}
                      onChange={(event) => handleQuantityChange(fruit, parseInt(event.target.value, 10))}
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
          </UpdateButton>

        </div>
        <div className="summary">
          <Summary style={{ width: '100%' }} overrides={{

            "Order Total": { //Total Price
              children: (
                <div>
                  ${(totalPrice * 1.09 + 4.99).toFixed(2)}
                </div>
              )
            },

            "Total Price": { //Order Total
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
          }} />

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
