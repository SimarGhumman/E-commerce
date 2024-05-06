/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Profile(props) {
  const { note, user, birthday, image, overrides, ...rest } = props;
  const cancelButtonOnClick = useNavigateAction({ type: "reload" });
  return (
    <View
      width="1400px"
      height="1350px"
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
            children={user?.username}
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
        top="27.41%"
        bottom="72.59%"
        left="7.14%"
        right="7.14%"
        {...getOverrideProps(overrides, "Vector 7577210")}
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
        top="40.74%"
        bottom="59.26%"
        left="7.14%"
        right="7.14%"
        {...getOverrideProps(overrides, "Vector 76")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="1197px"
        height="110px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="395px"
        left="103px"
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
          top="0%"
          bottom="77.27%"
          left="0.2%"
          right="86.44%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Email Address"
          {...getOverrideProps(overrides, "Email Address")}
        ></Text>
        <View
          width="1197px"
          height="65px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="40.91%"
          bottom="0%"
          left="0%"
          right="0%"
          border="1px SOLID rgba(209,213,219,1)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Email Field")}
        ></View>
        <Text
          fontFamily="Montserrat"
          fontSize="18px"
          fontWeight="400"
          color="rgba(171,177,187,1)"
          fontStyle="italic"
          lineHeight="21.941999435424805px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="400px"
          height="35px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="54.55%"
          bottom="13.64%"
          left="6.68%"
          right="59.9%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={user?.email}
          {...getOverrideProps(overrides, "eg. alaa.mohamed.gmail.com")}
        ></Text>
        <View
          width="32.81px"
          height="35px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="54.55%"
          bottom="13.64%"
          left="1.86%"
          right="95.4%"
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
        top="54.81%"
        bottom="45.19%"
        left="7.14%"
        right="7.14%"
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
        top="82.96%"
        bottom="17.04%"
        left="7.14%"
        right="7.14%"
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
        top="583px"
        left="100px"
        {...getOverrideProps(overrides, "billingaddress77253")}
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
          top="0%"
          bottom="77.27%"
          left="0%"
          right="86.67%"
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
          top="40.91%"
          bottom="0%"
          left="0.19%"
          right="0%"
          border="1px SOLID rgba(209,213,219,1)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Location Field77255")}
        ></View>
        <Text
          fontFamily="Montserrat"
          fontSize="18px"
          fontWeight="400"
          color="rgba(171,177,187,1)"
          fontStyle="italic"
          lineHeight="21.941999435424805px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="900px"
          height="35px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="54.55%"
          bottom="13.64%"
          left="6.67%"
          right="18.33%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={user?.billingAddress}
          {...getOverrideProps(
            overrides,
            "eg. 12345 billing st. San Jose, CA, 94233"
          )}
        ></Text>
        <View
          width="27.69px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="54.55%"
          bottom="18.18%"
          left="1.63%"
          right="96.06%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "Location / undefined / Glyph: undefined77256"
          )}
        >
          <Icon
            width="20.09px"
            height="24.98px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 20.093786239624023,
              height: 24.978506088256836,
            }}
            paths={[
              {
                d: "M17.1511 18.5804L15.7815 20.0478C14.772 21.121 13.4623 22.501 11.8516 24.1879C10.8453 25.2421 9.24856 25.242 8.24229 24.1876L4.21405 19.9428C3.70779 19.4043 3.28402 18.9501 2.94266 18.5804C-0.980887 14.3299 -0.980887 7.4384 2.94266 3.18788C6.86621 -1.06263 13.2276 -1.06263 17.1511 3.18788C21.0747 7.4384 21.0747 14.3299 17.1511 18.5804ZM12.9318 11.2275C12.9318 9.50146 11.6401 8.10223 10.0469 8.10223C8.45367 8.10223 7.16204 9.50146 7.16204 11.2275C7.16204 12.9535 8.45367 14.3528 10.0469 14.3528C11.6401 14.3528 12.9318 12.9535 12.9318 11.2275Z",
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
        top="961px"
        left="100px"
        {...getOverrideProps(overrides, "billingaddress1532")}
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
          top="0%"
          bottom="77.27%"
          left="0%"
          right="86.67%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Date of Birth"
          {...getOverrideProps(overrides, "Date of Birth")}
        ></Text>
        <View
          width="1197.69px"
          height="65px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="40.91%"
          bottom="0%"
          left="0.19%"
          right="0%"
          border="1px SOLID rgba(209,213,219,1)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Location Field1534")}
        ></View>
        <Text
          fontFamily="Montserrat"
          fontSize="18px"
          fontWeight="400"
          color="rgba(171,177,187,1)"
          fontStyle="italic"
          lineHeight="21.941999435424805px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="900px"
          height="35px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="54.55%"
          bottom="13.64%"
          left="6.67%"
          right="18.33%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="eg. 12/31/2000"
          {...getOverrideProps(overrides, "eg. 12/31/2000")}
        ></Text>
        <View
          width="27.69px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="54.55%"
          bottom="18.18%"
          left="1.63%"
          right="96.06%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "Location / undefined / Glyph: undefined1536"
          )}
        >
          <View
            width="26px"
            height="26px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="2px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "wpf:birthday")}
          >
            <Icon
              width="26.05px"
              height="26px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 26.048105239868164,
                height: 26.0011043548584,
              }}
              paths={[
                {
                  d: "M5.0481 0C5.0481 0 3.0791 2.169 3.0791 3.25C3.07953 3.73225 3.25864 4.19724 3.58184 4.55516C3.90504 4.91308 4.3494 5.13854 4.8291 5.188C4.59938 5.14015 4.39319 5.01456 4.24527 4.8324C4.09736 4.65024 4.01678 4.42265 4.01711 4.188C4.01711 3.625 5.0481 2.5 5.0481 2.5C5.0481 2.5 6.0791 3.624 6.0791 4.188C6.0791 4.681 5.7311 5.093 5.2671 5.188C5.74681 5.13854 6.19117 4.91308 6.51437 4.55516C6.83757 4.19724 7.01668 3.73225 7.0171 3.25C7.0171 2.17 5.0481 0 5.0481 0ZM13.0481 0C13.0481 0 11.0791 2.169 11.0791 3.25C11.0795 3.73225 11.2586 4.19724 11.5818 4.55516C11.905 4.91308 12.3494 5.13854 12.8291 5.188C12.5994 5.14015 12.3932 5.01456 12.2453 4.8324C12.0974 4.65024 12.0168 4.42265 12.0171 4.188C12.0171 3.625 13.0481 2.5 13.0481 2.5C13.0481 2.5 14.0791 3.624 14.0791 4.188C14.0791 4.681 13.7311 5.093 13.2671 5.188C13.7468 5.13854 14.1912 4.91308 14.5144 4.55516C14.8376 4.19724 15.0167 3.73225 15.0171 3.25C15.0171 2.17 13.0481 0 13.0481 0ZM21.0481 0C21.0481 0 19.0791 2.169 19.0791 3.25C19.0795 3.73225 19.2586 4.19724 19.5818 4.55516C19.905 4.91308 20.3494 5.13854 20.8291 5.188C20.5994 5.14015 20.3932 5.01456 20.2453 4.8324C20.0974 4.65024 20.0168 4.42265 20.0171 4.188C20.0171 3.625 21.0481 2.5 21.0481 2.5C21.0481 2.5 22.0791 3.624 22.0791 4.188C22.0791 4.681 21.7311 5.093 21.2671 5.188C21.7468 5.13854 22.1912 4.91308 22.5144 4.55516C22.8376 4.19724 23.0167 3.73225 23.0171 3.25C23.0171 2.17 21.0481 0 21.0481 0ZM3.0791 5.688C2.99773 5.67346 2.91415 5.67718 2.83439 5.69889C2.75464 5.72061 2.6807 5.75977 2.61793 5.81354C2.55515 5.86732 2.50511 5.93438 2.47142 6.00986C2.43773 6.08534 2.42122 6.16736 2.42311 6.25C2.42311 6.61 3.0791 7.261 3.0791 8.406L3.0791 13.969L7.0181 13.969L7.0181 8.313C7.0181 7.614 7.6741 7.361 7.6741 7C7.6741 6.64 7.6591 6.25 6.5491 6.25C4.8981 6.25 3.08011 5.687 3.08011 5.687L3.0791 5.688ZM11.0791 5.688C10.9977 5.67346 10.9141 5.67718 10.8344 5.69889C10.7546 5.72061 10.6807 5.75977 10.6179 5.81354C10.5552 5.86732 10.5051 5.93438 10.4714 6.00986C10.4377 6.08534 10.4212 6.16736 10.4231 6.25C10.4231 6.61 11.0791 7.261 11.0791 8.406L11.0791 13.969L15.0171 13.969L15.0171 8.313C15.0171 7.614 15.6731 7.361 15.6731 7C15.6731 6.64 15.6581 6.25 14.5481 6.25C12.8971 6.25 11.0791 5.687 11.0791 5.687L11.0791 5.688ZM19.0791 5.688C18.9977 5.67346 18.9142 5.67718 18.8344 5.69889C18.7546 5.72061 18.6807 5.75977 18.6179 5.81354C18.5552 5.86732 18.5051 5.93438 18.4714 6.00986C18.4377 6.08534 18.4212 6.16736 18.4231 6.25C18.4231 6.61 19.0791 7.261 19.0791 8.406L19.0791 13.969L23.0171 13.969L23.0171 8.313C23.0171 7.614 23.6731 7.361 23.6731 7C23.6731 6.64 23.6581 6.25 22.5481 6.25C20.8971 6.25 19.0791 5.687 19.0791 5.687L19.0791 5.688ZM4.0481 15C2.3921 15 1.04811 16.344 1.04811 18L1.04811 24C1.01679 23.9985 0.985421 23.9985 0.954105 24C0.822783 24.0062 0.693963 24.0381 0.574999 24.0941C0.456036 24.1501 0.349258 24.2289 0.260764 24.3261C0.082042 24.5225 -0.0113602 24.7818 0.001105 25.047C0.0135702 25.3122 0.130882 25.5616 0.327232 25.7403C0.523583 25.9191 0.782889 26.0125 1.04811 26L25.0481 26C25.3133 26 25.5677 25.8946 25.7552 25.7071C25.9427 25.5196 26.0481 25.2652 26.0481 25C26.0481 24.7348 25.9427 24.4804 25.7552 24.2929C25.5677 24.1054 25.3133 24 25.0481 24L25.0481 18C25.0481 16.344 23.7041 15 22.0481 15L4.0481 15ZM5.0481 19C5.0481 19.5304 5.25882 20.0391 5.63389 20.4142C6.00896 20.7893 6.51767 21 7.0481 21C7.57854 21 8.08725 20.7893 8.46232 20.4142C8.83739 20.0391 9.04811 19.5304 9.04811 19C9.04811 19.5304 9.25882 20.0391 9.63389 20.4142C10.009 20.7893 10.5177 21 11.0481 21C11.5785 21 12.0872 20.7893 12.4623 20.4142C12.8374 20.0391 13.0481 19.5304 13.0481 19C13.0481 19.5304 13.2588 20.0391 13.6339 20.4142C14.009 20.7893 14.5177 21 15.0481 21C15.5785 21 16.0872 20.7893 16.4623 20.4142C16.8374 20.0391 17.0481 19.5304 17.0481 19C17.0481 19.5304 17.2588 20.0391 17.6339 20.4142C18.009 20.7893 18.5177 21 19.0481 21C19.5785 21 20.0872 20.7893 20.4623 20.4142C20.8374 20.0391 21.0481 19.5304 21.0481 19C21.0481 19.5304 21.2588 20.0391 21.6339 20.4142C22.009 20.7893 22.5177 21 23.0481 21L23.0481 24L3.04811 24L3.04811 21C3.57854 21 4.08725 20.7893 4.46232 20.4142C4.83739 20.0391 5.0481 19.5304 5.0481 19Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="-0.19%"
              right="0%"
              {...getOverrideProps(overrides, "Vector15335")}
            ></Icon>
          </View>
          <View
            width="36px"
            height="36px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "clarity:date-line")}
          >
            <Icon
              width="32px"
              height="26px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 32.00051498413086,
                height: 26,
              }}
              paths={[
                {
                  d: "M30.2503 0L27.0003 0L27.0003 2L30.0003 2L30.0003 24L2.00026 24L2.00026 2L5.00026 2L5.00026 0L1.75026 0C1.51649 0.00390661 1.28579 0.0538262 1.07132 0.146908C0.856857 0.239989 0.662828 0.37441 0.500319 0.54249C0.33781 0.710571 0.210004 0.90902 0.124203 1.1265C0.0384012 1.34398 -0.00371596 1.57624 0.000257051 1.81L0.000257051 24.19C-0.00371596 24.4238 0.0384012 24.656 0.124203 24.8735C0.210004 25.091 0.33781 25.2894 0.500319 25.4575C0.662828 25.6256 0.856857 25.76 1.07132 25.8531C1.28579 25.9462 1.51649 25.9961 1.75026 26L30.2503 26C30.484 25.9961 30.7147 25.9462 30.9292 25.8531C31.1437 25.76 31.3377 25.6256 31.5002 25.4575C31.6627 25.2894 31.7905 25.091 31.8763 24.8735C31.9621 24.656 32.0042 24.4238 32.0003 24.19L32.0003 1.81C32.0042 1.57624 31.9621 1.34398 31.8763 1.1265C31.7905 0.90902 31.6627 0.710571 31.5002 0.54249C31.3377 0.37441 31.1437 0.239989 30.9292 0.146908C30.7147 0.0538262 30.484 0.00390661 30.2503 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="16.67%"
              bottom="11.11%"
              left="5.55%"
              right="5.55%"
              {...getOverrideProps(overrides, "Vector15315")}
            ></Icon>
            <Icon
              width="2px"
              height="2px"
              viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
              paths={[
                {
                  d: "M0 0L2 0L2 2L0 2L0 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="38.89%"
              bottom="55.56%"
              left="22.22%"
              right="72.22%"
              {...getOverrideProps(overrides, "Vector15316")}
            ></Icon>
            <Icon
              width="2px"
              height="2px"
              viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
              paths={[
                {
                  d: "M0 0L2 0L2 2L0 2L0 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="38.89%"
              bottom="55.56%"
              left="38.89%"
              right="55.56%"
              {...getOverrideProps(overrides, "Vector15317")}
            ></Icon>
            <Icon
              width="2px"
              height="2px"
              viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
              paths={[
                {
                  d: "M0 0L2 0L2 2L0 2L0 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="38.89%"
              bottom="55.56%"
              left="55.56%"
              right="38.89%"
              {...getOverrideProps(overrides, "Vector15318")}
            ></Icon>
            <Icon
              width="2px"
              height="2px"
              viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
              paths={[
                {
                  d: "M0 0L2 0L2 2L0 2L0 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="38.89%"
              bottom="55.56%"
              left="72.22%"
              right="22.22%"
              {...getOverrideProps(overrides, "Vector15319")}
            ></Icon>
            <Icon
              width="2px"
              height="2px"
              viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
              paths={[
                {
                  d: "M0 0L2 0L2 2L0 2L0 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="52.78%"
              bottom="41.67%"
              left="22.22%"
              right="72.22%"
              {...getOverrideProps(overrides, "Vector15320")}
            ></Icon>
            <Icon
              width="2px"
              height="2px"
              viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
              paths={[
                {
                  d: "M0 0L2 0L2 2L0 2L0 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="52.78%"
              bottom="41.67%"
              left="38.89%"
              right="55.56%"
              {...getOverrideProps(overrides, "Vector15321")}
            ></Icon>
            <Icon
              width="2px"
              height="2px"
              viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
              paths={[
                {
                  d: "M0 0L2 0L2 2L0 2L0 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="52.78%"
              bottom="41.67%"
              left="55.56%"
              right="38.89%"
              {...getOverrideProps(overrides, "Vector15322")}
            ></Icon>
            <Icon
              width="2px"
              height="2px"
              viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
              paths={[
                {
                  d: "M0 0L2 0L2 2L0 2L0 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="52.78%"
              bottom="41.67%"
              left="72.22%"
              right="22.22%"
              {...getOverrideProps(overrides, "Vector15323")}
            ></Icon>
            <Icon
              width="2px"
              height="2px"
              viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
              paths={[
                {
                  d: "M0 0L2 0L2 2L0 2L0 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="66.67%"
              bottom="27.78%"
              left="22.22%"
              right="72.22%"
              {...getOverrideProps(overrides, "Vector15324")}
            ></Icon>
            <Icon
              width="2px"
              height="2px"
              viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
              paths={[
                {
                  d: "M0 0L2 0L2 2L0 2L0 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="66.67%"
              bottom="27.78%"
              left="38.89%"
              right="55.56%"
              {...getOverrideProps(overrides, "Vector15325")}
            ></Icon>
            <Icon
              width="2px"
              height="2px"
              viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
              paths={[
                {
                  d: "M0 0L2 0L2 2L0 2L0 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="66.67%"
              bottom="27.78%"
              left="55.56%"
              right="38.89%"
              {...getOverrideProps(overrides, "Vector15326")}
            ></Icon>
            <Icon
              width="2px"
              height="2px"
              viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
              paths={[
                {
                  d: "M0 0L2 0L2 2L0 2L0 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="66.67%"
              bottom="27.78%"
              left="72.22%"
              right="22.22%"
              {...getOverrideProps(overrides, "Vector15327")}
            ></Icon>
            <Icon
              width="2px"
              height="8px"
              viewBox={{ minX: 0, minY: 0, width: 2, height: 8 }}
              paths={[
                {
                  d: "M1 8C1.26522 8 1.51957 7.89464 1.70711 7.70711C1.89464 7.51957 2 7.26522 2 7L2 1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 6.66134e-16 1 0C0.734784 6.66134e-16 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1L0 7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89464 0.734784 8 1 8Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="5.56%"
              bottom="72.22%"
              left="25%"
              right="69.44%"
              {...getOverrideProps(overrides, "Vector15328")}
            ></Icon>
            <Icon
              width="2px"
              height="8px"
              viewBox={{ minX: 0, minY: 0, width: 2, height: 8 }}
              paths={[
                {
                  d: "M1 8C1.26522 8 1.51957 7.89464 1.70711 7.70711C1.89464 7.51957 2 7.26522 2 7L2 1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 6.66134e-16 1 0C0.734784 6.66134e-16 0.480429 0.105357 0.292892 0.292893C0.105356 0.48043 0 0.734784 0 1L0 7C0 7.26522 0.105356 7.51957 0.292892 7.70711C0.480429 7.89464 0.734784 8 1 8Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="5.56%"
              bottom="72.22%"
              left="69.44%"
              right="25%"
              {...getOverrideProps(overrides, "Vector15329")}
            ></Icon>
            <Icon
              width="10px"
              height="2px"
              viewBox={{ minX: 0, minY: 0, width: 10, height: 2 }}
              paths={[
                {
                  d: "M0 0L10 0L10 2L0 2L0 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="16.67%"
              bottom="77.78%"
              left="36.11%"
              right="36.11%"
              {...getOverrideProps(overrides, "Vector15330")}
            ></Icon>
            <Icon
              width="36px"
              height="36px"
              viewBox={{ minX: 0, minY: 0, width: 36, height: 36 }}
              paths={[]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector15331")}
            ></Icon>
          </View>
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
        top="771px"
        left="100px"
        {...getOverrideProps(overrides, "shippingaddress")}
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
          top="0%"
          bottom="77.27%"
          left="0%"
          right="86.67%"
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
          top="40.91%"
          bottom="0%"
          left="0.19%"
          right="0%"
          border="1px SOLID rgba(209,213,219,1)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Time Zone Field")}
        ></View>
        <Text
          fontFamily="Montserrat"
          fontSize="18px"
          fontWeight="400"
          color="rgba(171,177,187,1)"
          fontStyle="italic"
          lineHeight="21.941999435424805px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="900px"
          height="35px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="54.55%"
          bottom="13.64%"
          left="6.67%"
          right="18.33%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={user?.shippingAddress}
          {...getOverrideProps(
            overrides,
            "eg. 12345 shipping st. San Jose, CA, 94231"
          )}
        ></Text>
        <View
          width="27.69px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="54.55%"
          bottom="18.18%"
          left="1.92%"
          right="95.77%"
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
              width: 23.076921463012695,
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
        top="68.89%"
        bottom="31.11%"
        left="7.14%"
        right="7.14%"
        {...getOverrideProps(overrides, "Vector 78")}
      ></Icon>
      <Flex
        gap="8px"
        direction="column"
        width="176px"
        height="56px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        bottom="97px"
        right="177px"
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
          {...getOverrideProps(overrides, "Text77287")}
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
        bottom="100px"
        left="150px"
        border="1px SOLID rgba(56,77,108,1)"
        borderRadius="8px"
        padding="7px 0px 7px 0px"
        backgroundColor="rgba(66,107,31,1)"
        onClick={() => {
          cancelButtonOnClick();
        }}
        {...getOverrideProps(overrides, "Cancel Button")}
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
      <View
        width="176px"
        height="56px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="97px"
        right="177px"
        border="3px SOLID rgba(56,77,108,1)"
        borderRadius="11px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(66,107,31,1)"
        {...getOverrideProps(overrides, "order history")}
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
          position="absolute"
          top="14.5px"
          left="36.5px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Order History"
          {...getOverrideProps(overrides, "Text1423")}
        ></Text>
      </View>
    </View>
  );
}
