/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
    Checkout?: PrimitiveOverrideProps<FlexProps>;
    "Billing Address73303"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 973304"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1073305"?: PrimitiveOverrideProps<IconProps>;
    "Billing Address73306"?: PrimitiveOverrideProps<TextProps>;
    Address73307?: PrimitiveOverrideProps<TextProps>;
    "Vector 673315"?: PrimitiveOverrideProps<IconProps>;
    "Shipping Address73188"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 973189"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1073190"?: PrimitiveOverrideProps<IconProps>;
    "Shipping Address73191"?: PrimitiveOverrideProps<TextProps>;
    Address73192?: PrimitiveOverrideProps<TextProps>;
    "Vector 673200"?: PrimitiveOverrideProps<IconProps>;
    "Payment Method"?: PrimitiveOverrideProps<FlexProps>;
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
} & EscapeHatchProps;
export declare type CheckoutProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CheckoutOverridesProps | undefined | null;
}>;
export default function Checkout(props: CheckoutProps): React.ReactElement;
