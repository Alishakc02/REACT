import { useState } from "react";
import Home3 from "./Home3";
import { CounterContext } from "../Helper/context";
function App3() {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count }}>
      <Home3 />
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
    </CounterContext.Provider>
  );
}
export default App3;
