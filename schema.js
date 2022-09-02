const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String
    name: String
    age: Int
    products(filter: ProductsFilterInput): [Product]
    product(id: ID!): Product
  }

  type Product {
    id: ID!
    name: String
    image: String
    price: String
    seller: Seller
    reviews: Boolean
  }

  type Seller {
    id: ID!
    last_name: String
    first_name: String
    products: [Product!]!
  }

  input ProductsFilterInput {
    reviews: Boolean
  }

`;
