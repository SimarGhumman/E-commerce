/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Navigation(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1400px"
      height="103px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Navigation")}
      {...rest}
    >
      <Text
        fontFamily="Newsreader"
        fontSize="32px"
        fontWeight="500"
        color="rgba(66,107,31,1)"
        lineHeight="32px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.17px"
        width="221px"
        height="39px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="32px"
        left="22px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="E-commerce"
        {...getOverrideProps(overrides, "E-commerce")}
      ></Text>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="32px"
        right="964px"
        borderRadius="8px"
        padding="9px 13px 9px 13px"
        backgroundColor="rgba(66,107,31,1)"
        {...getOverrideProps(overrides, "whoweare")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="20.799999237060547px"
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
          children="Who we are"
          {...getOverrideProps(overrides, "Who we are")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="32px"
        right="751px"
        borderRadius="8px"
        padding="9px 18px 9px 18px"
        backgroundColor="rgba(66,107,31,1)"
        {...getOverrideProps(overrides, "myprofile")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="20.799999237060547px"
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
          children="My profile"
          {...getOverrideProps(overrides, "My profile")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="32px"
        right="517px"
        borderRadius="8px"
        padding="9px 39px 9px 39px"
        backgroundColor="rgba(66,107,31,1)"
        {...getOverrideProps(overrides, "Search116156")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="20.799999237060547px"
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
          children="Search"
          {...getOverrideProps(overrides, "Search116157")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="32px"
        right="298px"
        borderRadius="8px"
        padding="9px 39px 9px 39px"
        backgroundColor="rgba(66,107,31,1)"
        {...getOverrideProps(overrides, "Button")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="20.799999237060547px"
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
          children="Shop"
          {...getOverrideProps(overrides, "Shop")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="32px"
        right="78px"
        borderRadius="8px"
        padding="9px 33px 9px 33px"
        backgroundColor="rgba(66,107,31,1)"
        {...getOverrideProps(overrides, "Cart button")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="20.799999237060547px"
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
          children="Basket "
          {...getOverrideProps(overrides, "Basket")}
        ></Text>
      </Flex>
    </View>
  );
}
