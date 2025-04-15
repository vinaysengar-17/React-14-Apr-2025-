import React from "react";
import "./p1.css";

function P1() {
  return (
    <div class="container">
      <div class="value">
        <p>0</p>
      </div>
      <div class="action">
        <button style={{ background: "green" }}>Increment</button>
        <button style={{ background: "yellow" }}>Reset</button>
        <button style={{ background: "red" }}>Decrement</button>
      </div>
    </div>
  );
}

export default P1;
