import { useState, useEffect } from 'react';

function AutoSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  
  // This runs EVERY TIME searchTerm changes
  useEffect(() => {
    if (searchTerm === "") {
      setResults([]);
      return;
    }
    
    console.log(`Searching for: ${searchTerm}`);
    
    // Imagine this is searching a database
    const fakeSearch = [
      "Apple", "Banana", "Orange", "Grapes", "Mango"
    ].filter(fruit => 
      fruit.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setResults(fakeSearch);
  }, [searchTerm]); // Run when searchTerm changes
  
  return (
    <div>
      <h2>🔍 Auto Search</h2>
      <input 
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Type a fruit..."
      />
      <ul>
        {results.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <p>Results update AUTOMATICALLY as you type!</p>
    </div>
  );
}