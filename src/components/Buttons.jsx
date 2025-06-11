import { useState } from "react";

const buttonColors = [
  "bg-red-600 hover:bg-red-700",
  "bg-blue-600 hover:bg-blue-700",
  "bg-green-600 hover:bg-green-700",
  "bg-yellow-600 hover:bg-yellow-700",
  "bg-purple-600 hover:bg-purple-700",
  "bg-pink-600 hover:bg-pink-700",
  "bg-indigo-600 hover:bg-indigo-700",
  "bg-teal-600 hover:bg-teal-700",
  "bg-orange-600 hover:bg-orange-700",
  "bg-cyan-600 hover:bg-cyan-700",
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

  return (
    <section className="mb-10">
      <h2 className="text-2xl mb-4">Buttons</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {buttonStates.map((clicked, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`${
              clicked ? buttonColors[index] : "bg-gray-700 hover:bg-gray-600"
            } text-white py-2 px-4 rounded transition-all duration-300 relative overflow-hidden`}
            data-testid={`button-${index + 1}`}
          >
            <span className="relative z-10">
              {clicked
                ? `Clicked ${clickCounts[index]}x`
                : `Button ${index + 1}`}
            </span>
            {clicked && (
              <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Buttons;
