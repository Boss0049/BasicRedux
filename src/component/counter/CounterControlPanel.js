import React from "react";

function CounterControlPanel(props) {
  return (
    <div className="counter-panel" onClick={props.change}>
      {props.text}
    </div>
  );
}

export default CounterControlPanel;
