/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function HistoryHeading(props) {
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
      {...getOverrideProps(overrides, "HistoryHeading")}
      {...rest}
    >
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
        children="Purchased History"
        {...getOverrideProps(overrides, "Purchased History")}
      ></Text>
      <Icon
        width="1208px"
        height="0px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 1208,
          height: 0.00010560671410075884,
        }}
        paths={[
          {
            d: "M0 0L1208 0L1208 -2L0 -2L0 0Z",
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
        bottom="0px"
        left="96px"
        right="96px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Divider")}
      ></Icon>
    </View>
  );
}
