/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Updatecart(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="136px"
      height="46px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(66,107,31,1)"
      {...getOverrideProps(overrides, "Updatecart")}
      {...rest}
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
        left="calc(50% - 45px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="update cart"
        {...getOverrideProps(overrides, "updatecart")}
      ></Text>
    </View>
  );
}
