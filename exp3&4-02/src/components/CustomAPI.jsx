// Without Custom Hooks:

// You write the same recipe over and over in different kitchens
// Every time you cook, you have to remember all the steps
// If recipe changes, you have to update everywhere!

// With Custom Hooks:

// You write the recipe ONCE in your cookbook
// Any kitchen can use that recipe
// If recipe changes, update ONE place, EVERYONE gets it!
// Custom Hooks are REUSABLE logic that you can share across components!

// The Golden Rules of Custom Hooks

// Must start with use – Like useFetch, useLocalStorage, useWindowSize
// Can call other hooks – useState, useEffect, useCallback, etc.
// Must be used in components or other hooks – Not in regular functions
// Returns values – Usually an array or object

// useFetch.js
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]); // Re-fetch when URL changes
  
  return { data, loading, error };
}

export default useFetch;

//"Custom Hooks are JavaScript functions that reuse stateful logic across multiple components. 
// They must start with 'use' and can call other hooks.

// They are powerful because:

// They let me extract component logic into reusable functions
// They keep components clean – components focus on UI, hooks focus on logic
// They make sharing logic easy – no more copy-pasting code!

// Examples of custom hooks I can build:

// useFetch – For API calls
// useLocalStorage – For persistent data
// useWindowSize – For responsive design
// useDebounce – For search optimization
// useToggle – For boolean state
// The best part is: I can combine multiple hooks inside a custom hook. 

// For example, I can have useLocalStorage call useState and useEffect inside it.

// Custom hooks are the ultimate way to make React code DRY (Don't Repeat Yourself)!"