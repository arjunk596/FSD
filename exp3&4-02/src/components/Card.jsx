//This component is to understand the use of props in React 
//Props let you pass data from parent to child. They are read-only.

import React from 'react'

const Card = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  )
}

export default Card
