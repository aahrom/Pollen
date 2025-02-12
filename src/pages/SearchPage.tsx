// src/pages/SearchPage.tsx
import React, { useState } from 'react';

const SearchPage: React.FC = () => {
  // Local state for managing search input
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search submission (placeholder for now)
  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
    // In the future, call your backend API here
  };

  return (
    <div style={{ margin: '2rem' }}>
      <h1>Allergen Search</h1>
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
