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

  return (
    <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mt-10">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-pulse"></span>
        Form Elements
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
              placeholder="Enter your name"
              data-testid="name-input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
              placeholder="Enter your email"
              data-testid="email-input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Age</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => handleInputChange("age", e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
              placeholder="Enter your age"
              data-testid="age-input"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Country</label>
            <select
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
              data-testid="country-select"
            >
              <option value="">Select Country</option>
              <option value="us">United States</option>
              <option value="in">India</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
              <option value="de">Germany</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Theme Preference
            </label>
            <div className="space-y-2">
              {["dark", "light", "auto"].map((theme) => (
                <label
                  key={theme}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="theme"
                    value={theme}
                    checked={formData.theme === theme}
                    onChange={(e) => handleInputChange("theme", e.target.value)}
                    className="w-4 h-4 text-orange-500 bg-gray-700 border-gray-600 focus:ring-orange-500"
                  />
                  <span className="capitalize">{theme}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.newsletter}
                onChange={(e) =>
                  handleInputChange("newsletter", e.target.checked)
                }
                className="w-5 h-5 text-orange-500 bg-gray-700 border-gray-600 rounded focus:ring-orange-500"
                data-testid="newsletter-checkbox"
              />
              <span>Subscribe to newsletter</span>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-700/50 rounded-lg">
        <h3 className="font-semibold mb-2">Form Data Preview:</h3>
        <pre className="text-sm text-gray-300 overflow-x-auto">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </section>
  );
}
