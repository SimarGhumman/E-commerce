import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import Navigation from '../ui-components/Navigation';
import Checkout from '../ui-components/Checkout';
import Header from '../ui-components/Checkoutheader';
import Item from '../ui-components/Checkoutitem';
import Summary from '../ui-components/Checkouttotal';
import Signout from '../ui-components/Signout';

import { generateClient } from 'aws-amplify/api';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const client = generateClient();
  const SHIPPING_COST = 4.99;
  const [cartItems, setCartItems] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [userBillingAddress, setBillingAdd] = useState('');
  const [userShippingAddress, setShippingAdd] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvc, setCvc] = useState('');

  const generateOrderID = () => {
    return `${user.userId}-${Date.now()}`;
  };

  useEffect(() => {
    fetchCartItems();
    fetchUserData();
  }, []);

  const fetchCartItems = async () => {
    try {
      const { data } = await client.graphql({
        query: queries.listCartItems,
        authMode: 'userPool'
      });
      const items = data.listCartItems.items;
      let localTotalPrice = 0;
      let localCartItems = {};

      items.forEach(item => {
        localCartItems[item.Product.name] = {
          quantity: item.quantity,
          price: item.Product.price,
          id: item.id,
          image: item.Product.Image
        };
        localTotalPrice += item.quantity * item.Product.price;
      });
      setCartItems(localCartItems);
      setTotalPrice(localTotalPrice);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const fetchUserData = async () => {
    try {
      const { data } = await client.graphql({
        query: queries.getUser,
        variables: { id: user.userId },  // Ensure the correct user ID is used
        authMode: 'userPool'
      });
      setBillingAdd(data.getUser.billingAddress || '');
      setShippingAdd(data.getUser.shippingAddress || '');
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const itemsWithQuantity = Object.entries(cartItems).filter(([_, item]) => item.quantity > 0);

  const handleSignOut = async () => {
    await signOut();
    localStorage.clear();
    sessionStorage.clear();
    navigate('/login');
  };

  const getBaseUrl = () => {
    // window.location.origin gives you the protocol + hostname + port (if there's any)
    return window.location.origin;
  };

  const handleStripeCheckout = async () => {
    // The existing Stripe checkout logic goes here
    // This function will be similar to your current handleCheckoutClick function
    // API call to Stripe Checkout
    const returnUrl = getBaseUrl();
    console.log(returnUrl);
    const response = await fetch('https://ydhrxlii7i.execute-api.us-west-1.amazonaws.com/default/stripeCheckout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Ensuring this is set correctly
        'x-api-key': 'lDtErXps0d4L6CSHxz1yi1ETeoxw9h3s1YQGbqQT'  // Your API key
      },
      body: JSON.stringify({
        quantity: 2, // Example quantity
        returnUrl: returnUrl
      })
    });

    if (response.ok) {
      const checkoutSession = await response.json();
      window.location.href = checkoutSession.url; // Redirect to Stripe Checkout URL
    } else {
      console.error('Failed to create checkout session:', await response.text());
    }
  };

  const handleCheckoutClick = async () => {
    const orderID = generateOrderID();  // Generate a unique order ID

    try {
        const orderItemResponses = await Promise.all(
          Object.entries(cartItems).map(([name, { price, quantity, id, image }]) =>
            client.graphql({
              query: mutations.createOrderItem,
              variables: {
                input: {
                  name,
                  price,
                  quantity,
                  orderID,
                  orderItemImageId: image.url
                }
              },
              authMode: 'userPool'
            })
          )
        );

        console.log("Order items created:");
        orderItemResponses.forEach(response => {
          console.log(response.data.createOrderItem);
        });

        const totalOrderPrice = orderItemResponses.reduce((acc, res) => acc + (res.data.createOrderItem.price * res.data.createOrderItem.quantity), 0) + SHIPPING_COST;

        // Create the order with the total price and linked items
        const orderResponse = await client.graphql({
          query: mutations.createOrder,
          variables: {
            input: {
              id: orderID,
              date: new Date().toISOString(),
              totalPrice: totalOrderPrice,
              userID: user.userId
            }
          },
          authMode: 'userPool'
        });

        console.log("Order created:", orderResponse.data.createOrder);

        // After successfully creating order items and the order, delete the cart items
        await Promise.all(
          Object.values(cartItems).map(item =>
            client.graphql({
              query: mutations.deleteCartItem,
              variables: {
                input: {
                  id: item.id  // Ensure this is correctly obtaining a non-null id
                },
              },
              authMode: 'userPool'
            })
          )
        );

        // Clear local state and navigate to order completion
        setCartItems({});
        setTotalPrice(0);
        navigate('/ordercomplete');
    } catch (error) {
      console.error('Error processing the order:', error);
    }
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
        Basket: { onClick: () => navigate('/cart') },
        "Who we are": { onClick: () => navigate('/home') },
        "My profile": { onClick: () => navigate('/profile') },
        Shop: { onClick: () => navigate('/produce') },
        Search: { onClick: () => navigate('/search') },
      }} />

      <div className="container">

        <div className="left-column">

          <Checkout style={{ width: '100%' }} overrides={{
            Address73192: {
              children: (
                <div>
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Shipping Address"
                    value={userShippingAddress}
                    style={{ width: '250%' }}
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
                    style={{ width: '250%' }}
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
                    style={{ width: '250%' }}
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
                    style={{ width: '250%' }}
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
                    style={{ width: '70%' }}
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
                    style={{ width: '80%' }}
                    onChange={handleCvcChange}
                  />
                </div>
              )
            },
          }} />

        </div>

        <div className="summary">
          <Header style={{ padding: '10px', width: '100%', marginBottom: '10px' }}></Header>
          {itemsWithQuantity.map(([name, { quantity, price }]) => (
            <Item style={{ padding: '10px', width: '100%', marginBottom: '10px' }} key={name} overrides={{
              item: { children: `${name} x${quantity} lbs` },
              price: { children: `$${(price * quantity).toFixed(2)}` },
            }} />
          ))}
          <Summary style={{ padding: '10px', width: '100%', marginBottom: '10px' }} overrides={{
            subtotal: { children: `$${totalPrice.toFixed(2)}` },
            shipping: { children: "$4.99" },
            total: { children: `$${(totalPrice * 1.09 + 4.99).toFixed(2)}` },
            tax: { children: `$${(totalPrice * 0.09).toFixed(2)}` },
            Checkout: { onClick: handleCheckoutClick }
          }} />
          <div className="stripe-checkout-button">
            <button onClick={handleStripeCheckout} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginTop: '20px' }}>
              Proceed to Stripe Checkout
            </button>
          </div>
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
