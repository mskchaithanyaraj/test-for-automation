import { useState } from "react";
import Buttons from "../components/Buttons";
import Checkboxes from "../components/Checkboxes";
import SearchInput from "../components/SearchInput";
import AutomationIndicator from "../components/AutomationIndicator";

const Home = () => {
  const [isAutomationRunning, setIsAutomationRunning] = useState(false);
  const [automationStep, setAutomationStep] = useState("");

  const simulateAutomation = () => {
    setIsAutomationRunning(true);
    const steps = [
      "Initializing automation suite...",
      "Executing button interactions...",
      "Processing checkbox selections...",
      "Validating search functionality...",
      "Completing form submissions...",
      "✓ Automation suite completed successfully!",
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setAutomationStep(step);
        if (index === steps.length - 1) {
          setTimeout(() => {
            setIsAutomationRunning(false);
            setAutomationStep("");
          }, 3000);
        }
      }, index * 1200);
    });
  };

  return (
    <div className="space-y-8 premium-animate-slide-up">
      <div className="premium-card p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h1 className="premium-heading text-4xl lg:text-5xl mb-3">
              Automation Testing Suite
            </h1>
            <p className="theme-text-secondary text-lg max-w-2xl">
              Comprehensive testing environment for UI automation scenarios.
              Test button interactions, form submissions, search functionality,
              and more.
            </p>
          </div>

          <button
            onClick={simulateAutomation}
            disabled={isAutomationRunning}
            className={`premium-button premium-button-primary text-white font-semibold px-8 py-3 ${
              isAutomationRunning ? "opacity-50 cursor-not-allowed" : ""
            }`}
            data-testid="start-automation"
          >
            {isAutomationRunning ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Running Tests...</span>
              </div>
            ) : (
              "🚀 Start Automation"
            )}
          </button>
        </div>
      </div>

      <AutomationIndicator
        isRunning={isAutomationRunning}
        currentStep={automationStep}
      />

      <div className="grid gap-8">
        <SearchInput />
        <Buttons />
        <Checkboxes />
      </div>
    </div>
  );
};

export default Home;
