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
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl">Checkboxes</h2>
        <div className="bg-green-600/20 px-3 py-1 rounded">
          <span className="text-green-400 font-semibold">
            {checkedCount}/10 Selected
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {checkboxStates.map((checked, index) => (
          <label
            key={index}
            className={`flex items-center space-x-3 p-4 rounded transition-all duration-300 ${
              checked
                ? "bg-green-600/20 border border-green-500/50"
                : "bg-gray-800"
            }`}
            data-testid={`checkbox-${index + 1}`}
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
  );
};

export default Checkboxes;
