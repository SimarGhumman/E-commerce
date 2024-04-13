/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInventory = /* GraphQL */ `
  subscription OnCreateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onCreateInventory(filter: $filter) {
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
export const onUpdateInventory = /* GraphQL */ `
  subscription OnUpdateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onUpdateInventory(filter: $filter) {
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
export const onDeleteInventory = /* GraphQL */ `
  subscription OnDeleteInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onDeleteInventory(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onCreateUser(filter: $filter, username: $username) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onUpdateUser(filter: $filter, username: $username) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onDeleteUser(filter: $filter, username: $username) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateShoppingCart = /* GraphQL */ `
  subscription OnCreateShoppingCart(
    $filter: ModelSubscriptionShoppingCartFilterInput
  ) {
    onCreateShoppingCart(filter: $filter) {
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
export const onUpdateShoppingCart = /* GraphQL */ `
  subscription OnUpdateShoppingCart(
    $filter: ModelSubscriptionShoppingCartFilterInput
  ) {
    onUpdateShoppingCart(filter: $filter) {
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
export const onDeleteShoppingCart = /* GraphQL */ `
  subscription OnDeleteShoppingCart(
    $filter: ModelSubscriptionShoppingCartFilterInput
  ) {
    onDeleteShoppingCart(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
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
