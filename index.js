const { ApolloServer, gql } = require("apollo-server");
const { products } = require("./data/products");

const typeDefs = gql`
    type Query {
        hello: String
        name: String
        age: Int
        products: [Product]
        sellers: [Seller]
    }

    type Product {
        name: String
        image: String
        price: String
    }

    type Seller {
        first_name: String
    }

    
`;

const resolvers = {
  Query: {
    hello: () => "Hello World",
    name: () => "John Doe",
    age: () => 30,
    products: () => products,
    sellers: () => products.map(product => product.seller),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Server is running on " + url);
});
