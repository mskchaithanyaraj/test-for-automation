const AutomationIndicator = ({ isRunning, currentStep }) => {
  if (!isRunning && !currentStep) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <span className="font-semibold">{currentStep}</span>
      </div>
    </div>
  );
};

export default AutomationIndicator;
