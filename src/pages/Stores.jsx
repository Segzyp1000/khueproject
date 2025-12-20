import { useState, useEffect } from "react";
import Layout from "../components/Layout";

const Stores = () => {
  const [stores, setStores] = useState(() => {
    const saved = localStorage.getItem("stores");
    return saved
      ? JSON.parse(saved)
      : [
          { name: "Apple", location: "Global" },
          { name: "Best Buy", location: "US" },
          { name: "Samsung Experience Stores", location: "Global" },
          { name: "Sony Square NYC", location: "US" },
          { name: "Sonos", location: "Global" },
          { name: "Yodobashi Camera", location: "Japan" },
          { name: "Bic Camera Inc.", location: "Japan" },
          { name: "GAME", location: "UK" },
          { name: "Smeg London", location: "UK" },
          { name: "Comcast", location: "US" },
          { name: "Lowe's and b8ta", location: "US" },
          { name: "Google at Flatiron", location: "US" },
          { name: "Spiritland", location: "UK" },
          { name: "HARMAN", location: "Global" },
        ];
  });

  const [storeName, setStoreName] = useState("");
  const [storeLocation, setStoreLocation] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    localStorage.setItem("stores", JSON.stringify(stores));
  }, [stores]);

  const handleAddStore = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const name = storeName.trim();
    const location = storeLocation.trim();

    if (!name || !location) {
      setError("Store name and location are required.");
       setTimeout(() => setError(""), 3000);
      return;
      
    }

    if (
      stores.some(
        (s) => s.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      setError("This store already exists.");
      return;
    }

    const newStore = { name, location };
    setStores([...stores, newStore]);
    setStoreName("");
    setStoreLocation("");
    setSuccess("Store added successfully!");

    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <Layout title="Stores">
      <div className="max-w-3xl mt-5 mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center dark:text-white">
          Store Directory
        </h2>

        {/* Add Store Form */}
        <form onSubmit={handleAddStore} className="flex flex-col md:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Store Name"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 flex-1 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
          <input
            type="text"
            placeholder="Location"
            value={storeLocation}
            onChange={(e) => setStoreLocation(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 flex-1 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />

          {/* Simple native button */}
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Add Store
          </button>
        </form>

        {/* Feedback Messages */}
        {error && (
          <p className="text-red-500 text-center font-medium mb-2">{error}</p>
        )}
        {success && (
          <p className="text-green-500 text-center font-medium mb-2">{success}</p>
        )}

        {/* Store List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex justify-between items-center border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow dark:bg-gray-800"
            >
              <div>
                <h3 className="font-semibold text-lg dark:text-white">
                  {store.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {store.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Stores;