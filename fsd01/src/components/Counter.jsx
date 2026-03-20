import React from 'react'

const Counter = () => {

    const [count, setCount] = React.useState(0);
    const [step, setStep] = React.useState(0);


    function increment() {
        setCount(count + step);
    }

    function decrement() {
        setCount(count - step);
    }

    return (
        <div>
            <label>Step Value <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} /></label>
            <button onClick={increment}>Increment</button>
            <span>{count}</span>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter