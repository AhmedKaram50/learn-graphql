const { products } = require("../data/products.js");

exports.Seller = {
  products: (parent, args, context) => {
    return products.filter(
      (product) => product.seller != null && product.seller.id === 4
    );
  },
};
