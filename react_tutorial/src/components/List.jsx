//Use map() to render arrays of data. Always add a unique key.

import React from 'react'

const List = () => {

    const fruits = ['Apple', 'Mango', 'Pineapple', 'Banana'];

  return (
    <div>
      <ul>
      {fruits.map((fruit, index) => ( //fruit indicates the current item in the array & index indicated the index
        <li key={index}>{fruit}</li> //key={index} is unique identifier for react and {fruit} displays name
      ))}
    </ul>
    </div>
  )
}

export default List
