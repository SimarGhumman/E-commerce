/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      CartItems {
        items {
          id
          Product {
            id
            name
            description
            price
            createdAt
            updatedAt
            productImageId
            username
            __typename
          }
          quantity
          userID
          createdAt
          updatedAt
          cartItemProductId
          username
          __typename
        }
        nextToken
        __typename
      }
      Orders {
        items {
          id
          date
          totalPrice
          userID
          OrderItems {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          username
          __typename
        }
        nextToken
        __typename
      }
      shippingAddress
      billingAddress
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
      CartItems {
        items {
          id
          Product {
            id
            name
            description
            price
            createdAt
            updatedAt
            productImageId
            username
            __typename
          }
          quantity
          userID
          createdAt
          updatedAt
          cartItemProductId
          username
          __typename
        }
        nextToken
        __typename
      }
      Orders {
        items {
          id
          date
          totalPrice
          userID
          OrderItems {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          username
          __typename
        }
        nextToken
        __typename
      }
      shippingAddress
      billingAddress
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
      CartItems {
        items {
          id
          Product {
            id
            name
            description
            price
            createdAt
            updatedAt
            productImageId
            username
            __typename
          }
          quantity
          userID
          createdAt
          updatedAt
          cartItemProductId
          username
          __typename
        }
        nextToken
        __typename
      }
      Orders {
        items {
          id
          date
          totalPrice
          userID
          OrderItems {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          username
          __typename
        }
        nextToken
        __typename
      }
      shippingAddress
      billingAddress
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $username: String
  ) {
    onCreateOrder(filter: $filter, username: $username) {
      id
      date
      totalPrice
      userID
      OrderItems {
        items {
          id
          name
          price
          quantity
          orderID
          createdAt
          updatedAt
          username
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      username
      __typename
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $username: String
  ) {
    onUpdateOrder(filter: $filter, username: $username) {
      id
      date
      totalPrice
      userID
      OrderItems {
        items {
          id
          name
          price
          quantity
          orderID
          createdAt
          updatedAt
          username
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      username
      __typename
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $username: String
  ) {
    onDeleteOrder(filter: $filter, username: $username) {
      id
      date
      totalPrice
      userID
      OrderItems {
        items {
          id
          name
          price
          quantity
          orderID
          createdAt
          updatedAt
          username
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      username
      __typename
    }
  }
`;
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
    $username: String
  ) {
    onCreateOrderItem(filter: $filter, username: $username) {
      id
      name
      price
      quantity
      orderID
      createdAt
      updatedAt
      username
      __typename
    }
  }
`;
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
    $username: String
  ) {
    onUpdateOrderItem(filter: $filter, username: $username) {
      id
      name
      price
      quantity
      orderID
      createdAt
      updatedAt
      username
      __typename
    }
  }
`;
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
    $username: String
  ) {
    onDeleteOrderItem(filter: $filter, username: $username) {
      id
      name
      price
      quantity
      orderID
      createdAt
      updatedAt
      username
      __typename
    }
  }
`;
export const onCreateCartItem = /* GraphQL */ `
  subscription OnCreateCartItem(
    $filter: ModelSubscriptionCartItemFilterInput
    $username: String
  ) {
    onCreateCartItem(filter: $filter, username: $username) {
      id
      Product {
        id
        name
        description
        Image {
          id
          url
          description
          createdAt
          updatedAt
          username
          __typename
        }
        price
        createdAt
        updatedAt
        productImageId
        username
        __typename
      }
      quantity
      userID
      createdAt
      updatedAt
      cartItemProductId
      username
      __typename
    }
  }
`;
export const onUpdateCartItem = /* GraphQL */ `
  subscription OnUpdateCartItem(
    $filter: ModelSubscriptionCartItemFilterInput
    $username: String
  ) {
    onUpdateCartItem(filter: $filter, username: $username) {
      id
      Product {
        id
        name
        description
        Image {
          id
          url
          description
          createdAt
          updatedAt
          username
          __typename
        }
        price
        createdAt
        updatedAt
        productImageId
        username
        __typename
      }
      quantity
      userID
      createdAt
      updatedAt
      cartItemProductId
      username
      __typename
    }
  }
`;
export const onDeleteCartItem = /* GraphQL */ `
  subscription OnDeleteCartItem(
    $filter: ModelSubscriptionCartItemFilterInput
    $username: String
  ) {
    onDeleteCartItem(filter: $filter, username: $username) {
      id
      Product {
        id
        name
        description
        Image {
          id
          url
          description
          createdAt
          updatedAt
          username
          __typename
        }
        price
        createdAt
        updatedAt
        productImageId
        username
        __typename
      }
      quantity
      userID
      createdAt
      updatedAt
      cartItemProductId
      username
      __typename
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct(
    $filter: ModelSubscriptionProductFilterInput
    $username: String
  ) {
    onCreateProduct(filter: $filter, username: $username) {
      id
      name
      description
      Image {
        id
        url
        description
        createdAt
        updatedAt
        username
        __typename
      }
      price
      createdAt
      updatedAt
      productImageId
      username
      __typename
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct(
    $filter: ModelSubscriptionProductFilterInput
    $username: String
  ) {
    onUpdateProduct(filter: $filter, username: $username) {
      id
      name
      description
      Image {
        id
        url
        description
        createdAt
        updatedAt
        username
        __typename
      }
      price
      createdAt
      updatedAt
      productImageId
      username
      __typename
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct(
    $filter: ModelSubscriptionProductFilterInput
    $username: String
  ) {
    onDeleteProduct(filter: $filter, username: $username) {
      id
      name
      description
      Image {
        id
        url
        description
        createdAt
        updatedAt
        username
        __typename
      }
      price
      createdAt
      updatedAt
      productImageId
      username
      __typename
    }
  }
`;
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage(
    $filter: ModelSubscriptionImageFilterInput
    $username: String
  ) {
    onCreateImage(filter: $filter, username: $username) {
      id
      url
      description
      createdAt
      updatedAt
      username
      __typename
    }
  }
`;
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage(
    $filter: ModelSubscriptionImageFilterInput
    $username: String
  ) {
    onUpdateImage(filter: $filter, username: $username) {
      id
      url
      description
      createdAt
      updatedAt
      username
      __typename
    }
  }
`;
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage(
    $filter: ModelSubscriptionImageFilterInput
    $username: String
  ) {
    onDeleteImage(filter: $filter, username: $username) {
      id
      url
      description
      createdAt
      updatedAt
      username
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
