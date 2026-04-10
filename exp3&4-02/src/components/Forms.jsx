//Here we are using React Hook which we will learn later 
//return to this page after learning about React Hooks

import React from 'react'
import { useState } from 'react'
 
const Forms = () => {
    const [name, setName] = useState (''); //variable, function and the function is to be defined in 
    // the event handler...
  return (
    <div>
      <input 
      type="text"
      value={name}
      //Here onChange is an Event Listener which triggers when user types, 
      //(e) is the event object, setName updates the state with new value,
      //e.target.value gets the current text the user types 
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter Your Name"
      />
    </div>
  )
}

export default Forms
