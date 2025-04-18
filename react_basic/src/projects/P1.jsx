import React, { useState } from "react";
import "./p1.css";

function P1() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  let color;
  if (count > 0) {
    color = "green";
  } else if (count < 0) {
    color = "red";
  } else {
    color= "black";
  }
  return (
    <div className="container">
      <div className="value">
        <p style={{ color }}>{count}</p>
      </div>
      <div className="action">
        <button onClick={increment}>Increment</button>
        &nbsp;&nbsp; &nbsp;&nbsp;{" "}
        <button onClick={() => setCount(0)}>Reset</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"  "}
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default P1;
