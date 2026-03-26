import React from 'react'
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Content = () => {
    const { theme } = useContext(ThemeContext);
  return (
     <div style={{ 
      background: theme === 'light' ? '#f0f0f0' : '#333',
      color: theme === 'light' ? '#333' : '#f0f0f0',
      padding: '20px',
      marginTop: '20px'
    }}>
      <h2>Content Area</h2>
      <p>I also know the theme is {theme} without any props!</p>
    </div>
  )
}

export default Content
