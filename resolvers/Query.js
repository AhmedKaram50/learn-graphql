exports.Query = {
  hello: () => "Hello World",
  name: () => "John Doe",
  age: () => 30,
  products: (parent, {filter}, { products }) => {
    if (filter) return products.filter(product => product.reviews === filter.reviews)
    return products
  },
  product: (parent, args, { products }) =>
    products.find((product) => product.id == args.id),
};
