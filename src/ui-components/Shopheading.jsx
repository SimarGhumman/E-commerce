/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Shopheading(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1400px"
      height="149px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Shopheading")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
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
        bottom="33px"
        left="347px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Fresh  —  August 21, 2023"
        {...getOverrideProps(overrides, "Fresh \u2014 August 21, 2023")}
      ></Text>
      <Text
        fontFamily="Newsreader"
        fontSize="64px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="76.80000305175781px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-1.13px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="16px"
        left="96px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Produce"
        {...getOverrideProps(overrides, "Produce")}
      ></Text>
      <Icon
        width="1248px"
        height="0px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 1248,
          height: 0.00010910362516369787,
        }}
        paths={[
          {
            d: "M0 0L1248 0L1248 -2L0 -2L0 0Z",
            stroke: "rgba(230,230,230,1)",
            fillRule: "nonzero",
            strokeWidth: 2,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="100%"
        bottom="0%"
        left="6.86%"
        right="4%"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Divider")}
      ></Icon>
    </View>
  );
}
