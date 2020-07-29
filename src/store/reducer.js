import { actionType } from "./actionTypes";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === actionType.INCREASE) {
    return { ...state, counter: state.counter + 1 };
  }
  if (action.type === actionType.DECREASE) {
    return { ...state, counter: state.counter - 1 };
  }
  return state;
};

export default reducer;
