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
  listProductQuantities,
  listUsers,
} from "../graphql/queries";
import {
  updateProductQuantity,
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
    user: undefined,
    products: [],
  };
  const [user, setUser] = React.useState(initialValues.user);
  const [userLoading, setUserLoading] = React.useState(false);
  const [userRecords, setUserRecords] = React.useState([]);
  const [products, setProducts] = React.useState(initialValues.products);
  const [productsLoading, setProductsLoading] = React.useState(false);
  const [productsRecords, setProductsRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = shoppingCartRecord
      ? {
          ...initialValues,
          ...shoppingCartRecord,
          user,
          products: linkedProducts,
        }
      : initialValues;
    setUser(cleanValues.user);
    setCurrentUserValue(undefined);
    setCurrentUserDisplayValue("");
    setProducts(cleanValues.products ?? []);
    setCurrentProductsValue(undefined);
    setCurrentProductsDisplayValue("");
    setErrors({});
  };
  const [shoppingCartRecord, setShoppingCartRecord] = React.useState(
    shoppingCartModelProp
  );
  const [linkedProducts, setLinkedProducts] = React.useState([]);
  const canUnlinkProducts = true;
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
      const userRecord = record ? await record.user : undefined;
      setUser(userRecord);
      const linkedProducts = record?.products?.items ?? [];
      setLinkedProducts(linkedProducts);
      setShoppingCartRecord(record);
    };
    queryData();
  }, [idProp, shoppingCartModelProp]);
  React.useEffect(resetStateValues, [shoppingCartRecord, user, linkedProducts]);
  const [currentUserDisplayValue, setCurrentUserDisplayValue] =
    React.useState("");
  const [currentUserValue, setCurrentUserValue] = React.useState(undefined);
  const userRef = React.createRef();
  const [currentProductsDisplayValue, setCurrentProductsDisplayValue] =
    React.useState("");
  const [currentProductsValue, setCurrentProductsValue] =
    React.useState(undefined);
  const productsRef = React.createRef();
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
  };
  const validations = {
    user: [],
    products: [],
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
  React.useEffect(() => {
    fetchUserRecords("");
    fetchProductsRecords("");
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
          const userToUnlink = await shoppingCartRecord.user;
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
          const userToLink = modelFields.user;
          if (userToLink) {
            promises.push(
              client.graphql({
                query: updateUser.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: user.id,
                    userShoppingCartId: shoppingCartRecord.id,
                  },
                },
              })
            );
            const shoppingCartToUnlink = await userToLink.shoppingCart;
            if (shoppingCartToUnlink) {
              promises.push(
                client.graphql({
                  query: updateShoppingCart.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: shoppingCartToUnlink.id,
                      userID: null,
                    },
                  },
                })
              );
            }
          }
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
                `ProductQuantity ${original.id} cannot be unlinked from ShoppingCart because shoppingCartProductsId is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateProductQuantity.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    shoppingCartProductsId: null,
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
                    shoppingCartProductsId: shoppingCartRecord.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            userID: modelFields?.user?.id ?? null,
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
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              user: value,
              products,
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
