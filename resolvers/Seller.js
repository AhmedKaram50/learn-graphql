exports.Seller = {
  products: (parent, args, { products }) => {
    return products.filter(
      (product) => product.seller != null && product.seller.id === 4
    );
  },
};
