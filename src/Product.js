import React from 'react';
import {
    Pageheading 
   } from './ui-components';
   import {
    Item2 
   } from './ui-components';
   const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px', // Adjust as needed
    paddingLeft: '40px', // Adjust as needed
  };
  
  const itemStyle = {
    flex: '1 1 calc(50% - 20px)', // Adjust as needed
    width: '40px', // Adjust width as needed
    height: 'auto', // Adjust height as needed or keep it auto
    paddingLeft: '100px', // Adjust as needed
  };

function Product() {
  return (
    <div style={containerStyle}>
      <Pageheading />
        <div style={itemStyle}><Item2 tomato={{ name: "Heirloom Tomato", price: "$5.99 / lb", image: "https://backendecommerce3bfaadfd375e448299afdf728b226d3235658-staging.s3.us-west-1.amazonaws.com/public/tomato.png" }} /></div>
        <div style={itemStyle}><Item2 /></div>
        <div style={itemStyle}><Item2 /></div>
        <div style={itemStyle}><Item2 /></div>
    </div>
  );
}

export default Product;