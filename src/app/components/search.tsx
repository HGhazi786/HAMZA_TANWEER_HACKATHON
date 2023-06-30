"use client";
import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";

const SearchComponent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: any) => {
    event.preventDefault();
    setIsSearchOpen(false);
    // Perform search logic with the searchQuery value
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="relative">
      {isSearchOpen ? (
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="px-4 py-1 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
          />
        </form>
      ) : (
        <button className="text-lg text-white" onClick={toggleSearch}>
          <FaSearch />
        </button>
      )}
    </div>
  );
};

export default SearchComponent;
