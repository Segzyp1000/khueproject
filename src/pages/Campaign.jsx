import React, { useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import CampaignTable from "../components/CampaignTable";
import { data as initialCampaignData } from "../data/campaignData";

function Campaign() {
  // Manage form inputs
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAction, setSelectedAction] = useState("");

  // Handle Search Input Change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle Action Selection Change
  const handleActionChange = (e) => {
    setSelectedAction(e.target.value);
  };

  // Filter campaigns based on search and action
  const filteredCampaigns = initialCampaignData.filter((campaign) => {
    const matchesSearch = campaign.campaignName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesAction =
      selectedAction === "" ||
      (selectedAction === "admin" && campaign.createdBy === "Admin") ||
      (selectedAction === "user" && campaign.createdBy !== "Admin");

    return matchesSearch && matchesAction;
  });

  return (
    <Layout title="Campaign">
      <section className="flex flex-col justify-between items-center gap-y-[1.4rem] py-[2rem] px-5">
        {/* Action Buttons */}
        <div className="gap-[2rem] flex justify-between items-center w-full">
          <div className="flex gap-x-[0.8rem]">
            <Button>
              <span>🔻</span>
              <span className="text-[1.4rem]">Sort by</span>
            </Button>
            <Button>
              <span>🔍</span>
              <span className="text-[1.4rem] hidden md:block">Filter</span>
            </Button>
          </div>
          <div className="flex gap-x-[0.8rem]">
            <Button>
              <span>🔄</span>
              <span className="text-[1.4rem] hidden md:block">
                Import/Export
              </span>
            </Button>
            <Button type="secondary">
              <span className="text-[2rem]">&#43;</span>
              <span className="text-[1.4rem]">Create campaign</span>
            </Button>
          </div>
        </div>

        {/* Campaign Statistics */}
        <div className="flex flex-col gap-[3.2rem] border rounded-[1.2rem] bg-[#F8F3FF] dark:bg-gray-800 w-full p-[1.5rem]">
          <span>🔒</span>
          <div className="grid grid-cols-5 gap-x-[3.2rem] font-serif">
            {[
              { label: "Total", value: initialCampaignData.length },
              {
                label: "Running",
                value: initialCampaignData.filter((c) => c.status === "Running")
                  .length,
              },
              {
                label: "Scheduled",
                value: initialCampaignData.filter(
                  (c) => c.status === "Scheduled"
                ).length,
              },
              {
                label: "Expired",
                value: initialCampaignData.filter((c) => c.status === "Expired")
                  .length,
              },
              {
                label: "Disabled",
                value: initialCampaignData.filter(
                  (c) => c.status === "Disabled"
                ).length,
              },
            ].map((item, index) => (
              <div key={index}>
                <p className="text-[1.4rem]">{item.label}</p>
                <p className="text-[2rem]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Actions */}
        <form className="flex gap-[5rem] w-full px-[3rem]">
          <div className="flex items-center w-full text-[1.4rem] dark:text-black">
            <span className="relative left-[2.5rem] z-10">🔍</span>
            <input
              type="text"
              placeholder="Search a campaign..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="rounded-[1.5rem] border w-full px-[4rem] py-[0.8rem] focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <select
            className="border text-[1.4rem] focus:outline-none focus:ring-1 focus:ring-gray-400 rounded-[1.5rem] dark:text-black"
            value={selectedAction}
            onChange={handleActionChange}
          >
            <option value="">Actions</option>
            <option value="admin">Created by Admin</option>
            <option value="user">Created by Partner</option>
          </select>
        </form>
      </section>

      {/* Campaign Table */}
      <CampaignTable campaignData={filteredCampaigns} />
    </Layout>
  );
}

export default Campaign;
