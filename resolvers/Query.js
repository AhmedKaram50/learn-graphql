exports.Query = {
  hello: () => "Hello World",
  name: () => "John Doe",
  age: () => 30,
  products: (parent, { filter }, { products }) => {
    if (!filter) return products
    const { reviews, time } = filter;
    let filteredProducts;
    if (reviews != undefined)
      filteredProducts = products.filter((product) => product.reviews === filter.reviews);
    if (time)
      filteredProducts = filteredProducts.filter(product => time < new Date(product.created_at).getTime() / 1000)
    return filteredProducts;
  },
  product: (parent, args, { products }) =>
    products.find((product) => product.id == args.id),
};
