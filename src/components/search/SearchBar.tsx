import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import type { Product } from "../types/types";
import SuggestionsList from "./SuggestionsList";

interface SearchBarProps {
  products: Product[];
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ products, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (searchQuery.length > 0 && isFocused) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    }
  }, [searchQuery, isFocused]);

  const handleFocus = () => {
    setIsFocused(true);
    if (searchQuery.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
      setShowSuggestions(false);
    }, 200);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedSuggestionIndex((prev) =>
        Math.min(prev + 1, filteredProducts.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedSuggestionIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter" && selectedSuggestionIndex >= 0) {
      e.preventDefault();
      const selectedProduct = filteredProducts[selectedSuggestionIndex].name;
      setSearchQuery(selectedProduct);
      setShowSuggestions(false);
      onSearch(selectedProduct);
    } else if (e.key === "Enter") {
      onSearch(searchQuery);
    }
  };

  const handleSuggestionSelect = (productName: string) => {
    setSearchQuery(productName);
    setShowSuggestions(false);
    onSearch(productName);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        ref={searchContainerRef}
        className={`search-container bg-white rounded-full p-1 shadow-md relative transition-all duration-300 ${
          isFocused ? "focused" : ""
        }`}
      >
        <div className="flex items-center">
          <div className="pl-4 pr-2">
            <i className="search-icon fas fa-search text-gray-400"></i>
          </div>
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder="Search for products..."
            className="w-full py-3 px-2 outline-none rounded-full text-gray-700 placeholder-gray-400"
            autoComplete="off"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2 ml-2 transition-colors duration-300"
          >
            Search
          </button>
        </div>
        {showSuggestions && (
          <SuggestionsList
            suggestions={filteredProducts}
            selectedIndex={selectedSuggestionIndex}
            onSelect={handleSuggestionSelect}
            searchQuery={searchQuery}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;