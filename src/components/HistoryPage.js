import React, { useState, useEffect } from 'react';
import { useAuthenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { useNavigate } from 'react-router-dom';
import HistoryHeading from '../ui-components/HistoryHeading';
import { generateClient } from 'aws-amplify/api';
import Navigation  from '../ui-components/Navigation';
import * as queries from '../graphql/queries';
import Item from '../ui-components/Itemhistory';
import './styles.css'; 

const HistoryPage = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const [orders, setOrders] = useState([]);
  const client = generateClient();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await client.graphql({
          query: queries.listOrders,
          variables: { userID: user.userId },
          authMode: 'userPool'
        });
        setOrders(data.listOrders.items);
        console.log("data", data.listOrders.items);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [user.userId]);


  return (
    <View className="App">
        <Navigation style={{ width: '100%' }} overrides={{
            Basket: { onClick: () => navigate('/cart') },
            "Who we are": { onClick: () => navigate('/home') },
            "My profile": { onClick: () => navigate('/profile') },
            Shop: { onClick: () => navigate('/produce') },
            Search116156: { onClick: () => navigate('/search') },
        }} />

        <HistoryHeading style={{ width: '100%' }} overrides={{
            "Purchased History": {
                children: <div>Purchase History</div>
            }
        }}/>

        <div>
            {orders.map(order => (
                <div key={order.id}>
                    {order.OrderItems.items.map((item, productIndex) => (
                        <div style={{ marginBottom: '20px', paddingLeft: '50px' }} key={item.id}>
                            <Item style={{ padding: '10px', marginBottom: '10px' }} overrides={{
                                itemName: { children: <div>{item.name} x{item.quantity} lbs</div> },
                                unitprice: { children: <div>{item.price.toFixed(2)}</div> },
                                price: { children: <div>${(item.price * item.quantity).toFixed(2)}</div> },
                                Refnumber: { children: <div>Reference: {String(order.id).padStart(9, '0')}</div> },
                                "Time Purchased": { children: <div>{new Date(item.createdAt).toLocaleString()}</div> },
                                Qty: {
                                  children: (
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                      <span style={{ fontSize: '12px', width: '50px', textAlign: 'center' }}>
                                       Qty {item.quantity}
                                      </span>
                                    </div>
                                  )
                                },
                                "ed-o-neil-AvvdZlhDowA-unsplash 1": {
                                  src: item.orderItemImageId || "",
                                  alt: item.name
                                },
                            }}/>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </View>
);



};

export default HistoryPage;