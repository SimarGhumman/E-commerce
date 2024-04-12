import React, { useState, useEffect } from "react";
import "./App.css";
import AboutUsPage from './AboutUs';
import ProductPage from './Product';
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  Image,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";
import { generateClient } from 'aws-amplify/api';
import { uploadData, getUrl, remove } from 'aws-amplify/storage'; 
import Navigation from "./ui-components/Navigation"; 
 import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import {
  Aboutus 
 } from './ui-components';

const client = generateClient();

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

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

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      image: image.name,
    };
    if (!!data.image) await uploadData({
      key: data.name,
      data: image
    });
    await client.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

  async function deleteNote({ id, name }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await remove({ key: name });
    await client.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px', // Adjust as needed
    paddingLeft: '40px', // Adjust as needed
  };

  return (
    <Router>
      <View style={containerStyle} className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Aboutus />
            </>
          } />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </View>
    </Router>
  );  
};

export default withAuthenticator(App);