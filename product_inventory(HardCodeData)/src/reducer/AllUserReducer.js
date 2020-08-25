const allUserReducer = function (state = null, action) {
    const users = [
        {
            "firstname": "Admin",
            "lastname": "M",
            "email": "admin@gmail.com",
            "password": "admin123",
            "confirmpassword": "admin123",
            "securityquestion": "who is your best friend?",
            "answer": "admin",
            "gender": "male",
            "id": 1
        }
    ]
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload]
        default:
            break
    }
    return users
}
export default allUserReducer