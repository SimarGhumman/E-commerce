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
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import {
  getOrder,
  getUser,
  listProductQuantities,
  listUsers,
} from "../graphql/queries";
import { updateOrder, updateProductQuantity } from "../graphql/mutations";
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
export default function OrderUpdateForm(props) {
  const {
    id: idProp,
    order: orderModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    user: undefined,
    products: [],
    date: "",
    status: "",
    totalPrice: "",
    userOrdersId: undefined,
  };
  const [user, setUser] = React.useState(initialValues.user);
  const [userLoading, setUserLoading] = React.useState(false);
  const [userRecords, setUserRecords] = React.useState([]);
  const [products, setProducts] = React.useState(initialValues.products);
  const [productsLoading, setProductsLoading] = React.useState(false);
  const [productsRecords, setProductsRecords] = React.useState([]);
  const [date, setDate] = React.useState(initialValues.date);
  const [status, setStatus] = React.useState(initialValues.status);
  const [totalPrice, setTotalPrice] = React.useState(initialValues.totalPrice);
  const [userOrdersId, setUserOrdersId] = React.useState(
    initialValues.userOrdersId
  );
  const [userOrdersIdLoading, setUserOrdersIdLoading] = React.useState(false);
  const [userOrdersIdRecords, setUserOrdersIdRecords] = React.useState([]);
  const [selectedUserOrdersIdRecords, setSelectedUserOrdersIdRecords] =
    React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = orderRecord
      ? {
          ...initialValues,
          ...orderRecord,
          user,
          products: linkedProducts,
          userOrdersId,
        }
      : initialValues;
    setUser(cleanValues.user);
    setCurrentUserValue(undefined);
    setCurrentUserDisplayValue("");
    setProducts(cleanValues.products ?? []);
    setCurrentProductsValue(undefined);
    setCurrentProductsDisplayValue("");
    setDate(cleanValues.date);
    setStatus(cleanValues.status);
    setTotalPrice(cleanValues.totalPrice);
    setUserOrdersId(cleanValues.userOrdersId);
    setCurrentUserOrdersIdValue(undefined);
    setCurrentUserOrdersIdDisplayValue("");
    setErrors({});
  };
  const [orderRecord, setOrderRecord] = React.useState(orderModelProp);
  const [linkedProducts, setLinkedProducts] = React.useState([]);
  const canUnlinkProducts = true;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getOrder.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOrder
        : orderModelProp;
      const userRecord = record ? await record.user : undefined;
      setUser(userRecord);
      const linkedProducts = record?.products?.items ?? [];
      setLinkedProducts(linkedProducts);
      const userOrdersIdRecord = record ? record.userOrdersId : undefined;
      const userRecord = userOrdersIdRecord
        ? (
            await client.graphql({
              query: getUser.replaceAll("__typename", ""),
              variables: { id: userOrdersIdRecord },
            })
          )?.data?.getUser
        : undefined;
      setUserOrdersId(userOrdersIdRecord);
      setSelectedUserOrdersIdRecords([userRecord]);
      setOrderRecord(record);
    };
    queryData();
  }, [idProp, orderModelProp]);
  React.useEffect(resetStateValues, [
    orderRecord,
    user,
    linkedProducts,
    userOrdersId,
  ]);
  const [currentUserDisplayValue, setCurrentUserDisplayValue] =
    React.useState("");
  const [currentUserValue, setCurrentUserValue] = React.useState(undefined);
  const userRef = React.createRef();
  const [currentProductsDisplayValue, setCurrentProductsDisplayValue] =
    React.useState("");
  const [currentProductsValue, setCurrentProductsValue] =
    React.useState(undefined);
  const productsRef = React.createRef();
  const [currentUserOrdersIdDisplayValue, setCurrentUserOrdersIdDisplayValue] =
    React.useState("");
  const [currentUserOrdersIdValue, setCurrentUserOrdersIdValue] =
    React.useState(undefined);
  const userOrdersIdRef = React.createRef();
  const getIDValue = {
    user: (r) => JSON.stringify({ id: r?.id }),
    products: (r) => JSON.stringify({ id: r?.id }),
  };
  const userIdSet = new Set(
    Array.isArray(user)
      ? user.map((r) => getIDValue.user?.(r))
      : getIDValue.user?.(user)
  );
  const productsIdSet = new Set(
    Array.isArray(products)
      ? products.map((r) => getIDValue.products?.(r))
      : getIDValue.products?.(products)
  );
  const getDisplayValue = {
    user: (r) => `${r?.username ? r?.username + " - " : ""}${r?.id}`,
    products: (r) => `${r?.quantity ? r?.quantity + " - " : ""}${r?.id}`,
    userOrdersId: (r) => `${r?.username ? r?.username + " - " : ""}${r?.id}`,
  };
  const validations = {
    user: [],
    products: [],
    date: [{ type: "Required" }],
    status: [{ type: "Required" }],
    totalPrice: [{ type: "Required" }],
    userOrdersId: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  const fetchUserRecords = async (value) => {
    setUserLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ username: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listUsers.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listUsers?.items;
      var loaded = result.filter(
        (item) => !userIdSet.has(getIDValue.user?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setUserRecords(newOptions.slice(0, autocompleteLength));
    setUserLoading(false);
  };
  const fetchProductsRecords = async (value) => {
    setProductsLoading(true);
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
          query: listProductQuantities.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listProductQuantities?.items;
      var loaded = result.filter(
        (item) => !productsIdSet.has(getIDValue.products?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setProductsRecords(newOptions.slice(0, autocompleteLength));
    setProductsLoading(false);
  };
  const fetchUserOrdersIdRecords = async (value) => {
    setUserOrdersIdLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ username: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listUsers.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listUsers?.items;
      var loaded = result.filter((item) => userOrdersId !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setUserOrdersIdRecords(newOptions.slice(0, autocompleteLength));
    setUserOrdersIdLoading(false);
  };
  React.useEffect(() => {
    fetchUserRecords("");
    fetchProductsRecords("");
    fetchUserOrdersIdRecords("");
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
          user: user ?? null,
          products: products ?? null,
          date,
          status,
          totalPrice,
          userOrdersId: userOrdersId ?? null,
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
          const promises = [];
          const productsToLink = [];
          const productsToUnLink = [];
          const productsSet = new Set();
          const linkedProductsSet = new Set();
          products.forEach((r) => productsSet.add(getIDValue.products?.(r)));
          linkedProducts.forEach((r) =>
            linkedProductsSet.add(getIDValue.products?.(r))
          );
          linkedProducts.forEach((r) => {
            if (!productsSet.has(getIDValue.products?.(r))) {
              productsToUnLink.push(r);
            }
          });
          products.forEach((r) => {
            if (!linkedProductsSet.has(getIDValue.products?.(r))) {
              productsToLink.push(r);
            }
          });
          productsToUnLink.forEach((original) => {
            if (!canUnlinkProducts) {
              throw Error(
                `ProductQuantity ${original.id} cannot be unlinked from Order because orderProductsId is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateProductQuantity.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    orderProductsId: null,
                  },
                },
              })
            );
          });
          productsToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateProductQuantity.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    orderProductsId: orderRecord.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            userID: modelFields?.user?.id ?? null,
            date: modelFields.date,
            status: modelFields.status,
            totalPrice: modelFields.totalPrice,
            userOrdersId: modelFields.userOrdersId ?? null,
          };
          promises.push(
            client.graphql({
              query: updateOrder.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: orderRecord.id,
                  ...modelFieldsToSave,
                },
              },
            })
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "OrderUpdateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              user: value,
              products,
              date,
              status,
              totalPrice,
              userOrdersId,
            };
            const result = onChange(modelFields);
            value = result?.user ?? value;
          }
          setUser(value);
          setCurrentUserValue(undefined);
          setCurrentUserDisplayValue("");
        }}
        currentFieldValue={currentUserValue}
        label={"User"}
        items={user ? [user] : []}
        hasError={errors?.user?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("user", currentUserValue)
        }
        errorMessage={errors?.user?.errorMessage}
        getBadgeText={getDisplayValue.user}
        setFieldValue={(model) => {
          setCurrentUserDisplayValue(model ? getDisplayValue.user(model) : "");
          setCurrentUserValue(model);
        }}
        inputFieldRef={userRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="User"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search User"
          value={currentUserDisplayValue}
          options={userRecords
            .filter((r) => !userIdSet.has(getIDValue.user?.(r)))
            .map((r) => ({
              id: getIDValue.user?.(r),
              label: getDisplayValue.user?.(r),
            }))}
          isLoading={userLoading}
          onSelect={({ id, label }) => {
            setCurrentUserValue(
              userRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUserDisplayValue(label);
            runValidationTasks("user", label);
          }}
          onClear={() => {
            setCurrentUserDisplayValue("");
          }}
          defaultValue={user}
          onChange={(e) => {
            let { value } = e.target;
            fetchUserRecords(value);
            if (errors.user?.hasError) {
              runValidationTasks("user", value);
            }
            setCurrentUserDisplayValue(value);
            setCurrentUserValue(undefined);
          }}
          onBlur={() => runValidationTasks("user", currentUserDisplayValue)}
          errorMessage={errors.user?.errorMessage}
          hasError={errors.user?.hasError}
          ref={userRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "user")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              user,
              products: values,
              date,
              status,
              totalPrice,
              userOrdersId,
            };
            const result = onChange(modelFields);
            values = result?.products ?? values;
          }
          setProducts(values);
          setCurrentProductsValue(undefined);
          setCurrentProductsDisplayValue("");
        }}
        currentFieldValue={currentProductsValue}
        label={"Products"}
        items={products}
        hasError={errors?.products?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("products", currentProductsValue)
        }
        errorMessage={errors?.products?.errorMessage}
        getBadgeText={getDisplayValue.products}
        setFieldValue={(model) => {
          setCurrentProductsDisplayValue(
            model ? getDisplayValue.products(model) : ""
          );
          setCurrentProductsValue(model);
        }}
        inputFieldRef={productsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Products"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ProductQuantity"
          value={currentProductsDisplayValue}
          options={productsRecords
            .filter((r) => !productsIdSet.has(getIDValue.products?.(r)))
            .map((r) => ({
              id: getIDValue.products?.(r),
              label: getDisplayValue.products?.(r),
            }))}
          isLoading={productsLoading}
          onSelect={({ id, label }) => {
            setCurrentProductsValue(
              productsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentProductsDisplayValue(label);
            runValidationTasks("products", label);
          }}
          onClear={() => {
            setCurrentProductsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchProductsRecords(value);
            if (errors.products?.hasError) {
              runValidationTasks("products", value);
            }
            setCurrentProductsDisplayValue(value);
            setCurrentProductsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("products", currentProductsDisplayValue)
          }
          errorMessage={errors.products?.errorMessage}
          hasError={errors.products?.hasError}
          ref={productsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "products")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Date"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={date && convertToLocal(new Date(date))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              user,
              products,
              date: value,
              status,
              totalPrice,
              userOrdersId,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              products,
              date,
              status: value,
              totalPrice,
              userOrdersId,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Payment pending"
          value="PAYMENT_PENDING"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Payment complete"
          value="PAYMENT_COMPLETE"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Shipped"
          value="SHIPPED"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Total price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalPrice}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              user,
              products,
              date,
              status,
              totalPrice: value,
              userOrdersId,
            };
            const result = onChange(modelFields);
            value = result?.totalPrice ?? value;
          }
          if (errors.totalPrice?.hasError) {
            runValidationTasks("totalPrice", value);
          }
          setTotalPrice(value);
        }}
        onBlur={() => runValidationTasks("totalPrice", totalPrice)}
        errorMessage={errors.totalPrice?.errorMessage}
        hasError={errors.totalPrice?.hasError}
        {...getOverrideProps(overrides, "totalPrice")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              user,
              products,
              date,
              status,
              totalPrice,
              userOrdersId: value,
            };
            const result = onChange(modelFields);
            value = result?.userOrdersId ?? value;
          }
          setUserOrdersId(value);
          setCurrentUserOrdersIdValue(undefined);
        }}
        currentFieldValue={currentUserOrdersIdValue}
        label={"User orders id"}
        items={userOrdersId ? [userOrdersId] : []}
        hasError={errors?.userOrdersId?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("userOrdersId", currentUserOrdersIdValue)
        }
        errorMessage={errors?.userOrdersId?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.userOrdersId(
                userOrdersIdRecords.find((r) => r.id === value) ??
                  selectedUserOrdersIdRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentUserOrdersIdDisplayValue(
            value
              ? getDisplayValue.userOrdersId(
                  userOrdersIdRecords.find((r) => r.id === value) ??
                    selectedUserOrdersIdRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentUserOrdersIdValue(value);
          const selectedRecord = userOrdersIdRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedUserOrdersIdRecords([selectedRecord]);
          }
        }}
        inputFieldRef={userOrdersIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="User orders id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search User"
          value={currentUserOrdersIdDisplayValue}
          options={userOrdersIdRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.userOrdersId?.(r),
            }))}
          isLoading={userOrdersIdLoading}
          onSelect={({ id, label }) => {
            setCurrentUserOrdersIdValue(id);
            setCurrentUserOrdersIdDisplayValue(label);
            runValidationTasks("userOrdersId", label);
          }}
          onClear={() => {
            setCurrentUserOrdersIdDisplayValue("");
          }}
          defaultValue={userOrdersId}
          onChange={(e) => {
            let { value } = e.target;
            fetchUserOrdersIdRecords(value);
            if (errors.userOrdersId?.hasError) {
              runValidationTasks("userOrdersId", value);
            }
            setCurrentUserOrdersIdDisplayValue(value);
            setCurrentUserOrdersIdValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("userOrdersId", currentUserOrdersIdValue)
          }
          errorMessage={errors.userOrdersId?.errorMessage}
          hasError={errors.userOrdersId?.hasError}
          ref={userOrdersIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "userOrdersId")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || orderModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || orderModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
