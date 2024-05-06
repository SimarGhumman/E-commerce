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
export declare type ProfileOverridesProps = {
    Profile?: PrimitiveOverrideProps<ViewProps>;
    "General Info & Photo"?: PrimitiveOverrideProps<ViewProps>;
    "User Profile"?: PrimitiveOverrideProps<TextProps>;
    "Vector 7577197"?: PrimitiveOverrideProps<IconProps>;
    "Group 9"?: PrimitiveOverrideProps<ViewProps>;
    "Group 16"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 19"?: PrimitiveOverrideProps<IconProps>;
    "your name"?: PrimitiveOverrideProps<TextProps>;
    "Vector 7577210"?: PrimitiveOverrideProps<IconProps>;
    "Vector 76"?: PrimitiveOverrideProps<IconProps>;
    "Email & Phone"?: PrimitiveOverrideProps<ViewProps>;
    "Email Address"?: PrimitiveOverrideProps<TextProps>;
    "Email Field"?: PrimitiveOverrideProps<ViewProps>;
    "eg. alaa.mohamed.gmail.com"?: PrimitiveOverrideProps<TextProps>;
    Mail?: PrimitiveOverrideProps<ViewProps>;
    Vector77226?: PrimitiveOverrideProps<IconProps>;
    "Vector 77"?: PrimitiveOverrideProps<IconProps>;
    "Vector 79"?: PrimitiveOverrideProps<IconProps>;
    billingaddress77253?: PrimitiveOverrideProps<ViewProps>;
    "Billing Address"?: PrimitiveOverrideProps<TextProps>;
    "Location Field77255"?: PrimitiveOverrideProps<ViewProps>;
    "eg. 12345 billing st. San Jose, CA, 94233"?: PrimitiveOverrideProps<TextProps>;
    "Location / undefined / Glyph: undefined77256"?: PrimitiveOverrideProps<ViewProps>;
    Vector77257?: PrimitiveOverrideProps<IconProps>;
    billingaddress1532?: PrimitiveOverrideProps<ViewProps>;
    "Date of Birth"?: PrimitiveOverrideProps<TextProps>;
    "Location Field1534"?: PrimitiveOverrideProps<ViewProps>;
    "eg. 12/31/2000"?: PrimitiveOverrideProps<TextProps>;
    "Location / undefined / Glyph: undefined1536"?: PrimitiveOverrideProps<ViewProps>;
    "wpf:birthday"?: PrimitiveOverrideProps<ViewProps>;
    Vector15335?: PrimitiveOverrideProps<IconProps>;
    "clarity:date-line"?: PrimitiveOverrideProps<ViewProps>;
    Vector15315?: PrimitiveOverrideProps<IconProps>;
    Vector15316?: PrimitiveOverrideProps<IconProps>;
    Vector15317?: PrimitiveOverrideProps<IconProps>;
    Vector15318?: PrimitiveOverrideProps<IconProps>;
    Vector15319?: PrimitiveOverrideProps<IconProps>;
    Vector15320?: PrimitiveOverrideProps<IconProps>;
    Vector15321?: PrimitiveOverrideProps<IconProps>;
    Vector15322?: PrimitiveOverrideProps<IconProps>;
    Vector15323?: PrimitiveOverrideProps<IconProps>;
    Vector15324?: PrimitiveOverrideProps<IconProps>;
    Vector15325?: PrimitiveOverrideProps<IconProps>;
    Vector15326?: PrimitiveOverrideProps<IconProps>;
    Vector15327?: PrimitiveOverrideProps<IconProps>;
    Vector15328?: PrimitiveOverrideProps<IconProps>;
    Vector15329?: PrimitiveOverrideProps<IconProps>;
    Vector15330?: PrimitiveOverrideProps<IconProps>;
    Vector15331?: PrimitiveOverrideProps<IconProps>;
    shippingaddress?: PrimitiveOverrideProps<ViewProps>;
    "Shipping Address"?: PrimitiveOverrideProps<TextProps>;
    "Time Zone Field"?: PrimitiveOverrideProps<ViewProps>;
    "eg. 12345 shipping st. San Jose, CA, 94231"?: PrimitiveOverrideProps<TextProps>;
    "Clock / undefined / Glyph: undefined"?: PrimitiveOverrideProps<ViewProps>;
    Vector77262?: PrimitiveOverrideProps<IconProps>;
    "Vector 78"?: PrimitiveOverrideProps<IconProps>;
    "Save Button"?: PrimitiveOverrideProps<FlexProps>;
    Text77287?: PrimitiveOverrideProps<TextProps>;
    "Cancel Button"?: PrimitiveOverrideProps<FlexProps>;
    Cancel?: PrimitiveOverrideProps<TextProps>;
    "order history"?: PrimitiveOverrideProps<ViewProps>;
    Text1423?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProfileProps = React.PropsWithChildren<Partial<ViewProps> & {
    note?: any;
    user?: any;
    birthday?: Number;
    image?: any;
} & {
    overrides?: ProfileOverridesProps | undefined | null;
}>;
export default function Profile(props: ProfileProps): React.ReactElement;
