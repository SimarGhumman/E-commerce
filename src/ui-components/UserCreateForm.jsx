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
import { listOrders, listShoppingCarts } from "../graphql/queries";
import {
  createUser,
  updateOrder,
  updateShoppingCart,
  updateUser,
} from "../graphql/mutations";
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
    shippingAddress: "",
    billingAddress: "",
    shoppingCart: undefined,
    orders: [],
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
  const [shoppingCart, setShoppingCart] = React.useState(
    initialValues.shoppingCart
  );
  const [shoppingCartLoading, setShoppingCartLoading] = React.useState(false);
  const [shoppingCartRecords, setShoppingCartRecords] = React.useState([]);
  const [orders, setOrders] = React.useState(initialValues.orders);
  const [ordersLoading, setOrdersLoading] = React.useState(false);
  const [ordersRecords, setOrdersRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUsername(initialValues.username);
    setEmail(initialValues.email);
    setPassword(initialValues.password);
    setShippingAddress(initialValues.shippingAddress);
    setBillingAddress(initialValues.billingAddress);
    setShoppingCart(initialValues.shoppingCart);
    setCurrentShoppingCartValue(undefined);
    setCurrentShoppingCartDisplayValue("");
    setOrders(initialValues.orders);
    setCurrentOrdersValue(undefined);
    setCurrentOrdersDisplayValue("");
    setErrors({});
  };
  const [currentShoppingCartDisplayValue, setCurrentShoppingCartDisplayValue] =
    React.useState("");
  const [currentShoppingCartValue, setCurrentShoppingCartValue] =
    React.useState(undefined);
  const shoppingCartRef = React.createRef();
  const [currentOrdersDisplayValue, setCurrentOrdersDisplayValue] =
    React.useState("");
  const [currentOrdersValue, setCurrentOrdersValue] = React.useState(undefined);
  const ordersRef = React.createRef();
  const getIDValue = {
    shoppingCart: (r) => JSON.stringify({ id: r?.id }),
    orders: (r) => JSON.stringify({ id: r?.id }),
  };
  const shoppingCartIdSet = new Set(
    Array.isArray(shoppingCart)
      ? shoppingCart.map((r) => getIDValue.shoppingCart?.(r))
      : getIDValue.shoppingCart?.(shoppingCart)
  );
  const ordersIdSet = new Set(
    Array.isArray(orders)
      ? orders.map((r) => getIDValue.orders?.(r))
      : getIDValue.orders?.(orders)
  );
  const getDisplayValue = {
    shoppingCart: (r) => r?.id,
    orders: (r) => `${r?.status ? r?.status + " - " : ""}${r?.id}`,
  };
  const validations = {
    username: [{ type: "Required" }],
    email: [{ type: "Required" }],
    password: [],
    shippingAddress: [],
    billingAddress: [],
    shoppingCart: [],
    orders: [],
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
  const fetchShoppingCartRecords = async (value) => {
    setShoppingCartLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: { or: [{ id: { contains: value } }] },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listShoppingCarts.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listShoppingCarts?.items;
      var loaded = result.filter(
        (item) => !shoppingCartIdSet.has(getIDValue.shoppingCart?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setShoppingCartRecords(newOptions.slice(0, autocompleteLength));
    setShoppingCartLoading(false);
  };
  const fetchOrdersRecords = async (value) => {
    setOrdersLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ status: { contains: value } }, { id: { contains: value } }],
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
        (item) => !ordersIdSet.has(getIDValue.orders?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setOrdersRecords(newOptions.slice(0, autocompleteLength));
    setOrdersLoading(false);
  };
  React.useEffect(() => {
    fetchShoppingCartRecords("");
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
          shippingAddress,
          billingAddress,
          shoppingCart,
          orders,
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
            userShoppingCartId: modelFields?.shoppingCart?.id,
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
          const shoppingCartToLink = modelFields.shoppingCart;
          if (shoppingCartToLink) {
            promises.push(
              client.graphql({
                query: updateShoppingCart.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: shoppingCart.id,
                    userID: user.id,
                  },
                },
              })
            );
            const userToUnlink = await shoppingCartToLink.user;
            if (userToUnlink) {
              promises.push(
                client.graphql({
                  query: updateUser.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: userToUnlink.id,
                      userShoppingCartId: null,
                    },
                  },
                })
              );
            }
          }
          promises.push(
            ...orders.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateOrder.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                      userOrdersId: user.id,
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
              shoppingCart,
              orders,
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
              shoppingCart,
              orders,
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
              shoppingCart,
              orders,
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
              shoppingCart,
              orders,
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
              shoppingCart,
              orders,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              username,
              email,
              password,
              shippingAddress,
              billingAddress,
              shoppingCart: value,
              orders,
            };
            const result = onChange(modelFields);
            value = result?.shoppingCart ?? value;
          }
          setShoppingCart(value);
          setCurrentShoppingCartValue(undefined);
          setCurrentShoppingCartDisplayValue("");
        }}
        currentFieldValue={currentShoppingCartValue}
        label={"Shopping cart"}
        items={shoppingCart ? [shoppingCart] : []}
        hasError={errors?.shoppingCart?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("shoppingCart", currentShoppingCartValue)
        }
        errorMessage={errors?.shoppingCart?.errorMessage}
        getBadgeText={getDisplayValue.shoppingCart}
        setFieldValue={(model) => {
          setCurrentShoppingCartDisplayValue(
            model ? getDisplayValue.shoppingCart(model) : ""
          );
          setCurrentShoppingCartValue(model);
        }}
        inputFieldRef={shoppingCartRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Shopping cart"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ShoppingCart"
          value={currentShoppingCartDisplayValue}
          options={shoppingCartRecords
            .filter((r) => !shoppingCartIdSet.has(getIDValue.shoppingCart?.(r)))
            .map((r) => ({
              id: getIDValue.shoppingCart?.(r),
              label: getDisplayValue.shoppingCart?.(r),
            }))}
          isLoading={shoppingCartLoading}
          onSelect={({ id, label }) => {
            setCurrentShoppingCartValue(
              shoppingCartRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentShoppingCartDisplayValue(label);
            runValidationTasks("shoppingCart", label);
          }}
          onClear={() => {
            setCurrentShoppingCartDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchShoppingCartRecords(value);
            if (errors.shoppingCart?.hasError) {
              runValidationTasks("shoppingCart", value);
            }
            setCurrentShoppingCartDisplayValue(value);
            setCurrentShoppingCartValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("shoppingCart", currentShoppingCartDisplayValue)
          }
          errorMessage={errors.shoppingCart?.errorMessage}
          hasError={errors.shoppingCart?.hasError}
          ref={shoppingCartRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "shoppingCart")}
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
              shippingAddress,
              billingAddress,
              shoppingCart,
              orders: values,
            };
            const result = onChange(modelFields);
            values = result?.orders ?? values;
          }
          setOrders(values);
          setCurrentOrdersValue(undefined);
          setCurrentOrdersDisplayValue("");
        }}
        currentFieldValue={currentOrdersValue}
        label={"Orders"}
        items={orders}
        hasError={errors?.orders?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("orders", currentOrdersValue)
        }
        errorMessage={errors?.orders?.errorMessage}
        getBadgeText={getDisplayValue.orders}
        setFieldValue={(model) => {
          setCurrentOrdersDisplayValue(
            model ? getDisplayValue.orders(model) : ""
          );
          setCurrentOrdersValue(model);
        }}
        inputFieldRef={ordersRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Orders"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Order"
          value={currentOrdersDisplayValue}
          options={ordersRecords.map((r) => ({
            id: getIDValue.orders?.(r),
            label: getDisplayValue.orders?.(r),
          }))}
          isLoading={ordersLoading}
          onSelect={({ id, label }) => {
            setCurrentOrdersValue(
              ordersRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentOrdersDisplayValue(label);
            runValidationTasks("orders", label);
          }}
          onClear={() => {
            setCurrentOrdersDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchOrdersRecords(value);
            if (errors.orders?.hasError) {
              runValidationTasks("orders", value);
            }
            setCurrentOrdersDisplayValue(value);
            setCurrentOrdersValue(undefined);
          }}
          onBlur={() => runValidationTasks("orders", currentOrdersDisplayValue)}
          errorMessage={errors.orders?.errorMessage}
          hasError={errors.orders?.hasError}
          ref={ordersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "orders")}
        ></Autocomplete>
      </ArrayField>
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
