/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CartItemCreateFormInputValues = {
    Product?: any;
    quantity?: number;
    userID?: string;
};
export declare type CartItemCreateFormValidationValues = {
    Product?: ValidationFunction<any>;
    quantity?: ValidationFunction<number>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartItemCreateFormOverridesProps = {
    CartItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Product?: PrimitiveOverrideProps<AutocompleteProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type CartItemCreateFormProps = React.PropsWithChildren<{
    overrides?: CartItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CartItemCreateFormInputValues) => CartItemCreateFormInputValues;
    onSuccess?: (fields: CartItemCreateFormInputValues) => void;
    onError?: (fields: CartItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CartItemCreateFormInputValues) => CartItemCreateFormInputValues;
    onValidate?: CartItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function CartItemCreateForm(props: CartItemCreateFormProps): React.ReactElement;
