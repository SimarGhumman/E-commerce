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
export declare type ItemnobuttonOverridesProps = {
    Itemnobutton?: PrimitiveOverrideProps<ViewProps>;
    ItemName?: PrimitiveOverrideProps<TextProps>;
    UnitPrice?: PrimitiveOverrideProps<TextProps>;
    "ed-o-neil-AvvdZlhDowA-unsplash 1"?: PrimitiveOverrideProps<ImageProps>;
    "Input field"?: PrimitiveOverrideProps<ViewProps>;
    quantity?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Union116281?: PrimitiveOverrideProps<IconProps>;
    Union116282?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<IconProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    $?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ItemnobuttonProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ItemnobuttonOverridesProps | undefined | null;
}>;
export default function Itemnobutton(props: ItemnobuttonProps): React.ReactElement;
