// Imagine you have a sticky note on your desk:

// useState = A whiteboard where every time you write, everyone looks at it and the room repaints! 
// useRef = A sticky note that YOU can read and write, but the room doesn't care when you change it! Nobody repaints! 🎨
// useRef lets you remember things that DON'T need to update the screen!

// Think of a self book  vs whiteboard:

// Whiteboard (useState):

// Everyone can see what's written
// When you erase and write new, everyone turns to look
// Causes a re-render!

// Self Book (useRef):

// Only you write in it
// You can write anything anytime
// Nobody looks unless you show them
// NO re-render!

//USE useState to display data and useRef to update if you use useRef to display it will render again
//Refs are for data that DOESN'T need to show on screen!


//Video Game Analogy
//useState = Health bar on screen

// When health changes, screen updates!
// Everyone can see it!
// useRef = Secret inventory count

// You can pick up items (increase count)
// Screen doesn't update
// Only you know how many items you have!

import { useRef, useState } from 'react';

function SecretCounter() {
  // This causes re-renders when changed
  const [visibleCount, setVisibleCount] = useState(0);
  
  // This does NOT cause re-renders when changed
  const secretCount = useRef(0);
  
  const incrementVisible = () => {
    setVisibleCount(visibleCount + 1); //  Screen updates!
  };
  
  const incrementSecret = () => {
    secretCount.current = secretCount.current + 1; //  Screen stays same!
    console.log(`Secret count: ${secretCount.current}`);
  };
  
  return (
    <div>
      <h2>Visible Count: {visibleCount} </h2>
      <button onClick={incrementVisible}>Show Everyone </button>
      
      <h2>Secret Count: ??? </h2>
      <button onClick={incrementSecret}>Secret Increment</button>
      
      <p>Check the console! Secret count is growing but screen never updates!</p>
    </div>
  );
}

export default SecretCounter;

// "useRef is a React Hook that gives me a mutable object that persists 
// across re-renders without causing re-renders when it changes.

// It has three main uses:

// Accessing DOM elements – Like focusing an input, playing a video, or measuring element size

// Storing mutable values – Like timer IDs or interval references that 
// don't need to trigger UI updates

// Remembering previous values – To compare current and previous state
// The key difference from useState is: changing a ref does NOT cause a re-render. 
// So I use useState for data that should update the screen, and useRef for data that shouldn't."