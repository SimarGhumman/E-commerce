import React, { useState, useEffect, useMemo } from 'react';
import {
  Button,
  View
} from "@aws-amplify/ui-react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import Item from '../ui-components/Item2';
import Navigation from '../ui-components/Navigation';
import Summary from '../ui-components/Summary';
import Footer from '../ui-components/Footer';
import Signout from '../ui-components/Signout';
import * as queries from '../graphql/queries';
import { generateClient } from 'aws-amplify/api';

const ProductPage = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const client = generateClient();

  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await client.graphql({
          query: queries.listProducts,
          authMode: 'userPool'
        });
        setProducts(productData.data.listProducts.items);
        setQuantities(new Array(productData.data.listProducts.items.length).fill(0));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
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

  const handleSignOut = async () => {
    await signOut();
    localStorage.clear();
    sessionStorage.clear();
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };


  const handleAddtoCartClick = (index) => {
    const productID = products[index].id;  // Assuming each product has a unique ID
    const quantity = quantities[index];   // Get the quantity for the clicked product
    console.log("Button clicked for product ID:", productID, "with quantity:", quantity);
    // Here you would typically dispatch this data to your store or backend API
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
                                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <input 
                                      type="number" 
                                      value={quantities[index]} 
                                      onChange={(event) => handleQuantityChange(index, event)} 
                                      style={{ fontSize: '12px', width: '50px', border: 'none' }} 
                                    />
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
    return rows;
  }, [products, quantities, handleAddtoCartClick]);


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

            
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Signout onClick={handleSignOut}>
                    Sign Out
                </Signout>
          </div>

         <Footer />

        </View>
      );
};

export default ProductPage;
