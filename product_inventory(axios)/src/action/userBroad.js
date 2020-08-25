const userBroadCast = (user) => {
    return {
        type: 'USER_NAME',
        payload: user
    }
}
export default userBroadCast