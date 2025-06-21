import { useState } from "react";

const sampleData = [
  "🍎 Apple",
  "🍌 Banana",
  "🍒 Cherry",
  "📅 Date",
  "🫐 Elderberry",
  "🟢 Fig",
  "🍇 Grape",
  "🍈 Honeydew",
  "🥝 Kiwi",
  "🍋 Lemon",
  "🥭 Mango",
  "🍊 Orange",
  "🍑 Peach",
  "🍐 Pear",
  "🍍 Pineapple",
];

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResults = sampleData.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <section className="premium-card p-6">
      <div className="flex items-center space-x-3 mb-6">
        <h2 className="text-2xl font-semibold theme-text-primary">
          Fruit Search
        </h2>
      </div>

      {/* Search Input with Clear Button */}
      <div className="relative mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type to search fruits... (e.g., apple, banana)"
          className="premium-input w-full text-lg pr-12"
          data-testid="search-input"
        />

        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Live Search Stats */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="premium-mono theme-bg-secondary theme-text-secondary px-3 py-1 rounded-full text-sm">
          <span className="font-semibold">Search:</span>{" "}
          {searchTerm || "Start typing..."}
        </div>
        <div className="premium-mono status-success px-3 py-1 rounded-full text-sm">
          <span className="font-semibold">Found:</span> {filteredResults.length}{" "}
          items
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-4">
        {searchTerm ? (
          <>
            <h3 className="text-lg font-semibold theme-text-primary">
              Search Results ({filteredResults.length})
            </h3>

            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {filteredResults.map((item, index) => (
                  <div
                    key={index}
                    className="premium-card p-4 text-center theme-text-primary hover:scale-105 transition-transform cursor-pointer group"
                    data-testid={`search-result-${index}`}
                  >
                    <div className="text-lg group-hover:scale-110 transition-transform">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl mb-3">🔍</div>
                <div className="theme-text-tertiary text-lg">
                  No fruits found matching "{searchTerm}"
                </div>
                <div className="theme-text-tertiary text-sm mt-2">
                  Try searching for: apple, banana, cherry, etc.
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold theme-text-primary">
              All Fruits ({sampleData.length})
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {sampleData.map((item, index) => (
                <div
                  key={index}
                  className="premium-card p-3 text-center theme-text-primary hover:scale-105 transition-transform cursor-pointer group"
                  data-testid={`fruit-item-${index}`}
                >
                  <div className="text-sm group-hover:scale-110 transition-transform">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Quick Search Suggestions */}
      {!searchTerm && (
        <div className="mt-6 pt-6 border-t theme-border-primary">
          <div className="text-sm theme-text-secondary mb-3">
            Quick searches:
          </div>
          <div className="flex flex-wrap gap-2">
            {["apple", "berry", "citrus", "tropical"].map((term) => (
              <button
                key={term}
                onClick={() => setSearchTerm(term)}
                className="px-3 py-1 theme-bg-secondary theme-text-primary rounded-full text-sm hover:theme-bg-tertiary transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchInput;
