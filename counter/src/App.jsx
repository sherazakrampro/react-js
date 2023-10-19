import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const removeCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>React Counter</h1>
      <h2>Count: {count}</h2>

      <button onClick={removeCount}> Decrease </button>
      <button onClick={addCount}> Increase </button>
      <br />
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
