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
export declare type ItemcheckoutOverridesProps = {
    Itemcheckout?: PrimitiveOverrideProps<ViewProps>;
    itemName?: PrimitiveOverrideProps<TextProps>;
    price?: PrimitiveOverrideProps<TextProps>;
    unitprice?: PrimitiveOverrideProps<TextProps>;
    "Input field"?: PrimitiveOverrideProps<ViewProps>;
    Qty?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Union11628?: PrimitiveOverrideProps<IconProps>;
    Union11629?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<IconProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "ed-o-neil-AvvdZlhDowA-unsplash 1"?: PrimitiveOverrideProps<ImageProps>;
    $?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ItemcheckoutProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ItemcheckoutOverridesProps | undefined | null;
}>;
export default function Itemcheckout(props: ItemcheckoutProps): React.ReactElement;
