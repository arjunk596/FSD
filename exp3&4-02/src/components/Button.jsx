//Event handlers are functions that run when something happens (click, change, etc.).
//Now whenever you need to handle an event it should be linked to a HTML tag like button along
//along with a function which is defined & then called in return. 

import React from 'react'

const Button = () => {
    const handleClick = () => {
        alert('Button Clicked!')
    };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>;
    </div>
  )
}

export default Button
