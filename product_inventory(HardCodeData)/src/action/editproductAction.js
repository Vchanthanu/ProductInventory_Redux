const broadCastEditProduct =(product)=>{
    return ({
        type: "EDIT_PRODUCT",
        payload: product
    })
}
export default broadCastEditProduct