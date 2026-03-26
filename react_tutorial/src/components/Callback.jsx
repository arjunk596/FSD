// Think of a librarian 📚:

// Without useCallback:

// Every day, you hire a NEW librarian
// They have to re-organize all the books every day
// WASTE OF TIME!
// With useCallback:

// You hire ONE librarian
// They stay the SAME person every day
// They remember where all the books are
// EFFICIENT!

// useCallback returns a FUNCTION

import { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  
  // This function is MEMORIZED! Same function every time!
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // Empty array = never change
  //[prop]); // Only recreate if 'prop' changes!
  
  console.log("Parent re-rendered");
  
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
  console.log("Child re-rendered!"); // Only logs when component first mounts!
  return <button onClick={onClick}>Click Me</button>;
}

export default ParentComponent;

//const [count, setCount] = useState(0);

// const increment = useCallback(() => {
//   setCount(count + 1); // Using 'count' but not in dependencies!
// }, []); //  This will ALWAYS use the old count (0)

// const increment = useCallback(() => {
//   setCount(prev => prev + 1); // Better: use function form
// }, []); //  Or add count to dependencies

//useCallback alone doesn't prevent child re-renders! You need memo:

// "useCallback is a React Hook that returns a memoized version of a function 
// that only changes if its dependencies change.

// It's used for performance optimization to prevent unnecessary re-renders of child components.

// The syntax is:

// jsx
// const memoizedFunction = useCallback(() => {
//   // function logic
// }, [dependencies]);

// I use useCallback when:
// Passing functions to memoized child components – 
// Without it, child re-renders even if function logic is same

// Functions are dependencies in useEffect – Prevents infinite loops
// Functions are expensive to create – But this is rare
// The key difference from useMemo is:

// useCallback memoizes the FUNCTION itself
// useMemo memoizes the RESULT of a function
// However, I shouldn't use it everywhere – 
// only when I actually have performance issues or when passing to memoized children."