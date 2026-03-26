import React from 'react'
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);    
  return (
    <div style={{ 
      background: theme === 'light' ? 'white' : 'black',
      color: theme === 'light' ? 'black' : 'white',
      padding: '20px'
    }}>
      <h1>My App</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      <p>Current theme: {theme}</p>
    </div>
  )
}

export default Header
