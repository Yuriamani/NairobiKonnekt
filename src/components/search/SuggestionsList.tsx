import type { Product } from "../types/types";

interface SuggestionsListProps {
  suggestions: Product[];
  selectedIndex: number;
  onSelect: (productName: string) => void;
  searchQuery: string;
}

const SuggestionsList: React.FC<SuggestionsListProps> = ({
  suggestions,
  selectedIndex,
  onSelect,
  searchQuery,
}) => {
  const highlightMatch = (text: string, query: string) => {
    const regex = new RegExp(query, "gi");
    return text.replace(regex, (match) => `<span class="font-semibold text-blue-500">${match}</span>`);
  };

  return (
    <div className="suggestions-container absolute left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-10 overflow-y-auto">
      <div className="py-2">
        {suggestions.length > 0 ? (
          suggestions.map((product, index) => (
            <div
              key={product.id}
              className={`suggestion-item px-4 py-3 cursor-pointer flex items-center justify-between ${
                index === selectedIndex ? "selected" : ""
              }`}
              onClick={() => onSelect(product.name)}
              dangerouslySetInnerHTML={{
                __html: `
                  <span>${highlightMatch(product.name, searchQuery)}</span>
                  <span class="text-xs text-gray-500">${product.category}</span>
                `,
              }}
            />
          ))
        ) : (
          <div className="px-4 py-3 text-gray-500">No products found</div>
        )}
      </div>
    </div>
  );
};

export default SuggestionsList;