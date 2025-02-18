import Button from "../components/Button";
import PartnerTable from "../components/PartnerTable";
import { partnerData } from "../data/partnerData";

function Partner() {
  return (
    <div>
      <header className="flex justify-between items-center text-[20px] font-semibold p-3 border-gray-200  border-b border-b-primary-50">
        <h1 className="text-[20px] font-semibold">Partner (20)</h1>
        <button className="border rounded-full">dots</button>
      </header>
      <section className="flex flex-col justify-between items-center gap-y-[1.4rem] py-[2rem]">
        <div className=" gap-[2rem] flex justify-between items-center w-full">
          <div className="flex gap-x-[0.8rem]">
            <Button>
              <span>icon</span>
              <span className="text-[1.4rem]">Sort by</span>
            </Button>
            <Button>
              <span>icon</span>
              <span className="text-[1.4rem]">Filter</span>
            </Button>
          </div>
          <div className="flex gap-x-[0.8rem] ">
            <Button>
              <span>icon</span>
              <span className="text-[1.4rem]">Export</span>
            </Button>
            <Button type={"secondary"}>
              <span className="text-[2rem]">&#43;</span>
              <span className="text-[1.4rem]">Add Partner</span>
            </Button>
          </div>
        </div>
      </section>
      <PartnerTable partnerData={partnerData} />
    </div>
  );
}

export default Partner;
