import { useState } from "react";

export default function FormInputs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    country: "",
    newsletter: false,
    theme: "dark",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="premium-card p-6">
      <div className="flex items-center space-x-3 mb-6">
        <h2 className="text-2xl font-semibold theme-text-primary">
          User Registration Form
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="premium-form-group">
              <label className="premium-label">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="premium-input w-full"
                placeholder="Enter your full name"
                data-testid="name-input"
              />
            </div>

            <div className="premium-form-group">
              <label className="premium-label">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="premium-input w-full"
                placeholder="Enter your email"
                data-testid="email-input"
              />
            </div>

            <div className="premium-form-group">
              <label className="premium-label">Age</label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
                className="premium-input w-full"
                placeholder="Enter your age"
                min="1"
                max="120"
                data-testid="age-input"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="premium-form-group">
              <label className="premium-label">Country</label>
              <select
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                className="premium-input w-full"
                data-testid="country-select"
              >
                <option value="">Select your country</option>
                <option value="us">🇺🇸 United States</option>
                <option value="in">🇮🇳 India</option>
                <option value="uk">🇬🇧 United Kingdom</option>
                <option value="ca">🇨🇦 Canada</option>
                <option value="au">🇦🇺 Australia</option>
                <option value="de">🇩🇪 Germany</option>
                <option value="fr">🇫🇷 France</option>
                <option value="jp">🇯🇵 Japan</option>
              </select>
            </div>

            <div className="premium-form-group">
              <label className="premium-label">Theme Preference</label>
              <div className="space-y-3">
                {[
                  {
                    value: "dark",
                    label: "Dark Mode",
                    desc: "Dark background with light text",
                  },
                  {
                    value: "light",
                    label: "Light Mode",
                    desc: "Light background with dark text",
                  },
                  {
                    value: "auto",
                    label: "Auto Mode",
                    desc: "Follow system preference",
                  },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-start space-x-3 cursor-pointer p-3 rounded-lg theme-bg-secondary hover:theme-bg-tertiary transition-colors"
                  >
                    <input
                      type="radio"
                      name="theme"
                      value={option.value}
                      checked={formData.theme === option.value}
                      onChange={(e) =>
                        handleInputChange("theme", e.target.value)
                      }
                      className="premium-checkbox mt-0.5"
                    />
                    <div>
                      <div className="font-medium theme-text-primary">
                        {option.label}
                      </div>
                      <div className="text-sm theme-text-tertiary">
                        {option.desc}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="premium-form-group">
              <label className="flex items-start space-x-3 cursor-pointer p-3 rounded-lg theme-bg-secondary hover:theme-bg-tertiary transition-colors">
                <input
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={(e) =>
                    handleInputChange("newsletter", e.target.checked)
                  }
                  className="premium-checkbox mt-0.5"
                  data-testid="newsletter-checkbox"
                />
                <div>
                  <div className="font-medium theme-text-primary">
                    Newsletter Subscription
                  </div>
                  <div className="text-sm theme-text-tertiary">
                    Get the latest updates and automation tips delivered to your
                    inbox
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t theme-border-primary">
          <button
            type="submit"
            className="premium-button premium-button-primary flex-1 sm:flex-none"
          >
            Submit Form
          </button>
          <button
            type="button"
            onClick={() =>
              setFormData({
                name: "",
                email: "",
                age: "",
                country: "",
                newsletter: false,
                theme: "dark",
              })
            }
            className="premium-button premium-button-secondary flex-1 sm:flex-none"
          >
            Reset Form
          </button>
        </div>

        {/* Live Form Preview */}
        <div className="premium-card p-4 theme-bg-secondary">
          <h3 className="font-semibold mb-3 theme-text-primary flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Live Form Data
          </h3>
          <div className="premium-mono text-sm theme-text-secondary">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <span className="font-semibold">Name:</span>{" "}
                {formData.name || "Not entered"}
              </div>
              <div>
                <span className="font-semibold">Email:</span>{" "}
                {formData.email || "Not entered"}
              </div>
              <div>
                <span className="font-semibold">Age:</span>{" "}
                {formData.age || "Not entered"}
              </div>
              <div>
                <span className="font-semibold">Country:</span>{" "}
                {formData.country || "Not selected"}
              </div>
              <div>
                <span className="font-semibold">Theme:</span> {formData.theme}
              </div>
              <div>
                <span className="font-semibold">Newsletter:</span>{" "}
                {formData.newsletter ? "✓ Subscribed" : "✗ Not subscribed"}
              </div>
            </div>
          </div>
        </div>

        {/* Form Stats */}
        <div className="flex flex-wrap gap-3">
          <div className="premium-mono status-success px-3 py-1 rounded-full text-sm">
            <span className="font-semibold">Completion:</span>{" "}
            {Math.round(
              (Object.values(formData).filter(
                (val) => val !== "" && val !== false
              ).length /
                Object.keys(formData).length) *
                100
            )}
            %
          </div>
          <div className="premium-mono theme-bg-secondary theme-text-secondary px-3 py-1 rounded-full text-sm">
            <span className="font-semibold">Fields filled:</span>{" "}
            {
              Object.values(formData).filter(
                (val) => val !== "" && val !== false
              ).length
            }
            /{Object.keys(formData).length}
          </div>
        </div>
      </form>
    </section>
  );
}
