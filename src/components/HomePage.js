import React, { useState, useEffect } from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  View,
  Image,
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
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const client = generateClient();

function HomePage() {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(null);
  const { signOut } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();
  const [farmUrl, setFarmUrl] = useState('');
  const [farmerUrl, setFarmerUrl] = useState('');

  // Configuration for the S3 client
  const s3Configuration = {
    credentials: {
      accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    },
    region: process.env.REACT_APP_REGION,
  };
  // Create an S3 client instance with the configuration
  const s3 = new S3Client(s3Configuration);

  // Define the command to get an object, specifying the bucket and the key
  const farm = new GetObjectCommand({
    Bucket: 'backend-ecommerce-storage-imagesd2885-backend',
    Key: 'public/farm.webp'
  });

  const farmer = new GetObjectCommand({
    Bucket: 'backend-ecommerce-storage-imagesd2885-backend',
    Key: 'public/farmer.png'
  });

  // Generate a presigned URL with a specific expiration time
  async function generatePresignedUrl() {
    try {
      const farmUrl = await getSignedUrl(s3, farm, { expiresIn: 900 }); // Expires in 15 minutes (900 seconds)
      const farmerUrl = await getSignedUrl(s3, farmer, { expiresIn: 900 }); // Expires in 15 minutes (900 seconds)
      setFarmUrl(farmUrl);
      setFarmerUrl(farmerUrl);
    } catch (error) {
      console.error('Error generating presigned URL: ', error);
    }
  }

  // Call the function to generate and log the presigned URL
  generatePresignedUrl();


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

      <Navigation width="100vw" overrides={{
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

      <Aboutus width="100vw" overrides={{
        "Browse our shop": {
          onClick: handleShopClick
        },
        "jonathan-kemper-1HHrdIoLFpU-unsplash 1": {
          src: farmerUrl,
          alt: "Farmer",
          width: "20%"
        },
        "Stocksy_txp226f62b2aNe300_Medium_4582193 1": {
          src: farmUrl,
          alt: "Farmer",
          width: "50%"
        }
      }} />


      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Signout onClick={handleSignOut}>
          Sign Out
        </Signout>
      </div>


      <Footer width="100vw"/>
    </View>
  );
}


export default HomePage;


