/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
            __typename
          }
          quantity
          userID
          createdAt
          updatedAt
          cartItemProductId
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
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
            __typename
          }
          quantity
          userID
          createdAt
          updatedAt
          cartItemProductId
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
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
            __typename
          }
          quantity
          userID
          createdAt
          updatedAt
          cartItemProductId
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
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
          Image {
            id
            url
            description
            createdAt
            updatedAt
            __typename
          }
          orderID
          createdAt
          updatedAt
          orderItemImageId
          __typename
        }
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
      totalPrice
      userID
      OrderItems {
        items {
          id
          name
          price
          quantity
          Image {
            id
            url
            description
            createdAt
            updatedAt
            __typename
          }
          orderID
          createdAt
          updatedAt
          orderItemImageId
          __typename
        }
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
      totalPrice
      userID
      OrderItems {
        items {
          id
          name
          price
          quantity
          Image {
            id
            url
            description
            createdAt
            updatedAt
            __typename
          }
          orderID
          createdAt
          updatedAt
          orderItemImageId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onCreateOrderItem(filter: $filter) {
      id
      name
      price
      quantity
      Image {
        id
        url
        description
        createdAt
        updatedAt
        __typename
      }
      orderID
      createdAt
      updatedAt
      orderItemImageId
      __typename
    }
  }
`;
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onUpdateOrderItem(filter: $filter) {
      id
      name
      price
      quantity
      Image {
        id
        url
        description
        createdAt
        updatedAt
        __typename
      }
      orderID
      createdAt
      updatedAt
      orderItemImageId
      __typename
    }
  }
`;
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onDeleteOrderItem(filter: $filter) {
      id
      name
      price
      quantity
      Image {
        id
        url
        description
        createdAt
        updatedAt
        __typename
      }
      orderID
      createdAt
      updatedAt
      orderItemImageId
      __typename
    }
  }
`;
export const onCreateCartItem = /* GraphQL */ `
  subscription OnCreateCartItem($filter: ModelSubscriptionCartItemFilterInput) {
    onCreateCartItem(filter: $filter) {
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
          __typename
        }
        price
        createdAt
        updatedAt
        productImageId
        __typename
      }
      quantity
      userID
      createdAt
      updatedAt
      cartItemProductId
      __typename
    }
  }
`;
export const onUpdateCartItem = /* GraphQL */ `
  subscription OnUpdateCartItem($filter: ModelSubscriptionCartItemFilterInput) {
    onUpdateCartItem(filter: $filter) {
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
          __typename
        }
        price
        createdAt
        updatedAt
        productImageId
        __typename
      }
      quantity
      userID
      createdAt
      updatedAt
      cartItemProductId
      __typename
    }
  }
`;
export const onDeleteCartItem = /* GraphQL */ `
  subscription OnDeleteCartItem($filter: ModelSubscriptionCartItemFilterInput) {
    onDeleteCartItem(filter: $filter) {
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
          __typename
        }
        price
        createdAt
        updatedAt
        productImageId
        __typename
      }
      quantity
      userID
      createdAt
      updatedAt
      cartItemProductId
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
      Image {
        id
        url
        description
        createdAt
        updatedAt
        __typename
      }
      price
      createdAt
      updatedAt
      productImageId
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
      Image {
        id
        url
        description
        createdAt
        updatedAt
        __typename
      }
      price
      createdAt
      updatedAt
      productImageId
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
      Image {
        id
        url
        description
        createdAt
        updatedAt
        __typename
      }
      price
      createdAt
      updatedAt
      productImageId
      __typename
    }
  }
`;
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage($filter: ModelSubscriptionImageFilterInput) {
    onCreateImage(filter: $filter) {
      id
      url
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage($filter: ModelSubscriptionImageFilterInput) {
    onUpdateImage(filter: $filter) {
      id
      url
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage($filter: ModelSubscriptionImageFilterInput) {
    onDeleteImage(filter: $filter) {
      id
      url
      description
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
