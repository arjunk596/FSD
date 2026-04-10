import React from 'react'
import { useState } from 'react'

const Multi = () => {
    const [formData, setFormData] = useState({
    name: '', //declare variable and define its initial state as null. 
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); //[] is important as name is a key not "name". 
    //this is the function to update the state by creating an object that copies all the previous
    //data and then updates or appends at the end [name]: value
  };
  return (
    <div>
      <form>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
    </form>
    </div>
  )
}
