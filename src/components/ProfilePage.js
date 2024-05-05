import React, { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import {
    Button,
    View
  } from "@aws-amplify/ui-react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import Navigation  from '../ui-components/Navigation';
import Profile from '../ui-components/Profile';
import Footer  from '../ui-components/Footer';
import Signout from '../ui-components/Signout';

const ProfilePage = () => {
    const navigate = useNavigate();
    const { user, signOut } = useAuthenticator((context) => [context.user]);

    let fName = 'First'
    let lName = 'Last'
    let userName = 'FirstLast123'
    let email = 'FirstLast@gmail.com'
    let phoneNumber = '408-408-4040'
    let billingAdd = '1234 First Ave'
    let shippingAdd = '1234 Last Ave'

    const [tempFName, setFirstName] = useState('');
    const [tempLName, setLastName] = useState('');
    const [tempBillAdd, setBilling] = useState('');
    const [tempShippAdd, setShipping] = useState('');
    const [tempPhone, setPhone] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
      };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleShippingChange = (event) => {
        setShipping(event.target.value);
    };

    const handleBillingeChange = (event) => {
        setBilling(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };
      
    const handleBasketClick = () => {
        navigate('/cart');
    };
    
    const handleAboutClick = () => {
        navigate('/home');
    };

    const handleShopClick = () => {
        navigate('/produce')
    };

    const handleHistoryClick = () => {
        navigate('/history')
    };

    const handleSaveClick = () => {
        // TODO
    };

    const handleSearchClick = () => {
        navigate('/search');
      };

    const handleSignOut = async () => {
        await signOut();
        localStorage.clear();
        sessionStorage.clear();
        navigate('/login');
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

            Shop : {
                onClick: handleShopClick
            },

            Search116156 :{
                onClick: handleSearchClick
            },

            }} />
        
            <Profile overrides = {{

            "order history": {
                onClick: handleHistoryClick
            },

            "your name": { 
                children: (
                    <div>
                        {fName} {lName}
                    </div>
                )},  

            "eg. alaa.mohamed.gmail.com": { 
                children: (
                    <div>
                        {email}
                     </div>
                )}, 

                "eg. 408-123-4567": { 
                children: (
                    <div>
                    <div>
                        <input
                         className="input-field" 
                          type="text"
                          placeholder= {phoneNumber}
                          value={tempPhone}
                          style={{ width: '100%'}}
                          onChange={handlePhoneChange}
                        />
                    </div>
                    </div>
            )},

            "eg. 12345 billing st. San Jose, CA, 94233": { 
                children: (
                    <div>
                        <input
                         className="input-field" 
                          type="text"
                          placeholder= {billingAdd}
                          value={tempBillAdd}
                          style={{ width: '100%'}}
                          onChange={handleBillingeChange}
                        />
                    </div>
            )},

            "eg. 12345 shipping st. San Jose, CA, 94231": { 
                children: (
                    <div>
                        <input
                         className="input-field" 
                          type="text"
                          placeholder= {shippingAdd}
                          value={tempShippAdd}
                          style={{ width: '100%'}}
                          onChange={handleShippingChange}
                        />
                    </div>
            )},

            "eg. Alaa": {  //First
                children: (
                    <div>
                        <input
                         className="input-field" 
                          type="text"
                          placeholder= {fName}
                          value={tempFName}
                          style={{ width: '450%'}}
                          onChange={handleFirstNameChange}
                        />
                    </div>
            )},

            "eg. Mohamed": {  //Last
                children: (
                    <div>
                        <input
                         className="input-field" 
                          type="text"
                          placeholder= {lName}
                          value={tempLName}
                          style={{ width: '350%'}}
                          onChange={handleLastNameChange}
                        />
                    </div>
            )},

            "eg. alaa.mohamed": {  //Username
                children: (
                    <div>
                        {userName}
                    </div>
            )},           
            
            "Cancel Button":{
                onClick: handleAboutClick
            },

            "Save Button":{
                onClick: handleSaveClick
            }

            }} />
        
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
            <Signout onClick={handleSignOut}>
                Sign Out
            </Signout>
        </div>


            <Footer />

        </View>
      );
};

export default ProfilePage;
