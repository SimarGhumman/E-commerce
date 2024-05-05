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
export declare type CartItemUpdateFormInputValues = {
    Product?: any;
    quantity?: number;
    userID?: string;
};
export declare type CartItemUpdateFormValidationValues = {
    Product?: ValidationFunction<any>;
    quantity?: ValidationFunction<number>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartItemUpdateFormOverridesProps = {
    CartItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Product?: PrimitiveOverrideProps<AutocompleteProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type CartItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: CartItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cartItem?: any;
    onSubmit?: (fields: CartItemUpdateFormInputValues) => CartItemUpdateFormInputValues;
    onSuccess?: (fields: CartItemUpdateFormInputValues) => void;
    onError?: (fields: CartItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CartItemUpdateFormInputValues) => CartItemUpdateFormInputValues;
    onValidate?: CartItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CartItemUpdateForm(props: CartItemUpdateFormProps): React.ReactElement;
