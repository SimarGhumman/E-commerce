/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createUser } from "../graphql/mutations";
const client = generateClient();
export default function UserCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    username: "",
    email: "",
    password: "",
    shippingAddress: "",
    billingAddress: "",
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [email, setEmail] = React.useState(initialValues.email);
  const [password, setPassword] = React.useState(initialValues.password);
  const [shippingAddress, setShippingAddress] = React.useState(
    initialValues.shippingAddress
  );
  const [billingAddress, setBillingAddress] = React.useState(
    initialValues.billingAddress
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUsername(initialValues.username);
    setEmail(initialValues.email);
    setPassword(initialValues.password);
    setShippingAddress(initialValues.shippingAddress);
    setBillingAddress(initialValues.billingAddress);
    setErrors({});
  };
  const validations = {
    username: [{ type: "Required" }],
    email: [{ type: "Required" }],
    password: [],
    shippingAddress: [],
    billingAddress: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          username,
          email,
          password,
          shippingAddress,
          billingAddress,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createUser.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserCreateForm")}
      {...rest}
    >
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              email,
              password,
              shippingAddress,
              billingAddress,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email: value,
              password,
              shippingAddress,
              billingAddress,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Password"
        isRequired={false}
        isReadOnly={false}
        value={password}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email,
              password: value,
              shippingAddress,
              billingAddress,
            };
            const result = onChange(modelFields);
            value = result?.password ?? value;
          }
          if (errors.password?.hasError) {
            runValidationTasks("password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("password", password)}
        errorMessage={errors.password?.errorMessage}
        hasError={errors.password?.hasError}
        {...getOverrideProps(overrides, "password")}
      ></TextField>
      <TextField
        label="Shipping address"
        isRequired={false}
        isReadOnly={false}
        value={shippingAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email,
              password,
              shippingAddress: value,
              billingAddress,
            };
            const result = onChange(modelFields);
            value = result?.shippingAddress ?? value;
          }
          if (errors.shippingAddress?.hasError) {
            runValidationTasks("shippingAddress", value);
          }
          setShippingAddress(value);
        }}
        onBlur={() => runValidationTasks("shippingAddress", shippingAddress)}
        errorMessage={errors.shippingAddress?.errorMessage}
        hasError={errors.shippingAddress?.hasError}
        {...getOverrideProps(overrides, "shippingAddress")}
      ></TextField>
      <TextField
        label="Billing address"
        isRequired={false}
        isReadOnly={false}
        value={billingAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email,
              password,
              shippingAddress,
              billingAddress: value,
            };
            const result = onChange(modelFields);
            value = result?.billingAddress ?? value;
          }
          if (errors.billingAddress?.hasError) {
            runValidationTasks("billingAddress", value);
          }
          setBillingAddress(value);
        }}
        onBlur={() => runValidationTasks("billingAddress", billingAddress)}
        errorMessage={errors.billingAddress?.errorMessage}
        hasError={errors.billingAddress?.hasError}
        {...getOverrideProps(overrides, "billingAddress")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
