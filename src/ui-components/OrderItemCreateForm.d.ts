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
export declare type OrderItemCreateFormInputValues = {
    name?: string;
    price?: number;
    quantity?: number;
    orderID?: string;
};
export declare type OrderItemCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    quantity?: ValidationFunction<number>;
    orderID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderItemCreateFormOverridesProps = {
    OrderItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    orderID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type OrderItemCreateFormProps = React.PropsWithChildren<{
    overrides?: OrderItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrderItemCreateFormInputValues) => OrderItemCreateFormInputValues;
    onSuccess?: (fields: OrderItemCreateFormInputValues) => void;
    onError?: (fields: OrderItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrderItemCreateFormInputValues) => OrderItemCreateFormInputValues;
    onValidate?: OrderItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrderItemCreateForm(props: OrderItemCreateFormProps): React.ReactElement;
