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
    "Input field4368321129"?: PrimitiveOverrideProps<ViewProps>;
    "1 lb"?: PrimitiveOverrideProps<TextProps>;
    Icon4368321131?: PrimitiveOverrideProps<ViewProps>;
    Union4368321132?: PrimitiveOverrideProps<IconProps>;
    Union4368321133?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 44368321134"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 54368321135"?: PrimitiveOverrideProps<IconProps>;
    Vector4368321136?: PrimitiveOverrideProps<IconProps>;
    "ed-o-neil-AvvdZlhDowA-unsplash 1"?: PrimitiveOverrideProps<ImageProps>;
    Ginger?: PrimitiveOverrideProps<ViewProps>;
    "Organic ginger"?: PrimitiveOverrideProps<TextProps>;
    "$12.99 / lb"?: PrimitiveOverrideProps<TextProps>;
    "Input field4368321140"?: PrimitiveOverrideProps<ViewProps>;
    "0.5 lb"?: PrimitiveOverrideProps<TextProps>;
    Icon4368321142?: PrimitiveOverrideProps<ViewProps>;
    Union4368321143?: PrimitiveOverrideProps<IconProps>;
    Union4368321144?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 44368321145"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 54368321146"?: PrimitiveOverrideProps<IconProps>;
    Vector4368321147?: PrimitiveOverrideProps<IconProps>;
    "$6.50"?: PrimitiveOverrideProps<TextProps>;
    "noonbrew-ziCb4_EKmak-unsplash"?: PrimitiveOverrideProps<ImageProps>;
    Onion?: PrimitiveOverrideProps<ViewProps>;
    "Sweet onion"?: PrimitiveOverrideProps<TextProps>;
    "$2.99 / lb"?: PrimitiveOverrideProps<TextProps>;
    "Input field4368321153"?: PrimitiveOverrideProps<ViewProps>;
    "5 lb"?: PrimitiveOverrideProps<TextProps>;
    Icon4368321155?: PrimitiveOverrideProps<ViewProps>;
    Union4368321156?: PrimitiveOverrideProps<IconProps>;
    Union4368321157?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 44368321158"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 54368321159"?: PrimitiveOverrideProps<IconProps>;
    Vector4368321160?: PrimitiveOverrideProps<IconProps>;
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
    Icon4368321175?: PrimitiveOverrideProps<ViewProps>;
    "Vector 88"?: PrimitiveOverrideProps<IconProps>;
    "Page heading"?: PrimitiveOverrideProps<ViewProps>;
    "3 items"?: PrimitiveOverrideProps<TextProps>;
    Basket?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<IconProps>;
    "Frame 1"?: PrimitiveOverrideProps<ViewProps>;
    Navigation?: PrimitiveOverrideProps<ViewProps>;
    "World Peas"?: PrimitiveOverrideProps<TextProps>;
    Shop?: PrimitiveOverrideProps<TextProps>;
    Newstand?: PrimitiveOverrideProps<TextProps>;
    "Who we are"?: PrimitiveOverrideProps<TextProps>;
    "My profile"?: PrimitiveOverrideProps<TextProps>;
    "Cart button"?: PrimitiveOverrideProps<ViewProps>;
    "Basket (3)"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ShoppingcartProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ShoppingcartOverridesProps | undefined | null;
}>;
export default function Shoppingcart(props: ShoppingcartProps): React.ReactElement;
