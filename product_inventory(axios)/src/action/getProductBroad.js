const getProductBroadCast = (allProducts) => {
    return ({
        type: 'ALL_PRODUCTS',
        payload: allProducts
    })
}
export default getProductBroadCast