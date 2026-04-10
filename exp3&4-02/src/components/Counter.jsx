//React Hooks 
// Imagine you have a magic box 🎁. 
// When you put something in it, everyone can see it. 
// When you change what's inside, automatically everyone sees the new thing 
// WITHOUT you having to tell them!

// That's exactly what useState does in React!

// Think of a light switch 💡:

// State = The light (ON or OFF)
// Current state = Is the light ON or OFF right now?
// Set function = Your finger that FLIPS the switch
// When you flip the switch:

// The light changes
// EVERYONE in the room sees it instantly
// You don't have to tell each person "hey the light changed!"

// Step 1: Import useState from React
import React from 'react'
import { useState } from 'react'

const Counter = () => {
// Step 2: Create your magic box!
// [current value, function to change it] = useState(initial value)
  const [count, setCount] = useState(0);

// Step 3: Use it in your JSX!
//count = count + 1; This does NOT update the screen!
  return (
    <div>
      <h1>My Magic Counter </h1>
      <p>The number is: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  )
}

export default Counter
