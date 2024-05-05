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
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import {
  getShoppingCart,
  getUser,
  listProducts,
  listUsers,
} from "../graphql/queries";
import { updateProduct, updateShoppingCart } from "../graphql/mutations";
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
export default function ShoppingCartUpdateForm(props) {
  const {
    id: idProp,
    shoppingCart: shoppingCartModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    product: [],
    userID: undefined,
  };
  const [product, setProduct] = React.useState(initialValues.product);
  const [productLoading, setProductLoading] = React.useState(false);
  const [productRecords, setProductRecords] = React.useState([]);
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [userIDLoading, setUserIDLoading] = React.useState(false);
  const [userIDRecords, setUserIDRecords] = React.useState([]);
  const [selectedUserIDRecords, setSelectedUserIDRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = shoppingCartRecord
      ? {
          ...initialValues,
          ...shoppingCartRecord,
          product: linkedProduct,
          userID,
        }
      : initialValues;
    setProduct(cleanValues.product ?? []);
    setCurrentProductValue(undefined);
    setCurrentProductDisplayValue("");
    setUserID(cleanValues.userID);
    setCurrentUserIDValue(undefined);
    setCurrentUserIDDisplayValue("");
    setErrors({});
  };
  const [shoppingCartRecord, setShoppingCartRecord] = React.useState(
    shoppingCartModelProp
  );
  const [linkedProduct, setLinkedProduct] = React.useState([]);
  const canUnlinkProduct = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getShoppingCart.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getShoppingCart
        : shoppingCartModelProp;
      const linkedProduct = record?.product?.items ?? [];
      setLinkedProduct(linkedProduct);
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
      setShoppingCartRecord(record);
    };
    queryData();
  }, [idProp, shoppingCartModelProp]);
  React.useEffect(resetStateValues, [
    shoppingCartRecord,
    linkedProduct,
    userID,
  ]);
  const [currentProductDisplayValue, setCurrentProductDisplayValue] =
    React.useState("");
  const [currentProductValue, setCurrentProductValue] =
    React.useState(undefined);
  const productRef = React.createRef();
  const [currentUserIDDisplayValue, setCurrentUserIDDisplayValue] =
    React.useState("");
  const [currentUserIDValue, setCurrentUserIDValue] = React.useState(undefined);
  const userIDRef = React.createRef();
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
    userID: (r) => `${r?.username ? r?.username + " - " : ""}${r?.id}`,
  };
  const validations = {
    product: [],
    userID: [{ type: "Required" }],
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
  React.useEffect(() => {
    fetchProductRecords("");
    fetchUserIDRecords("");
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
          product: product ?? null,
          userID,
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
                `Product ${original.id} cannot be unlinked from ShoppingCart because shoppingcartID is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateProduct.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    shoppingcartID: null,
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
                    shoppingcartID: shoppingCartRecord.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            userID: modelFields.userID,
          };
          promises.push(
            client.graphql({
              query: updateShoppingCart.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: shoppingCartRecord.id,
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
      {...getOverrideProps(overrides, "ShoppingCartUpdateForm")}
      {...rest}
    >
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              product: values,
              userID,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              product,
              userID: value,
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
          isDisabled={!(idProp || shoppingCartModelProp)}
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
              !(idProp || shoppingCartModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
