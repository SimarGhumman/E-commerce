/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CheckoutOverridesProps = {
    Checkout?: PrimitiveOverrideProps<ViewProps>;
    "Shipping Address73188"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 973189"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1073190"?: PrimitiveOverrideProps<IconProps>;
    "Shipping Address73191"?: PrimitiveOverrideProps<TextProps>;
    Address73192?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1173193"?: PrimitiveOverrideProps<IconProps>;
    "Postal Code73194"?: PrimitiveOverrideProps<TextProps>;
    "Group 773195"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 973196"?: PrimitiveOverrideProps<IconProps>;
    City73197?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1073198"?: PrimitiveOverrideProps<IconProps>;
    Country73199?: PrimitiveOverrideProps<TextProps>;
    "Vector 673200"?: PrimitiveOverrideProps<IconProps>;
    "Billing Address73303"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 973304"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1073305"?: PrimitiveOverrideProps<IconProps>;
    "Billing Address73306"?: PrimitiveOverrideProps<TextProps>;
    Address73307?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1173308"?: PrimitiveOverrideProps<IconProps>;
    "Postal Code73309"?: PrimitiveOverrideProps<TextProps>;
    "Group 773310"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 973311"?: PrimitiveOverrideProps<IconProps>;
    City73312?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1073313"?: PrimitiveOverrideProps<IconProps>;
    Country73314?: PrimitiveOverrideProps<TextProps>;
    "Vector 673315"?: PrimitiveOverrideProps<IconProps>;
    "Payment Method"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 14"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 4"?: PrimitiveOverrideProps<IconProps>;
    "Group 10"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 973205"?: PrimitiveOverrideProps<IconProps>;
    "EXP Date"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1073207"?: PrimitiveOverrideProps<IconProps>;
    CVC?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<IconProps>;
    "Payment Methods"?: PrimitiveOverrideProps<TextProps>;
    "Cardholder Name"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 16"?: PrimitiveOverrideProps<IconProps>;
    "Card Number"?: PrimitiveOverrideProps<TextProps>;
    "Cash On Delivery"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 5"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 7"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 6"?: PrimitiveOverrideProps<IconProps>;
    "Credit or Debit"?: PrimitiveOverrideProps<TextProps>;
    "Vector 8"?: PrimitiveOverrideProps<IconProps>;
    "checkout item"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    Item?: PrimitiveOverrideProps<TextProps>;
    "Vector 4"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<IconProps>;
    "Vector 1"?: PrimitiveOverrideProps<IconProps>;
    "Vector 2"?: PrimitiveOverrideProps<IconProps>;
    "$40.0073249"?: PrimitiveOverrideProps<TextProps>;
    "$40.0073250"?: PrimitiveOverrideProps<TextProps>;
    Subtotal?: PrimitiveOverrideProps<TextProps>;
    "$80.00"?: PrimitiveOverrideProps<TextProps>;
    Discount?: PrimitiveOverrideProps<TextProps>;
    "$0.00"?: PrimitiveOverrideProps<TextProps>;
    Shipping?: PrimitiveOverrideProps<TextProps>;
    "$2.00"?: PrimitiveOverrideProps<TextProps>;
    Total?: PrimitiveOverrideProps<TextProps>;
    Checkout73262?: PrimitiveOverrideProps<TextProps>;
    "$82.00"?: PrimitiveOverrideProps<TextProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    item2?: PrimitiveOverrideProps<TextProps>;
    Remove73266?: PrimitiveOverrideProps<TextProps>;
    Group73267?: PrimitiveOverrideProps<ViewProps>;
    Vector73268?: PrimitiveOverrideProps<IconProps>;
    Vector73269?: PrimitiveOverrideProps<IconProps>;
    "Group 5"?: PrimitiveOverrideProps<ViewProps>;
    item?: PrimitiveOverrideProps<TextProps>;
    Remove73272?: PrimitiveOverrideProps<TextProps>;
    Group73273?: PrimitiveOverrideProps<ViewProps>;
    Vector73274?: PrimitiveOverrideProps<IconProps>;
    Vector73275?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type CheckoutProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CheckoutOverridesProps | undefined | null;
}>;
export default function Checkout(props: CheckoutProps): React.ReactElement;
