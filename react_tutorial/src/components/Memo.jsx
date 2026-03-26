// Imagine you're a student doing homework :

// Without useMemo:

// Every time your mom calls you (component re-renders), you RE-DO all your homework
// Even if nothing changed! You solve 2+2 again and again
// WASTE OF ENERGY! 
// With useMemo:

// You solve a problem ONCE
// You write the answer on a sticky note
// When mom calls, you just LOOK at the sticky note
// Only if the problem changes, you solve again
// MUCH FASTER! 
// useMemo remembers COMPUTED VALUES so you don't recalculate them unnecessarily!

//w/o memo
// Every time you sneeze, you type: 123 * 456 / 789 / 1000
// Every. Single. Time.
// Even if the numbers are the same!

//w memo
// You calculate once: 123 * 456 / 789 / 1000 = 170.5
// You write it down
// Whenever someone asks, you read the answer
// Only if numbers change, you calculate again

import { useState, useMemo } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  
  // ✅ This ONLY runs when 'count' changes!
  const calculatedValue = useMemo(() => {
    console.log("Running expensive calculation... 😫");
    
    // Imagine this is a complex calculation
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  }, [count]); // Only recalculate when count changes
  
  console.log("Component rendered");
  
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
      <p>Try typing! The calculation DOESN'T run again!</p>
      <p>Only when you click the button does it recalculate!</p>
    </div>
  );
}

export default ExpensiveComponent;

//// useMemo: Returns a VALUE (the RESULT of the function)
const [searchTerm, setSearchTerm] = useState('');

// Using searchTerm but not in dependencies!
// const filtered = useMemo(() => {
//   return data.filter(item => item.includes(searchTerm));
// }, []); // This will ALWAYS use empty searchTerm!

// const filtered = useMemo(() => {
//   return data.filter(item => item.includes(searchTerm));
// }, [data, searchTerm]); // Recalculate when data OR searchTerm changes

//"useMemo is a React Hook that memoizes the result of a calculation and
//  only recalculates when its dependencies change.

// The syntax is:

// jsx
// const memoizedValue = useMemo(() => {
//   return expensiveCalculation();
// }, [dependencies]);
// I use useMemo for:

// Expensive calculations – Like loops, complex math, or large data transformations
// Referential equality – When I need the same object/array reference across renders
// Derived state – When I need to compute values based on other state
// The key difference from useCallback is:

// useCallback returns a memoized FUNCTION
// useMemo returns a memoized VALUE (the result of a function)
// But I don't use it everywhere – only when I actually have a performance 
// problem or when the calculation is truly expensive. 
// Premature optimization can actually make code slower!"

