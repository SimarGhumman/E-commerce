import React, { useState, useEffect } from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  View,
} from "@aws-amplify/ui-react";
import { listNotes } from "../graphql/queries";
import { generateClient } from 'aws-amplify/api';
import { getUrl } from 'aws-amplify/storage';
import { useNavigate } from 'react-router-dom';
import Aboutus from '../ui-components/Aboutus';
import Navigation from '../ui-components/Navigation';
import Footer from '../ui-components/Footer';
import { getCurrentUser } from '@aws-amplify/auth';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Signout from '../ui-components/Signout';


const client = generateClient();

function HomePage() {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(null);
  const { signOut } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();


  const checkUser = async () => {
    try {
        const userData = await getCurrentUser();
        if (userData) {
            setUser(userData); // Set user if successfully retrieved
            console.log('User data retrieved:', userData);
        } else {
            console.log('No user signed in');
            setUser(null); // Clear user if no user data
        }
    } catch (error) {
        console.log('Failed to retrieve user:', error);
        setUser(null);
    }
};

  useEffect(() => {
    fetchNotes();
    checkUser();
  }, []);

  const handleBasketClick = () => {
    navigate('/cart');
  };

  const handleAboutClick = () => {
    navigate('/home');
  };

  const handleShopClick = () => {
    navigate('/produce')
  };

  const handleProfileClick = () => {
    navigate('/profile')
  };

  const handleSearchClick = () => {
    navigate('/search')
  };


  async function fetchNotes() {
    const apiData = await client.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const url = await getUrl({ key: note.name });
          note.image = url.url;
        }
        return note;
      })
    );
    setNotes(notesFromAPI);
  }

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

      <Aboutus overrides={{
        "Browse our shop": {
          onClick: handleShopClick
        }
      }} />

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Signout onClick={handleSignOut}>
                Sign Out
            </Signout>
        </div>


      <Footer />
    </View>
  );
}


export default HomePage;


