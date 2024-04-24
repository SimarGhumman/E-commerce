/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Signout(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="170px"
      height="50px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(56,77,108,1)"
      borderRadius="8px"
      padding="7px 0px 7px 0px"
      backgroundColor="rgba(66,107,31,1)"
      {...getOverrideProps(overrides, "Signout")}
      {...rest}
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
  );
}