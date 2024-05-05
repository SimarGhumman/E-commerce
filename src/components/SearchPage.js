import React, { useRef, useState } from 'react'; // Import useState
import { View } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import Search from '../ui-components/Search';
import Navigation from '../ui-components/Navigation';
import './styles.css';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

const HistoryPage = () => {

    const identifyImage = async (imageData) => {
        // Load the MobileNet model
        const model = await mobilenet.load({
            backend: 'cpu'
        });
    
        const img = new Image();
        img.src = imageData;
        await new Promise((resolve) => {
            img.onload = resolve;
        });
        const image = tf.browser.fromPixels(img);
    
        // Make a prediction on the image
        const predictions = await model.classify(image);
    
        if (predictions.length > 0) { // Check if predictions array is not empty
            // Get the most likely prediction
            const mostLikelyPrediction = predictions[0].className;
    
            // Print the most likely prediction to the console
            console.log("Most likely item:", mostLikelyPrediction);
    
            // Update the state or component to display the most likely prediction
            // For example, set the item name state:
            setItemName(mostLikelyPrediction.toFixed(3));
        } else {
            console.error("No predictions found.");
        }
    };
    
    
    
    

    const navigate = useNavigate();
    const uploadInputRef = useRef(null); // Create a ref for the file input
    const [fileName, setFileName] = useState("File Name Here");
    const [uploadedImage, setUploadedImage] = useState(null);
    const [itemName, setItemName] = useState("");

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

    const readFileAsDataURL = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    const handleFileUpload = async (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            try {
                const imageData = await readFileAsDataURL(uploadedFile);
                console.log("Image data:", imageData); // Log the image data
                setUploadedImage(imageData); // Set the image data to the state
                const uploadedFileName = uploadedFile.name;
                setFileName(uploadedFileName);
                console.log("File uploaded");
    
                // Identify the most likely image
                await identifyImage();
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        } else {
            console.error("No file selected");
        }
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

                    "file name":{
                        children: (
                            <div>{fileName}</div> 
                        ),
                    },

                    
                    "this item is most likely a:":{
                        children: (
                            <div>Item is most likely:</div> 
                        ),
                    },

                    "belanja 1": {
                        src: uploadedImage ? uploadedImage : '',
                        alt: "Uploaded Image",
                    },

                    "item name":{
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
