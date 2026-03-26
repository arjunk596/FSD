import { useRef } from 'react';

function FocusInput() {
  // Create a ref to "point to" the input box
  const inputRef = useRef(null);
  
  const focusInput = () => {
    // Use the remote control to focus the input!
    inputRef.current.focus();
  };
  
  return (
    <div>
      {/* Attach the ref to the input */}
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Click the button to focus me!"
      />
      <button onClick={focusInput}>
        Focus Input 🔍
      </button>
    </div>
  );
}

export default FocusInput;

// What's happening?

// inputRef is like a GPS tracker on the input box
// When you click the button, React uses the GPS to find the input
// Then calls .focus() on it – the cursor jumps to the input!