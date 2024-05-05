/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { listCartItems, listOrders } from "../graphql/queries";
import { createUser, updateCartItem, updateOrder } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
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
    CartItems: [],
    Orders: [],
    shippingAddress: "",
    billingAddress: "",
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [email, setEmail] = React.useState(initialValues.email);
  const [password, setPassword] = React.useState(initialValues.password);
  const [CartItems, setCartItems] = React.useState(initialValues.CartItems);
  const [CartItemsLoading, setCartItemsLoading] = React.useState(false);
  const [cartItemsRecords, setCartItemsRecords] = React.useState([]);
  const [Orders, setOrders] = React.useState(initialValues.Orders);
  const [OrdersLoading, setOrdersLoading] = React.useState(false);
  const [ordersRecords, setOrdersRecords] = React.useState([]);
  const [shippingAddress, setShippingAddress] = React.useState(
    initialValues.shippingAddress
  );
  const [billingAddress, setBillingAddress] = React.useState(
    initialValues.billingAddress
  );
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUsername(initialValues.username);
    setEmail(initialValues.email);
    setPassword(initialValues.password);
    setCartItems(initialValues.CartItems);
    setCurrentCartItemsValue(undefined);
    setCurrentCartItemsDisplayValue("");
    setOrders(initialValues.Orders);
    setCurrentOrdersValue(undefined);
    setCurrentOrdersDisplayValue("");
    setShippingAddress(initialValues.shippingAddress);
    setBillingAddress(initialValues.billingAddress);
    setErrors({});
  };
  const [currentCartItemsDisplayValue, setCurrentCartItemsDisplayValue] =
    React.useState("");
  const [currentCartItemsValue, setCurrentCartItemsValue] =
    React.useState(undefined);
  const CartItemsRef = React.createRef();
  const [currentOrdersDisplayValue, setCurrentOrdersDisplayValue] =
    React.useState("");
  const [currentOrdersValue, setCurrentOrdersValue] = React.useState(undefined);
  const OrdersRef = React.createRef();
  const getIDValue = {
    CartItems: (r) => JSON.stringify({ id: r?.id }),
    Orders: (r) => JSON.stringify({ id: r?.id }),
  };
  const CartItemsIdSet = new Set(
    Array.isArray(CartItems)
      ? CartItems.map((r) => getIDValue.CartItems?.(r))
      : getIDValue.CartItems?.(CartItems)
  );
  const OrdersIdSet = new Set(
    Array.isArray(Orders)
      ? Orders.map((r) => getIDValue.Orders?.(r))
      : getIDValue.Orders?.(Orders)
  );
  const getDisplayValue = {
    CartItems: (r) => `${r?.quantity ? r?.quantity + " - " : ""}${r?.id}`,
    Orders: (r) => `${r?.totalPrice ? r?.totalPrice + " - " : ""}${r?.id}`,
  };
  const validations = {
    username: [],
    email: [],
    password: [],
    CartItems: [],
    Orders: [],
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
  const fetchCartItemsRecords = async (value) => {
    setCartItemsLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ quantity: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listCartItems.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listCartItems?.items;
      var loaded = result.filter(
        (item) => !CartItemsIdSet.has(getIDValue.CartItems?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCartItemsRecords(newOptions.slice(0, autocompleteLength));
    setCartItemsLoading(false);
  };
  const fetchOrdersRecords = async (value) => {
    setOrdersLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { totalPrice: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listOrders.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listOrders?.items;
      var loaded = result.filter(
        (item) => !OrdersIdSet.has(getIDValue.Orders?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setOrdersRecords(newOptions.slice(0, autocompleteLength));
    setOrdersLoading(false);
  };
  React.useEffect(() => {
    fetchCartItemsRecords("");
    fetchOrdersRecords("");
  }, []);
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
          CartItems,
          Orders,
          shippingAddress,
          billingAddress,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          const modelFieldsToSave = {
            username: modelFields.username,
            email: modelFields.email,
            password: modelFields.password,
            shippingAddress: modelFields.shippingAddress,
            billingAddress: modelFields.billingAddress,
          };
          const user = (
            await client.graphql({
              query: createUser.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createUser;
          const promises = [];
          promises.push(
            ...CartItems.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateCartItem.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                      userID: user.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          promises.push(
            ...Orders.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateOrder.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                      userID: user.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
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
        isRequired={false}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              email,
              password,
              CartItems,
              Orders,
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
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email: value,
              password,
              CartItems,
              Orders,
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
              CartItems,
              Orders,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              username,
              email,
              password,
              CartItems: values,
              Orders,
              shippingAddress,
              billingAddress,
            };
            const result = onChange(modelFields);
            values = result?.CartItems ?? values;
          }
          setCartItems(values);
          setCurrentCartItemsValue(undefined);
          setCurrentCartItemsDisplayValue("");
        }}
        currentFieldValue={currentCartItemsValue}
        label={"Cart items"}
        items={CartItems}
        hasError={errors?.CartItems?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("CartItems", currentCartItemsValue)
        }
        errorMessage={errors?.CartItems?.errorMessage}
        getBadgeText={getDisplayValue.CartItems}
        setFieldValue={(model) => {
          setCurrentCartItemsDisplayValue(
            model ? getDisplayValue.CartItems(model) : ""
          );
          setCurrentCartItemsValue(model);
        }}
        inputFieldRef={CartItemsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Cart items"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search CartItem"
          value={currentCartItemsDisplayValue}
          options={cartItemsRecords
            .filter((r) => !CartItemsIdSet.has(getIDValue.CartItems?.(r)))
            .map((r) => ({
              id: getIDValue.CartItems?.(r),
              label: getDisplayValue.CartItems?.(r),
            }))}
          isLoading={CartItemsLoading}
          onSelect={({ id, label }) => {
            setCurrentCartItemsValue(
              cartItemsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCartItemsDisplayValue(label);
            runValidationTasks("CartItems", label);
          }}
          onClear={() => {
            setCurrentCartItemsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchCartItemsRecords(value);
            if (errors.CartItems?.hasError) {
              runValidationTasks("CartItems", value);
            }
            setCurrentCartItemsDisplayValue(value);
            setCurrentCartItemsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("CartItems", currentCartItemsDisplayValue)
          }
          errorMessage={errors.CartItems?.errorMessage}
          hasError={errors.CartItems?.hasError}
          ref={CartItemsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "CartItems")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              username,
              email,
              password,
              CartItems,
              Orders: values,
              shippingAddress,
              billingAddress,
            };
            const result = onChange(modelFields);
            values = result?.Orders ?? values;
          }
          setOrders(values);
          setCurrentOrdersValue(undefined);
          setCurrentOrdersDisplayValue("");
        }}
        currentFieldValue={currentOrdersValue}
        label={"Orders"}
        items={Orders}
        hasError={errors?.Orders?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Orders", currentOrdersValue)
        }
        errorMessage={errors?.Orders?.errorMessage}
        getBadgeText={getDisplayValue.Orders}
        setFieldValue={(model) => {
          setCurrentOrdersDisplayValue(
            model ? getDisplayValue.Orders(model) : ""
          );
          setCurrentOrdersValue(model);
        }}
        inputFieldRef={OrdersRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Orders"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Order"
          value={currentOrdersDisplayValue}
          options={ordersRecords
            .filter((r) => !OrdersIdSet.has(getIDValue.Orders?.(r)))
            .map((r) => ({
              id: getIDValue.Orders?.(r),
              label: getDisplayValue.Orders?.(r),
            }))}
          isLoading={OrdersLoading}
          onSelect={({ id, label }) => {
            setCurrentOrdersValue(
              ordersRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentOrdersDisplayValue(label);
            runValidationTasks("Orders", label);
          }}
          onClear={() => {
            setCurrentOrdersDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchOrdersRecords(value);
            if (errors.Orders?.hasError) {
              runValidationTasks("Orders", value);
            }
            setCurrentOrdersDisplayValue(value);
            setCurrentOrdersValue(undefined);
          }}
          onBlur={() => runValidationTasks("Orders", currentOrdersDisplayValue)}
          errorMessage={errors.Orders?.errorMessage}
          hasError={errors.Orders?.hasError}
          ref={OrdersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Orders")}
        ></Autocomplete>
      </ArrayField>
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
              CartItems,
              Orders,
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
              CartItems,
              Orders,
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
