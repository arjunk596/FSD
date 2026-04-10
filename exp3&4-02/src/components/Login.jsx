//Here you will only see the statement please login because for toggling we need to use 
//React Hooks which we will learn in the future. 

import React from 'react'

const Login = ({isLoggedin}) => {
  return (
    <div>
        <button onClick={isLoggedin}>Check!!!</button>
      {isLoggedin ? <h5>Welcome Back!</h5> : <h5>Please Login</h5>}
    </div>
  )
}

export default Login
