import React, { useState } from "react";
import CounterDisplay from "../component/counter/CounterDisplay";
import CounterControlPanel from "../component/counter/CounterControlPanel";
import { connect } from "react-redux";
import { actionType } from "../store/actionTypes";

function Counter(props) {
  const [counter, setCounter] = useState(0);

  const handleCounter = (type, value) => {
    switch (type) {
      case "increase":
        setCounter(counter + 1);

        break;

      case "decrease":
        setCounter(counter - 1);
        break;

      case "plus":
        setCounter(counter + value);
        break;
      case "minus":
        setCounter(counter - value);
        break;
    }
  };
  return (
    <div>
      <CounterDisplay counter={props.ctr} />
      <CounterControlPanel text="Increase" change={props.increase} />
      <CounterControlPanel text="Decrease" change={props.decrease} />
      <CounterControlPanel
        text="Plus"
        change={() => handleCounter("plus", 10)}
      />
      <CounterControlPanel
        text="Minus"
        change={() => handleCounter("minus", 10)}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionType.INCREASE }),
    decrease: () => dispatch({ type: actionType.DECREASE }),
  };
};

const H = connect(mapStateToProps, mapDispatchToProps);
export default H(Counter);
