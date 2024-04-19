/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInventory = /* GraphQL */ `
  mutation CreateInventory(
    $input: CreateInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    createInventory(input: $input, condition: $condition) {
      id
      quantity
      product {
        id
        name
        description
        image
        price
        shoppingcartID
        orderID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      inventoryProductId
      __typename
    }
  }
`;
export const updateInventory = /* GraphQL */ `
  mutation UpdateInventory(
    $input: UpdateInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    updateInventory(input: $input, condition: $condition) {
      id
      quantity
      product {
        id
        name
        description
        image
        price
        shoppingcartID
        orderID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      inventoryProductId
      __typename
    }
  }
`;
export const deleteInventory = /* GraphQL */ `
  mutation DeleteInventory(
    $input: DeleteInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    deleteInventory(input: $input, condition: $condition) {
      id
      quantity
      product {
        id
        name
        description
        image
        price
        shoppingcartID
        orderID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      inventoryProductId
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      password
      shippingAddress
      billingAddress
      shoppingCart {
        nextToken
        __typename
      }
      order {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      password
      shippingAddress
      billingAddress
      shoppingCart {
        nextToken
        __typename
      }
      order {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      password
      shippingAddress
      billingAddress
      shoppingCart {
        nextToken
        __typename
      }
      order {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      date
      status
      trackingNumber
      totalPrice
      userID
      product {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      date
      status
      trackingNumber
      totalPrice
      userID
      product {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      date
      status
      trackingNumber
      totalPrice
      userID
      product {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createShoppingCart = /* GraphQL */ `
  mutation CreateShoppingCart(
    $input: CreateShoppingCartInput!
    $condition: ModelShoppingCartConditionInput
  ) {
    createShoppingCart(input: $input, condition: $condition) {
      id
      product {
        nextToken
        __typename
      }
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateShoppingCart = /* GraphQL */ `
  mutation UpdateShoppingCart(
    $input: UpdateShoppingCartInput!
    $condition: ModelShoppingCartConditionInput
  ) {
    updateShoppingCart(input: $input, condition: $condition) {
      id
      product {
        nextToken
        __typename
      }
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteShoppingCart = /* GraphQL */ `
  mutation DeleteShoppingCart(
    $input: DeleteShoppingCartInput!
    $condition: ModelShoppingCartConditionInput
  ) {
    deleteShoppingCart(input: $input, condition: $condition) {
      id
      product {
        nextToken
        __typename
      }
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      description
      image
      price
      shoppingcartID
      orderID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      description
      image
      price
      shoppingcartID
      orderID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      description
      image
      price
      shoppingcartID
      orderID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
