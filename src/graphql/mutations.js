/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
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
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
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
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
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
export const createCartItem = /* GraphQL */ `
  mutation CreateCartItem(
    $input: CreateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    createCartItem(input: $input, condition: $condition) {
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
export const updateCartItem = /* GraphQL */ `
  mutation UpdateCartItem(
    $input: UpdateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    updateCartItem(input: $input, condition: $condition) {
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
export const deleteCartItem = /* GraphQL */ `
  mutation DeleteCartItem(
    $input: DeleteCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    deleteCartItem(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
      id
      url
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
      id
      url
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
      id
      url
      description
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
