import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(400);

    return (
        <div className="counter-container">
            <p id="para">Vote: {count}</p>
            <button id="btn" onClick={() => setCount(count + 1)}>Ache din ke liye vote karein!!</button>
        </div>
    );
}

export default Counter;