import { useState } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  
  // This runs EVERY time component re-renders!
  // Even when just typing text!
  const expensiveCalculation = () => {
    console.log("Running expensive calculation... ");
    
    // Imagine this is a complex calculation
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  };
  
  const calculatedValue = expensiveCalculation();
  
  return (
    <div>
      <h2>Expensive: {calculatedValue}</h2>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Every time you type, the calculation runs again!</p>
    </div>
  );
}

// What's happening?

// You type one letter → text changes
// Component re-renders
// expensiveCalculation() runs again (takes time!)
// App feels SLOW! 