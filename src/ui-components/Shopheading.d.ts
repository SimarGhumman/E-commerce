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
export declare type ShopheadingOverridesProps = {
    Shopheading?: PrimitiveOverrideProps<ViewProps>;
    "Fresh \u2014 August 21, 2023"?: PrimitiveOverrideProps<TextProps>;
    Produce?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ShopheadingProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ShopheadingOverridesProps | undefined | null;
}>;
export default function Shopheading(props: ShopheadingProps): React.ReactElement;
