
const allProductsReducer = function (state = null, action) {
    const allproduct = [{
        "image": "mango.jpg",
        "name": "Mango Saplings",
        "companyName": "7Seed",
        "offer": false,
        "price": 100,
        "regDate": "2020-08-05",
        "category": "Seed/sapling",
        "stock": 97,
        "rating": "4.6",
        "description": "We provide mango plants, that are cultivated from quality-approved planting materials, insecticides and pesticide.",
        "id": 1
    },
    {
        "image": "coconut.jpg",
        "name": "Coconut Saplings",
        "companyName": "7Seeds",
        "offer": true,
        "price": 120,
        "regDate": "2020-08-20",
        "category": "Seed/sapling",
        "stock": 249,
        "rating": "4.7",
        "description": "Plants We Supply Are Original Hybrid Varieties We Do In Our Own Garden.Plant Height 8 - 24 Inches",
        "id": 2
    },
    {
        "image": "TAFE-Tractor.png",
        "name": "Tractor 5400",
        "companyName": "TAFE",
        "offer": false,
        "price": "74998",
        "regDate": "2020-08-13",
        "category": "Machinery",
        "stock": 12,
        "rating": "4.9",
        "description": "A tractor is an engineering vehicle for the purposes of hauling a trailer or machinery such as that used in agriculture or construction.",
        "id": 3
    },
    {
        "image": "PesticideSprayer.jpg",
        "name": "Pesticide sprayer",
        "companyName": "007 Sprayer",
        "offer": false,
        "price": "1000",
        "regDate": "2020-08-05",
        "category": "Tools",
        "stock": 58,
        "rating": 0,
        "description": "Model : Gold 16L 12V/12AH , Weight : 6 KG Capacity : 16 Liters",
        "id": 6
    },
    {
        "image": "Jcb.jpg",
        "name": "JCB",
        "companyName": "TAFE",
        "offer": false,
        "price": "999999",
        "regDate": "2020-08-04",
        "category": "Machinery",
        "stock": 4,
        "rating": 0,
        "description": "TorqueLock to reduce fuel consumption and increase top speeds.",
        "id": 7
    },
    {
        "image": "Powertriller.jpg",
        "name": "Tiller",
        "companyName": "TAFE",
        "offer": true,
        "price": "50000",
        "regDate": "2020-08-10",
        "category": "Machinery",
        "stock": 5,
        "rating": 0,
        "description": "Used mainly in small level farm fields",
        "id": 8
    }]
    switch (action.type) {
        case ('ALL_PRODUCTS'):
            return action.payload
        case ('ADD_PRODUCT'):
            return [action.payload, ...state]
        case ('EDIT_PRODUCT'):
            const editedList = state.map((product) => {
                if (product.id === action.payload.id) {
                    return {
                        "image": action.payload.image,
                        "name": action.payload.name,
                        "companyName": action.payload.companyName,
                        "offer": action.payload.offer,
                        "price": action.payload.price,
                        "regDate": action.payload.regDate,
                        "category": action.payload.category,
                        "stock": action.payload.stock,
                        "rating": action.payload.rating,
                        "description": action.payload.description,
                        "id": action.payload.id
                    }
                } else {
                    return product
                }
            })
            return editedList
        case ('DELETE_PRODUCT'):
            const deletedList = state.filter((product) => {
                return product.id !== action.payload
            })
            return deletedList
        default:
            break;
    }
    return allproduct
}
export default allProductsReducer