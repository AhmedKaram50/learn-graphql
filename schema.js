const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String
    name: String
    age: Int
    products(filter: ProductsFilterInput): [Product]
    product(id: ID!): Product
  }

  type Mutation {
    addProduct(input: addProductInput!): Product!
  }

  type Product {
    id: ID!
    name: String
    image: String
    price: String
    seller: Seller
    reviews: Boolean
  }

  input addProductInput {
    name: String
    image: String
    price: String
    reviews: Boolean
  }

  type Seller {
    id: ID!
    last_name: String
    first_name: String
    products(filter: ProductsFilterInput): [Product!]!
  }

  input ProductsFilterInput {
    reviews: Boolean
    time: Int
  }

`;
