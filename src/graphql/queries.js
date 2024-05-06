/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
        CartItems {
          items {
            id
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
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const ordersByUserID = /* GraphQL */ `
  query OrdersByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
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
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const orderItemsByOrderID = /* GraphQL */ `
  query OrderItemsByOrderID(
    $orderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderItemsByOrderID(
      orderID: $orderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getCartItem = /* GraphQL */ `
  query GetCartItem($id: ID!) {
    getCartItem(id: $id) {
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
export const listCartItems = /* GraphQL */ `
  query ListCartItems(
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const cartItemsByUserID = /* GraphQL */ `
  query CartItemsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cartItemsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
