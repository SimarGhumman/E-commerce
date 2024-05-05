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
import { getOrder, getUser, listProducts, listUsers } from "../graphql/queries";
import { updateOrder, updateProduct } from "../graphql/mutations";
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
    date: "",
    status: "",
    trackingNumber: "",
    totalPrice: "",
    userID: undefined,
    product: [],
  };
  const [date, setDate] = React.useState(initialValues.date);
  const [status, setStatus] = React.useState(initialValues.status);
  const [trackingNumber, setTrackingNumber] = React.useState(
    initialValues.trackingNumber
  );
  const [totalPrice, setTotalPrice] = React.useState(initialValues.totalPrice);
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [userIDLoading, setUserIDLoading] = React.useState(false);
  const [userIDRecords, setUserIDRecords] = React.useState([]);
  const [selectedUserIDRecords, setSelectedUserIDRecords] = React.useState([]);
  const [product, setProduct] = React.useState(initialValues.product);
  const [productLoading, setProductLoading] = React.useState(false);
  const [productRecords, setProductRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = orderRecord
      ? { ...initialValues, ...orderRecord, userID, product: linkedProduct }
      : initialValues;
    setDate(cleanValues.date);
    setStatus(cleanValues.status);
    setTrackingNumber(cleanValues.trackingNumber);
    setTotalPrice(cleanValues.totalPrice);
    setUserID(cleanValues.userID);
    setCurrentUserIDValue(undefined);
    setCurrentUserIDDisplayValue("");
    setProduct(cleanValues.product ?? []);
    setCurrentProductValue(undefined);
    setCurrentProductDisplayValue("");
    setErrors({});
  };
  const [orderRecord, setOrderRecord] = React.useState(orderModelProp);
  const [linkedProduct, setLinkedProduct] = React.useState([]);
  const canUnlinkProduct = false;
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
      const userIDRecord = record ? record.userID : undefined;
      const userRecord = userIDRecord
        ? (
            await client.graphql({
              query: getUser.replaceAll("__typename", ""),
              variables: { id: userIDRecord },
            })
          )?.data?.getUser
        : undefined;
      setUserID(userIDRecord);
      setSelectedUserIDRecords([userRecord]);
      const linkedProduct = record?.product?.items ?? [];
      setLinkedProduct(linkedProduct);
      setOrderRecord(record);
    };
    queryData();
  }, [idProp, orderModelProp]);
  React.useEffect(resetStateValues, [orderRecord, userID, linkedProduct]);
  const [currentUserIDDisplayValue, setCurrentUserIDDisplayValue] =
    React.useState("");
  const [currentUserIDValue, setCurrentUserIDValue] = React.useState(undefined);
  const userIDRef = React.createRef();
  const [currentProductDisplayValue, setCurrentProductDisplayValue] =
    React.useState("");
  const [currentProductValue, setCurrentProductValue] =
    React.useState(undefined);
  const productRef = React.createRef();
  const getIDValue = {
    product: (r) => JSON.stringify({ id: r?.id }),
  };
  const productIdSet = new Set(
    Array.isArray(product)
      ? product.map((r) => getIDValue.product?.(r))
      : getIDValue.product?.(product)
  );
  const getDisplayValue = {
    userID: (r) => `${r?.username ? r?.username + " - " : ""}${r?.id}`,
    product: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    date: [],
    status: [],
    trackingNumber: [],
    totalPrice: [],
    userID: [{ type: "Required" }],
    product: [],
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
  const fetchUserIDRecords = async (value) => {
    setUserIDLoading(true);
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
      var loaded = result.filter((item) => userID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setUserIDRecords(newOptions.slice(0, autocompleteLength));
    setUserIDLoading(false);
  };
  const fetchProductRecords = async (value) => {
    setProductLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listProducts.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listProducts?.items;
      var loaded = result.filter(
        (item) => !productIdSet.has(getIDValue.product?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setProductRecords(newOptions.slice(0, autocompleteLength));
    setProductLoading(false);
  };
  React.useEffect(() => {
    fetchUserIDRecords("");
    fetchProductRecords("");
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
          date: date ?? null,
          status: status ?? null,
          trackingNumber: trackingNumber ?? null,
          totalPrice: totalPrice ?? null,
          userID,
          product: product ?? null,
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
          const productToLink = [];
          const productToUnLink = [];
          const productSet = new Set();
          const linkedProductSet = new Set();
          product.forEach((r) => productSet.add(getIDValue.product?.(r)));
          linkedProduct.forEach((r) =>
            linkedProductSet.add(getIDValue.product?.(r))
          );
          linkedProduct.forEach((r) => {
            if (!productSet.has(getIDValue.product?.(r))) {
              productToUnLink.push(r);
            }
          });
          product.forEach((r) => {
            if (!linkedProductSet.has(getIDValue.product?.(r))) {
              productToLink.push(r);
            }
          });
          productToUnLink.forEach((original) => {
            if (!canUnlinkProduct) {
              throw Error(
                `Product ${original.id} cannot be unlinked from Order because orderID is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateProduct.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    orderID: null,
                  },
                },
              })
            );
          });
          productToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateProduct.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    orderID: orderRecord.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            date: modelFields.date ?? null,
            status: modelFields.status ?? null,
            trackingNumber: modelFields.trackingNumber ?? null,
            totalPrice: modelFields.totalPrice ?? null,
            userID: modelFields.userID,
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
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={date && convertToLocal(new Date(date))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              date: value,
              status,
              trackingNumber,
              totalPrice,
              userID,
              product,
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
              date,
              status: value,
              trackingNumber,
              totalPrice,
              userID,
              product,
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
        label="Tracking number"
        isRequired={false}
        isReadOnly={false}
        value={trackingNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              status,
              trackingNumber: value,
              totalPrice,
              userID,
              product,
            };
            const result = onChange(modelFields);
            value = result?.trackingNumber ?? value;
          }
          if (errors.trackingNumber?.hasError) {
            runValidationTasks("trackingNumber", value);
          }
          setTrackingNumber(value);
        }}
        onBlur={() => runValidationTasks("trackingNumber", trackingNumber)}
        errorMessage={errors.trackingNumber?.errorMessage}
        hasError={errors.trackingNumber?.hasError}
        {...getOverrideProps(overrides, "trackingNumber")}
      ></TextField>
      <TextField
        label="Total price"
        isRequired={false}
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
              date,
              status,
              trackingNumber,
              totalPrice: value,
              userID,
              product,
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
              date,
              status,
              trackingNumber,
              totalPrice,
              userID: value,
              product,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          setUserID(value);
          setCurrentUserIDValue(undefined);
        }}
        currentFieldValue={currentUserIDValue}
        label={"User id"}
        items={userID ? [userID] : []}
        hasError={errors?.userID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("userID", currentUserIDValue)
        }
        errorMessage={errors?.userID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.userID(
                userIDRecords.find((r) => r.id === value) ??
                  selectedUserIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentUserIDDisplayValue(
            value
              ? getDisplayValue.userID(
                  userIDRecords.find((r) => r.id === value) ??
                    selectedUserIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentUserIDValue(value);
          const selectedRecord = userIDRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedUserIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={userIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="User id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search User"
          value={currentUserIDDisplayValue}
          options={userIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.userID?.(r),
            }))}
          isLoading={userIDLoading}
          onSelect={({ id, label }) => {
            setCurrentUserIDValue(id);
            setCurrentUserIDDisplayValue(label);
            runValidationTasks("userID", label);
          }}
          onClear={() => {
            setCurrentUserIDDisplayValue("");
          }}
          defaultValue={userID}
          onChange={(e) => {
            let { value } = e.target;
            fetchUserIDRecords(value);
            if (errors.userID?.hasError) {
              runValidationTasks("userID", value);
            }
            setCurrentUserIDDisplayValue(value);
            setCurrentUserIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("userID", currentUserIDValue)}
          errorMessage={errors.userID?.errorMessage}
          hasError={errors.userID?.hasError}
          ref={userIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "userID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              date,
              status,
              trackingNumber,
              totalPrice,
              userID,
              product: values,
            };
            const result = onChange(modelFields);
            values = result?.product ?? values;
          }
          setProduct(values);
          setCurrentProductValue(undefined);
          setCurrentProductDisplayValue("");
        }}
        currentFieldValue={currentProductValue}
        label={"Product"}
        items={product}
        hasError={errors?.product?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("product", currentProductValue)
        }
        errorMessage={errors?.product?.errorMessage}
        getBadgeText={getDisplayValue.product}
        setFieldValue={(model) => {
          setCurrentProductDisplayValue(
            model ? getDisplayValue.product(model) : ""
          );
          setCurrentProductValue(model);
        }}
        inputFieldRef={productRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Product"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Product"
          value={currentProductDisplayValue}
          options={productRecords
            .filter((r) => !productIdSet.has(getIDValue.product?.(r)))
            .map((r) => ({
              id: getIDValue.product?.(r),
              label: getDisplayValue.product?.(r),
            }))}
          isLoading={productLoading}
          onSelect={({ id, label }) => {
            setCurrentProductValue(
              productRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentProductDisplayValue(label);
            runValidationTasks("product", label);
          }}
          onClear={() => {
            setCurrentProductDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchProductRecords(value);
            if (errors.product?.hasError) {
              runValidationTasks("product", value);
            }
            setCurrentProductDisplayValue(value);
            setCurrentProductValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("product", currentProductDisplayValue)
          }
          errorMessage={errors.product?.errorMessage}
          hasError={errors.product?.hasError}
          ref={productRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "product")}
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
