const notificationreducer = function (state = null, action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return action.payload.name
        default:
            return state
    }
}
export default notificationreducer