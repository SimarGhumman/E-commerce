/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Itemhistory(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="850px"
      height="200px"
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
      {...getOverrideProps(overrides, "Itemhistory")}
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
        top="24px"
        left="230px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="itemName"
        {...getOverrideProps(overrides, "itemName")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="26px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="40px"
        right="31px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="price"
        {...getOverrideProps(overrides, "price")}
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
        top="54px"
        left="250px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="unitprice"
        {...getOverrideProps(overrides, "unitprice")}
      ></Text>
      <View
        width="128px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        bottom="75px"
        left="230px"
        border="2px SOLID rgba(0,0,0,0.06)"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Input field")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="20.799999237060547px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 10.5px - 0px)"
          left="25px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Qty"
          {...getOverrideProps(overrides, "Qty")}
        ></Text>
        <View
          width="32px"
          height="32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 16px - 0px)"
          right="8px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Icon")}
        >
          <Icon
            width="16.5px"
            height="16.5px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 16.495689392089844,
              height: 16.495689392089844,
            }}
            paths={[
              {
                d: "M12.3744 1.29289C12.7649 0.902369 13.3981 0.902369 13.7886 1.29289L15.2028 2.70711C15.5933 3.09763 15.5933 3.7308 15.2028 4.12132L13.7886 5.53556L10.9602 2.70718L10.2531 3.41429L13.0814 6.24267L4.81029 14.5138L1.27476 15.2209L1.98186 11.6854L12.3744 1.29289ZM1.0623 16.2832L5.3033 15.435L15.9099 4.82843C16.691 4.04738 16.691 2.78105 15.9099 2L14.4957 0.585786C13.7146 -0.195262 12.4483 -0.195262 11.6673 0.585786L1.06066 11.1924L0.212459 15.4334L0 16.4957L1.0623 16.2832Z",
                fill: "rgba(109,109,109,1)",
                fillRule: "evenodd",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="7.86px"
            left="8.4px"
            {...getOverrideProps(overrides, "Union133152")}
          >
            <Icon
              width="6px"
              height="21.5px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 19.445436149835587,
                height: 19.445436149835587,
              }}
              paths={[
                {
                  d: "M0 17L-1 17L-1 17.3028L-0.83205 17.5547L0 17ZM3 21.5L2.16795 22.0547L3 23.3028L3.83205 22.0547L3 21.5ZM6 17L6.83205 17.5547L7 17.3028L7 17L6 17ZM1 2C1 1.44772 1.44772 1 2 1L2 -1C0.343146 -1 -1 0.343146 -1 2L1 2ZM1 17L1 2L-1 2L-1 17L1 17ZM3.83205 20.9453L0.83205 16.4453L-0.83205 17.5547L2.16795 22.0547L3.83205 20.9453ZM5.16795 16.4453L2.16795 20.9453L3.83205 22.0547L6.83205 17.5547L5.16795 16.4453ZM5 2L5 17L7 17L7 2L5 2ZM4 1C4.55228 1 5 1.44772 5 2L7 2C7 0.343146 5.65685 -1 4 -1L4 1ZM2 1L4 1L4 -1L2 -1L2 1Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="-0.83px"
              left="13.08px"
              transformOrigin="top left"
              transform="rotate(45deg)"
              {...getOverrideProps(overrides, "Union133153")}
            >
              <Icon
                width="6px"
                height="17px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 16.2634556889534,
                  height: 16.2634556889534,
                }}
                paths={[
                  {
                    d: "M0 2C0 0.89543 0.895431 0 2 0L4 0C5.10457 0 6 0.895431 6 2L6 17L0 17L0 2Z",
                    fill: "rgba(255,0,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0px"
                left="0px"
                {...getOverrideProps(overrides, "Rectangle 4")}
              ></Icon>
              <Icon
                width="6px"
                height="4.5px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 7.424621075391769,
                  height: 7.424621075391769,
                }}
                paths={[
                  {
                    d: "M0 0L6 0L3 4.5L0 0Z",
                    fill: "rgba(255,0,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="17px"
                left="0px"
                {...getOverrideProps(overrides, "Rectangle 5")}
              ></Icon>
            </Icon>
            <Icon
              width="4px"
              height="0px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 2.8284270763397217,
                height: 2.8284270763397217,
              }}
              paths={[
                {
                  d: "M0 0.5L4 0.5L4 -0.5L0 -0.5L0 0.5Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="3.06px"
              left="10.61px"
              transformOrigin="top left"
              transform="rotate(45deg)"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </Icon>
        </View>
      </View>
      <Image
        width="201px"
        height="calc(100% - -1px)"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        bottom="-1px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "ed-o-neil-AvvdZlhDowA-unsplash 1")}
      ></Image>
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
        width="26px"
        height="18px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="54px"
        left="230px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="$"
        {...getOverrideProps(overrides, "$")}
      ></Text>
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
        width="248px"
        height="39px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="135px"
        left="230px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Refnumber"
        {...getOverrideProps(overrides, "Refnumber")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="26px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="206px"
        height="46px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="100px"
        left="613px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Time Purchased"
        {...getOverrideProps(overrides, "Time Purchased")}
      ></Text>
    </View>
  );
}
