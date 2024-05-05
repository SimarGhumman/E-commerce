/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps } from "@aws-amplify/ui-react";
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
export declare type ShoppingCartCreateFormInputValues = {
    user?: any;
    products?: any[];
};
export declare type ShoppingCartCreateFormValidationValues = {
    user?: ValidationFunction<any>;
    products?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShoppingCartCreateFormOverridesProps = {
    ShoppingCartCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<AutocompleteProps>;
    products?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ShoppingCartCreateFormProps = React.PropsWithChildren<{
    overrides?: ShoppingCartCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShoppingCartCreateFormInputValues) => ShoppingCartCreateFormInputValues;
    onSuccess?: (fields: ShoppingCartCreateFormInputValues) => void;
    onError?: (fields: ShoppingCartCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShoppingCartCreateFormInputValues) => ShoppingCartCreateFormInputValues;
    onValidate?: ShoppingCartCreateFormValidationValues;
} & React.CSSProperties>;
export default function ShoppingCartCreateForm(props: ShoppingCartCreateFormProps): React.ReactElement;
