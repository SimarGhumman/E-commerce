import React from 'react';
import {
    View
  } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import HistoryHeading from '../ui-components/HistoryHeading';
import Navigation  from '../ui-components/Navigation';
import Item from '../ui-components/Itemhistory';
import './styles.css'; 

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

  

  const fruitQuantities = [
    { fruit: 'Apple', quantity: 2 , ref : 41, time :"01:32:52 PM 04/24/2024" },
    { fruit: 'Banana', quantity: 4, ref : 132, time :"12:34:52 AM 04/24/2024"},
    { fruit: 'Apple', quantity: 3, ref : 12633, time : "10:32:52 AM 04/24/2024"}
  ];


const HistoryPage = () => {
    const navigate = useNavigate();

    const handleBasketClick = () => {
        navigate('/cart');
    };
    
    const handleAboutClick = () => {
        navigate('/home');
    };

    const handleProfileClick = () => {
        navigate('/profile')
      };
  
      const handleShopClick = () => {
        navigate('/produce')
      };

      const handleSearchClick = () => {
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

            Shop: {
              onClick: handleShopClick
            },

            Search116156 :{
              onClick: handleSearchClick
            },

          }} />

        <HistoryHeading overrides = {{
           "Purchased History" :{
              children :(
                <div> Purchase History</div>
              )
           }
        }}/>

        <div>
            {fruitQuantities.map((item, index) => (
                <div style={{ marginBottom: '20px' }}>
                    <Item style={{ padding: '10px', marginBottom: '10px' }} overrides={{
                        itemName: { 
                            children: (
                                <div>
                                    {item.fruit} x{item.quantity} lbs
                                </div>
                            )}, 

                            unitprice: { 
                                children: (
                                    <div>
                                        {fruitPrices[item.fruit]}
                                    </div>
                                )},        

                                
                            price: { 
                                children: (
                                    <div>
                                        ${(fruitPrices[item.fruit] * item.quantity).toFixed(2)}
                                    </div>
                            )},                                 

                            Refnumber: { 
                                children: (
                                    <div>
                                        Reference: {String(item.ref).padStart(9, '0')}
                                    </div>
                            )}, 

                            "Time Purchased": { 
                                children: (
                                    <div>
                                        {item.time}
                                    </div>
                            )}, 
                                
                    }}/>
                </div>
            ))}
        </div>

        </View>  
      );

};

export default HistoryPage;