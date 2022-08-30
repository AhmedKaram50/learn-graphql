exports.Query = {
  hello: () => "Hello World",
  name: () => "John Doe",
  age: () => 30,
  products: () => products,
  product: (parent, args, { products }) =>
    products.find((product) => product.id == args.id),
};
