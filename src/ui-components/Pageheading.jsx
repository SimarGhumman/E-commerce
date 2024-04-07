/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Pageheading(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="149px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Pageheading")}
      {...rest}
    >
      <View
        width="88px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        bottom="33px"
        right="275px"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(66,107,31,1)"
        {...getOverrideProps(overrides, "Default chip")}
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
          left="calc(50% - 28px - 0px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Default"
          {...getOverrideProps(overrides, "Default")}
        ></Text>
      </View>
      <View
        width="62px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        bottom="33px"
        right="205px"
        border="1px SOLID rgba(194,194,194,1)"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "A-Z chip")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
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
          top="calc(50% - 10.5px - 0px)"
          left="calc(50% - 15px - 0px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="A-Z"
          {...getOverrideProps(overrides, "A-Z")}
        ></Text>
      </View>
      <View
        width="101px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        bottom="33px"
        right="96px"
        border="1px SOLID rgba(194,194,194,1)"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "List chip")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
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
          top="calc(50% - 10.5px - 0px)"
          left="calc(50% - 34.5px - 0px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="List view"
          {...getOverrideProps(overrides, "List view")}
        ></Text>
      </View>
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
