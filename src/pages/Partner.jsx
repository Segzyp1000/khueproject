import Button from "../components/Button";
import Layout from "../components/Layout";
import { partnerData } from "../data/partnerData";
import PartnerTable from "../components/PartnerTable";

function Partner() {
  return (
    <Layout title="Partner (20)">
      <section className="flex flex-col gap-y-6 py-8 px-4">
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-4">
          {/* Sort and Filter Buttons (Visible on md and above) */}
          <div className="hidden md:flex gap-4">
            <Button>
              <span>🔻</span>
              <span className="text-[1.4rem]">Sort by</span>
            </Button>
            <Button>
              <span>🔍</span>
              <span className="text-[1.4rem]">Filter</span>
            </Button>
          </div>

          {/* Export and Add Partner Buttons */}
          <div className="flex gap-4">
            <Button>
              <span>🔄</span>
              <span className="text-[1.4rem]">Export</span>
            </Button>
            <Button type="secondary">
              <span className="text-[2rem]">+</span>
              <span className="text-[1.4rem]">Add Partner</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Table */}
      <div className="dark:bg-gray-800 bg-white shadow-md rounded-lg overflow-x-auto p-6">
        <PartnerTable data={partnerData} />
      </div>
    </Layout>
  );
}

export default Partner;
