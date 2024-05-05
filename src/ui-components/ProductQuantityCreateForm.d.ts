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
export declare type ProductQuantityCreateFormInputValues = {
    product?: any;
    quantity?: number;
    orderProductsId?: string;
    shoppingCartProductsId?: string;
    productQuantitiesId?: string;
};
export declare type ProductQuantityCreateFormValidationValues = {
    product?: ValidationFunction<any>;
    quantity?: ValidationFunction<number>;
    orderProductsId?: ValidationFunction<string>;
    shoppingCartProductsId?: ValidationFunction<string>;
    productQuantitiesId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductQuantityCreateFormOverridesProps = {
    ProductQuantityCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    product?: PrimitiveOverrideProps<AutocompleteProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    orderProductsId?: PrimitiveOverrideProps<AutocompleteProps>;
    shoppingCartProductsId?: PrimitiveOverrideProps<AutocompleteProps>;
    productQuantitiesId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ProductQuantityCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductQuantityCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductQuantityCreateFormInputValues) => ProductQuantityCreateFormInputValues;
    onSuccess?: (fields: ProductQuantityCreateFormInputValues) => void;
    onError?: (fields: ProductQuantityCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductQuantityCreateFormInputValues) => ProductQuantityCreateFormInputValues;
    onValidate?: ProductQuantityCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductQuantityCreateForm(props: ProductQuantityCreateFormProps): React.ReactElement;
