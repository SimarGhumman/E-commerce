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
export declare type SummaryOverridesProps = {
    Summary?: PrimitiveOverrideProps<ViewProps>;
    "Order summary"?: PrimitiveOverrideProps<TextProps>;
    Subtotal?: PrimitiveOverrideProps<TextProps>;
    "Total Price"?: PrimitiveOverrideProps<TextProps>;
    Shipping?: PrimitiveOverrideProps<TextProps>;
    "Shipping of product"?: PrimitiveOverrideProps<TextProps>;
    Tax11613?: PrimitiveOverrideProps<TextProps>;
    Tax11614?: PrimitiveOverrideProps<TextProps>;
    Total?: PrimitiveOverrideProps<TextProps>;
    "Order Total"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ViewProps>;
    "Continue to payment"?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    "Vector 88"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SummaryProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SummaryOverridesProps | undefined | null;
}>;
export default function Summary(props: SummaryProps): React.ReactElement;
