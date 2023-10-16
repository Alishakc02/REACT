import "./app1.css";
import { useState } from "react";
function App1() {
    let count = 0;
    const [Counter, setCounter] = useState(0);
    function handlePlus() {
        setCounter(Counter + 1);
        count = count ++;

    
    }
    return (
        <div>
            <p>value:{Counter}</p>
            <p>value:{count}</p>
            <button
                onClick={() =>
                {
                    handlePlus();
                }}
                >
                +
            </button>
        </div>
    )
}
export default App1;