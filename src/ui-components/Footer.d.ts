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
export declare type FooterOverridesProps = {
    Footer?: PrimitiveOverrideProps<ViewProps>;
    "E-commerce"?: PrimitiveOverrideProps<TextProps>;
    "123 A Street, City, State 12345"?: PrimitiveOverrideProps<TextProps>;
    "\u00A9 2024 ALL RIGHTS RESERVED."?: PrimitiveOverrideProps<TextProps>;
    "Check us on:"?: PrimitiveOverrideProps<TextProps>;
    "(408) xxx - xxxx"?: PrimitiveOverrideProps<TextProps>;
    Vector83989?: PrimitiveOverrideProps<IconProps>;
    Vector83999?: PrimitiveOverrideProps<IconProps>;
    Phone?: PrimitiveOverrideProps<ViewProps>;
    Vector831001?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type FooterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FooterOverridesProps | undefined | null;
}>;
export default function Footer(props: FooterProps): React.ReactElement;
