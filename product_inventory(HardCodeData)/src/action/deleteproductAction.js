const broadCastDeleteProduct =(productId)=>{
    return ({
        type: "DELETE_PRODUCT",
        payload: productId
    })
}
export default broadCastDeleteProduct