/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function Checkoutheader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="15px"
      direction="column"
      width="470px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="25px"
      padding="9px 23px 9px 23px"
      backgroundColor="rgba(223,222,222,1)"
      {...getOverrideProps(overrides, "Checkoutheader")}
      {...rest}
    >
      <Text
        fontFamily="Lato"
        fontSize="30px"
        fontWeight="700"
        color="rgba(66,107,31,1)"
        lineHeight="36px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="80px"
        height="36px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Items"
        {...getOverrideProps(overrides, "Items")}
      ></Text>
      <Icon
        width="420px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 420, height: 1 }}
        paths={[
          {
            d: "M0 0.5L420 0.5L420 -0.5L0 -0.5L0 0.5Z",
            stroke: "rgba(66,107,31,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Vector 4")}
      ></Icon>
    </Flex>
  );
}
