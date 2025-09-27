// src/pages/CampaignDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { data as campaigns } from "../data/campaignData";

const statusStyles = {
  Active: "bg-green-100 text-green-800",
  Pending: "bg-yellow-100 text-yellow-800",
  Completed: "bg-blue-100 text-blue-800",
  Expired: "bg-gray-100 text-gray-700",
};

function parseUsage(usageStr = "") {
  // usageStr like "1240 / 2300"
  const parts = usageStr.split("/").map((p) => p.replace(/[^\d]/g, ""));
  const used = Number(parts[0] || 0);
  const total = Number(parts[1] || 0) || 1;
  const percent = Math.min(100, Math.round((used / total) * 100));
  return { used, total, percent };
}

function CampaignDetails() {
  const { id } = useParams();
  const campaign = campaigns.find((c) => String(c.id) === String(id));

  if (!campaign) {
    return (
      <Layout title="Campaign Details">
        <div className="p-8">
          <Link to="/campaign" className="inline-block mb-6 text-sm text-navColor hover:underline">
            ← Back to campaigns
          </Link>
          <div className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow">
            <h2 className="text-2xl font-semibold mb-4">Campaign not found</h2>
            <p className="text-gray-600 dark:text-gray-300">We couldn't find a campaign with that ID.</p>
          </div>
        </div>
      </Layout>
    );
  }

  const { used, total, percent } = parseUsage(campaign.campaignUsage);
  const statusClass = statusStyles[campaign.status] || statusStyles.Active;

  return (
    <Layout title="Campaign Details">
      <div className="p-6 lg:p-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{campaign.campaignName}</h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{campaign.description}</p>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusClass}`}
            >
              {campaign.status}
            </span>
            <Link
              to="/campaign"
              className="inline-flex items-center text-sm px-3 py-2 border rounded-md hover:shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              ← Back
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Main Info */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-xs text-gray-500 uppercase tracking-wide">Created By</h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-200">{campaign.createdBy}</p>
              </div>
              <div>
                <h3 className="text-xs text-gray-500 uppercase tracking-wide">Dates</h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-200">
                  <strong>Created:</strong> {campaign.createdAt}
                  <br />
                  <strong>Start:</strong> {campaign.start}
                  <br />
                  <strong>End:</strong> {campaign.end}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Campaign Usage</h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 transition-all"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
                <span>{used.toLocaleString()} used</span>
                <span>{total.toLocaleString()} goal</span>
                <span>{percent}%</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm text-gray-500">Budget</h4>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{campaign.budget}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                  <h5 className="text-xs text-gray-400">Participants</h5>
                  <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{campaign.participants}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                  <h5 className="text-xs text-gray-400">Reward</h5>
                  <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{campaign.reward}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Summary / Actions */}
          <aside className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm flex flex-col gap-4">
            <div>
              <h4 className="text-sm text-gray-500">Quick Info</h4>
              <ul className="mt-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
                <li><strong>Campaign ID:</strong> {campaign.id}</li>
                <li><strong>Status:</strong> {campaign.status}</li>
                <li><strong>Created:</strong> {campaign.createdAt}</li>
                <li><strong>Duration:</strong> {campaign.start} → {campaign.end}</li>
              </ul>
            </div>

            <div className="mt-2">
              <h4 className="text-sm text-gray-500 mb-2">Actions</h4>
              <div className="flex flex-col gap-3">
                <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-navColor text-white rounded-md hover:opacity-95 transition">
                  Export
                </button>
                <Link to={`/campaign/${campaign.id}/edit`} className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition text-sm">
                  Edit Campaign
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Description / Notes */}
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Description</h3>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{campaign.description}</p>
        </div>
      </div>
    </Layout>
  );
}

export default CampaignDetails;
