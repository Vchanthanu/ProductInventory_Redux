const broadCastAddProduct =  (product) => {
    console.log(product)
    return ({
        type: "ADD_PRODUCT",
        payload: product
    })
}
export default broadCastAddProduct