import React, { useRef, useState, useEffect } from 'react';
import { View } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import Search from '../ui-components/Search';
import Navigation from '../ui-components/Navigation';
import './styles.css';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

const HistoryPage = () => {
    const navigate = useNavigate();
    const uploadInputRef = useRef(null);
    const [fileName, setFileName] = useState('');
    const [uploadedImage, setUploadedImage] = useState('');
    const [itemName, setItemName] = useState('');
    const [model, setModel] = useState(null);

    useEffect(() => {
        loadModel();
    }, []);

    const loadModel = async () => {
        try {
            const loadedModel = await mobilenet.load();
            setModel(loadedModel);
        } catch (error) {
            console.error('Error loading model:', error);
        }
    };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        setFileName(file.name);

        // Load the image using FileReader
        const reader = new FileReader();
        reader.onload = async (e) => {
            const imageUrl = e.target.result;
            const image = new Image();
            image.onload = async () => {
                setUploadedImage(imageUrl);
                if (model) {
                    const itemName = await predictItemName(image);
                    setItemName(itemName);
                } else {
                    console.error('Model not loaded.');
                }
            };
            image.src = imageUrl;
        };
        reader.readAsDataURL(file);
    };

    const predictItemName = async (image) => {
        try {
            const predictions = await model.classify(image);
            return predictions[0].className;
        } catch (error) {
            console.error('Error predicting:', error);
            return 'Unknown';
        }
    };

    const handleBasketClick = () => {
        navigate('/cart');
    };

    const handleAboutClick = () => {
        navigate('/home');
    };

    const handleProfileClick = () => {
        navigate('/profile');
    };

    const handleShopClick = () => {
        navigate('/produce');
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
                }
            }} />
            <Search
                overrides={{
                    Search15831: {
                        children: <div>Item search:</div>,
                    },
                    "image upload:": {
                        children: <div>Upload Image:</div>,
                    },
                    upload: {
                        children: (
                            <div>
                                <input
                                    type="file"
                                    accept="image/jpeg"
                                    onChange={handleFileUpload}
                                    style={{ display: "none" }}
                                    ref={uploadInputRef}
                                />
                                <button onClick={() => uploadInputRef.current.click()}>Upload JPEG</button>
                            </div>
                        ),
                    },
                    "file name": {
                        children: (
                            <div>{fileName}</div>
                        ),
                    },
                    "this item is most likely a:": {
                        children: (
                            <div>Item is most likely:</div>
                        ),
                    },
                    "belanja 1": {
                        src: uploadedImage ? uploadedImage : '',
                        alt: "Uploaded Image",
                    },
                    "item name": {
                        children: (
                            <div>{itemName}</div>
                        ),
                    }
                }}
            />
        </View>
    );
};

export default HistoryPage;
