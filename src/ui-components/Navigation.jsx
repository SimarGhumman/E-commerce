/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Navigation(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="112px"
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
        top="41px"
        left="96px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="E-commerce"
        {...getOverrideProps(overrides, "E-commerce")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="20.799999237060547px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="45.5px"
        right="394px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Who we are"
        {...getOverrideProps(overrides, "Who we are")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="20.799999237060547px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="45.5px"
        right="270px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="My profile"
        {...getOverrideProps(overrides, "My profile")}
      ></Text>
      <View
        width="126px"
        height="48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="32px"
        right="96px"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
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
          position="absolute"
          top="calc(50% - 10.5px - 0px)"
          left="calc(50% - 40px - 0px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Basket (3)"
          {...getOverrideProps(overrides, "Basket (3)")}
        ></Text>
      </View>
    </View>
  );
}
