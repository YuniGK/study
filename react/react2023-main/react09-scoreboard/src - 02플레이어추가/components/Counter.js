import React from "react";

export default function Counter(props) {
  return (<>
    <div className="counter">
      <button className="counter-action decrement"
        onClick={() => { alert('점수차감'); }}> -</button>
      <span className="counter-score">100</span>
      <button className="counter-action increment"
        onClick={() => { alert('점수증가'); }}> +</button>
    </div>
  </>);
}