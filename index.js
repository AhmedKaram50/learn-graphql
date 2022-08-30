const { ApolloServer } = require("apollo-server");
// Type Definition
const { typeDefs } = require("./schema.js");
// Resolvers
const { Query } = require("./resolvers/Query.js");
const { Product } = require("./resolvers/Product.js");
const { Seller } = require("./resolvers/Seller.js");
// Data 
const { products } = require("./data/products.js");

const resolvers = {
  Query,
  Product,
  Seller
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    products
  }
});

server.listen().then(({ url }) => {
  console.log("Server is running on " + url);
});
