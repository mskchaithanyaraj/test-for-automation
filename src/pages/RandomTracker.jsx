import { useState, useEffect } from "react";

const RandomTracker = () => {
  const [currentNumber, setCurrentNumber] = useState(null);
  const [history, setHistory] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    average: 0,
    min: null,
    max: null,
  });

  // Generate random number between 1-1000
  const generateRandomNumber = () => {
    setIsGenerating(true);

    // Add some animation delay
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 1000) + 1;
      const timestamp = new Date().toLocaleTimeString();

      setCurrentNumber(randomNum);
      const newEntry = { number: randomNum, timestamp, id: Date.now() };
      setHistory((prev) => [newEntry, ...prev.slice(0, 19)]); // Keep last 20 entries
      setIsGenerating(false);
    }, 500);
  };

  // Calculate statistics
  useEffect(() => {
    if (history.length > 0) {
      const numbers = history.map((entry) => entry.number);
      const total = numbers.reduce((sum, num) => sum + num, 0);
      const average = Math.round(total / numbers.length);
      const min = Math.min(...numbers);
      const max = Math.max(...numbers);

      setStats({ total, average, min, max });
    }
  }, [history]);

  const clearHistory = () => {
    setHistory([]);
    setCurrentNumber(null);
    setStats({ total: 0, average: 0, min: null, max: null });
  };

  return (
    <div className="space-y-8 premium-animate-slide-up">
      {/* Header */}
      <div className="premium-card p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h1 className="premium-heading text-4xl lg:text-5xl mb-3">
              Random Number Tracker
            </h1>
            <p className="theme-text-secondary text-lg max-w-2xl">
              Generate random numbers and track their statistics. Perfect for
              testing automation scenarios with dynamic data.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={generateRandomNumber}
              disabled={isGenerating}
              className={`premium-button premium-button-primary text-white font-semibold px-8 py-3 ${
                isGenerating ? "opacity-50 cursor-not-allowed" : ""
              }`}
              data-testid="generate-number-btn"
            >
              {isGenerating ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Generating...</span>
                </div>
              ) : (
                "🎲 Generate Number"
              )}
            </button>

            {history.length > 0 && (
              <button
                onClick={clearHistory}
                className="premium-button premium-button-secondary"
              >
                🗑️ Clear History
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Current Number Display */}
      {currentNumber !== null && (
        <div className="premium-card p-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">🎯</span>
            </div>
            <h2 className="text-2xl font-semibold theme-text-primary">
              Current Number
            </h2>
          </div>

          <div
            className="text-6xl font-bold premium-heading mb-2"
            data-testid="current-number"
          >
            {currentNumber}
          </div>

          <div className="theme-text-tertiary">
            Generated at {history[0]?.timestamp}
          </div>
        </div>
      )}

      {/* Statistics */}
      {history.length > 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="premium-card p-4 text-center">
            <div className="text-2xl font-bold theme-text-primary">
              {history.length}
            </div>
            <div className="text-sm theme-text-secondary">Total Generated</div>
          </div>

          <div className="premium-card p-4 text-center">
            <div className="text-2xl font-bold theme-text-primary">
              {stats.average}
            </div>
            <div className="text-sm theme-text-secondary">Average</div>
          </div>

          <div className="premium-card p-4 text-center">
            <div className="text-2xl font-bold theme-text-primary">
              {stats.min}
            </div>
            <div className="text-sm theme-text-secondary">Minimum</div>
          </div>

          <div className="premium-card p-4 text-center">
            <div className="text-2xl font-bold theme-text-primary">
              {stats.max}
            </div>
            <div className="text-sm theme-text-secondary">Maximum</div>
          </div>
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="premium-card p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">📊</span>
            </div>
            <h2 className="text-2xl font-semibold theme-text-primary">
              Generation History ({history.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {history.map((entry, index) => (
              <div
                key={entry.id}
                className={`premium-card p-4 text-center transition-all duration-300 ${
                  index === 0 ? "ring-2 ring-green-500 ring-opacity-50" : ""
                }`}
                data-testid={`history-item-${index}`}
              >
                <div className="text-xl font-bold theme-text-primary mb-1">
                  {entry.number}
                </div>
                <div className="text-xs theme-text-tertiary">
                  {entry.timestamp}
                </div>
                {index === 0 && (
                  <div className="text-xs text-green-500 mt-1 font-semibold">
                    Latest
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {history.length === 0 && (
        <div className="premium-card p-12 text-center">
          <div className="text-6xl mb-4">🎲</div>
          <h3 className="text-xl font-semibold theme-text-primary mb-2">
            No Numbers Generated Yet
          </h3>
          <p className="theme-text-secondary mb-6">
            Click the "Generate Number" button to start tracking random numbers
          </p>
          <button
            onClick={generateRandomNumber}
            className="premium-button premium-button-primary"
          >
            Generate Your First Number
          </button>
        </div>
      )}

      {/* Quick Actions */}
      {history.length > 0 && (
        <div className="premium-card p-6">
          <h3 className="text-lg font-semibold theme-text-primary mb-4">
            Quick Actions
          </h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                for (let i = 0; i < 5; i++) {
                  setTimeout(() => generateRandomNumber(), i * 100);
                }
              }}
              className="premium-button premium-button-secondary text-sm"
            >
              🚀 Generate 5 Numbers
            </button>

            <button
              onClick={() => {
                const numbers = history.map((entry) => entry.number).join(", ");
                navigator.clipboard.writeText(numbers);
              }}
              className="premium-button premium-button-secondary text-sm"
            >
              📋 Copy Numbers
            </button>

            <button
              onClick={() => {
                const data = JSON.stringify(history, null, 2);
                const blob = new Blob([data], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "random-numbers-history.json";
                a.click();
              }}
              className="premium-button premium-button-secondary text-sm"
            >
              💾 Export Data
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomTracker;
