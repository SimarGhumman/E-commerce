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


  useEffect(() => {
    // Calculate total price, tax, and order total whenever quantities change
    const newTotalPrice = products.reduce((acc, product, index) => acc + (product.price * (quantities[index] || 0)), 0);
    setTotalPrice(newTotalPrice);
    const newTax = newTotalPrice * 0.09;  // Assuming tax rate is 9%
    setTax(newTax);
    const newOrderTotal = newTotalPrice + newTax;
    setOrderTotal(newOrderTotal);
  }, [quantities, products]);

  const handleQuantityChange = (index, event) => {
    const value = parseInt(event.target.value, 10) || 0;
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = value;
      return newQuantities;
    });
  };



  const tableRows = useMemo(() => {
    let rows = [];
    const numRows = Math.ceil(products.length / 3);
    for (let row = 0; row < numRows; row++) {
      let cells = products.slice(row * 3, (row + 1) * 3).map((product, index) => {
        const productIndex = row * 3 + index;
        return (
          <td key={product.id}>
            <Item
              overrides={{
                "add to cart": {
                  onClick: () => handleAddtoCartClick(productIndex)
                },
                "ed-o-neil-AvvdZlhDowA-unsplash 1": {
                  src: product.image.url,
                  alt: product.name
                },
                quantity: {
                  children: (
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <input
                        type="number"
                        value={quantities[productIndex]}
                        onChange={(event) => handleQuantityChange(productIndex, event)}
                        style={{ fontSize: '12px', width: '50px', border: 'none' }}
                        min="0"
                      />
                    </div>
                  )
                },
                UnitPrice: {
                  children: <div>{product.price.toFixed(2)} /lb</div>
                },
                ItemName: {
                  children: <div>{product.name}</div>
                }
              }}
            />
          </td>
        );
      });
      rows.push(<tr key={`row-${row}`}>{cells}</tr>);
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
      <div className="container">
        <div className="left-column">
          <div style={{ paddingTop: '50px', paddingBottom: '50px' }}>
            <table className="Grid">
              <tbody>{tableRows}</tbody>
            </table>
          </div>
        </div>
        <div className="right-column">
          <Summary overrides={{
            "Total Price": { children: <div>${totalPrice.toFixed(2)}</div> },
            "Order Total": { children: <div>${orderTotal.toFixed(2)}</div> },
            Tax11614: { children: <div>${tax.toFixed(2)}</div> },
            "Shipping of product": { children: <div>Calculated at checkout</div> },
            "Continue to payment": { onClick: handleCheckoutClick }
          }} />
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Signout onClick={handleSignOut}>Sign Out</Signout>
      </div>
      <Footer />
    </View>
  );
};

export default ProductPage;
