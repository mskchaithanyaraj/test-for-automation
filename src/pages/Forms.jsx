import FormInputs from "../components/FormInputs";

const Forms = () => {
  return (
    <div className="space-y-8 premium-animate-slide-up">
      <div className="premium-card p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h1 className="premium-heading text-4xl lg:text-5xl mb-3">
              Form Testing Suite
            </h1>
            <p className="theme-text-secondary text-lg max-w-2xl">
              Comprehensive collection of form elements and input types for
              testing automation scenarios. Test various input fields,
              selections, validations, and form submissions.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="premium-mono status-success px-4 py-2 rounded-full">
              <span className="text-sm font-semibold">✓ Forms Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Form Testing Section */}
      <div className="space-y-8">
        {/* Basic Form Inputs */}
        <div className="premium-card p-6">
          <h2 className="text-2xl font-semibold theme-text-primary mb-4">
            🎯 Basic Input Fields
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="premium-form-group">
              <label className="premium-label">Text Input</label>
              <input
                type="text"
                className="premium-input w-full"
                placeholder="Enter text here"
                data-testid="basic-text-input"
              />
            </div>

            <div className="premium-form-group">
              <label className="premium-label">Password</label>
              <input
                type="password"
                className="premium-input w-full"
                placeholder="Enter password"
                data-testid="password-input"
              />
            </div>

            <div className="premium-form-group">
              <label className="premium-label">Email</label>
              <input
                type="email"
                className="premium-input w-full"
                placeholder="user@example.com"
                data-testid="email-input-basic"
              />
            </div>

            <div className="premium-form-group">
              <label className="premium-label">Number</label>
              <input
                type="number"
                className="premium-input w-full"
                placeholder="123"
                data-testid="number-input"
              />
            </div>

            <div className="premium-form-group">
              <label className="premium-label">Phone</label>
              <input
                type="tel"
                className="premium-input w-full"
                placeholder="+1 (555) 123-4567"
                data-testid="phone-input"
              />
            </div>

            <div className="premium-form-group">
              <label className="premium-label">URL</label>
              <input
                type="url"
                className="premium-input w-full"
                placeholder="https://example.com"
                data-testid="url-input"
              />
            </div>
          </div>
        </div>

        {/* Date and Time Inputs */}
        <div className="premium-card p-6">
          <h2 className="text-2xl font-semibold theme-text-primary mb-4">
            📅 Date & Time Inputs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="premium-form-group">
              <label className="premium-label">Date</label>
              <input
                type="date"
                className="premium-input w-full"
                data-testid="date-input"
              />
            </div>

            <div className="premium-form-group">
              <label className="premium-label">Time</label>
              <input
                type="time"
                className="premium-input w-full"
                data-testid="time-input"
              />
            </div>

            <div className="premium-form-group">
              <label className="premium-label">DateTime Local</label>
              <input
                type="datetime-local"
                className="premium-input w-full"
                data-testid="datetime-input"
              />
            </div>

            <div className="premium-form-group">
              <label className="premium-label">Week</label>
              <input
                type="week"
                className="premium-input w-full"
                data-testid="week-input"
              />
            </div>
          </div>
        </div>

        {/* Advanced Input Types */}
        <div className="premium-card p-6">
          <h2 className="text-2xl font-semibold theme-text-primary mb-4">
            🎨 Advanced Input Types
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="premium-form-group">
              <label className="premium-label">Color Picker</label>
              <input
                type="color"
                className="premium-input w-full h-12"
                defaultValue="#3b82f6"
                data-testid="color-input"
              />
            </div>

            <div className="premium-form-group">
              <label className="premium-label">Range Slider</label>
              <input
                type="range"
                className="w-full"
                min="0"
                max="100"
                defaultValue="50"
                data-testid="range-input"
              />
              <div className="text-sm theme-text-tertiary mt-1">Value: 50</div>
            </div>

            <div className="premium-form-group">
              <label className="premium-label">File Upload</label>
              <input
                type="file"
                className="premium-input w-full"
                data-testid="file-input"
              />
            </div>

            <div className="premium-form-group">
              <label className="premium-label">Hidden Input</label>
              <input
                type="hidden"
                value="hidden-value"
                data-testid="hidden-input"
              />
              <div className="text-sm theme-text-tertiary">
                Hidden input (for testing)
              </div>
            </div>

            <div className="premium-form-group">
              <label className="premium-label">Search</label>
              <input
                type="search"
                className="premium-input w-full"
                placeholder="Search..."
                data-testid="search-input-form"
              />
            </div>

            <div className="premium-form-group">
              <label className="premium-label">Multiple Files</label>
              <input
                type="file"
                multiple
                className="premium-input w-full"
                data-testid="multiple-file-input"
              />
            </div>
          </div>
        </div>

        {/* Text Areas */}
        <div className="premium-card p-6">
          <h2 className="text-2xl font-semibold theme-text-primary mb-4">
            📝 Text Areas & Multi-line Inputs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="premium-form-group">
              <label className="premium-label">Standard Textarea</label>
              <textarea
                className="premium-input w-full resize-y"
                rows="4"
                placeholder="Enter your message here..."
                data-testid="standard-textarea"
              ></textarea>
            </div>

            <div className="premium-form-group">
              <label className="premium-label">Large Textarea</label>
              <textarea
                className="premium-input w-full resize-y"
                rows="6"
                placeholder="Enter detailed description..."
                data-testid="large-textarea"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Main Registration Form */}
        <FormInputs />

        {/* Form Testing Instructions */}
        <div className="premium-card p-6 theme-bg-secondary">
          <h3 className="text-xl font-semibold theme-text-primary mb-4">
            🔍 Testing Instructions
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium theme-text-primary mb-2">
                Input Field Testing:
              </h4>
              <ul className="space-y-1 text-sm theme-text-secondary">
                <li>• Test valid and invalid input formats</li>
                <li>• Check field validation messages</li>
                <li>• Verify placeholder text display</li>
                <li>• Test copy/paste functionality</li>
                <li>• Check field focus and blur events</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium theme-text-primary mb-2">
                Form Automation:
              </h4>
              <ul className="space-y-1 text-sm theme-text-secondary">
                <li>• Auto-fill forms with test data</li>
                <li>• Submit forms and verify responses</li>
                <li>• Test form reset functionality</li>
                <li>• Check required field validations</li>
                <li>• Test file upload scenarios</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
