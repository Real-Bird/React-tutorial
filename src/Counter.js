import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1, console: console.log("증가 중입니다.") };
    case "DECREMENT":
      return { value: state.value - 1, console: console.log("감소 중입니다.") };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <div>
        <p>
          현재 reducer 카운터 값은 <strong>{state.value}</strong>
        </p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
