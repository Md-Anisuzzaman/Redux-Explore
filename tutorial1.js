const { createStore } = require('redux');

//CONSTANT

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE ';

const initialState = {
    count: 0,
}

// ACTION TYPE

const incremntCounterAction = () => {
    return {
        type: INCREMENT,
    };
};

const decremntCounterAction = () => {
    return {
        type: DECREMENT,
    };
};

const resetCounterAction = () => {
    return {
        type: RESET,
    };
};
const incrementByValueCounterAction = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload:value
    };
};

// CREATING REDUCER

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        case RESET:
            return {
                ...state,
                count: 0,
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload,
            }

        default:
            state;
    }
}

// STORE

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log("my state", store.getState());
})


store.dispatch(incrementByValueCounterAction(5));




