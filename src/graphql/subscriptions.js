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
      shippingAddress
      billingAddress
      shoppingCart {
        id
        userID
        user {
          id
          username
          email
          password
          shippingAddress
          billingAddress
          shoppingCart {
            id
            userID
            createdAt
            updatedAt
            username
            __typename
          }
          orders {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          userShoppingCartId
          __typename
        }
        products {
          items {
            id
            productID
            quantity
            createdAt
            updatedAt
            orderProductsId
            shoppingCartProductsId
            productQuantitiesId
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
      orders {
        items {
          id
          userID
          user {
            id
            username
            email
            password
            shippingAddress
            billingAddress
            createdAt
            updatedAt
            userShoppingCartId
            __typename
          }
          products {
            nextToken
            __typename
          }
          date
          status
          totalPrice
          createdAt
          updatedAt
          userOrdersId
          username
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userShoppingCartId
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
        id
        userID
        user {
          id
          username
          email
          password
          shippingAddress
          billingAddress
          shoppingCart {
            id
            userID
            createdAt
            updatedAt
            username
            __typename
          }
          orders {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          userShoppingCartId
          __typename
        }
        products {
          items {
            id
            productID
            quantity
            createdAt
            updatedAt
            orderProductsId
            shoppingCartProductsId
            productQuantitiesId
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
      orders {
        items {
          id
          userID
          user {
            id
            username
            email
            password
            shippingAddress
            billingAddress
            createdAt
            updatedAt
            userShoppingCartId
            __typename
          }
          products {
            nextToken
            __typename
          }
          date
          status
          totalPrice
          createdAt
          updatedAt
          userOrdersId
          username
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userShoppingCartId
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
        id
        userID
        user {
          id
          username
          email
          password
          shippingAddress
          billingAddress
          shoppingCart {
            id
            userID
            createdAt
            updatedAt
            username
            __typename
          }
          orders {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          userShoppingCartId
          __typename
        }
        products {
          items {
            id
            productID
            quantity
            createdAt
            updatedAt
            orderProductsId
            shoppingCartProductsId
            productQuantitiesId
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
      orders {
        items {
          id
          userID
          user {
            id
            username
            email
            password
            shippingAddress
            billingAddress
            createdAt
            updatedAt
            userShoppingCartId
            __typename
          }
          products {
            nextToken
            __typename
          }
          date
          status
          totalPrice
          createdAt
          updatedAt
          userOrdersId
          username
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userShoppingCartId
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
      userID
      user {
        id
        username
        email
        password
        shippingAddress
        billingAddress
        shoppingCart {
          id
          userID
          user {
            id
            username
            email
            password
            shippingAddress
            billingAddress
            createdAt
            updatedAt
            userShoppingCartId
            __typename
          }
          products {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          username
          __typename
        }
        orders {
          items {
            id
            userID
            date
            status
            totalPrice
            createdAt
            updatedAt
            userOrdersId
            username
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userShoppingCartId
        __typename
      }
      products {
        items {
          id
          productID
          product {
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
          createdAt
          updatedAt
          orderProductsId
          shoppingCartProductsId
          productQuantitiesId
          username
          __typename
        }
        nextToken
        __typename
      }
      date
      status
      totalPrice
      createdAt
      updatedAt
      userOrdersId
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
      userID
      user {
        id
        username
        email
        password
        shippingAddress
        billingAddress
        shoppingCart {
          id
          userID
          user {
            id
            username
            email
            password
            shippingAddress
            billingAddress
            createdAt
            updatedAt
            userShoppingCartId
            __typename
          }
          products {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          username
          __typename
        }
        orders {
          items {
            id
            userID
            date
            status
            totalPrice
            createdAt
            updatedAt
            userOrdersId
            username
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userShoppingCartId
        __typename
      }
      products {
        items {
          id
          productID
          product {
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
          createdAt
          updatedAt
          orderProductsId
          shoppingCartProductsId
          productQuantitiesId
          username
          __typename
        }
        nextToken
        __typename
      }
      date
      status
      totalPrice
      createdAt
      updatedAt
      userOrdersId
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
      userID
      user {
        id
        username
        email
        password
        shippingAddress
        billingAddress
        shoppingCart {
          id
          userID
          user {
            id
            username
            email
            password
            shippingAddress
            billingAddress
            createdAt
            updatedAt
            userShoppingCartId
            __typename
          }
          products {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          username
          __typename
        }
        orders {
          items {
            id
            userID
            date
            status
            totalPrice
            createdAt
            updatedAt
            userOrdersId
            username
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userShoppingCartId
        __typename
      }
      products {
        items {
          id
          productID
          product {
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
          createdAt
          updatedAt
          orderProductsId
          shoppingCartProductsId
          productQuantitiesId
          username
          __typename
        }
        nextToken
        __typename
      }
      date
      status
      totalPrice
      createdAt
      updatedAt
      userOrdersId
      username
      __typename
    }
  }
`;
export const onCreateShoppingCart = /* GraphQL */ `
  subscription OnCreateShoppingCart(
    $filter: ModelSubscriptionShoppingCartFilterInput
    $username: String
  ) {
    onCreateShoppingCart(filter: $filter, username: $username) {
      id
      userID
      user {
        id
        username
        email
        password
        shippingAddress
        billingAddress
        shoppingCart {
          id
          userID
          user {
            id
            username
            email
            password
            shippingAddress
            billingAddress
            createdAt
            updatedAt
            userShoppingCartId
            __typename
          }
          products {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          username
          __typename
        }
        orders {
          items {
            id
            userID
            date
            status
            totalPrice
            createdAt
            updatedAt
            userOrdersId
            username
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userShoppingCartId
        __typename
      }
      products {
        items {
          id
          productID
          product {
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
          createdAt
          updatedAt
          orderProductsId
          shoppingCartProductsId
          productQuantitiesId
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
export const onUpdateShoppingCart = /* GraphQL */ `
  subscription OnUpdateShoppingCart(
    $filter: ModelSubscriptionShoppingCartFilterInput
    $username: String
  ) {
    onUpdateShoppingCart(filter: $filter, username: $username) {
      id
      userID
      user {
        id
        username
        email
        password
        shippingAddress
        billingAddress
        shoppingCart {
          id
          userID
          user {
            id
            username
            email
            password
            shippingAddress
            billingAddress
            createdAt
            updatedAt
            userShoppingCartId
            __typename
          }
          products {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          username
          __typename
        }
        orders {
          items {
            id
            userID
            date
            status
            totalPrice
            createdAt
            updatedAt
            userOrdersId
            username
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userShoppingCartId
        __typename
      }
      products {
        items {
          id
          productID
          product {
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
          createdAt
          updatedAt
          orderProductsId
          shoppingCartProductsId
          productQuantitiesId
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
export const onDeleteShoppingCart = /* GraphQL */ `
  subscription OnDeleteShoppingCart(
    $filter: ModelSubscriptionShoppingCartFilterInput
    $username: String
  ) {
    onDeleteShoppingCart(filter: $filter, username: $username) {
      id
      userID
      user {
        id
        username
        email
        password
        shippingAddress
        billingAddress
        shoppingCart {
          id
          userID
          user {
            id
            username
            email
            password
            shippingAddress
            billingAddress
            createdAt
            updatedAt
            userShoppingCartId
            __typename
          }
          products {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          username
          __typename
        }
        orders {
          items {
            id
            userID
            date
            status
            totalPrice
            createdAt
            updatedAt
            userOrdersId
            username
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userShoppingCartId
        __typename
      }
      products {
        items {
          id
          productID
          product {
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
          createdAt
          updatedAt
          orderProductsId
          shoppingCartProductsId
          productQuantitiesId
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct(
    $filter: ModelSubscriptionProductFilterInput
    $username: String
  ) {
    onCreateProduct(filter: $filter, username: $username) {
      id
      name
      description
      image {
        id
        url
        description
        createdAt
        updatedAt
        username
        __typename
      }
      price
      quantities {
        items {
          id
          productID
          product {
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
          createdAt
          updatedAt
          orderProductsId
          shoppingCartProductsId
          productQuantitiesId
          username
          __typename
        }
        nextToken
        __typename
      }
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
      image {
        id
        url
        description
        createdAt
        updatedAt
        username
        __typename
      }
      price
      quantities {
        items {
          id
          productID
          product {
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
          createdAt
          updatedAt
          orderProductsId
          shoppingCartProductsId
          productQuantitiesId
          username
          __typename
        }
        nextToken
        __typename
      }
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
      image {
        id
        url
        description
        createdAt
        updatedAt
        username
        __typename
      }
      price
      quantities {
        items {
          id
          productID
          product {
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
          createdAt
          updatedAt
          orderProductsId
          shoppingCartProductsId
          productQuantitiesId
          username
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      productImageId
      username
      __typename
    }
  }
`;
export const onCreateProductQuantity = /* GraphQL */ `
  subscription OnCreateProductQuantity(
    $filter: ModelSubscriptionProductQuantityFilterInput
    $username: String
  ) {
    onCreateProductQuantity(filter: $filter, username: $username) {
      id
      productID
      product {
        id
        name
        description
        image {
          id
          url
          description
          createdAt
          updatedAt
          username
          __typename
        }
        price
        quantities {
          items {
            id
            productID
            quantity
            createdAt
            updatedAt
            orderProductsId
            shoppingCartProductsId
            productQuantitiesId
            username
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        productImageId
        username
        __typename
      }
      quantity
      createdAt
      updatedAt
      orderProductsId
      shoppingCartProductsId
      productQuantitiesId
      username
      __typename
    }
  }
`;
export const onUpdateProductQuantity = /* GraphQL */ `
  subscription OnUpdateProductQuantity(
    $filter: ModelSubscriptionProductQuantityFilterInput
    $username: String
  ) {
    onUpdateProductQuantity(filter: $filter, username: $username) {
      id
      productID
      product {
        id
        name
        description
        image {
          id
          url
          description
          createdAt
          updatedAt
          username
          __typename
        }
        price
        quantities {
          items {
            id
            productID
            quantity
            createdAt
            updatedAt
            orderProductsId
            shoppingCartProductsId
            productQuantitiesId
            username
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        productImageId
        username
        __typename
      }
      quantity
      createdAt
      updatedAt
      orderProductsId
      shoppingCartProductsId
      productQuantitiesId
      username
      __typename
    }
  }
`;
export const onDeleteProductQuantity = /* GraphQL */ `
  subscription OnDeleteProductQuantity(
    $filter: ModelSubscriptionProductQuantityFilterInput
    $username: String
  ) {
    onDeleteProductQuantity(filter: $filter, username: $username) {
      id
      productID
      product {
        id
        name
        description
        image {
          id
          url
          description
          createdAt
          updatedAt
          username
          __typename
        }
        price
        quantities {
          items {
            id
            productID
            quantity
            createdAt
            updatedAt
            orderProductsId
            shoppingCartProductsId
            productQuantitiesId
            username
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        productImageId
        username
        __typename
      }
      quantity
      createdAt
      updatedAt
      orderProductsId
      shoppingCartProductsId
      productQuantitiesId
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
