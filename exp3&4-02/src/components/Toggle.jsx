// Think of your React app as a school:

// createContext = Installing a school announcement system 
// Provider = Principal speaking into the microphone 
// useContext = Any student/staff listening to announcements 
// No one needs to pass notes! Everyone just listens to the announcements!

// "useContext is a React Hook that lets me share data across components without prop drilling.

// It works in three steps:

// Create a context with createContext()
// Provide the data with <Context.Provider value={data}>
// Consume the data anywhere with useContext(Context)
// It's perfect for global data like:

// User authentication status 
// Theme (light/dark mode) 
// Shopping cart 
// Language settings 

// It solves the 'prop drilling' problem where you have to pass data 
// through many components that don't need it!"

import React from 'react'
import { useState } from 'react';
import ThemeContext from './ThemeContext';
import Header from './Header';
import Content from './Content';

const Toggle = () => {
    const [theme, setTheme] = useState("light");
  
  // We want EVERYONE to know the theme!
  return (
       <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <Header />
        <Content />
      </div>
    </ThemeContext.Provider>
  )
}

export default Toggle
