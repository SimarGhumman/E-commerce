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
import {
  listOrders,
  listProducts,
  listShoppingCarts,
} from "../graphql/queries";
import { createProductQuantity } from "../graphql/mutations";
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
export default function ProductQuantityCreateForm(props) {
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
    product: undefined,
    quantity: "",
    orderProductsId: undefined,
    shoppingCartProductsId: undefined,
    productQuantitiesId: undefined,
  };
  const [product, setProduct] = React.useState(initialValues.product);
  const [productLoading, setProductLoading] = React.useState(false);
  const [productRecords, setProductRecords] = React.useState([]);
  const [quantity, setQuantity] = React.useState(initialValues.quantity);
  const [orderProductsId, setOrderProductsId] = React.useState(
    initialValues.orderProductsId
  );
  const [orderProductsIdLoading, setOrderProductsIdLoading] =
    React.useState(false);
  const [orderProductsIdRecords, setOrderProductsIdRecords] = React.useState(
    []
  );
  const [selectedOrderProductsIdRecords, setSelectedOrderProductsIdRecords] =
    React.useState([]);
  const [shoppingCartProductsId, setShoppingCartProductsId] = React.useState(
    initialValues.shoppingCartProductsId
  );
  const [shoppingCartProductsIdLoading, setShoppingCartProductsIdLoading] =
    React.useState(false);
  const [shoppingCartProductsIdRecords, setShoppingCartProductsIdRecords] =
    React.useState([]);
  const [
    selectedShoppingCartProductsIdRecords,
    setSelectedShoppingCartProductsIdRecords,
  ] = React.useState([]);
  const [productQuantitiesId, setProductQuantitiesId] = React.useState(
    initialValues.productQuantitiesId
  );
  const [productQuantitiesIdLoading, setProductQuantitiesIdLoading] =
    React.useState(false);
  const [productQuantitiesIdRecords, setProductQuantitiesIdRecords] =
    React.useState([]);
  const [
    selectedProductQuantitiesIdRecords,
    setSelectedProductQuantitiesIdRecords,
  ] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setProduct(initialValues.product);
    setCurrentProductValue(undefined);
    setCurrentProductDisplayValue("");
    setQuantity(initialValues.quantity);
    setOrderProductsId(initialValues.orderProductsId);
    setCurrentOrderProductsIdValue(undefined);
    setCurrentOrderProductsIdDisplayValue("");
    setShoppingCartProductsId(initialValues.shoppingCartProductsId);
    setCurrentShoppingCartProductsIdValue(undefined);
    setCurrentShoppingCartProductsIdDisplayValue("");
    setProductQuantitiesId(initialValues.productQuantitiesId);
    setCurrentProductQuantitiesIdValue(undefined);
    setCurrentProductQuantitiesIdDisplayValue("");
    setErrors({});
  };
  const [currentProductDisplayValue, setCurrentProductDisplayValue] =
    React.useState("");
  const [currentProductValue, setCurrentProductValue] =
    React.useState(undefined);
  const productRef = React.createRef();
  const [
    currentOrderProductsIdDisplayValue,
    setCurrentOrderProductsIdDisplayValue,
  ] = React.useState("");
  const [currentOrderProductsIdValue, setCurrentOrderProductsIdValue] =
    React.useState(undefined);
  const orderProductsIdRef = React.createRef();
  const [
    currentShoppingCartProductsIdDisplayValue,
    setCurrentShoppingCartProductsIdDisplayValue,
  ] = React.useState("");
  const [
    currentShoppingCartProductsIdValue,
    setCurrentShoppingCartProductsIdValue,
  ] = React.useState(undefined);
  const shoppingCartProductsIdRef = React.createRef();
  const [
    currentProductQuantitiesIdDisplayValue,
    setCurrentProductQuantitiesIdDisplayValue,
  ] = React.useState("");
  const [currentProductQuantitiesIdValue, setCurrentProductQuantitiesIdValue] =
    React.useState(undefined);
  const productQuantitiesIdRef = React.createRef();
  const getIDValue = {
    product: (r) => JSON.stringify({ id: r?.id }),
  };
  const productIdSet = new Set(
    Array.isArray(product)
      ? product.map((r) => getIDValue.product?.(r))
      : getIDValue.product?.(product)
  );
  const getDisplayValue = {
    product: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    orderProductsId: (r) => `${r?.status ? r?.status + " - " : ""}${r?.id}`,
    shoppingCartProductsId: (r) => r?.id,
    productQuantitiesId: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    product: [],
    quantity: [{ type: "Required" }],
    orderProductsId: [],
    shoppingCartProductsId: [],
    productQuantitiesId: [],
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
  const fetchOrderProductsIdRecords = async (value) => {
    setOrderProductsIdLoading(true);
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
      var loaded = result.filter((item) => orderProductsId !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setOrderProductsIdRecords(newOptions.slice(0, autocompleteLength));
    setOrderProductsIdLoading(false);
  };
  const fetchShoppingCartProductsIdRecords = async (value) => {
    setShoppingCartProductsIdLoading(true);
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
      var loaded = result.filter((item) => shoppingCartProductsId !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setShoppingCartProductsIdRecords(newOptions.slice(0, autocompleteLength));
    setShoppingCartProductsIdLoading(false);
  };
  const fetchProductQuantitiesIdRecords = async (value) => {
    setProductQuantitiesIdLoading(true);
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
      var loaded = result.filter((item) => productQuantitiesId !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setProductQuantitiesIdRecords(newOptions.slice(0, autocompleteLength));
    setProductQuantitiesIdLoading(false);
  };
  React.useEffect(() => {
    fetchProductRecords("");
    fetchOrderProductsIdRecords("");
    fetchShoppingCartProductsIdRecords("");
    fetchProductQuantitiesIdRecords("");
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
          product,
          quantity,
          orderProductsId,
          shoppingCartProductsId,
          productQuantitiesId,
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
            productID: modelFields?.product?.id,
            quantity: modelFields.quantity,
            orderProductsId: modelFields.orderProductsId,
            shoppingCartProductsId: modelFields.shoppingCartProductsId,
            productQuantitiesId: modelFields.productQuantitiesId,
          };
          await client.graphql({
            query: createProductQuantity.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFieldsToSave,
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
      {...getOverrideProps(overrides, "ProductQuantityCreateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              product: value,
              quantity,
              orderProductsId,
              shoppingCartProductsId,
              productQuantitiesId,
            };
            const result = onChange(modelFields);
            value = result?.product ?? value;
          }
          setProduct(value);
          setCurrentProductValue(undefined);
          setCurrentProductDisplayValue("");
        }}
        currentFieldValue={currentProductValue}
        label={"Product"}
        items={product ? [product] : []}
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
      <TextField
        label="Quantity"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={quantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              product,
              quantity: value,
              orderProductsId,
              shoppingCartProductsId,
              productQuantitiesId,
            };
            const result = onChange(modelFields);
            value = result?.quantity ?? value;
          }
          if (errors.quantity?.hasError) {
            runValidationTasks("quantity", value);
          }
          setQuantity(value);
        }}
        onBlur={() => runValidationTasks("quantity", quantity)}
        errorMessage={errors.quantity?.errorMessage}
        hasError={errors.quantity?.hasError}
        {...getOverrideProps(overrides, "quantity")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              product,
              quantity,
              orderProductsId: value,
              shoppingCartProductsId,
              productQuantitiesId,
            };
            const result = onChange(modelFields);
            value = result?.orderProductsId ?? value;
          }
          setOrderProductsId(value);
          setCurrentOrderProductsIdValue(undefined);
        }}
        currentFieldValue={currentOrderProductsIdValue}
        label={"Order products id"}
        items={orderProductsId ? [orderProductsId] : []}
        hasError={errors?.orderProductsId?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "orderProductsId",
            currentOrderProductsIdValue
          )
        }
        errorMessage={errors?.orderProductsId?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.orderProductsId(
                orderProductsIdRecords.find((r) => r.id === value) ??
                  selectedOrderProductsIdRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentOrderProductsIdDisplayValue(
            value
              ? getDisplayValue.orderProductsId(
                  orderProductsIdRecords.find((r) => r.id === value) ??
                    selectedOrderProductsIdRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentOrderProductsIdValue(value);
          const selectedRecord = orderProductsIdRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedOrderProductsIdRecords([selectedRecord]);
          }
        }}
        inputFieldRef={orderProductsIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Order products id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Order"
          value={currentOrderProductsIdDisplayValue}
          options={orderProductsIdRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.orderProductsId?.(r),
            }))}
          isLoading={orderProductsIdLoading}
          onSelect={({ id, label }) => {
            setCurrentOrderProductsIdValue(id);
            setCurrentOrderProductsIdDisplayValue(label);
            runValidationTasks("orderProductsId", label);
          }}
          onClear={() => {
            setCurrentOrderProductsIdDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchOrderProductsIdRecords(value);
            if (errors.orderProductsId?.hasError) {
              runValidationTasks("orderProductsId", value);
            }
            setCurrentOrderProductsIdDisplayValue(value);
            setCurrentOrderProductsIdValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("orderProductsId", currentOrderProductsIdValue)
          }
          errorMessage={errors.orderProductsId?.errorMessage}
          hasError={errors.orderProductsId?.hasError}
          ref={orderProductsIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "orderProductsId")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              product,
              quantity,
              orderProductsId,
              shoppingCartProductsId: value,
              productQuantitiesId,
            };
            const result = onChange(modelFields);
            value = result?.shoppingCartProductsId ?? value;
          }
          setShoppingCartProductsId(value);
          setCurrentShoppingCartProductsIdValue(undefined);
        }}
        currentFieldValue={currentShoppingCartProductsIdValue}
        label={"Shopping cart products id"}
        items={shoppingCartProductsId ? [shoppingCartProductsId] : []}
        hasError={errors?.shoppingCartProductsId?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "shoppingCartProductsId",
            currentShoppingCartProductsIdValue
          )
        }
        errorMessage={errors?.shoppingCartProductsId?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.shoppingCartProductsId(
                shoppingCartProductsIdRecords.find((r) => r.id === value) ??
                  selectedShoppingCartProductsIdRecords.find(
                    (r) => r.id === value
                  )
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentShoppingCartProductsIdDisplayValue(
            value
              ? getDisplayValue.shoppingCartProductsId(
                  shoppingCartProductsIdRecords.find((r) => r.id === value) ??
                    selectedShoppingCartProductsIdRecords.find(
                      (r) => r.id === value
                    )
                )
              : ""
          );
          setCurrentShoppingCartProductsIdValue(value);
          const selectedRecord = shoppingCartProductsIdRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedShoppingCartProductsIdRecords([selectedRecord]);
          }
        }}
        inputFieldRef={shoppingCartProductsIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Shopping cart products id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ShoppingCart"
          value={currentShoppingCartProductsIdDisplayValue}
          options={shoppingCartProductsIdRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.shoppingCartProductsId?.(r),
            }))}
          isLoading={shoppingCartProductsIdLoading}
          onSelect={({ id, label }) => {
            setCurrentShoppingCartProductsIdValue(id);
            setCurrentShoppingCartProductsIdDisplayValue(label);
            runValidationTasks("shoppingCartProductsId", label);
          }}
          onClear={() => {
            setCurrentShoppingCartProductsIdDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchShoppingCartProductsIdRecords(value);
            if (errors.shoppingCartProductsId?.hasError) {
              runValidationTasks("shoppingCartProductsId", value);
            }
            setCurrentShoppingCartProductsIdDisplayValue(value);
            setCurrentShoppingCartProductsIdValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "shoppingCartProductsId",
              currentShoppingCartProductsIdValue
            )
          }
          errorMessage={errors.shoppingCartProductsId?.errorMessage}
          hasError={errors.shoppingCartProductsId?.hasError}
          ref={shoppingCartProductsIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "shoppingCartProductsId")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              product,
              quantity,
              orderProductsId,
              shoppingCartProductsId,
              productQuantitiesId: value,
            };
            const result = onChange(modelFields);
            value = result?.productQuantitiesId ?? value;
          }
          setProductQuantitiesId(value);
          setCurrentProductQuantitiesIdValue(undefined);
        }}
        currentFieldValue={currentProductQuantitiesIdValue}
        label={"Product quantities id"}
        items={productQuantitiesId ? [productQuantitiesId] : []}
        hasError={errors?.productQuantitiesId?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "productQuantitiesId",
            currentProductQuantitiesIdValue
          )
        }
        errorMessage={errors?.productQuantitiesId?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.productQuantitiesId(
                productQuantitiesIdRecords.find((r) => r.id === value) ??
                  selectedProductQuantitiesIdRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentProductQuantitiesIdDisplayValue(
            value
              ? getDisplayValue.productQuantitiesId(
                  productQuantitiesIdRecords.find((r) => r.id === value) ??
                    selectedProductQuantitiesIdRecords.find(
                      (r) => r.id === value
                    )
                )
              : ""
          );
          setCurrentProductQuantitiesIdValue(value);
          const selectedRecord = productQuantitiesIdRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedProductQuantitiesIdRecords([selectedRecord]);
          }
        }}
        inputFieldRef={productQuantitiesIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Product quantities id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Product"
          value={currentProductQuantitiesIdDisplayValue}
          options={productQuantitiesIdRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.productQuantitiesId?.(r),
            }))}
          isLoading={productQuantitiesIdLoading}
          onSelect={({ id, label }) => {
            setCurrentProductQuantitiesIdValue(id);
            setCurrentProductQuantitiesIdDisplayValue(label);
            runValidationTasks("productQuantitiesId", label);
          }}
          onClear={() => {
            setCurrentProductQuantitiesIdDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchProductQuantitiesIdRecords(value);
            if (errors.productQuantitiesId?.hasError) {
              runValidationTasks("productQuantitiesId", value);
            }
            setCurrentProductQuantitiesIdDisplayValue(value);
            setCurrentProductQuantitiesIdValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "productQuantitiesId",
              currentProductQuantitiesIdValue
            )
          }
          errorMessage={errors.productQuantitiesId?.errorMessage}
          hasError={errors.productQuantitiesId?.hasError}
          ref={productQuantitiesIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "productQuantitiesId")}
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
