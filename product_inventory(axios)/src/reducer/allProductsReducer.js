
const allProductsReducer = function (state = null, action) {
    const allproduct = []
    switch (action.type) {
        case ('ALL_PRODUCTS'):
            return action.payload
        default:
            break;
    }
    return allproduct
}
export default allProductsReducer