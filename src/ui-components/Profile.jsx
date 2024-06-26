/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Profile(props) {

  const { overrides, ...rest } = props;
  const [username, setUsername] = useState('Loading...');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = '79f9496e-10c1-7065-beed-572289b560e9';  // Replace with actual user ID or pass as a prop
        const userData = await API.graphql(graphqlOperation(getUser, { id: userId }));
        const username = userData.data.getUser.username;
        setUsername(username);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setUsername('User not found');
      }
    };

    fetchUserData();
  }, []);

  return (
    <View
      width="1400px"
      height="1800px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="24px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(251,247,244,1)"
      {...getOverrideProps(overrides, "Profile")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="345.01px"
        height="220px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="100px"
        left="100px"
        {...getOverrideProps(overrides, "General Info & Photo")}
      >
        <Text
          fontFamily="Lato"
          fontSize="24px"
          fontWeight="700"
          color="rgba(56,77,108,1)"
          lineHeight="20px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="177.59px"
          height="21.75px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="User Profile"
          {...getOverrideProps(overrides, "User Profile")}
        ></Text>
        <Icon
          width="175.14px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 175.14096069335938, height: 1 }}
          paths={[
            {
              d: "M0 0.5L175.141 0.5L175.141 -0.5L0 -0.5L0 0.5Z",
              stroke: "rgba(208,208,208,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="39.41px"
          left="0px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          {...getOverrideProps(overrides, "Vector 7577197")}
        ></Icon>
        <View
          padding="0px 0px 0px 0px"
          width="345.01px"
          height="113.75px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="106.25px"
          left="0px"
          {...getOverrideProps(overrides, "Group 9")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="129.25px"
            height="113.75px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Group 16")}
          >
            <Icon
              width="129.25px"
              height="113.75px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 129.24520874023438,
                height: 113.74783325195312,
              }}
              paths={[
                {
                  d: "M124.245 56.8739C124.245 84.9421 98.1705 108.748 64.6226 108.748L64.6226 118.748C102.455 118.748 134.245 91.6269 134.245 56.8739L124.245 56.8739ZM64.6226 108.748C31.0748 108.748 5 84.9421 5 56.8739L-5 56.8739C-5 91.6269 26.7903 118.748 64.6226 118.748L64.6226 108.748ZM5 56.8739C5 28.8057 31.0748 5 64.6226 5L64.6226 -5C26.7903 -5 -5 22.1209 -5 56.8739L5 56.8739ZM64.6226 5C98.1705 5 124.245 28.8057 124.245 56.8739L134.245 56.8739C134.245 22.1209 102.455 -5 64.6226 -5L64.6226 5Z",
                  stroke: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 5,
                },
                {
                  d: "M129.245 56.8739C129.245 88.2845 100.313 113.748 64.6226 113.748C28.9325 113.748 0 88.2845 0 56.8739C0 25.4633 28.9325 0 64.6226 0C100.313 0 129.245 25.4633 129.245 56.8739Z",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="0px"
              {...getOverrideProps(overrides, "Ellipse 19")}
            ></Icon>
          </View>
          <Text
            fontFamily="Montserrat"
            fontSize="20px"
            fontWeight="700"
            color="rgba(56,77,108,1)"
            lineHeight="24.3799991607666px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="195.01px"
            height="26.1px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="43.75px"
            left="150px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={username}
            {...getOverrideProps(overrides, "your name")}
          ></Text>
        </View>
      </View>
      <Icon
        width="1200px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1200, height: 1 }}
        paths={[
          {
            d: "M0 0.5L1200 0.5L1200 -0.5L0 -0.5L0 0.5Z",
            stroke: "rgba(208,208,208,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="370px"
        left="100px"
        {...getOverrideProps(overrides, "Vector 7577210")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="1200px"
        height="220px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="410px"
        left="100px"
        {...getOverrideProps(overrides, "Name")}
      >
        <Text
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight="700"
          color="rgba(56,77,108,1)"
          lineHeight="19.503999710083008px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="139.62px"
          height="22.92px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="2.31px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="First Name"
          {...getOverrideProps(overrides, "First Name")}
        ></Text>
        <View
          width="573.46px"
          height="59.58px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="41.25px"
          left="0px"
          border="1px SOLID rgba(209,213,219,1)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Name Field77213")}
        ></View>
        <Text
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight="400"
          color="rgba(171,177,187,1)"
          fontStyle="italic"
          lineHeight="19.503999710083008px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="76.15px"
          height="22.92px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="59.58px"
          left="21.92px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="eg. Alaa"
          {...getOverrideProps(overrides, "eg. Alaa")}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight="700"
          color="rgba(56,77,108,1)"
          lineHeight="19.503999710083008px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="139.62px"
          height="22.92px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="608.08px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Last Name"
          {...getOverrideProps(overrides, "Last Name")}
        ></Text>
        <View
          width="573.46px"
          height="59.58px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="41.25px"
          left="608.08px"
          border="1px SOLID rgba(209,213,219,1)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Name Field77216")}
        ></View>
        <Text
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight="400"
          color="rgba(171,177,187,1)"
          fontStyle="italic"
          lineHeight="19.503999710083008px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="130.38px"
          height="22.92px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="59.58px"
          left="634.62px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="eg. Mohamed"
          {...getOverrideProps(overrides, "eg. Mohamed")}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight="700"
          color="rgba(56,77,108,1)"
          lineHeight="19.503999710083008px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="139.62px"
          height="22.92px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="119.17px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="User Name"
          {...getOverrideProps(overrides, "User Name")}
        ></Text>
        <View
          width="1197.69px"
          height="59.58px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="160.42px"
          left="2.31px"
          border="1px SOLID rgba(209,213,219,1)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Name Field77219")}
        ></View>
        <Text
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight="400"
          color="rgba(171,177,187,1)"
          fontStyle="italic"
          lineHeight="19.503999710083008px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="178.85px"
          height="22.92px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="178.75px"
          left="21.92px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="eg. alaa.mohamed"
          {...getOverrideProps(overrides, "eg. alaa.mohamed")}
        ></Text>
      </View>
      <Icon
        width="1200px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1200, height: 1 }}
        paths={[
          {
            d: "M0 0.5L1200 0.5L1200 -0.5L0 -0.5L0 0.5Z",
            stroke: "rgba(208,208,208,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="670px"
        left="100px"
        {...getOverrideProps(overrides, "Vector 76")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="1200px"
        height="110px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="710px"
        left="100px"
        {...getOverrideProps(overrides, "Email & Phone")}
      >
        <Text
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight="700"
          color="rgba(56,77,108,1)"
          lineHeight="19.503999710083008px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="160px"
          height="25px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="2.34px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Email Address"
          {...getOverrideProps(overrides, "Email Address")}
        ></Text>
        <View
          width="582.42px"
          height="65px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="45px"
          left="0px"
          border="1px SOLID rgba(209,213,219,1)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Email Field")}
        ></View>
        <View
          width="32.81px"
          height="35px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="60px"
          left="22.27px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Mail")}
        >
          <Icon
            width="27.34px"
            height="23.33px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 27.34375,
              height: 23.333332061767578,
            }}
            paths={[
              {
                d: "M27.3438 6.72L27.3438 18.5937C27.3438 21.121 25.4892 23.1863 23.1525 23.3259L22.9004 23.3333L4.44336 23.3333C2.07398 23.3333 0.137744 21.3551 0.00702743 18.8627L0 18.5937L0 6.72L13.1961 14.0939C13.4941 14.2603 13.8496 14.2603 14.1477 14.0939L27.3438 6.72ZM4.44336 0L22.9004 0C25.2037 0 27.0978 1.86945 27.3216 4.26351L13.6719 11.8902L0.0221348 4.26351C0.237699 1.95812 2.002 0.139198 4.18919 0.00762701L4.44336 0Z",
                fill: "rgba(171,177,187,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="16.67%"
            bottom="16.67%"
            left="8.33%"
            right="8.33%"
            {...getOverrideProps(overrides, "Vector77226")}
          ></Icon>
        </View>
        <Text
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight="700"
          color="rgba(56,77,108,1)"
          lineHeight="19.503999710083008px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="153.52px"
          height="25px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="617.58px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Phone Number"
          {...getOverrideProps(overrides, "Phone Number")}
        ></Text>
        <View
          width="582.42px"
          height="65px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="45px"
          left="617.58px"
          border="1px SOLID rgba(209,213,219,1)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Phone Field")}
        ></View>
        <View
          width="32.81px"
          height="35px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="60px"
          left="642.19px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Phone")}
        >
          <Icon
            width="16.41px"
            height="29.17px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 16.40625,
              height: 29.166664123535156,
            }}
            paths={[
              {
                d: "M13.3301 0C15.0289 0 16.4062 1.46907 16.4062 3.28125L16.4062 25.8854C16.4062 27.6975 15.0289 29.1667 13.3301 29.1667L3.07617 29.1667C1.37725 29.1667 0 27.6975 0 25.8854L0 3.28125C0 1.46907 1.37725 0 3.07617 0L13.3301 0ZM9.91211 23.3333L6.49414 23.3333C5.92785 23.3333 5.46875 23.823 5.46875 24.4271C5.46875 25.0311 5.92785 25.5208 6.49414 25.5208L9.91211 25.5208C10.4784 25.5208 10.9375 25.0311 10.9375 24.4271C10.9375 23.823 10.4784 23.3333 9.91211 23.3333Z",
                fill: "rgba(171,177,187,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.33%"
            bottom="8.33%"
            left="25%"
            right="25%"
            {...getOverrideProps(overrides, "Vector77230")}
          ></Icon>
        </View>
      </View>
      <Icon
        width="1200px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1200, height: 1 }}
        paths={[
          {
            d: "M0 0.5L1200 0.5L1200 -0.5L0 -0.5L0 0.5Z",
            stroke: "rgba(208,208,208,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="860px"
        left="100px"
        {...getOverrideProps(overrides, "Vector 77")}
      ></Icon>
      <Icon
        width="1200px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1200, height: 1 }}
        paths={[
          {
            d: "M0 0.5L1200 0.5L1200 -0.5L0 -0.5L0 0.5Z",
            stroke: "rgba(208,208,208,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1240px"
        left="100px"
        {...getOverrideProps(overrides, "Vector 79")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="1200px"
        height="110px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="900px"
        left="100px"
        {...getOverrideProps(overrides, "Location")}
      >
        <Text
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight="700"
          color="rgba(56,77,108,1)"
          lineHeight="19.503999710083008px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="160px"
          height="25px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Billing Address"
          {...getOverrideProps(overrides, "Billing Address")}
        ></Text>
        <View
          width="1197.69px"
          height="65px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="45px"
          left="2.31px"
          border="1px SOLID rgba(209,213,219,1)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Location Field")}
        ></View>
        <View
          width="27.69px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="63.75px"
          left="19.62px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "Location / undefined / Glyph: undefined"
          )}
        >
          <Icon
            width="20.09px"
            height="24.98px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 20.093788146972656,
              height: 24.978506088256836,
            }}
            paths={[
              {
                d: "M17.1511 18.5804L15.7815 20.0478C14.772 21.121 13.4623 22.501 11.8516 24.1879C10.8453 25.2421 9.24856 25.242 8.24229 24.1876L4.21405 19.9428C3.70779 19.4043 3.28402 18.9501 2.94266 18.5804C-0.980888 14.3299 -0.980888 7.4384 2.94266 3.18788C6.86621 -1.06263 13.2276 -1.06263 17.1511 3.18788C21.0747 7.4384 21.0747 14.3299 17.1511 18.5804ZM12.9318 11.2275C12.9318 9.50146 11.6401 8.10223 10.0469 8.10223C8.45367 8.10223 7.16204 9.50146 7.16204 11.2275C7.16204 12.9535 8.45367 14.3528 10.0469 14.3528C11.6401 14.3528 12.9318 12.9535 12.9318 11.2275Z",
                fill: "rgba(171,177,187,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.41%"
            bottom="8.33%"
            left="13.72%"
            right="13.72%"
            {...getOverrideProps(overrides, "Vector77257")}
          ></Icon>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="1200px"
        height="110px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1090px"
        left="100px"
        {...getOverrideProps(overrides, "Time Zone")}
      >
        <Text
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight="700"
          color="rgba(56,77,108,1)"
          lineHeight="19.503999710083008px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="160px"
          height="25px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Shipping Address"
          {...getOverrideProps(overrides, "Shipping Address")}
        ></Text>
        <View
          width="1197.69px"
          height="65px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="45px"
          left="2.31px"
          border="1px SOLID rgba(209,213,219,1)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Time Zone Field")}
        ></View>
        <View
          width="27.69px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="62.5px"
          left="23.08px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "Clock / undefined / Glyph: undefined"
          )}
        >
          <Icon
            width="23.08px"
            height="25px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 23.076923370361328,
              height: 25,
            }}
            paths={[
              {
                d: "M15.2885 14.375L10.6731 14.375C10.1954 14.375 9.80769 13.955 9.80769 13.4375L9.80769 5.9375C9.80769 5.42 10.1954 5 10.6731 5C11.1508 5 11.5385 5.42 11.5385 5.9375L11.5385 12.5L15.2885 12.5C15.7662 12.5 16.1538 12.92 16.1538 13.4375C16.1538 13.955 15.7662 14.375 15.2885 14.375ZM11.5385 0C5.16692 0 0 5.5975 0 12.5C0 19.4025 5.16692 25 11.5385 25C17.91 25 23.0769 19.4025 23.0769 12.5C23.0769 5.5975 17.91 0 11.5385 0Z",
                fill: "rgba(171,177,187,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.33%"
            bottom="8.33%"
            left="8.33%"
            right="8.33%"
            {...getOverrideProps(overrides, "Vector77262")}
          ></Icon>
        </View>
      </View>
      <Icon
        width="1200px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1200, height: 1 }}
        paths={[
          {
            d: "M0 0.5L1200 0.5L1200 -0.5L0 -0.5L0 0.5Z",
            stroke: "rgba(208,208,208,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1050px"
        left="100px"
        {...getOverrideProps(overrides, "Vector 78")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="1200px"
        height="220px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1280px"
        left="100px"
        {...getOverrideProps(overrides, "Password")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="565.45px"
          height="100.83px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Group 13")}
        >
          <Text
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="700"
            color="rgba(56,77,108,1)"
            lineHeight="19.503999710083008px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="173.9px"
            height="22.92px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Current Password"
            {...getOverrideProps(overrides, "Current Password")}
          ></Text>
          <View
            width="563.15px"
            height="59.58px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="41.25px"
            left="2.3px"
            border="1px SOLID rgba(209,213,219,1)"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Current Password Field")}
          ></View>
          <View
            width="27.57px"
            height="27.57px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="51.56px"
            left="37.09px"
            transformOrigin="top left"
            transform="rotate(45.65deg)"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(
              overrides,
              "Key / undefined / Glyph: undefined77268"
            )}
          >
            <Icon
              width="23.09px"
              height="22.98px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 32.6502375007758,
                height: 32.4880886653516,
              }}
              paths={[
                {
                  d: "M8.04059 7.52475C8.04059 3.37268 11.4128 0 15.5643 0C19.6961 0 23.088 3.23835 23.088 7.40986C23.088 11.5619 19.7157 14.9346 15.5643 14.9346C14.9551 14.9346 14.3535 14.8473 13.7829 14.7005C13.755 15.469 13.1233 16.0834 12.348 16.0834L10.3379 16.0834L10.3379 18.0939C10.3379 18.887 9.69509 19.5299 8.90208 19.5299L6.89194 19.5299L6.89194 20.9659C6.89194 22.0762 5.99196 22.9763 4.88179 22.9763L2.01015 22.9763C0.899972 22.9763 0 22.0762 0 20.9659L0 18.4711C0 17.6333 0.3328 16.8297 0.925185 16.2373L8.08796 9.07348C8.15053 9.0109 8.18793 8.90963 8.16749 8.79306C8.09822 8.39827 8.04059 7.96958 8.04059 7.52475ZM18.7232 5.68666C18.7232 4.89357 18.0803 4.25064 17.2874 4.25064C16.4943 4.25064 15.8515 4.89357 15.8515 5.68666C15.8515 6.47975 16.4943 7.12268 17.2874 7.12268C18.0803 7.12268 18.7232 6.47975 18.7232 5.68666Z",
                  fill: "rgba(171,177,187,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="8.54%"
              bottom="8.13%"
              left="8.12%"
              right="8.13%"
              {...getOverrideProps(overrides, "Vector77269")}
            ></Icon>
          </View>
          <View
            width="27.64px"
            height="27.5px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="57.29px"
            left="499.81px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame77270")}
          >
            <Icon
              width="22.4px"
              height="13.18px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 22.39776611328125,
                height: 13.182355880737305,
              }}
              paths={[
                {
                  d: "M11.1996 4.01571C13.7437 4.01571 15.8061 6.06776 15.8061 8.59902C15.8061 11.1304 13.7437 13.1824 11.1996 13.1824C8.65546 13.1824 6.59305 11.1304 6.59305 8.59902C6.59305 6.06776 8.65546 4.01571 11.1996 4.01571ZM11.1996 0C16.5127 0 21.0991 3.60939 22.3717 8.66754C22.4876 9.12794 22.2063 9.59464 21.7436 9.70991C21.2808 9.82506 20.8118 9.54537 20.696 9.08486C19.6147 4.78725 15.7155 1.71875 11.1996 1.71875C6.68166 1.71875 2.78126 4.78988 1.70191 9.09013C1.58633 9.55052 1.11746 9.83056 0.65465 9.71564C0.191844 9.60059 -0.0896376 9.13413 0.0259401 8.67362C1.29629 3.61249 5.88421 0 11.1996 0Z",
                  fill: "rgba(171,177,187,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="22.92%"
              bottom="29.15%"
              left="9.48%"
              right="9.48%"
              {...getOverrideProps(overrides, "Vector77271")}
            ></Icon>
          </View>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="583.88px"
          height="100.83px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="597.7px"
          {...getOverrideProps(overrides, "Group 15")}
        >
          <Text
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="700"
            color="rgba(56,77,108,1)"
            lineHeight="19.503999710083008px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="173.9px"
            height="22.92px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="New Password"
            {...getOverrideProps(overrides, "New Password")}
          ></Text>
          <View
            width="581.57px"
            height="59.58px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="41.25px"
            left="2.3px"
            border="1px SOLID rgba(209,213,219,1)"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "New Password Field")}
          ></View>
          <View
            width="27.57px"
            height="27.57px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="51.56px"
            left="46.3px"
            transformOrigin="top left"
            transform="rotate(45.65deg)"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(
              overrides,
              "Key / undefined / Glyph: undefined77275"
            )}
          >
            <Icon
              width="23.09px"
              height="22.98px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 32.6502375007758,
                height: 32.4880886653516,
              }}
              paths={[
                {
                  d: "M8.04059 7.52475C8.04059 3.37268 11.4128 0 15.5643 0C19.6961 0 23.088 3.23835 23.088 7.40986C23.088 11.5619 19.7157 14.9346 15.5643 14.9346C14.9551 14.9346 14.3535 14.8473 13.7829 14.7005C13.755 15.469 13.1233 16.0834 12.348 16.0834L10.3379 16.0834L10.3379 18.0939C10.3379 18.887 9.69509 19.5299 8.90208 19.5299L6.89194 19.5299L6.89194 20.9659C6.89194 22.0762 5.99196 22.9763 4.88179 22.9763L2.01015 22.9763C0.899972 22.9763 0 22.0762 0 20.9659L0 18.4711C0 17.6333 0.3328 16.8297 0.925185 16.2373L8.08796 9.07348C8.15053 9.0109 8.18793 8.90963 8.16749 8.79306C8.09822 8.39827 8.04059 7.96958 8.04059 7.52475ZM18.7232 5.68666C18.7232 4.89357 18.0803 4.25064 17.2874 4.25064C16.4943 4.25064 15.8515 4.89357 15.8515 5.68666C15.8515 6.47975 16.4943 7.12268 17.2874 7.12268C18.0803 7.12268 18.7232 6.47975 18.7232 5.68666Z",
                  fill: "rgba(171,177,187,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="8.54%"
              bottom="8.13%"
              left="8.12%"
              right="8.13%"
              {...getOverrideProps(overrides, "Vector77276")}
            ></Icon>
          </View>
          <View
            width="27.64px"
            height="27.5px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="57.29px"
            left="509.02px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame77277")}
          >
            <Icon
              width="22.4px"
              height="13.18px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 22.39776611328125,
                height: 13.182355880737305,
              }}
              paths={[
                {
                  d: "M11.1996 4.01571C13.7437 4.01571 15.8061 6.06776 15.8061 8.59902C15.8061 11.1304 13.7437 13.1824 11.1996 13.1824C8.65546 13.1824 6.59305 11.1304 6.59305 8.59902C6.59305 6.06776 8.65546 4.01571 11.1996 4.01571ZM11.1996 0C16.5127 0 21.0991 3.60939 22.3717 8.66754C22.4876 9.12794 22.2063 9.59464 21.7436 9.70991C21.2808 9.82506 20.8118 9.54537 20.696 9.08486C19.6147 4.78725 15.7155 1.71875 11.1996 1.71875C6.68166 1.71875 2.78126 4.78988 1.70191 9.09013C1.58633 9.55052 1.11746 9.83056 0.65465 9.71564C0.191844 9.60059 -0.0896376 9.13413 0.0259401 8.67362C1.29629 3.61249 5.88421 0 11.1996 0Z",
                  fill: "rgba(171,177,187,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="22.92%"
              bottom="29.15%"
              left="9.48%"
              right="9.48%"
              {...getOverrideProps(overrides, "Vector77278")}
            ></Icon>
          </View>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="1197.7px"
          height="100.83px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="119.17px"
          left="2.3px"
          {...getOverrideProps(overrides, "Group 14")}
        >
          <Text
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="700"
            color="rgba(56,77,108,1)"
            lineHeight="19.503999710083008px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="229.17px"
            height="22.92px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Confirm New Password"
            {...getOverrideProps(overrides, "Confirm New Password")}
          ></Text>
          <View
            width="1195.39px"
            height="59.58px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="41.25px"
            left="2.3px"
            border="1px SOLID rgba(209,213,219,1)"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Confirtm New Password Field")}
          ></View>
          <View
            width="27.57px"
            height="27.57px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="52.71px"
            left="34.78px"
            transformOrigin="top left"
            transform="rotate(45.65deg)"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(
              overrides,
              "Key / undefined / Glyph: undefined77282"
            )}
          >
            <Icon
              width="23.09px"
              height="22.98px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 32.6502375007758,
                height: 32.4880886653516,
              }}
              paths={[
                {
                  d: "M8.04059 7.52475C8.04059 3.37268 11.4128 0 15.5643 0C19.6961 0 23.088 3.23835 23.088 7.40986C23.088 11.5619 19.7157 14.9346 15.5643 14.9346C14.9551 14.9346 14.3535 14.8473 13.7829 14.7005C13.755 15.469 13.1233 16.0834 12.348 16.0834L10.3379 16.0834L10.3379 18.0939C10.3379 18.887 9.69509 19.5299 8.90208 19.5299L6.89194 19.5299L6.89194 20.9659C6.89194 22.0762 5.99196 22.9763 4.88179 22.9763L2.01015 22.9763C0.899972 22.9763 0 22.0762 0 20.9659L0 18.4711C0 17.6333 0.3328 16.8297 0.925185 16.2373L8.08796 9.07348C8.15053 9.0109 8.18793 8.90963 8.16749 8.79306C8.09822 8.39827 8.04059 7.96958 8.04059 7.52475ZM18.7232 5.68666C18.7232 4.89357 18.0803 4.25064 17.2874 4.25064C16.4943 4.25064 15.8515 4.89357 15.8515 5.68666C15.8515 6.47975 16.4943 7.12268 17.2874 7.12268C18.0803 7.12268 18.7232 6.47975 18.7232 5.68666Z",
                  fill: "rgba(171,177,187,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="8.54%"
              bottom="8.13%"
              left="8.12%"
              right="8.13%"
              {...getOverrideProps(overrides, "Vector77283")}
            ></Icon>
          </View>
          <View
            width="27.64px"
            height="27.5px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="59.58px"
            left="1104.41px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame77284")}
          >
            <Icon
              width="22.4px"
              height="13.18px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 22.39776611328125,
                height: 13.182355880737305,
              }}
              paths={[
                {
                  d: "M11.1996 4.01571C13.7437 4.01571 15.8061 6.06776 15.8061 8.59902C15.8061 11.1304 13.7437 13.1824 11.1996 13.1824C8.65546 13.1824 6.59305 11.1304 6.59305 8.59902C6.59305 6.06776 8.65546 4.01571 11.1996 4.01571ZM11.1996 0C16.5127 0 21.0991 3.60939 22.3717 8.66754C22.4876 9.12794 22.2063 9.59464 21.7436 9.70991C21.2808 9.82506 20.8118 9.54537 20.696 9.08486C19.6147 4.78725 15.7155 1.71875 11.1996 1.71875C6.68166 1.71875 2.78126 4.78988 1.70191 9.09013C1.58633 9.55052 1.11746 9.83056 0.65465 9.71564C0.191844 9.60059 -0.0896376 9.13413 0.0259401 8.67362C1.29629 3.61249 5.88421 0 11.1996 0Z",
                  fill: "rgba(171,177,187,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="22.92%"
              bottom="29.15%"
              left="9.48%"
              right="9.48%"
              {...getOverrideProps(overrides, "Vector77285")}
            ></Icon>
          </View>
        </View>
      </View>
      <Flex
        gap="8px"
        direction="column"
        width="176px"
        height="56px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="1597px"
        left="1047px"
        border="3px SOLID rgba(56,77,108,1)"
        borderRadius="11px"
        padding="10px 19px 10px 21px"
        backgroundColor="rgba(66,107,31,1)"
        {...getOverrideProps(overrides, "Save Button")}
      >
        <Text
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Save Changes"
          {...getOverrideProps(overrides, "Text")}
        ></Text>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="170px"
        height="50px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="calc(50% - 25px - -725px)"
        left="10.71%"
        right="77.14%"
        border="1px SOLID rgba(56,77,108,1)"
        borderRadius="8px"
        padding="7px 0px 7px 0px"
        backgroundColor="rgba(66,107,31,1)"
        {...getOverrideProps(overrides, "Cancel Button77288")}
      >
        <Text
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="21px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign out"
          {...getOverrideProps(overrides, "Sign out")}
        ></Text>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="170px"
        height="50px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="calc(50% - 25px - -725px)"
        left="57.14%"
        right="30.71%"
        border="1px SOLID rgba(56,77,108,1)"
        borderRadius="8px"
        padding="7px 0px 7px 0px"
        backgroundColor="rgba(66,107,31,1)"
        {...getOverrideProps(overrides, "Cancel Button77560")}
      >
        <Text
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="21px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Cancel"
          {...getOverrideProps(overrides, "Cancel")}
        ></Text>
      </Flex>
    </View>
  );
}
