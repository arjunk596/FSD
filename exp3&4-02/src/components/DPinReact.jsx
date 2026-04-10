import { useState, useCallback, useRef } from 'react';

function DebouncedSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const timerRef = useRef(null);
  
  // This function is memoized - never changes
  const performSearch = useCallback((term) => {
    console.log(`Actually searching for: ${term}`);
    
    // Simulate API call
    const fakeResults = term ? [
      `${term} - Result 1`,
      `${term} - Result 2`,
      `${term} - Result 3`
    ] : [];
    
    setResults(fakeResults);
    setIsTyping(false);
  }, []);
  
  // This function is memoized - only changes when performSearch changes (never)
  const handleSearch = useCallback((term) => {
    setIsTyping(true);
    
    // Clear previous timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    // Wait 500ms before searching
    timerRef.current = setTimeout(() => {
      performSearch(term);
    }, 500);
  }, [performSearch]);
  
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };
  
  return (
    <div>
      <h2>Debounced Search</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Type to search..."
      />
      {isTyping && <p>Typing... ⏳</p>}
      <ul>
        {results.map((result, i) => (
          <li key={i}>{result}</li>
        ))}
      </ul>
      <p style={{ fontSize: '12px' }}>
        Search only happens 500ms after you stop typing!
      </p>
    </div>
  );
}

export default DebouncedSearch;