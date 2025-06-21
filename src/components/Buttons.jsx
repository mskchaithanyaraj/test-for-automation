import { useState } from "react";

const buttonStyles = [
  { bg: "from-red-500 to-pink-500", text: "Red" },
  { bg: "from-blue-500 to-cyan-500", text: "Blue" },
  { bg: "from-green-500 to-emerald-500", text: "Green" },
  { bg: "from-yellow-500 to-orange-500", text: "Yellow" },
  { bg: "from-purple-500 to-violet-500", text: "Purple" },
  { bg: "from-pink-500 to-rose-500", text: "Pink" },
  { bg: "from-indigo-500 to-blue-500", text: "Indigo" },
  { bg: "from-teal-500 to-cyan-500", text: "Teal" },
  { bg: "from-orange-500 to-red-500", text: "Orange" },
  { bg: "from-cyan-500 to-blue-500", text: "Cyan" },
];

const Buttons = () => {
  const [buttonStates, setButtonStates] = useState(Array(10).fill(false));
  const [clickCounts, setClickCounts] = useState(Array(10).fill(0));

  const handleButtonClick = (index) => {
    const newStates = [...buttonStates];
    const newCounts = [...clickCounts];

    newStates[index] = !newStates[index];
    newCounts[index] += 1;

    setButtonStates(newStates);
    setClickCounts(newCounts);
  };

  const totalClicks = clickCounts.reduce((sum, count) => sum + count, 0);

  return (
    <section className="premium-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl font-semibold theme-text-primary">
            Interactive Buttons
          </h2>
        </div>

        <div className="premium-mono status-warning px-4 py-2 rounded-full">
          Total Clicks: {totalClicks}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {buttonStates.map((clicked, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`premium-button relative overflow-hidden py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
              clicked
                ? `bg-gradient-to-r ${buttonStyles[index].bg} shadow-lg scale-105`
                : "premium-button-secondary theme-text-primary"
            }`}
            data-testid={`button-${index + 1}`}
          >
            <span className="relative z-10">
              {clicked ? (
                <div className="text-center">
                  <div className="text-sm opacity-90">
                    {buttonStyles[index].text}
                  </div>
                  <div className="text-xs">Clicked {clickCounts[index]}x</div>
                </div>
              ) : (
                `Button ${index + 1}`
              )}
            </span>
            {clicked && (
              <div className="absolute inset-0 bg-white/20 premium-animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Buttons;
