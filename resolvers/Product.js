const { products } = require("../data/products.js");

exports.Product = {
  seller: (parent, args, context) =>
    products.find((product) => product.id === parent.id).seller,
};
