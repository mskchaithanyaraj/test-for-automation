import { useState } from "react";

const sampleData = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
];

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResults = sampleData.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="mb-10">
      <h2 className="text-2xl mb-4">Search</h2>

      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search fruits..."
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          data-testid="search-input"
        />
      </div>

      <div className="mb-4">
        <div className="bg-blue-600/20 px-4 py-2 rounded inline-block">
          <span className="text-blue-400">
            Live Input: "{searchTerm}" ({searchTerm.length} characters)
          </span>
        </div>
      </div>

      {searchTerm && (
        <div className="bg-gray-800 rounded p-4">
          <h3 className="text-lg font-semibold mb-3">
            Search Results ({filteredResults.length})
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {filteredResults.map((item, index) => (
              <div
                key={index}
                className="bg-blue-600/20 px-3 py-2 rounded text-center"
                data-testid={`search-result-${index}`}
              >
                {item}
              </div>
            ))}
          </div>
          {filteredResults.length === 0 && (
            <p className="text-gray-400 text-center py-4">No results found</p>
          )}
        </div>
      )}
    </section>
  );
};

export default SearchInput;
