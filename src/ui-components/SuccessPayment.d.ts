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
    "Rectangle 18"?: PrimitiveOverrideProps<ViewProps>;
    "Vector 5"?: PrimitiveOverrideProps<IconProps>;
    "Vector 6"?: PrimitiveOverrideProps<IconProps>;
    "Payment Successful!"?: PrimitiveOverrideProps<TextProps>;
    "$2.664.007464"?: PrimitiveOverrideProps<TextProps>;
    "Ref Number"?: PrimitiveOverrideProps<TextProps>;
    "00007567362"?: PrimitiveOverrideProps<TextProps>;
    "Payment Time"?: PrimitiveOverrideProps<TextProps>;
    "09 -04-2023, 02.21 AM"?: PrimitiveOverrideProps<TextProps>;
    "Payment Methode"?: PrimitiveOverrideProps<TextProps>;
    "Credit Card"?: PrimitiveOverrideProps<TextProps>;
    "Sender Name"?: PrimitiveOverrideProps<TextProps>;
    "Thank you for your payments!"?: PrimitiveOverrideProps<TextProps>;
    "your name"?: PrimitiveOverrideProps<TextProps>;
    "Total Payment + Taxes"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 13"?: PrimitiveOverrideProps<IconProps>;
    "$2.664.007476"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 14"?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<IconProps>;
    "Back To Merchants"?: PrimitiveOverrideProps<TextProps>;
    "belanja 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type SuccessPaymentProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SuccessPaymentOverridesProps | undefined | null;
}>;
export default function SuccessPayment(props: SuccessPaymentProps): React.ReactElement;
