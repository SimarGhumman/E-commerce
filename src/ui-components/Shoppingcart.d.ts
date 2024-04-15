/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ShoppingcartOverridesProps = {
    Shoppingcart?: PrimitiveOverrideProps<ViewProps>;
    Tomato?: PrimitiveOverrideProps<ViewProps>;
    "Heirloom tomato"?: PrimitiveOverrideProps<TextProps>;
    "$5.99"?: PrimitiveOverrideProps<TextProps>;
    "$5.99 / lb"?: PrimitiveOverrideProps<TextProps>;
    "Input field5645"?: PrimitiveOverrideProps<ViewProps>;
    "1 lb"?: PrimitiveOverrideProps<TextProps>;
    Icon5647?: PrimitiveOverrideProps<ViewProps>;
    Union5648?: PrimitiveOverrideProps<IconProps>;
    Union5649?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 45650"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 55651"?: PrimitiveOverrideProps<IconProps>;
    Vector5652?: PrimitiveOverrideProps<IconProps>;
    "ed-o-neil-AvvdZlhDowA-unsplash 1"?: PrimitiveOverrideProps<ImageProps>;
    Ginger?: PrimitiveOverrideProps<ViewProps>;
    "Organic ginger"?: PrimitiveOverrideProps<TextProps>;
    "$12.99 / lb"?: PrimitiveOverrideProps<TextProps>;
    "Input field5657"?: PrimitiveOverrideProps<ViewProps>;
    "0.5 lb"?: PrimitiveOverrideProps<TextProps>;
    Icon5659?: PrimitiveOverrideProps<ViewProps>;
    Union5660?: PrimitiveOverrideProps<IconProps>;
    Union5661?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 45662"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 55663"?: PrimitiveOverrideProps<IconProps>;
    Vector5664?: PrimitiveOverrideProps<IconProps>;
    "$6.50"?: PrimitiveOverrideProps<TextProps>;
    "noonbrew-ziCb4_EKmak-unsplash"?: PrimitiveOverrideProps<ImageProps>;
    Onion?: PrimitiveOverrideProps<ViewProps>;
    "Sweet onion"?: PrimitiveOverrideProps<TextProps>;
    "$2.99 / lb"?: PrimitiveOverrideProps<TextProps>;
    "Input field5670"?: PrimitiveOverrideProps<ViewProps>;
    "5 lb"?: PrimitiveOverrideProps<TextProps>;
    Icon5672?: PrimitiveOverrideProps<ViewProps>;
    Union5673?: PrimitiveOverrideProps<IconProps>;
    Union5674?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 45675"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 55676"?: PrimitiveOverrideProps<IconProps>;
    Vector5677?: PrimitiveOverrideProps<IconProps>;
    "$14.95"?: PrimitiveOverrideProps<TextProps>;
    "k8-0_fkPHulv-M-unsplash 2"?: PrimitiveOverrideProps<ImageProps>;
    Summary?: PrimitiveOverrideProps<ViewProps>;
    "Order summary"?: PrimitiveOverrideProps<TextProps>;
    Subtotal?: PrimitiveOverrideProps<TextProps>;
    "$27.44"?: PrimitiveOverrideProps<TextProps>;
    Shipping?: PrimitiveOverrideProps<TextProps>;
    "$3.99"?: PrimitiveOverrideProps<TextProps>;
    Tax?: PrimitiveOverrideProps<TextProps>;
    "$2.00"?: PrimitiveOverrideProps<TextProps>;
    Total?: PrimitiveOverrideProps<TextProps>;
    "$33.43"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ViewProps>;
    "Continue to payment"?: PrimitiveOverrideProps<TextProps>;
    Icon5692?: PrimitiveOverrideProps<ViewProps>;
    "Vector 88"?: PrimitiveOverrideProps<IconProps>;
    "Page heading"?: PrimitiveOverrideProps<ViewProps>;
    "3 items"?: PrimitiveOverrideProps<TextProps>;
    Basket?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<IconProps>;
    "Frame 1"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ShoppingcartProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ShoppingcartOverridesProps | undefined | null;
}>;
export default function Shoppingcart(props: ShoppingcartProps): React.ReactElement;
