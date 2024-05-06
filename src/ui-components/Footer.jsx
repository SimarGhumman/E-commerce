/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Footer(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1400px"
      height="200px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Footer")}
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
        width="220px"
        height="40px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="30px"
        left="100px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="E-commerce"
        {...getOverrideProps(overrides, "E-commerce")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="15px"
        fontWeight="500"
        color="rgba(30,30,30,1)"
        lineHeight="22.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.02px"
        width="233px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="80px"
        left="130px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="123 A Street, City, State 12345"
        {...getOverrideProps(overrides, "123 A Street, City, State 12345")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="15px"
        fontWeight="500"
        color="rgba(30,30,30,1)"
        lineHeight="22.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.02px"
        width="500px"
        height="28px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="160px"
        left="100px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="© 2024 ALL RIGHTS RESERVED."
        {...getOverrideProps(overrides, "\u00A9 2024 ALL RIGHTS RESERVED.")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="500"
        color="rgba(30,30,30,1)"
        fontStyle="italic"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.03px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="16px"
        right="132px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Check us on:"
        {...getOverrideProps(overrides, "Check us on:")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="15px"
        fontWeight="500"
        color="rgba(30,30,30,1)"
        lineHeight="22.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.02px"
        width="122px"
        height="33px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="120px"
        left="130px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="(408) xxx - xxxx"
        {...getOverrideProps(overrides, "(408) xxx - xxxx")}
      ></Text>
      <Icon
        width="30px"
        height="30px"
        viewBox={{ minX: 0, minY: 0, width: 30, height: 30 }}
        paths={[
          {
            d: "M14.9992 4.03267e-07C11.4376 -0.000468999 7.99206 1.29908 5.27932 3.66605C2.56658 6.03302 0.763748 9.31289 0.193504 12.9186C-0.376741 16.5243 0.322833 20.2204 2.16701 23.3455C4.01118 26.4705 6.87957 28.8204 10.2588 29.9745C11.0105 30.1133 11.2796 29.6399 11.2796 29.2328C11.2796 28.8674 11.2676 27.899 11.2631 26.6115C7.0909 27.5366 6.20986 24.5483 6.20986 24.5483C5.9352 23.6184 5.34472 22.8202 4.5455 22.2985C3.19236 21.3441 4.64924 21.3657 4.64924 21.3657C5.61147 21.5013 6.46094 22.0858 6.94507 22.9508C7.14823 23.3297 7.42253 23.6635 7.75213 23.9331C8.08174 24.2027 8.46013 24.4027 8.86548 24.5215C9.27082 24.6403 9.6951 24.6757 10.1138 24.6255C10.5326 24.5753 10.9375 24.4406 11.3052 24.2291C11.3743 23.4489 11.7141 22.7195 12.2599 22.1721C8.93117 21.7851 5.43105 20.4651 5.43105 14.5702C5.41258 13.0454 5.96464 11.5715 6.97363 10.4515C6.5171 9.12436 6.57086 7.66865 7.12398 6.38071C7.12398 6.38071 8.3824 5.96591 11.2465 7.95507C13.703 7.26427 16.2955 7.26427 18.752 7.95507C21.6176 5.96437 22.8745 6.38071 22.8745 6.38071C23.4308 7.66826 23.4834 9.12543 23.0249 10.4515C24.0375 11.5714 24.5892 13.0492 24.5644 14.5763C24.5644 20.4867 21.0613 21.7851 17.7206 22.1659C18.4422 22.9215 18.8106 23.9577 18.7354 25.0124C18.7354 27.0694 18.7174 28.7286 18.7174 29.2328C18.7174 29.6445 18.985 30.1225 19.7503 29.9714C23.1281 28.8153 25.9946 26.4642 27.8369 23.3389C29.6792 20.2135 30.377 16.5178 29.8056 12.913C29.2342 9.30823 27.4308 6.02958 24.718 3.66372C22.0053 1.29786 18.5602 -0.000835499 14.9992 4.03267e-07L14.9992 4.03267e-07Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        bottom="15px"
        right="70px"
        {...getOverrideProps(overrides, "Vector83989")}
      ></Icon>
      <Icon
        width="20px"
        height="20px"
        viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
        paths={[
          {
            d: "M17.0711 14.8771L15.7079 16.052C14.7031 16.9114 13.3995 18.0163 11.7963 19.367C10.7946 20.2111 9.20539 20.211 8.20382 19.3668L4.19438 15.9679C3.69048 15.5368 3.26869 15.1732 2.92893 14.8771C-0.976309 11.4738 -0.976309 5.95584 2.92893 2.5525C6.83416 -0.850834 13.1659 -0.850834 17.0711 2.5525C20.9763 5.95584 20.9763 11.4738 17.0711 14.8771ZM12.8714 8.98975C12.8714 7.60771 11.5858 6.48736 10 6.48736C8.41422 6.48736 7.12861 7.60771 7.12861 8.98975C7.12861 10.3717 8.41422 11.4921 10 11.4921C11.5858 11.4921 12.8714 10.3717 12.8714 8.98975Z",
            fill: "rgba(171,177,187,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="80px"
        left="100px"
        {...getOverrideProps(overrides, "Vector83999")}
      ></Icon>
      <View
        width="30px"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="115px"
        left="95px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Phone")}
      >
        <Icon
          width="15px"
          height="25px"
          viewBox={{ minX: 0, minY: 0, width: 15, height: 25 }}
          paths={[
            {
              d: "M12.1875 0C13.7408 0 15 1.2592 15 2.8125L15 22.1875C15 23.7407 13.7408 25 12.1875 25L2.8125 25C1.2592 25 0 23.7407 0 22.1875L0 2.8125C0 1.2592 1.2592 0 2.8125 0L12.1875 0ZM9.0625 20L5.9375 20C5.41975 20 5 20.4198 5 20.9375C5 21.4552 5.41975 21.875 5.9375 21.875L9.0625 21.875C9.58025 21.875 10 21.4552 10 20.9375C10 20.4198 9.58025 20 9.0625 20Z",
              fill: "rgba(171,177,187,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="8.33%"
          bottom="8.33%"
          left="25%"
          right="25%"
          {...getOverrideProps(overrides, "Vector831001")}
        ></Icon>
      </View>
    </View>
  );
}
