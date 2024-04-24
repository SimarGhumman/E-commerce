/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/
/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { getOverrideProps } from "./utils";
import { Image, Text, View } from "@aws-amplify/ui-react";
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export default function Aboutus(props) {
  const { overrides, ...rest } = props;
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


  return (
    <View
      width="100%"
      height="2087px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Aboutus")}
      {...rest}
    >
      <Text
        fontFamily="Newsreader"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="38.400001525878906px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.49px"
        width="1020px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="125px"
        left="198px"
        right="222px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="CS218 Project&#xA;Team Members: &#xA;Brian Tran, Han Qiu, Simar Ghumman"
        {...getOverrideProps(
          overrides,
          "CS218 Project Team Members: Brian Tran, Han Qiu, Simar Ghumman"
        )}
      ></Text>
      <View
        width="227px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="357px"
        left="calc(50% - 113.5px - -0.5px)"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(66,107,31,1)"
        {...getOverrideProps(overrides, "Button")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="26px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 13px - 0px)"
          left="calc(50% - 81.5px - 0px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Browse our shop"
          {...getOverrideProps(overrides, "Browse our shop")}
        ></Text>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="32px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="822px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1550px"
        left="309px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="At E-Commerce , we take pride in delivering the finest selection of fruits straight to your table. Our produce is sourced from local farms known for their dedication to quality and sustainability. From the crisp sweetness of apples to the tropical juiciness of mangoes, each fruit is carefully selected to ensure freshness and flavor.&#x2028;&#x2028;We believe in supporting our local communities and farmers, which is why we prioritize sourcing from nearby growers. By choosing  E-Commerce, you're not only enjoying delicious fruits but also contributing to the livelihoods of hardworking farmers.&#x2028;&#x2028;With a wide range of options including bananas, oranges, grapes, and more, our goal is to provide you with the freshest and most flavorful fruits for you and your family to enjoy. Experience the difference with  E-Commerce – where quality meets taste."
        {...getOverrideProps(
          overrides,
          "At E-Commerce , we take pride in delivering the finest selection of fruits straight to your table. Our produce is sourced from local farms known for their dedication to quality and sustainability. From the crisp sweetness of apples to the tropical juiciness of mangoes, each fruit is carefully selected to ensure freshness and flavor.\u2028\u2028We believe in supporting our local communities and farmers, which is why we prioritize sourcing from nearby growers. By choosing E-Commerce, you're not only enjoying delicious fruits but also contributing to the livelihoods of hardworking farmers.\u2028\u2028With a wide range of options including bananas, oranges, grapes, and more, our goal is to provide you with the freshest and most flavorful fruits for you and your family to enjoy. Experience the difference with E-Commerce \u2013 where quality meets taste."
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        textTransform="uppercase"
        lineHeight="22.399999618530273px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.41px"
        width="181px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1555px"
        left="96px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="WHAT WE BELIEVE"
        {...getOverrideProps(overrides, "WHAT WE BELIEVE")}
      ></Text>
      <Image
        src={farmerUrl}
        width="20%"
        height="693px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="662px"
        left="96px"
        right="840px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(
          overrides,
          "jonathan-kemper-1HHrdIoLFpU-unsplash 1"
        )}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="22.399999618530273px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="736px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1281px"
        left="660px"
        right="44px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Central California — The person who grew these was located in Central California and, er, hopefully very well-compensated."
        {...getOverrideProps(
          overrides,
          "Central California \u2014 The person who grew these was located in Central California and, er, hopefully very well-compensated."
        )}
      ></Text>
      <Image
        src={farmUrl}
        width="50%"
        height="480px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="755px"
        left="660px"
        right="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(
          overrides,
          "Stocksy_txp226f62b2aNe300_Medium_4582193 1"
        )}
      ></Image>
    </View>
  );
}
