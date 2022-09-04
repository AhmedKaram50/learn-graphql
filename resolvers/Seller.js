exports.Seller = {
  products: (parent, {filter}, { products }) => {
    return products.filter(
      (product) => {
        if (filter) return product.seller != null && product.seller.id === 4 && product.reviews === filter.reviews
        return product.seller != null && product.seller.id === 4
      }
    );
  },
};
