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
export declare type SearchOverridesProps = {
    Search?: PrimitiveOverrideProps<ViewProps>;
    "Vector 5"?: PrimitiveOverrideProps<IconProps>;
    Search15831?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<IconProps>;
    upload?: PrimitiveOverrideProps<TextProps>;
    "belanja 1"?: PrimitiveOverrideProps<ImageProps>;
    "image upload:"?: PrimitiveOverrideProps<TextProps>;
    "file name"?: PrimitiveOverrideProps<TextProps>;
    "item name"?: PrimitiveOverrideProps<TextProps>;
    "this item is most likely a:"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SearchProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SearchOverridesProps | undefined | null;
}>;
export default function Search(props: SearchProps): React.ReactElement;
