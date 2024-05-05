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
export declare type InventoryUpdateFormInputValues = {
    quantity?: number;
    product?: any;
};
export declare type InventoryUpdateFormValidationValues = {
    quantity?: ValidationFunction<number>;
    product?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InventoryUpdateFormOverridesProps = {
    InventoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    product?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type InventoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: InventoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    inventory?: any;
    onSubmit?: (fields: InventoryUpdateFormInputValues) => InventoryUpdateFormInputValues;
    onSuccess?: (fields: InventoryUpdateFormInputValues) => void;
    onError?: (fields: InventoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InventoryUpdateFormInputValues) => InventoryUpdateFormInputValues;
    onValidate?: InventoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InventoryUpdateForm(props: InventoryUpdateFormProps): React.ReactElement;
