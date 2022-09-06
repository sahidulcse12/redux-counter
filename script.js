//dom initialize
const counterC1 = document.getElementById("counter");
const incrementE1 = document.getElementById("increment");
const decrement = document.getElementById("decrement");

//action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

//action creators
const increments = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    }
}

const decrements = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    }
}

//initial state
const initialState = {
    value: 0,
};


//reducer function

function countReducer(state = initialState, action) {

    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + action.payload,
        }
    }
    else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - action.payload,
        }
    }
    else {
        return state;
    }

}

//create store
const store = Redux.createStore(countReducer);

const render = () => {
    const state = store.getState();
    counterC1.innerText = state.value.toString();
}

//initially update
render();

store.subscribe(render);

//button click listener
incrementE1.addEventListener("click", () => {
    store.dispatch(increments(5))
})

decrement.addEventListener("click", () => {
    store.dispatch(decrements(2))
})


