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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createShoppingCart = /* GraphQL */ `
  mutation CreateShoppingCart(
    $input: CreateShoppingCartInput!
    $condition: ModelShoppingCartConditionInput
  ) {
    createShoppingCart(input: $input, condition: $condition) {
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
export const updateShoppingCart = /* GraphQL */ `
  mutation UpdateShoppingCart(
    $input: UpdateShoppingCartInput!
    $condition: ModelShoppingCartConditionInput
  ) {
    updateShoppingCart(input: $input, condition: $condition) {
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
export const deleteShoppingCart = /* GraphQL */ `
  mutation DeleteShoppingCart(
    $input: DeleteShoppingCartInput!
    $condition: ModelShoppingCartConditionInput
  ) {
    deleteShoppingCart(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createProductQuantity = /* GraphQL */ `
  mutation CreateProductQuantity(
    $input: CreateProductQuantityInput!
    $condition: ModelProductQuantityConditionInput
  ) {
    createProductQuantity(input: $input, condition: $condition) {
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
export const updateProductQuantity = /* GraphQL */ `
  mutation UpdateProductQuantity(
    $input: UpdateProductQuantityInput!
    $condition: ModelProductQuantityConditionInput
  ) {
    updateProductQuantity(input: $input, condition: $condition) {
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
export const deleteProductQuantity = /* GraphQL */ `
  mutation DeleteProductQuantity(
    $input: DeleteProductQuantityInput!
    $condition: ModelProductQuantityConditionInput
  ) {
    deleteProductQuantity(input: $input, condition: $condition) {
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
      username
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
      username
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
      username
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
