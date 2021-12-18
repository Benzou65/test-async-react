import logo from "./logo.svg";
import "./App.css";
import { useState, useReducer } from "react";

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

function App({ initialCount = 0 }) {
  const [num, setNum] = useState(0);
  const [numbers, setNumbers] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  const handleClick = () => {
    setNum(num + 1);
    setNum(num + 1);
  };

  const addToNumbers = () => {
    setNumbers((prev) => prev + 4);
    setNumbers((prev) => prev - 2);
    setNumbers((prev) => prev + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <button onClick={handleClick}>Click</button>
          <p>{num}</p>
        </div>
        <div>
          <button onClick={addToNumbers}>Click</button>
          <p>{numbers}</p>
        </div>
        <div>
          <p>Count: {state.count}</p>
          <button
            onClick={() => dispatch({ type: "reset", payload: initialCount })}
          >
            Reset
          </button>
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>
          <button onClick={() => dispatch({ type: "increment" })}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
