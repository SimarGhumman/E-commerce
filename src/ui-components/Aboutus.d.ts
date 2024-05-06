/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AboutusOverridesProps = {
    Aboutus?: PrimitiveOverrideProps<ViewProps>;
    "CS218 Project Team Members: Brian Tran, Han Qiu, Simar Ghumman"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ViewProps>;
    "Browse our shop"?: PrimitiveOverrideProps<TextProps>;
    "WHAT WE BELIEVE"?: PrimitiveOverrideProps<TextProps>;
    "At E-Commerce , we take pride in delivering the finest selection of fruits straight to your table. Our produce is sourced from local farms known for their dedication to quality and sustainability. From the crisp sweetness of apples to the tropical juiciness of mangoes, each fruit is carefully selected to ensure freshness and flavor.\u2028\u2028We believe in supporting our local communities and farmers, which is why we prioritize sourcing from nearby growers. By choosing E-Commerce, you're not only enjoying delicious fruits but also contributing to the livelihoods of hardworking farmers.\u2028\u2028With a wide range of options including bananas, oranges, grapes, and more, our goal is to provide you with the freshest and most flavorful fruits for you and your family to enjoy. Experience the difference with E-Commerce \u2013 where quality meets taste."?: PrimitiveOverrideProps<TextProps>;
    "jonathan-kemper-1HHrdIoLFpU-unsplash 1"?: PrimitiveOverrideProps<ImageProps>;
    "Central California \u2014 The person who grew these was located in Central California and, er, hopefully very well-compensated."?: PrimitiveOverrideProps<TextProps>;
    "Stocksy_txp226f62b2aNe300_Medium_4582193 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type AboutusProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AboutusOverridesProps | undefined | null;
}>;
export default function Aboutus(props: AboutusProps): React.ReactElement;
