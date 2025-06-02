// src/pages/Home.js
import React, { useState } from "react";

function Home() {
  const [buttonStates, setButtonStates] = useState(Array(10).fill(false));
  const [checkboxStates, setCheckboxStates] = useState(Array(10).fill(false));

  const handleButtonClick = (index) => {
    const newStates = [...buttonStates];
    newStates[index] = !newStates[index];
    setButtonStates(newStates);
  };

  const handleCheckboxChange = (index) => {
    const newStates = [...checkboxStates];
    newStates[index] = !newStates[index];
    setCheckboxStates(newStates);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">TEST FOR AUTOMATION</h1>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">Buttons</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {buttonStates.map((clicked, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded transition"
            >
              {clicked ? `Clicked ${index + 1}` : `Button ${index + 1}`}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-4">Checkboxes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {checkboxStates.map((checked, index) => (
            <label
              key={index}
              className="flex items-center space-x-3 bg-gray-800 p-4 rounded"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => handleCheckboxChange(index)}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span>Checkbox {index + 1}</span>
              {checked && <span className="text-green-400">✓ Checked!</span>}
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
