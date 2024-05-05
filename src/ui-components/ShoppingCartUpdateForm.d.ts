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
export declare type ShoppingCartUpdateFormInputValues = {
    product?: any[];
    userID?: string;
};
export declare type ShoppingCartUpdateFormValidationValues = {
    product?: ValidationFunction<any>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShoppingCartUpdateFormOverridesProps = {
    ShoppingCartUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    product?: PrimitiveOverrideProps<AutocompleteProps>;
    userID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ShoppingCartUpdateFormProps = React.PropsWithChildren<{
    overrides?: ShoppingCartUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    shoppingCart?: any;
    onSubmit?: (fields: ShoppingCartUpdateFormInputValues) => ShoppingCartUpdateFormInputValues;
    onSuccess?: (fields: ShoppingCartUpdateFormInputValues) => void;
    onError?: (fields: ShoppingCartUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShoppingCartUpdateFormInputValues) => ShoppingCartUpdateFormInputValues;
    onValidate?: ShoppingCartUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ShoppingCartUpdateForm(props: ShoppingCartUpdateFormProps): React.ReactElement;
