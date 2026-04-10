// Imagine you're making a sandwich :

// You make the sandwich (this is like your component rendering)
// AFTER you make it, you want to:

// Take a picture 
// Text your friend "Look what I made!" 
// Put it on a plate 
// useEffect is like saying: "After my component appears on screen, do these things!"

// Think of a birthday party :

// Setup = You put the cake on the table (component renders)
// useEffect = "After the cake is on the table, let's light the candles!" 
// Cleanup = "When the party ends, blow out the candles!" 

// The Cleanup Explanation

// Imagine you have a pet dog :

// useEffect = "Get a dog when you move into the house"
// Cleanup function = "When you move out, take the dog with you!"
// Without cleanup, the dog would stay in the empty house forever!

import React from 'react'
import { useState, useEffect } from 'react';

const Welcome = () => {
  const [message, setMessage] = useState("Waiting...");
  
  // useEffect with empty brackets [] means "run once when component appears"
  useEffect(() => {
    console.log("COMPONENT APPEARED ON SCREEN!");
    setMessage("WELCOME FRIEND!");
  }, []); // Empty array = run only ONCE
  //Empty array is often used for loading data from API
  //No Array means it will always run 
  //[count]); Run ONLY when 'count' changes & When user types something, search automatically

  return (
    <div>
      <h1>{message}</h1>
      <p>This message appeared automatically after the page loaded!</p>
    </div>
  )
}

export default Welcome
