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
    "eg. alaa.mohamed.gmail.com"?: PrimitiveOverrideProps<TextProps>;
    Mail?: PrimitiveOverrideProps<ViewProps>;
    Vector77226?: PrimitiveOverrideProps<IconProps>;
    "Phone Number"?: PrimitiveOverrideProps<TextProps>;
    "Phone Field"?: PrimitiveOverrideProps<ViewProps>;
    "eg. 408-123-4567"?: PrimitiveOverrideProps<TextProps>;
    Phone?: PrimitiveOverrideProps<ViewProps>;
    Vector77230?: PrimitiveOverrideProps<IconProps>;
    "Vector 77"?: PrimitiveOverrideProps<IconProps>;
    "Vector 79"?: PrimitiveOverrideProps<IconProps>;
    billingaddress?: PrimitiveOverrideProps<ViewProps>;
    "Billing Address"?: PrimitiveOverrideProps<TextProps>;
    "Location Field"?: PrimitiveOverrideProps<ViewProps>;
    "eg. 12345 billing st. San Jose, CA, 94233"?: PrimitiveOverrideProps<TextProps>;
    "Location / undefined / Glyph: undefined"?: PrimitiveOverrideProps<ViewProps>;
    Vector77257?: PrimitiveOverrideProps<IconProps>;
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
    "order history"?: PrimitiveOverrideProps<FlexProps>;
    Text1423?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProfileProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ProfileOverridesProps | undefined | null;
}>;
export default function Profile(props: ProfileProps): React.ReactElement;
