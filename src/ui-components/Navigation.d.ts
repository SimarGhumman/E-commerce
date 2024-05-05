/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type NavigationOverridesProps = {
    Navigation?: PrimitiveOverrideProps<FlexProps>;
    "E-commerce"?: PrimitiveOverrideProps<TextProps>;
    "Who we are"?: PrimitiveOverrideProps<TextProps>;
    "My profile"?: PrimitiveOverrideProps<TextProps>;
    Search116156?: PrimitiveOverrideProps<FlexProps>;
    Search116157?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    Shop?: PrimitiveOverrideProps<TextProps>;
    "Cart button"?: PrimitiveOverrideProps<FlexProps>;
    Basket?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavigationProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavigationOverridesProps | undefined | null;
}>;
export default function Navigation(props: NavigationProps): React.ReactElement;
