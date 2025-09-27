import { useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

const ReferralForm = () => {
  const [formData, setFormData] = useState({
    referredName: "",
    referredEmail: "",
    referredPhone: "",
    referrer: "Admin",
  });

  const [message, setMessage] = useState(null); // Success/Error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Simulating form submission
      setTimeout(() => {
        setMessage({ type: "success", text: "Form submitted successfully!" });

        // Clear form after success
        setFormData({
          referredName: "",
          referredEmail: "",
          referredPhone: "",
          referrer: "Admin",
        });
      }, 1000); // Adding a delay for better UX
    } catch (error) {
      setMessage({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <Layout title="Referral Form">
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-4">
          Refer a User
        </h2>

        {/* Success/Error Message */}
        {message && (
          <div
            className={`text-center p-3 mb-4 rounded-lg text-white ${
              message.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Referred User Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Referred User Name
            </label>
            <input
              type="text"
              name="referredName"
              placeholder="John Doe"
              value={formData.referredName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          {/* Referred User Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Referred User Email
            </label>
            <input
              type="email"
              name="referredEmail"
              value={formData.referredEmail}
              placeholder="example@mail.com"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          {/* Referred User Phone */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Referred User Phone
            </label>
            <input
              type="phone"
              name="referredPhone"
              value={formData.referredPhone}
              onChange={handleChange}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/\D/g, ""))
              }
              required
              maxLength="11"
              pattern="\d{11}"
              placeholder="+234 80XXXXXXXX"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          {/* Referrer Type (Admin or Partner) */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Referrer
            </label>
            <select
              name="referrer"
              value={formData.referrer}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="Admin">Admin</option>
              <option value="Partner">Partner</option>
            </select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Submit Referral
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default ReferralForm;
