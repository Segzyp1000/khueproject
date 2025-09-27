import { useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

const Stores = () => {
  const [stores, setStores] = useState([
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
  ]);

  const [storeName, setStoreName] = useState("");
  const [storeLocation, setStoreLocation] = useState("");
  const [error, setError] = useState("");

  const handleAddStore = () => {
    console.log("Attempting to add store:", storeName, storeLocation);

    // Validate input
    if (!storeName.trim() || !storeLocation.trim()) {
      setError("Store name and location are required.");
      console.log("Validation failed: missing store name or location");
      return;
    }

    // Prevent duplicates (case-insensitive)
    if (
      stores.some(
        (store) => store.name.toLowerCase() === storeName.toLowerCase().trim()
      )
    ) {
      setError("This store already exists.");
      console.log("Duplicate store found:", storeName);
      return;
    }

    // Add the new store
    const newStore = { name: storeName.trim(), location: storeLocation.trim() };
    setStores([...stores, newStore]);
    console.log("Store added:", newStore);

    // Clear inputs and error
    setStoreName("");
    setStoreLocation("");
    setError("");
  };

  return (
    <Layout title="Stores">
      <div className="max-w-md mx-auto p-4">
        {/* Error Message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Add Store Form */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Store Name"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            className="border rounded-md p-2 w-full"
          />
          <input
            type="text"
            placeholder="Location"
            value={storeLocation}
            onChange={(e) => setStoreLocation(e.target.value)}
            className="border rounded-md p-2 w-full"
          />
          <Button type="secondary" onClick={handleAddStore}>
            Add
          </Button>
        </div>

        {/* Store List */}
        <ul>
          {stores.map((store, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <span className="text-lg">{store.name}</span>
              <span className="text-gray-600">{store.location}</span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Stores;
