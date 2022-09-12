exports.Mutation = {
    addProduct: (parent, {input}, {products}) => {
        const {name, image, price, reviews} = input
        product = {
            id: "uuid-jklj0809-987j",
            name,
            image,
            price,
            reviews,
        }
        products.push(product)
        return product
    }
}