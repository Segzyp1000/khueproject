// src/pages/CampaignEdit.jsx
import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { data as campaigns } from '../data/campaignData';

function CampaignEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const campaign = campaigns.find((c) => String(c.id) === String(id));

  const [form, setForm] = useState({
    campaignName: campaign?.campaignName || "",
    description: campaign?.description || "",
    start: campaign?.start || "",
    end: campaign?.end || "",
    budget: campaign?.budget || "",
    reward: campaign?.reward || "",
    status: campaign?.status || "Active",
  });

  if (!campaign) {
    return (
      <Layout title="Edit Campaign">
        <div className="p-6">
          <Link to="/campaign" className="text-sm text-navColor hover:underline">
            ← Back to campaigns
          </Link>
          <p className="mt-4">Campaign not found.</p>
        </div>
      </Layout>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated campaign:", { id, ...form });
    // Here you could update API / state management
    navigate(`/campaign/${id}`);
  };

  return (
    <Layout title="Edit Campaign">
      <div className="p-6 lg:p-10">
        <h1 className="text-2xl font-bold mb-6">Edit Campaign</h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
        >
          {/* Campaign Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Campaign Name</label>
            <input
              type="text"
              name="campaignName"
              value={form.campaignName}
              onChange={handleChange}
              className="w-full rounded-md bg-gray-200 border-gray-300 dark:border-gray-700 dark:bg-gray-900 p-2"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full rounded-md bg-gray-200 dark:border-gray-700 dark:bg-gray-900 p-2"
            >
              <option>Active</option>
              <option>Pending</option>
              <option>Completed</option>
              <option>Expired</option>
            </select>
          </div>

          {/* Start */}
          <div>
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <input
              type="text"
              name="start"
              value={form.start}
              onChange={handleChange}
              className="w-full rounded-md bg-gray-200 border-gray-300 dark:border-gray-700 dark:bg-gray-900 p-2"
            />
          </div>

          {/* End */}
          <div>
            <label className="block text-sm font-medium mb-1">End Date</label>
            <input
              type="text"
              name="end"
              value={form.end}
              onChange={handleChange}
              className="w-full rounded-md bg-gray-200 border-gray-300 dark:border-gray-700 dark:bg-gray-900 p-2"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium mb-1">Budget</label>
            <input
              type="text"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="w-full rounded-md bg-gray-200 border-gray-300 dark:border-gray-700 dark:bg-gray-900 p-2"
            />
          </div>

          {/* Reward */}
          <div>
            <label className="block text-sm font-medium mb-1">Reward</label>
            <input
              type="text"
              name="reward"
              value={form.reward}
              onChange={handleChange}
              className="w-full rounded-md bg-gray-200 border-gray-300 dark:border-gray-700 dark:bg-gray-900 p-2"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              rows="4"
              value={form.description}
              onChange={handleChange}
              className="w-full rounded-md bg-gray-200 border-gray-300 dark:border-gray-700 dark:bg-gray-900 p-2"
            />
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4 mt-4">
            <Link
              to={`/campaign/${id}`}
              className="px-4 py-2 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-700 text-white rounded-md hover:opacity-90"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default CampaignEdit;
