/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const ordersByUserIDAndId = /* GraphQL */ `
  query OrdersByUserIDAndId(
    $userID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUserIDAndId(
      userID: $userID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getShoppingCart = /* GraphQL */ `
  query GetShoppingCart($id: ID!) {
    getShoppingCart(id: $id) {
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
export const listShoppingCarts = /* GraphQL */ `
  query ListShoppingCarts(
    $filter: ModelShoppingCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShoppingCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      __typename
    }
  }
`;
export const shoppingCartsByUserIDAndId = /* GraphQL */ `
  query ShoppingCartsByUserIDAndId(
    $userID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelShoppingCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    shoppingCartsByUserIDAndId(
      userID: $userID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      __typename
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getProductQuantity = /* GraphQL */ `
  query GetProductQuantity($id: ID!) {
    getProductQuantity(id: $id) {
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
export const listProductQuantities = /* GraphQL */ `
  query ListProductQuantities(
    $filter: ModelProductQuantityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductQuantities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
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
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        description
        createdAt
        updatedAt
        username
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
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
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
