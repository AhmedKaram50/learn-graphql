const { products } = require("../data/products.js");

exports.Query = {
  hello: () => "Hello World",
  name: () => "John Doe",
  age: () => 30,
  products: () => products,
  product: (parent, args, context) =>
    products.find((product) => product.id == args.id),
};
