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
  getProduct,
  listImages,
  listProductQuantities,
} from "../graphql/queries";
import { updateProduct, updateProductQuantity } from "../graphql/mutations";
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
export default function ProductUpdateForm(props) {
  const {
    id: idProp,
    product: productModelProp,
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
    image: undefined,
    price: "",
    quantities: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [image, setImage] = React.useState(initialValues.image);
  const [imageLoading, setImageLoading] = React.useState(false);
  const [imageRecords, setImageRecords] = React.useState([]);
  const [price, setPrice] = React.useState(initialValues.price);
  const [quantities, setQuantities] = React.useState(initialValues.quantities);
  const [quantitiesLoading, setQuantitiesLoading] = React.useState(false);
  const [quantitiesRecords, setQuantitiesRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = productRecord
      ? {
          ...initialValues,
          ...productRecord,
          image,
          quantities: linkedQuantities,
        }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setImage(cleanValues.image);
    setCurrentImageValue(undefined);
    setCurrentImageDisplayValue("");
    setPrice(cleanValues.price);
    setQuantities(cleanValues.quantities ?? []);
    setCurrentQuantitiesValue(undefined);
    setCurrentQuantitiesDisplayValue("");
    setErrors({});
  };
  const [productRecord, setProductRecord] = React.useState(productModelProp);
  const [linkedQuantities, setLinkedQuantities] = React.useState([]);
  const canUnlinkQuantities = true;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getProduct.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getProduct
        : productModelProp;
      const imageRecord = record ? await record.image : undefined;
      setImage(imageRecord);
      const linkedQuantities = record?.quantities?.items ?? [];
      setLinkedQuantities(linkedQuantities);
      setProductRecord(record);
    };
    queryData();
  }, [idProp, productModelProp]);
  React.useEffect(resetStateValues, [productRecord, image, linkedQuantities]);
  const [currentImageDisplayValue, setCurrentImageDisplayValue] =
    React.useState("");
  const [currentImageValue, setCurrentImageValue] = React.useState(undefined);
  const imageRef = React.createRef();
  const [currentQuantitiesDisplayValue, setCurrentQuantitiesDisplayValue] =
    React.useState("");
  const [currentQuantitiesValue, setCurrentQuantitiesValue] =
    React.useState(undefined);
  const quantitiesRef = React.createRef();
  const getIDValue = {
    image: (r) => JSON.stringify({ id: r?.id }),
    quantities: (r) => JSON.stringify({ id: r?.id }),
  };
  const imageIdSet = new Set(
    Array.isArray(image)
      ? image.map((r) => getIDValue.image?.(r))
      : getIDValue.image?.(image)
  );
  const quantitiesIdSet = new Set(
    Array.isArray(quantities)
      ? quantities.map((r) => getIDValue.quantities?.(r))
      : getIDValue.quantities?.(quantities)
  );
  const getDisplayValue = {
    image: (r) => `${r?.url ? r?.url + " - " : ""}${r?.id}`,
    quantities: (r) => `${r?.quantity ? r?.quantity + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    image: [],
    price: [{ type: "Required" }],
    quantities: [],
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
        (item) => !imageIdSet.has(getIDValue.image?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setImageRecords(newOptions.slice(0, autocompleteLength));
    setImageLoading(false);
  };
  const fetchQuantitiesRecords = async (value) => {
    setQuantitiesLoading(true);
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
        (item) => !quantitiesIdSet.has(getIDValue.quantities?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setQuantitiesRecords(newOptions.slice(0, autocompleteLength));
    setQuantitiesLoading(false);
  };
  React.useEffect(() => {
    fetchImageRecords("");
    fetchQuantitiesRecords("");
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
          description: description ?? null,
          image: image ?? null,
          price,
          quantities: quantities ?? null,
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
          const quantitiesToLink = [];
          const quantitiesToUnLink = [];
          const quantitiesSet = new Set();
          const linkedQuantitiesSet = new Set();
          quantities.forEach((r) =>
            quantitiesSet.add(getIDValue.quantities?.(r))
          );
          linkedQuantities.forEach((r) =>
            linkedQuantitiesSet.add(getIDValue.quantities?.(r))
          );
          linkedQuantities.forEach((r) => {
            if (!quantitiesSet.has(getIDValue.quantities?.(r))) {
              quantitiesToUnLink.push(r);
            }
          });
          quantities.forEach((r) => {
            if (!linkedQuantitiesSet.has(getIDValue.quantities?.(r))) {
              quantitiesToLink.push(r);
            }
          });
          quantitiesToUnLink.forEach((original) => {
            if (!canUnlinkQuantities) {
              throw Error(
                `ProductQuantity ${original.id} cannot be unlinked from Product because productQuantitiesId is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateProductQuantity.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    productQuantitiesId: null,
                  },
                },
              })
            );
          });
          quantitiesToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateProductQuantity.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    productQuantitiesId: productRecord.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            description: modelFields.description ?? null,
            productImageId: modelFields?.image?.id ?? null,
            price: modelFields.price,
          };
          promises.push(
            client.graphql({
              query: updateProduct.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: productRecord.id,
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
      {...getOverrideProps(overrides, "ProductUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
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
              quantities,
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
              quantities,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              description,
              image: value,
              price,
              quantities,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          setImage(value);
          setCurrentImageValue(undefined);
          setCurrentImageDisplayValue("");
        }}
        currentFieldValue={currentImageValue}
        label={"Image"}
        items={image ? [image] : []}
        hasError={errors?.image?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("image", currentImageValue)
        }
        errorMessage={errors?.image?.errorMessage}
        getBadgeText={getDisplayValue.image}
        setFieldValue={(model) => {
          setCurrentImageDisplayValue(
            model ? getDisplayValue.image(model) : ""
          );
          setCurrentImageValue(model);
        }}
        inputFieldRef={imageRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Image"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Image"
          value={currentImageDisplayValue}
          options={imageRecords
            .filter((r) => !imageIdSet.has(getIDValue.image?.(r)))
            .map((r) => ({
              id: getIDValue.image?.(r),
              label: getDisplayValue.image?.(r),
            }))}
          isLoading={imageLoading}
          onSelect={({ id, label }) => {
            setCurrentImageValue(
              imageRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentImageDisplayValue(label);
            runValidationTasks("image", label);
          }}
          onClear={() => {
            setCurrentImageDisplayValue("");
          }}
          defaultValue={image}
          onChange={(e) => {
            let { value } = e.target;
            fetchImageRecords(value);
            if (errors.image?.hasError) {
              runValidationTasks("image", value);
            }
            setCurrentImageDisplayValue(value);
            setCurrentImageValue(undefined);
          }}
          onBlur={() => runValidationTasks("image", currentImageDisplayValue)}
          errorMessage={errors.image?.errorMessage}
          hasError={errors.image?.hasError}
          ref={imageRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "image")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Price"
        isRequired={true}
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
              quantities,
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
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              description,
              image,
              price,
              quantities: values,
            };
            const result = onChange(modelFields);
            values = result?.quantities ?? values;
          }
          setQuantities(values);
          setCurrentQuantitiesValue(undefined);
          setCurrentQuantitiesDisplayValue("");
        }}
        currentFieldValue={currentQuantitiesValue}
        label={"Quantities"}
        items={quantities}
        hasError={errors?.quantities?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("quantities", currentQuantitiesValue)
        }
        errorMessage={errors?.quantities?.errorMessage}
        getBadgeText={getDisplayValue.quantities}
        setFieldValue={(model) => {
          setCurrentQuantitiesDisplayValue(
            model ? getDisplayValue.quantities(model) : ""
          );
          setCurrentQuantitiesValue(model);
        }}
        inputFieldRef={quantitiesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Quantities"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ProductQuantity"
          value={currentQuantitiesDisplayValue}
          options={quantitiesRecords.map((r) => ({
            id: getIDValue.quantities?.(r),
            label: getDisplayValue.quantities?.(r),
          }))}
          isLoading={quantitiesLoading}
          onSelect={({ id, label }) => {
            setCurrentQuantitiesValue(
              quantitiesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentQuantitiesDisplayValue(label);
            runValidationTasks("quantities", label);
          }}
          onClear={() => {
            setCurrentQuantitiesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchQuantitiesRecords(value);
            if (errors.quantities?.hasError) {
              runValidationTasks("quantities", value);
            }
            setCurrentQuantitiesDisplayValue(value);
            setCurrentQuantitiesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("quantities", currentQuantitiesDisplayValue)
          }
          errorMessage={errors.quantities?.errorMessage}
          hasError={errors.quantities?.hasError}
          ref={quantitiesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "quantities")}
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
          isDisabled={!(idProp || productModelProp)}
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
              !(idProp || productModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
