import { useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  
  // This function gets recreated EVERY time Parent renders!
  const handleClick = () => {
    console.log("Button clicked!");
  };
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Re-render Parent: {count}
      </button>
      <Child onClick={handleClick} />
    </div>
  );
}

function Child({ onClick }) {
  console.log("Child re-rendered!"); // This logs every time Parent re-renders!
  return <button onClick={onClick}>Click Me</button>;
}