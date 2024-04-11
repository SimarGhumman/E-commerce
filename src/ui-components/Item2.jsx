/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Item2(props) {
  const { tomato, overrides, ...rest } = props;
  return (
    <View
      width="395px"
      height="538px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="2px SOLID rgba(230,230,230,1)"
      borderRadius="24px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(250,250,245,1)"
      {...getOverrideProps(overrides, "Item2")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
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
        bottom="98px"
        left="24px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={tomato?.name}
        {...getOverrideProps(overrides, "Heirloom tomato")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="600"
        color="rgba(66,107,31,1)"
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
        bottom="68px"
        left="24px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={tomato?.price}
        {...getOverrideProps(overrides, "$5.99 / lb")}
      ></Text>
      <Image
        width="calc(100% - 0px)"
        height="calc(100% - 148px)"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        bottom="148px"
        left="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={tomato?.image}
        {...getOverrideProps(overrides, "ed-o-neil-AvvdZlhDowA-unsplash 1")}
      ></Image>
    </View>
  );
}
