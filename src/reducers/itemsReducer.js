const initialData = {
    items: [{
        itemName: 'Realme 5 (Crystal Purple, 32 GB) (3 GB RAM)',
        itemImage: 'https://m.media-amazon.com/images/I/71hm0dI9WqL._SL1500_.jpg',
        itemPrice: '10000'
    },
    {
        itemName: 'Realme 3 Pro (Lighting Purple, 64 GB) (4 GB RAM)',
        itemImage: 'https://www.gizmochina.com/wp-content/uploads/2019/03/realme-3-500x500.jpg',
        itemPrice: '12000'
    },
    {
        itemName: 'Samsung Galaxy A50 (Blue, 64 GB) (4 GB RAM)',
        itemImage: 'https://m.media-amazon.com/images/I/81M5X5FMHRL._SL1500_.jpg',
        itemPrice: '13500'
    },
    {
        itemName: 'Redmi 8A (Sunset Red, 32 GB) (2 GB RAM)',
        itemImage: 'https://m.media-amazon.com/images/I/710p2f-zAdL._SL1500_.jpg',
        itemPrice: '9000'
    },
    {
        itemName: 'Cenizas Mens Cotton Hooded Full Sleeves T-Shirt',
        itemImage: 'https://5.imimg.com/data5/ANDROID/Default/2021/4/MW/XH/GD/114819599/images-7-jpeg-500x500.jpeg',
        itemPrice: '11000'
    },
    {
        itemName: 'CHKOKKO Full Sleeve Cotton Casual Round Neck T Shirts for Men',
        itemImage: 'https://images-eu.ssl-images-amazon.com/images/I/51XTL%2BS81TL.jpg',
        itemPrice: '14000'
    }
    ]
}

function itemsReducer(state = initialData, action) {
    switch (action.type) {
        case 'ADD_ITEM': return {
            ...state,
            items: [...state.items, action.payload]
        }
    }
    return state
}
export default itemsReducer