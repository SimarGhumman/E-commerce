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
import { createProduct } from "../graphql/mutations";
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
export default function ProductCreateForm(props) {
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
    name: "",
    description: "",
    image: "",
    price: "",
    shoppingcartID: undefined,
    orderID: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [image, setImage] = React.useState(initialValues.image);
  const [price, setPrice] = React.useState(initialValues.price);
  const [shoppingcartID, setShoppingcartID] = React.useState(
    initialValues.shoppingcartID
  );
  const [shoppingcartIDLoading, setShoppingcartIDLoading] =
    React.useState(false);
  const [shoppingcartIDRecords, setShoppingcartIDRecords] = React.useState([]);
  const [selectedShoppingcartIDRecords, setSelectedShoppingcartIDRecords] =
    React.useState([]);
  const [orderID, setOrderID] = React.useState(initialValues.orderID);
  const [orderIDLoading, setOrderIDLoading] = React.useState(false);
  const [orderIDRecords, setOrderIDRecords] = React.useState([]);
  const [selectedOrderIDRecords, setSelectedOrderIDRecords] = React.useState(
    []
  );
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDescription(initialValues.description);
    setImage(initialValues.image);
    setPrice(initialValues.price);
    setShoppingcartID(initialValues.shoppingcartID);
    setCurrentShoppingcartIDValue(undefined);
    setCurrentShoppingcartIDDisplayValue("");
    setOrderID(initialValues.orderID);
    setCurrentOrderIDValue(undefined);
    setCurrentOrderIDDisplayValue("");
    setErrors({});
  };
  const [
    currentShoppingcartIDDisplayValue,
    setCurrentShoppingcartIDDisplayValue,
  ] = React.useState("");
  const [currentShoppingcartIDValue, setCurrentShoppingcartIDValue] =
    React.useState(undefined);
  const shoppingcartIDRef = React.createRef();
  const [currentOrderIDDisplayValue, setCurrentOrderIDDisplayValue] =
    React.useState("");
  const [currentOrderIDValue, setCurrentOrderIDValue] =
    React.useState(undefined);
  const orderIDRef = React.createRef();
  const getDisplayValue = {
    shoppingcartID: (r) => r?.id,
    orderID: (r) => `${r?.status ? r?.status + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    description: [],
    image: [],
    price: [],
    shoppingcartID: [{ type: "Required" }],
    orderID: [{ type: "Required" }],
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
  const fetchShoppingcartIDRecords = async (value) => {
    setShoppingcartIDLoading(true);
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
      var loaded = result.filter((item) => shoppingcartID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setShoppingcartIDRecords(newOptions.slice(0, autocompleteLength));
    setShoppingcartIDLoading(false);
  };
  const fetchOrderIDRecords = async (value) => {
    setOrderIDLoading(true);
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
      var loaded = result.filter((item) => orderID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setOrderIDRecords(newOptions.slice(0, autocompleteLength));
    setOrderIDLoading(false);
  };
  React.useEffect(() => {
    fetchShoppingcartIDRecords("");
    fetchOrderIDRecords("");
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
          name,
          description,
          image,
          price,
          shoppingcartID,
          orderID,
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
            query: createProduct.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ProductCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              image,
              price,
              shoppingcartID,
              orderID,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              image,
              price,
              shoppingcartID,
              orderID,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              image: value,
              price,
              shoppingcartID,
              orderID,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              image,
              price: value,
              shoppingcartID,
              orderID,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              description,
              image,
              price,
              shoppingcartID: value,
              orderID,
            };
            const result = onChange(modelFields);
            value = result?.shoppingcartID ?? value;
          }
          setShoppingcartID(value);
          setCurrentShoppingcartIDValue(undefined);
        }}
        currentFieldValue={currentShoppingcartIDValue}
        label={"Shoppingcart id"}
        items={shoppingcartID ? [shoppingcartID] : []}
        hasError={errors?.shoppingcartID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("shoppingcartID", currentShoppingcartIDValue)
        }
        errorMessage={errors?.shoppingcartID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.shoppingcartID(
                shoppingcartIDRecords.find((r) => r.id === value) ??
                  selectedShoppingcartIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentShoppingcartIDDisplayValue(
            value
              ? getDisplayValue.shoppingcartID(
                  shoppingcartIDRecords.find((r) => r.id === value) ??
                    selectedShoppingcartIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentShoppingcartIDValue(value);
          const selectedRecord = shoppingcartIDRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedShoppingcartIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={shoppingcartIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Shoppingcart id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search ShoppingCart"
          value={currentShoppingcartIDDisplayValue}
          options={shoppingcartIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.shoppingcartID?.(r),
            }))}
          isLoading={shoppingcartIDLoading}
          onSelect={({ id, label }) => {
            setCurrentShoppingcartIDValue(id);
            setCurrentShoppingcartIDDisplayValue(label);
            runValidationTasks("shoppingcartID", label);
          }}
          onClear={() => {
            setCurrentShoppingcartIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchShoppingcartIDRecords(value);
            if (errors.shoppingcartID?.hasError) {
              runValidationTasks("shoppingcartID", value);
            }
            setCurrentShoppingcartIDDisplayValue(value);
            setCurrentShoppingcartIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("shoppingcartID", currentShoppingcartIDValue)
          }
          errorMessage={errors.shoppingcartID?.errorMessage}
          hasError={errors.shoppingcartID?.hasError}
          ref={shoppingcartIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "shoppingcartID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              description,
              image,
              price,
              shoppingcartID,
              orderID: value,
            };
            const result = onChange(modelFields);
            value = result?.orderID ?? value;
          }
          setOrderID(value);
          setCurrentOrderIDValue(undefined);
        }}
        currentFieldValue={currentOrderIDValue}
        label={"Order id"}
        items={orderID ? [orderID] : []}
        hasError={errors?.orderID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("orderID", currentOrderIDValue)
        }
        errorMessage={errors?.orderID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.orderID(
                orderIDRecords.find((r) => r.id === value) ??
                  selectedOrderIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentOrderIDDisplayValue(
            value
              ? getDisplayValue.orderID(
                  orderIDRecords.find((r) => r.id === value) ??
                    selectedOrderIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentOrderIDValue(value);
          const selectedRecord = orderIDRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedOrderIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={orderIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Order id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Order"
          value={currentOrderIDDisplayValue}
          options={orderIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.orderID?.(r),
            }))}
          isLoading={orderIDLoading}
          onSelect={({ id, label }) => {
            setCurrentOrderIDValue(id);
            setCurrentOrderIDDisplayValue(label);
            runValidationTasks("orderID", label);
          }}
          onClear={() => {
            setCurrentOrderIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchOrderIDRecords(value);
            if (errors.orderID?.hasError) {
              runValidationTasks("orderID", value);
            }
            setCurrentOrderIDDisplayValue(value);
            setCurrentOrderIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("orderID", currentOrderIDValue)}
          errorMessage={errors.orderID?.errorMessage}
          hasError={errors.orderID?.hasError}
          ref={orderIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "orderID")}
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
