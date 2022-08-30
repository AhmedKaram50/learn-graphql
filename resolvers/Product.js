exports.Product = {
  seller: (parent, args, {products}) =>
    products.find((product) => product.id === parent.id).seller,
};
