import { useState } from "react";
import Buttons from "../components/Buttons";
import Checkboxes from "../components/Checkboxes";
import SearchInput from "../components/SearchInput";
import AutomationIndicator from "../components/AutomationIndicator";
import { Form } from "react-router-dom";
import FormInputs from "../components/FormInputs";

const Home = () => {
  const [isAutomationRunning, setIsAutomationRunning] = useState(false);
  const [automationStep, setAutomationStep] = useState("");

  const simulateAutomation = () => {
    setIsAutomationRunning(true);
    const steps = [
      "Clicking buttons...",
      "Checking checkboxes...",
      "Filling search input...",
      "Automation complete!",
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setAutomationStep(step);
        if (index === steps.length - 1) {
          setTimeout(() => {
            setIsAutomationRunning(false);
            setAutomationStep("");
          }, 2000);
        }
      }, index * 1500);
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">TEST FOR AUTOMATION</h1>
        <button
          onClick={simulateAutomation}
          disabled={isAutomationRunning}
          className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 px-4 py-2 rounded font-semibold transition-all duration-300"
          data-testid="start-automation"
        >
          {isAutomationRunning ? "Running..." : "Start Automation"}
        </button>
      </div>

      <AutomationIndicator
        isRunning={isAutomationRunning}
        currentStep={automationStep}
      />

      <SearchInput />

      <Buttons />

      <Checkboxes />

      <FormInputs />
    </div>
  );
};

export default Home;
