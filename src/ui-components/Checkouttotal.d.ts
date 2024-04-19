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
export declare type CheckouttotalOverridesProps = {
    Checkouttotal?: PrimitiveOverrideProps<ViewProps>;
    "Vector 1"?: PrimitiveOverrideProps<IconProps>;
    Subtotal?: PrimitiveOverrideProps<TextProps>;
    subtotal?: PrimitiveOverrideProps<TextProps>;
    Taxes?: PrimitiveOverrideProps<TextProps>;
    tax?: PrimitiveOverrideProps<TextProps>;
    Shipping?: PrimitiveOverrideProps<TextProps>;
    shipping?: PrimitiveOverrideProps<TextProps>;
    "Vector 2"?: PrimitiveOverrideProps<IconProps>;
    Total?: PrimitiveOverrideProps<TextProps>;
    total?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<IconProps>;
    Checkout?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CheckouttotalProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CheckouttotalOverridesProps | undefined | null;
}>;
export default function Checkouttotal(props: CheckouttotalProps): React.ReactElement;
