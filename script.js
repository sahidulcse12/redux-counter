//dom initialize
const counterC1 = document.getElementById("counter");
const incrementE1 = document.getElementById("increment");
const decrement = document.getElementById("decrement");

//initial state
const initialState = {
    value: 0,
};


//reducer function

function countReducer(state = initialState, action) {

    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1,
        }
    }
    else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1,
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
    store.dispatch({
        type: "increment",
    })
})

decrement.addEventListener("click", () => {
    store.dispatch({
        type: "decrement",
    })
})


