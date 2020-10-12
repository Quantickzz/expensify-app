import { createStore } from "redux";

//Se incrementBy nao estiver definido fica 1, se o
//objecto onde ele esta inserido nao estiver definido
//fica vazio, eliminando a necessidade de fazer typeOf
//payload.incrementBy === "number" ? payload.incrementBy : 1
//incrementBy : incrementBy é igual a incrementBy,

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count,
});

const resetCount = () => ({
  type: "RESET",
});

//Reducers
//1. Reducers are pure functions, output only depends on input
//2. Never change state or function

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "SET":
      return {
        count: action.count,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

//default value = 0
const store = createStore(countReducer);

//chamar unsubscribe() para cagar na store
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: -100 }));
