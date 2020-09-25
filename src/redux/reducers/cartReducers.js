const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actions/cartActions");

const initialState ={
    cart: [],
    products: [
        { name: 'Lenovo Laptop', id: 1},
        { name: 'HP Laptop', id: 2},
        { name: 'Walton Laptop', id: 3},
        { name: 'Apple Laptop', id: 4},
        { name: 'Dell Laptop', id: 5},
        { name: 'Tushiba Laptop', id: 6},
        { name: 'Asus Laptop', id: 7}
    ]
}

const cartReducers = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            const newItems ={
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItems]
            return {
                products: state.products,
                cart: newCart
            }
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id);
            return {
                ...state,
                cart: remainingCart
            }

        default:
            return state;
    }
}
export default cartReducers;