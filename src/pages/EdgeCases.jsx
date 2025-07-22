import { useState } from "react";

const EdgeCases = () => {
  const [edgeFormData, setEdgeFormData] = useState({
    divTextarea: "",
    contentEditable: "",
    customDropdown: "",
    shadowInput: "",
    dynamicContent: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dynamicElements, setDynamicElements] = useState([]);
  const [loadingStates, setLoadingStates] = useState({});

  const handleDivTextareaChange = (e) => {
    const value = e.target.textContent;
    setEdgeFormData((prev) => ({ ...prev, divTextarea: value }));
  };

  const handleContentEditableChange = (e) => {
    const value = e.target.innerHTML;
    setEdgeFormData((prev) => ({ ...prev, contentEditable: value }));
  };

  const addDynamicElement = () => {
    const newElement = {
      id: Date.now(),
      type: Math.random() > 0.5 ? "input" : "button",
      content: `Dynamic Element ${dynamicElements.length + 1}`,
    };
    setDynamicElements((prev) => [...prev, newElement]);
  };

  const simulateLoading = (elementId) => {
    setLoadingStates((prev) => ({ ...prev, [elementId]: true }));
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [elementId]: false }));
    }, 2000);
  };

  return (
    <div className="space-y-8 premium-animate-slide-up">
      <div className="premium-card p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h1 className="premium-heading text-4xl lg:text-5xl mb-3">
              Edge Cases & Weird Testing
            </h1>
            <p className="theme-text-secondary text-lg max-w-2xl">
              Challenging UI patterns and edge cases that can trip up automation
              tools. Test unusual implementations, custom components, and tricky
              element interactions.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="premium-mono status-warning px-4 py-2 rounded-full">
              <span className="text-sm font-semibold">⚠️ Tricky Elements</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fake Input Elements */}
      <div className="premium-card p-6">
        <h2 className="text-2xl font-semibold theme-text-primary mb-4">
          🎭 Fake Input Elements
        </h2>
        <div className="space-y-6">
          {/* Div masquerading as textarea */}
          <div className="premium-form-group">
            <label className="premium-label">
              DIV with textarea role (not a real textarea!)
            </label>
            <div
              role="textbox"
              contentEditable="true"
              className="premium-input w-full min-h-[100px] p-3 border rounded-lg"
              style={{ whiteSpace: "pre-wrap" }}
              onInput={handleDivTextareaChange}
              data-testid="fake-textarea-div"
              placeholder="This is actually a DIV, not a textarea..."
            >
              {/* Placeholder simulation */}
              {!edgeFormData.divTextarea && (
                <span className="text-gray-400">
                  This is actually a DIV, not a textarea...
                </span>
              )}
            </div>
            <small className="theme-text-tertiary">
              ⚠️ This element uses role="textbox" but is actually a DIV
            </small>
          </div>

          {/* ContentEditable element */}
          <div className="premium-form-group">
            <label className="premium-label">
              ContentEditable DIV (allows rich text)
            </label>
            <div
              contentEditable="true"
              className="premium-input w-full min-h-[80px] p-3 border rounded-lg"
              onInput={handleContentEditableChange}
              data-testid="contenteditable-div"
              suppressContentEditableWarning={true}
            >
              <em>Type here with rich text support...</em>
            </div>
            <small className="theme-text-tertiary">
              ⚠️ This supports HTML content and can contain nested elements
            </small>
          </div>

          {/* Span that looks like input */}
          <div className="premium-form-group">
            <label className="premium-label">SPAN styled like an input</label>
            <span
              className="premium-input w-full block p-3 border rounded-lg bg-white cursor-text"
              data-testid="fake-input-span"
              onClick={() => alert("This is not actually an input!")}
            >
              Click me - I'm not a real input!
            </span>
            <small className="theme-text-tertiary">
              ⚠️ This looks like an input but is actually a SPAN element
            </small>
          </div>
        </div>
      </div>

      {/* Custom Dropdown Implementations */}
      <div className="premium-card p-6">
        <h2 className="text-2xl font-semibold theme-text-primary mb-4">
          📋 Custom Dropdown Implementations
        </h2>
        <div className="space-y-6">
          {/* Fake select dropdown */}
          <div className="premium-form-group">
            <label className="premium-label">
              Custom Dropdown (not a real select)
            </label>
            <div className="relative">
              <div
                className="premium-input w-full cursor-pointer flex justify-between items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                data-testid="custom-dropdown-trigger"
              >
                <span>
                  {edgeFormData.customDropdown || "Choose an option..."}
                </span>
                <span
                  className="transform transition-transform duration-200"
                  style={{
                    transform: isDropdownOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                >
                  ▼
                </span>
              </div>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-10 theme-bg-primary">
                  {[
                    "Option 1",
                    "Option 2",
                    "Option 3",
                    "Weird Option with 🚀",
                    "Very Long Option Name That Might Break Things",
                  ].map((option) => (
                    <div
                      key={option}
                      className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
                      onClick={() => {
                        setEdgeFormData((prev) => ({
                          ...prev,
                          customDropdown: option,
                        }));
                        setIsDropdownOpen(false);
                      }}
                      data-testid={`dropdown-option-${option
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <small className="theme-text-tertiary">
              ⚠️ This dropdown is built with DIVs, not a SELECT element
            </small>
          </div>
        </div>
      </div>

      {/* Shadow DOM and Hidden Elements */}
      <div className="premium-card p-6">
        <h2 className="text-2xl font-semibold theme-text-primary mb-4">
          👻 Hidden & Shadow Elements
        </h2>
        <div className="space-y-6">
          {/* Hidden input that becomes visible on hover */}
          <div className="premium-form-group">
            <label className="premium-label">
              Hidden Input (hover to reveal)
            </label>
            <div className="group relative">
              <input
                type="text"
                className="premium-input w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                placeholder="I'm hidden until you hover!"
                data-testid="hidden-hover-input"
              />
              <div className="absolute inset-0 flex items-center justify-center group-hover:hidden theme-bg-secondary rounded-lg border-2 border-dashed">
                <span className="theme-text-tertiary">
                  🔍 Hover to reveal input
                </span>
              </div>
            </div>
          </div>

          {/* Input with changing attributes */}
          <div className="premium-form-group">
            <label className="premium-label">
              Input with Dynamic Attributes
            </label>
            <input
              type="text"
              className="premium-input w-full"
              placeholder="My attributes change on focus!"
              data-testid="dynamic-attributes-input"
              onFocus={(e) => {
                e.target.setAttribute("data-focused", "true");
                e.target.setAttribute("aria-expanded", "true");
                e.target.className += " ring-2 ring-blue-500";
              }}
              onBlur={(e) => {
                e.target.removeAttribute("data-focused");
                e.target.setAttribute("aria-expanded", "false");
                e.target.className = e.target.className.replace(
                  " ring-2 ring-blue-500",
                  ""
                );
              }}
            />
            <small className="theme-text-tertiary">
              ⚠️ This input's attributes and classes change on focus/blur
            </small>
          </div>

          {/* Element that changes its tag */}
          <div className="premium-form-group">
            <label className="premium-label">Morphing Element</label>
            <div className="space-x-4">
              <button
                className="premium-button premium-button-secondary"
                onClick={(e) => {
                  const parent = e.target.parentNode;
                  const newElement = document.createElement("input");
                  newElement.type = "text";
                  newElement.className = "premium-input";
                  newElement.placeholder = "I was a button, now I'm an input!";
                  newElement.setAttribute("data-testid", "morphed-element");
                  parent.replaceChild(newElement, e.target);
                }}
                data-testid="morphing-button"
              >
                Click to morph into input
              </button>
            </div>
            <small className="theme-text-tertiary">
              ⚠️ This button transforms into an input when clicked
            </small>
          </div>
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="premium-card p-6">
        <h2 className="text-2xl font-semibold theme-text-primary mb-4">
          ⚡ Dynamic Content & Loading States
        </h2>
        <div className="space-y-6">
          {/* Dynamically generated elements */}
          <div className="premium-form-group">
            <label className="premium-label">
              Dynamically Generated Elements
            </label>
            <button
              className="premium-button premium-button-primary mb-4"
              onClick={addDynamicElement}
              data-testid="add-dynamic-element"
            >
              Add Random Element
            </button>
            <div className="space-y-2">
              {dynamicElements.map((element) => (
                <div key={element.id} className="flex items-center space-x-2">
                  {element.type === "input" ? (
                    <input
                      type="text"
                      className="premium-input flex-1"
                      placeholder={element.content}
                      data-testid={`dynamic-input-${element.id}`}
                    />
                  ) : (
                    <button
                      className="premium-button premium-button-secondary flex-1"
                      data-testid={`dynamic-button-${element.id}`}
                    >
                      {element.content}
                    </button>
                  )}
                  <span className="text-sm theme-text-tertiary">
                    #{element.id}
                  </span>
                </div>
              ))}
            </div>
            <small className="theme-text-tertiary">
              ⚠️ These elements are created dynamically and have unpredictable
              IDs
            </small>
          </div>

          {/* Loading states that change element accessibility */}
          <div className="premium-form-group">
            <label className="premium-label">
              Elements with Loading States
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["submit-btn", "save-btn", "delete-btn"].map((btnId) => (
                <button
                  key={btnId}
                  className={`premium-button premium-button-primary relative ${
                    loadingStates[btnId] ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => simulateLoading(btnId)}
                  disabled={loadingStates[btnId]}
                  data-testid={btnId}
                >
                  {loadingStates[btnId] ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Loading...
                    </>
                  ) : (
                    btnId
                      .replace("-", " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())
                  )}
                </button>
              ))}
            </div>
            <small className="theme-text-tertiary">
              ⚠️ These buttons become disabled and change content during loading
            </small>
          </div>
        </div>
      </div>

      {/* Nested and Complex Structures */}
      <div className="premium-card p-6">
        <h2 className="text-2xl font-semibold theme-text-primary mb-4">
          🪆 Nested & Complex Structures
        </h2>
        <div className="space-y-6">
          {/* Deeply nested clickable elements */}
          <div className="premium-form-group">
            <label className="premium-label">
              Deeply Nested Clickable Elements
            </label>
            <div className="border rounded-lg p-4 theme-bg-secondary">
              <div className="border rounded p-3 theme-bg-tertiary">
                <div className="border rounded p-2 bg-white">
                  <div className="border rounded p-2 bg-gray-50">
                    <button
                      className="premium-button premium-button-primary w-full"
                      data-testid="deeply-nested-button"
                      onClick={() => alert("Found me in the depths!")}
                    >
                      I'm 4 levels deep!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <small className="theme-text-tertiary">
              ⚠️ This button is nested 4 levels deep in DIV containers
            </small>
          </div>

          {/* Table with interactive elements */}
          <div className="premium-form-group">
            <label className="premium-label">
              Table with Mixed Interactive Elements
            </label>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border theme-border-primary">
                <thead>
                  <tr className="theme-bg-secondary">
                    <th className="border p-2 text-left">Name</th>
                    <th className="border p-2 text-left">Input</th>
                    <th className="border p-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {["Row 1", "Row 2", "Row 3"].map((row, index) => (
                    <tr key={index}>
                      <td className="border p-2">{row}</td>
                      <td className="border p-2">
                        <input
                          type="text"
                          className="premium-input w-full"
                          placeholder={`Input for ${row}`}
                          data-testid={`table-input-${index}`}
                        />
                      </td>
                      <td className="border p-2">
                        <button
                          className="premium-button premium-button-secondary text-sm"
                          data-testid={`table-button-${index}`}
                        >
                          Action {index + 1}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <small className="theme-text-tertiary">
              ⚠️ Interactive elements within table cells can be tricky to target
            </small>
          </div>
        </div>
      </div>

      {/* Testing Instructions */}
      <div className="premium-card p-6 theme-bg-secondary">
        <h3 className="text-xl font-semibold theme-text-primary mb-4">
          🧪 Edge Case Testing Guide
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium theme-text-primary mb-2">
              Common Challenges:
            </h4>
            <ul className="space-y-1 text-sm theme-text-secondary">
              <li>• Elements with misleading roles or attributes</li>
              <li>• Custom implementations of standard elements</li>
              <li>• Dynamic content that changes during interaction</li>
              <li>• Hidden elements that appear conditionally</li>
              <li>• Nested structures with multiple event handlers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium theme-text-primary mb-2">
              Testing Strategies:
            </h4>
            <ul className="space-y-1 text-sm theme-text-secondary">
              <li>
                • Use multiple locator strategies (ID, class, xpath, text)
              </li>
              <li>• Wait for elements to be interactable, not just present</li>
              <li>• Test both visible and accessibility-based selectors</li>
              <li>• Handle dynamic IDs and changing attributes</li>
              <li>• Test loading states and disabled elements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeCases;
