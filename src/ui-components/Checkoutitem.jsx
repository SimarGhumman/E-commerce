/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Checkoutitem(props) {
  const { inventory, overrides, ...rest } = props;
  return (
    <Flex
      gap="174px"
      direction="row"
      width="470px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="25px"
      padding="15px 23px 15px 23px"
      backgroundColor="rgba(223,222,222,1)"
      {...getOverrideProps(overrides, "Checkoutitem")}
      {...rest}
    >
      <Text
        fontFamily="Lato"
        fontSize="20px"
        fontWeight="700"
        color="rgba(66,107,31,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="200px"
        height="24px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="item1"
        {...getOverrideProps(overrides, "item")}
      ></Text>
      <Text
        fontFamily="Lato"
        fontSize="20px"
        fontWeight="700"
        color="rgba(66,107,31,1)"
        lineHeight="24px"
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
        children="price"
        {...getOverrideProps(overrides, "price")}
      ></Text>
    </Flex>
  );
}
