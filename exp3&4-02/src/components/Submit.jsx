import React from 'react'
import { useState } from 'react'

const Submit = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log('Submitted:', { email, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
    </div>
  )
}

export default Submit