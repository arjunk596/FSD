import { useState, useCallback, useEffect } from 'react';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // This function is memoized - only recreated when searchTerm changes
  const searchAPI = useCallback(async () => {
    if (!searchTerm) return;
    
    setLoading(true);
    console.log(`Searching for: ${searchTerm}`);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const fakeResults = [
      `${searchTerm} - Item 1`,
      `${searchTerm} - Item 2`,
      `${searchTerm} - Item 3`
    ];
    
    setResults(fakeResults);
    setLoading(false);
  }, [searchTerm]); // Recreate ONLY when searchTerm changes
  
  // This effect runs when searchAPI changes (only when searchTerm changes)
  useEffect(() => {
    searchAPI();
  }, [searchAPI]); // Depends on searchAPI
  
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      {loading && <p>Loading...</p>}
      <ul>
        {results.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;