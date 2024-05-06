import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthenticator, View, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import Success from '../ui-components/SuccessPayment';
import Navigation from '../ui-components/Navigation';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../graphql/queries';

const CartPage = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const client = generateClient();

  const [latestOrder, setLatestOrder] = useState({});

  useEffect(() => {
    fetchLatestOrder();
  }, [user]);

  const fetchLatestOrder = async () => {
    try {
      const { data } = await client.graphql({
        query: queries.listOrders,
        variables: {
          filter: { userID: { eq: user.userId } },
          limit: 100  // Adjust the limit based on expected order volume
        },
        authMode: 'userPool'
      });

      // Sort orders by date descending and pick the latest one
      const latestOrder = data.listOrders.items.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
      console.log(latestOrder);
      if (latestOrder) {
        setLatestOrder(latestOrder);
      }
    } catch (error) {
      console.error("Error fetching the latest order:", error);
    }
  };

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
  console.log(user);

  return (
    <View className="App">
      <Navigation style={{ width: '100%' }} overrides={{
        Basket: { onClick: () => navigate('/cart') },
        "Who we are": { onClick: () => navigate('/home') },
        "My profile": { onClick: () => navigate('/profile') },
        Shop: { onClick: () => navigate('/produce') },
        Search: { onClick: () => navigate('/search') },
      }} />

      {latestOrder && latestOrder.totalPrice !== undefined ? (
        <Success style={{ width: '100%' }} overrides={{
          "Back To Merchants": {
            onClick: () => navigate('/produce')
          },
          total7464: { children: <div>${latestOrder.totalPrice.toFixed(2)}</div> },
          total7476: { children: <div>${latestOrder.totalPrice.toFixed(2)}</div> },
          refnumber: {
            children: (
              <div>
                {latestOrder.id && latestOrder.id.length > 9 ? `${latestOrder.id.substring(0, 9)}...` : latestOrder.id}
              </div>
            )
          },
          time: {
            children: (
              <div>
                {latestOrder.date ? new Date(latestOrder.date).toLocaleString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                }) : 'Not available'}
              </div>
            )
          },
        }} />
      ) : (
        <div>No recent orders found or missing order details.</div>
      )}


      <Button onClick={handleSignOut}>Sign Out</Button>
    </View>
  );
};

export default CartPage;
