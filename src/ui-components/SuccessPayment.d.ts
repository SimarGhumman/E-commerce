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
export declare type SuccessPaymentOverridesProps = {
    SuccessPayment?: PrimitiveOverrideProps<ViewProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 18"?: PrimitiveOverrideProps<ViewProps>;
    "Vector 5"?: PrimitiveOverrideProps<IconProps>;
    "Vector 6"?: PrimitiveOverrideProps<IconProps>;
    "Payment Successful!"?: PrimitiveOverrideProps<TextProps>;
    total7464?: PrimitiveOverrideProps<TextProps>;
    "Ref Number"?: PrimitiveOverrideProps<TextProps>;
    refnumber?: PrimitiveOverrideProps<TextProps>;
    "Payment Time"?: PrimitiveOverrideProps<TextProps>;
    time?: PrimitiveOverrideProps<TextProps>;
    "Payment Methode"?: PrimitiveOverrideProps<TextProps>;
    "Credit Card"?: PrimitiveOverrideProps<TextProps>;
    "Sender Name"?: PrimitiveOverrideProps<TextProps>;
    "your name"?: PrimitiveOverrideProps<TextProps>;
    "Total Payment + Taxes"?: PrimitiveOverrideProps<TextProps>;
    total7476?: PrimitiveOverrideProps<TextProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 14"?: PrimitiveOverrideProps<IconProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 13"?: PrimitiveOverrideProps<IconProps>;
    "Thank you for your payments!"?: PrimitiveOverrideProps<TextProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<IconProps>;
    "Back To Merchants"?: PrimitiveOverrideProps<TextProps>;
    "belanja 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type SuccessPaymentProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SuccessPaymentOverridesProps | undefined | null;
}>;
export default function SuccessPayment(props: SuccessPaymentProps): React.ReactElement;
