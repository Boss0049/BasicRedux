const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREASE") {
    return { ...state, counter: state.counter + 1 };
  }
  if (action.type === "DECREASE") {
    return { ...state, counter: state.counter - 1 };
  }
  return state;
};

export default reducer;
