const userReducer = function (state = null, action) {
    switch (action.type) {
        case 'USER_NAME':
            return action.payload
        default:
            break
    }
    return state
}
export default userReducer