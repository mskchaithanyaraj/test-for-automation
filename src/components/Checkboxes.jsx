import { useState } from "react";

const Checkboxes = () => {
  const [checkboxStates, setCheckboxStates] = useState(Array(10).fill(false));

  const handleCheckboxChange = (index) => {
    const newStates = [...checkboxStates];
    newStates[index] = !newStates[index];
    setCheckboxStates(newStates);
  };

  const checkedCount = checkboxStates.filter(Boolean).length;

  return (
    <section className="premium-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl font-semibold theme-text-primary">
            Interactive Checkboxes
          </h2>
        </div>

        <div className="status-success">
          <span className="font-semibold">Selected:</span> {checkedCount}/10
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {checkboxStates.map((checked, index) => (
          <label
            key={index}
            className={`premium-card p-4 cursor-pointer transition-all duration-300 ${
              checked
                ? "ring-2 ring-green-500 ring-opacity-50 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
                : "hover:scale-105"
            }`}
            data-testid={`checkbox-${index + 1}`}
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => handleCheckboxChange(index)}
                className="premium-checkbox"
              />
              <div className="flex-1">
                <span className="font-medium theme-text-primary">
                  Checkbox {index + 1}
                </span>
                {checked && (
                  <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                    ✓ Selected & Active
                  </div>
                )}
              </div>
            </div>
          </label>
        ))}
      </div>

      {/* Summary Section */}
      <div className="mt-6 pt-6 border-t theme-border-primary">
        <div className="flex flex-wrap gap-3">
          <div className="premium-mono theme-bg-secondary theme-text-secondary px-3 py-1 rounded-full text-sm">
            <span className="font-semibold">Total:</span>{" "}
            {checkboxStates.length} items
          </div>
          <div className="premium-mono status-success px-3 py-1 rounded-full text-sm">
            <span className="font-semibold">Checked:</span> {checkedCount} items
          </div>
          <div className="premium-mono theme-bg-secondary theme-text-secondary px-3 py-1 rounded-full text-sm">
            <span className="font-semibold">Remaining:</span>{" "}
            {checkboxStates.length - checkedCount} items
          </div>
          <div className="premium-mono theme-bg-secondary theme-text-secondary px-3 py-1 rounded-full text-sm">
            <span className="font-semibold">Progress:</span>{" "}
            {Math.round((checkedCount / checkboxStates.length) * 100)}%
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3 mt-4">
        <button
          onClick={() => setCheckboxStates(Array(10).fill(true))}
          className="premium-button premium-button-primary text-sm"
        >
          ✓ Select All
        </button>
        <button
          onClick={() => setCheckboxStates(Array(10).fill(false))}
          className="premium-button premium-button-secondary text-sm"
        >
          ✗ Clear All
        </button>
        <button
          onClick={() =>
            setCheckboxStates((prev) => prev.map((state) => !state))
          }
          className="premium-button premium-button-secondary text-sm"
        >
          🔄 Toggle All
        </button>
        <button
          onClick={() =>
            setCheckboxStates((prev) => prev.map(() => Math.random() > 0.5))
          }
          className="premium-button premium-button-secondary text-sm"
        >
          🎲 Randomize
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium theme-text-secondary">
            Completion Progress
          </span>
          <span className="text-sm font-bold theme-text-primary">
            {Math.round((checkedCount / checkboxStates.length) * 100)}%
          </span>
        </div>
        <div className="w-full theme-bg-secondary rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${(checkedCount / checkboxStates.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Completion Message */}
      {checkedCount === checkboxStates.length && (
        <div className="mt-4 status-success premium-animate-slide-up">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <span className="text-white text-lg">🎉</span>
            </div>
            <div>
              <span className="font-semibold text-lg">
                All checkboxes selected! Great job!
              </span>
              <div className="text-sm theme-text-secondary mt-1">
                Perfect score: 10/10 completed
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Checkboxes;
