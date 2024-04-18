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
    Name?: PrimitiveOverrideProps<ViewProps>;
    "First Name"?: PrimitiveOverrideProps<TextProps>;
    "Name Field77213"?: PrimitiveOverrideProps<ViewProps>;
    "eg. Alaa"?: PrimitiveOverrideProps<TextProps>;
    "Last Name"?: PrimitiveOverrideProps<TextProps>;
    "Name Field77216"?: PrimitiveOverrideProps<ViewProps>;
    "eg. Mohamed"?: PrimitiveOverrideProps<TextProps>;
    "User Name"?: PrimitiveOverrideProps<TextProps>;
    "Name Field77219"?: PrimitiveOverrideProps<ViewProps>;
    "eg. alaa.mohamed"?: PrimitiveOverrideProps<TextProps>;
    "Vector 76"?: PrimitiveOverrideProps<IconProps>;
    "Email & Phone"?: PrimitiveOverrideProps<ViewProps>;
    "Email Address"?: PrimitiveOverrideProps<TextProps>;
    "Email Field"?: PrimitiveOverrideProps<ViewProps>;
    Mail?: PrimitiveOverrideProps<ViewProps>;
    Vector77226?: PrimitiveOverrideProps<IconProps>;
    "Phone Number"?: PrimitiveOverrideProps<TextProps>;
    "Phone Field"?: PrimitiveOverrideProps<ViewProps>;
    Phone?: PrimitiveOverrideProps<ViewProps>;
    Vector77230?: PrimitiveOverrideProps<IconProps>;
    "Vector 77"?: PrimitiveOverrideProps<IconProps>;
    "Vector 79"?: PrimitiveOverrideProps<IconProps>;
    Location?: PrimitiveOverrideProps<ViewProps>;
    "Billing Address"?: PrimitiveOverrideProps<TextProps>;
    "Location Field"?: PrimitiveOverrideProps<ViewProps>;
    "Location / undefined / Glyph: undefined"?: PrimitiveOverrideProps<ViewProps>;
    Vector77257?: PrimitiveOverrideProps<IconProps>;
    "Time Zone"?: PrimitiveOverrideProps<ViewProps>;
    "Shipping Address"?: PrimitiveOverrideProps<TextProps>;
    "Time Zone Field"?: PrimitiveOverrideProps<ViewProps>;
    "Clock / undefined / Glyph: undefined"?: PrimitiveOverrideProps<ViewProps>;
    Vector77262?: PrimitiveOverrideProps<IconProps>;
    "Vector 78"?: PrimitiveOverrideProps<IconProps>;
    Password?: PrimitiveOverrideProps<ViewProps>;
    "Group 13"?: PrimitiveOverrideProps<ViewProps>;
    "Current Password"?: PrimitiveOverrideProps<TextProps>;
    "Current Password Field"?: PrimitiveOverrideProps<ViewProps>;
    "Key / undefined / Glyph: undefined77268"?: PrimitiveOverrideProps<ViewProps>;
    Vector77269?: PrimitiveOverrideProps<IconProps>;
    Frame77270?: PrimitiveOverrideProps<ViewProps>;
    Vector77271?: PrimitiveOverrideProps<IconProps>;
    "Group 15"?: PrimitiveOverrideProps<ViewProps>;
    "New Password"?: PrimitiveOverrideProps<TextProps>;
    "New Password Field"?: PrimitiveOverrideProps<ViewProps>;
    "Key / undefined / Glyph: undefined77275"?: PrimitiveOverrideProps<ViewProps>;
    Vector77276?: PrimitiveOverrideProps<IconProps>;
    Frame77277?: PrimitiveOverrideProps<ViewProps>;
    Vector77278?: PrimitiveOverrideProps<IconProps>;
    "Group 14"?: PrimitiveOverrideProps<ViewProps>;
    "Confirm New Password"?: PrimitiveOverrideProps<TextProps>;
    "Confirtm New Password Field"?: PrimitiveOverrideProps<ViewProps>;
    "Key / undefined / Glyph: undefined77282"?: PrimitiveOverrideProps<ViewProps>;
    Vector77283?: PrimitiveOverrideProps<IconProps>;
    Frame77284?: PrimitiveOverrideProps<ViewProps>;
    Vector77285?: PrimitiveOverrideProps<IconProps>;
    "Save Button"?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    "Cancel Button77288"?: PrimitiveOverrideProps<FlexProps>;
    "Sign out"?: PrimitiveOverrideProps<TextProps>;
    "Cancel Button77560"?: PrimitiveOverrideProps<FlexProps>;
    Cancel?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProfileProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ProfileOverridesProps | undefined | null;
}>;
export default function Profile(props: ProfileProps): React.ReactElement;
