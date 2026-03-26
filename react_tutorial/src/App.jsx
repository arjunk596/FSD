//React converts this JSX into React.createElement() calls, which create actual DOM elements. 
// JSX must return a single parent element (like <div> or <Fragment>).
//<> </> this fragments helps wrap all the divs and sections in one thing. 

//rafce shortcut for component jsx boilerplate. 

//Don't Forget to import the components file

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './components/Greeting'
import Card from './components/Card'
import Button from './components/Button'
import Login from './components/Login'
import List from './components/List'
import Forms from './components/Forms'
import Radio from './components/Radio'
import Multi from './components/Multi'
import Submit from './components/Submit'
import Counter from './components/Counter'
import Welcome from './components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (  
    <>  
      <div>
      <h1>Hello, Everyone!</h1>
      <p>This is a React Tutorial</p>
    </div>

    <div>
      <p>1 - Base Component</p>
      <Greeting />
      <Greeting />

      <p>2 - Props Call</p>
      <Card title="Arjun Kharche" desc="SE COMPS A" />
      <Card title="Salman Khan" desc="FARM HOUSE" />
      <Card title="Brad Pitt" desc="USA" />

      <p>3 - Event Handling</p>
      <Button />
      <Button />

      <p>4 - Conditionals</p>
      <Login />
      <Login />

      <p>5 - Lists</p>
      <List />

      <p>6 - Forms</p>
      <Forms />

      <p>7 - Radio</p>
      <Radio />

      <p>8 - Multi Input</p>
      <Multi />

      <p>9 - Form Submitting</p>
      <Submit />

      <p>React Hook - useState</p>
      <Counter />

      <p>React Hook - useEffect</p>
      <Welcome />
    </div>
    </>
  )
}

export default App
