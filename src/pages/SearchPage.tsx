// src/pages/SearchPage.tsx
import React, { useState, useEffect } from 'react';

const SearchPage: React.FC = () => {
  // Local state for managing search input
  const [searchTerm, setSearchTerm] = useState('');
  const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    // Minimal call to the backend test route
    fetch('http://localhost:4000/api/test')
      .then((res) => res.json())
      .then((data) => {
        console.log('Data from server:', data);
        setServerMessage(data.message);
      })
      .catch((error) => console.error('Error:', error));
  }, []);


  // Handle search submission (placeholder for now)
  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
    // In the future, call your backend API here
  };

  return (
    <div style={{ margin: '2rem' }}>
      <h1>Allergen Search</h1>
      <p>Server says: {serverMessage}</p>
      <p>
        Enter the name of an allergen or chemical to see which products commonly contain it.
      </p>

      <div style={{ marginTop: '1rem' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for allergen..."
          style={{ padding: '0.5rem', width: '60%' }}
        />
        <button
          onClick={handleSearch}
          style={{ padding: '0.5rem 1rem', marginLeft: '0.5rem' }}
        >
          Search
        </button>
      </div>

      {/* Future: Display search results here */}
      <div style={{ marginTop: '1rem' }}>
        <h2>Search Results</h2>
        <p>No results to display yet.</p>
      </div>
    </div>
  );
};

export default SearchPage;
