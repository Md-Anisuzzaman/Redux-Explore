/*MULTIPLE  REDUCER*/

const { createStore, combineReducers } = require('redux');


//PRODUCTS CONSTANT
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCTS = "GET_PRODUCTS";

//CART CONSTANT
const ADD_CART_ITEM = "ADD_CART_ITEM";
const GET_CART_ITEM = "GET_CART_ITEM";


//PRODUCTS STATE

const initialProductsState = {
    products: ['Oil', 'Sugar'],
    numberOfProducts: 2,
}

//CARTS STATE

const initialCartState = {
    carts: ['one'],
    numberOfCarts: 1,
}

//PRODUCT ACTION
const getProduct = () => {
    return {
        type: GET_PRODUCTS,
    }
};


const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    }
};

//CART ACTION

const getCartItem = () => {
    return {
        type: GET_CART_ITEM,
    }
}

const addCartItem = (cart) => {
    return {
        type: ADD_CART_ITEM,
        payload: cart,
    }
};

//PRODUCT REDUCER
const productReducer = (state = initialProductsState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
            }
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }

        default:
            return state;
    }
};


//CART REDUCER
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEM:
            return {
                ...state,
            }
        case ADD_CART_ITEM:
            return {
                carts: [...state.carts, action.payload],
                numberOfCarts: state.numberOfCarts + 1,
            }
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer,
});


const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProduct())
store.dispatch(addProduct("Rice"))

store.dispatch(getCartItem());
store.dispatch(addCartItem("two"));
store.dispatch(addCartItem("three"));



