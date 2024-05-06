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
  getOrder,
  getOrderItem,
  listImages,
  listOrders,
} from "../graphql/queries";
import { updateOrderItem } from "../graphql/mutations";
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
export default function OrderItemUpdateForm(props) {
  const {
    id: idProp,
    orderItem: orderItemModelProp,
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
    price: "",
    quantity: "",
    Image: undefined,
    orderID: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [price, setPrice] = React.useState(initialValues.price);
  const [quantity, setQuantity] = React.useState(initialValues.quantity);
  const [Image, setImage] = React.useState(initialValues.Image);
  const [ImageLoading, setImageLoading] = React.useState(false);
  const [imageRecords, setImageRecords] = React.useState([]);
  const [orderID, setOrderID] = React.useState(initialValues.orderID);
  const [orderIDLoading, setOrderIDLoading] = React.useState(false);
  const [orderIDRecords, setOrderIDRecords] = React.useState([]);
  const [selectedOrderIDRecords, setSelectedOrderIDRecords] = React.useState(
    []
  );
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = orderItemRecord
      ? { ...initialValues, ...orderItemRecord, Image, orderID }
      : initialValues;
    setName(cleanValues.name);
    setPrice(cleanValues.price);
    setQuantity(cleanValues.quantity);
    setImage(cleanValues.Image);
    setCurrentImageValue(undefined);
    setCurrentImageDisplayValue("");
    setOrderID(cleanValues.orderID);
    setCurrentOrderIDValue(undefined);
    setCurrentOrderIDDisplayValue("");
    setErrors({});
  };
  const [orderItemRecord, setOrderItemRecord] =
    React.useState(orderItemModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getOrderItem.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOrderItem
        : orderItemModelProp;
      const ImageRecord = record ? await record.Image : undefined;
      setImage(ImageRecord);
      const orderIDRecord = record ? record.orderID : undefined;
      const orderRecord = orderIDRecord
        ? (
            await client.graphql({
              query: getOrder.replaceAll("__typename", ""),
              variables: { id: orderIDRecord },
            })
          )?.data?.getOrder
        : undefined;
      setOrderID(orderIDRecord);
      setSelectedOrderIDRecords([orderRecord]);
      setOrderItemRecord(record);
    };
    queryData();
  }, [idProp, orderItemModelProp]);
  React.useEffect(resetStateValues, [orderItemRecord, Image, orderID]);
  const [currentImageDisplayValue, setCurrentImageDisplayValue] =
    React.useState("");
  const [currentImageValue, setCurrentImageValue] = React.useState(undefined);
  const ImageRef = React.createRef();
  const [currentOrderIDDisplayValue, setCurrentOrderIDDisplayValue] =
    React.useState("");
  const [currentOrderIDValue, setCurrentOrderIDValue] =
    React.useState(undefined);
  const orderIDRef = React.createRef();
  const getIDValue = {
    Image: (r) => JSON.stringify({ id: r?.id }),
  };
  const ImageIdSet = new Set(
    Array.isArray(Image)
      ? Image.map((r) => getIDValue.Image?.(r))
      : getIDValue.Image?.(Image)
  );
  const getDisplayValue = {
    Image: (r) => `${r?.url ? r?.url + " - " : ""}${r?.id}`,
    orderID: (r) => `${r?.totalPrice ? r?.totalPrice + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    price: [],
    quantity: [],
    Image: [],
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
  const fetchImageRecords = async (value) => {
    setImageLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ url: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listImages.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listImages?.items;
      var loaded = result.filter(
        (item) => !ImageIdSet.has(getIDValue.Image?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setImageRecords(newOptions.slice(0, autocompleteLength));
    setImageLoading(false);
  };
  const fetchOrderIDRecords = async (value) => {
    setOrderIDLoading(true);
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
      var loaded = result.filter((item) => orderID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setOrderIDRecords(newOptions.slice(0, autocompleteLength));
    setOrderIDLoading(false);
  };
  React.useEffect(() => {
    fetchImageRecords("");
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
          name: name ?? null,
          price: price ?? null,
          quantity: quantity ?? null,
          Image: Image ?? null,
          orderID,
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
            name: modelFields.name ?? null,
            price: modelFields.price ?? null,
            quantity: modelFields.quantity ?? null,
            orderItemImageId: modelFields?.Image?.id ?? null,
            orderID: modelFields.orderID,
          };
          await client.graphql({
            query: updateOrderItem.replaceAll("__typename", ""),
            variables: {
              input: {
                id: orderItemRecord.id,
                ...modelFieldsToSave,
              },
            },
          });
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
      {...getOverrideProps(overrides, "OrderItemUpdateForm")}
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
              price,
              quantity,
              Image,
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
              price: value,
              quantity,
              Image,
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
      <TextField
        label="Quantity"
        isRequired={false}
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
              name,
              price,
              quantity: value,
              Image,
              orderID,
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
              name,
              price,
              quantity,
              Image: value,
              orderID,
            };
            const result = onChange(modelFields);
            value = result?.Image ?? value;
          }
          setImage(value);
          setCurrentImageValue(undefined);
          setCurrentImageDisplayValue("");
        }}
        currentFieldValue={currentImageValue}
        label={"Image"}
        items={Image ? [Image] : []}
        hasError={errors?.Image?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Image", currentImageValue)
        }
        errorMessage={errors?.Image?.errorMessage}
        getBadgeText={getDisplayValue.Image}
        setFieldValue={(model) => {
          setCurrentImageDisplayValue(
            model ? getDisplayValue.Image(model) : ""
          );
          setCurrentImageValue(model);
        }}
        inputFieldRef={ImageRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Image"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Image"
          value={currentImageDisplayValue}
          options={imageRecords
            .filter((r) => !ImageIdSet.has(getIDValue.Image?.(r)))
            .map((r) => ({
              id: getIDValue.Image?.(r),
              label: getDisplayValue.Image?.(r),
            }))}
          isLoading={ImageLoading}
          onSelect={({ id, label }) => {
            setCurrentImageValue(
              imageRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentImageDisplayValue(label);
            runValidationTasks("Image", label);
          }}
          onClear={() => {
            setCurrentImageDisplayValue("");
          }}
          defaultValue={Image}
          onChange={(e) => {
            let { value } = e.target;
            fetchImageRecords(value);
            if (errors.Image?.hasError) {
              runValidationTasks("Image", value);
            }
            setCurrentImageDisplayValue(value);
            setCurrentImageValue(undefined);
          }}
          onBlur={() => runValidationTasks("Image", currentImageDisplayValue)}
          errorMessage={errors.Image?.errorMessage}
          hasError={errors.Image?.hasError}
          ref={ImageRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Image")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              price,
              quantity,
              Image,
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
          defaultValue={orderID}
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || orderItemModelProp)}
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
              !(idProp || orderItemModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
