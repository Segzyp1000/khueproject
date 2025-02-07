import Button from '../components/Button';
import Table from '../components/Table';

function Campaign() {
  return (
    <main className="px-[3.2rem]">
      <header className="flex justify-between items-center  py-[2rem] border-b border-b-primary-50">
        <h1 className="text-[2rem] font-bold">Campaign</h1>
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
              <span className="text-[1.4rem]">Import/Export</span>
            </Button>
            <Button type={'secondary'}>
              <span className="text-[2rem]">&#43;</span>
              <span className="text-[1.4rem]">Create campaign</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-[3.2rem] border rounded-[1.2rem] bg-[#ffcc91]  w-full  p-[1.5rem]">
          <span>🔒</span>
          <div className="grid grid-cols-5 gap-x-[3.2rem] font-serif">
            <div>
              <p className="text-[1.4rem]">Total</p>
              <p className="text-[2rem]">450</p>
            </div>
            <div>
              <p className="text-[1.4rem]">Running</p>
              <p className="text-[2rem]">5</p>
            </div>
            <div>
              <p className="text-[1.4rem]">Scheduled</p>
              <p className="text-[2rem]">5</p>
            </div>
            <div>
              <p className="text-[1.4rem]">Expired</p>
              <p className="text-[2rem]">5</p>
            </div>
            <div>
              <p className="text-[1.4rem]">Disabled</p>
              <p className="text-[2rem]">320</p>
            </div>
          </div>
        </div>

        <form className="flex gap-[5rem] w-full px-[3rem]">
          <div className="flex items-center w-full text-[1.4rem]">
            <span className="relative left-[2.5rem] z-10">🔍</span>
            <input
              type="text"
              placeholder="Search a campaign..."
              className="rounded-[1.5rem] border w-full px-[4rem] py-[0.8rem] focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
          <select className="border text-[1.4rem] text-justify focus:outline-none focus:ring-1 focus:ring-gray-400 rounded-[1.5rem]">
            <option value="">Actions</option>
            <option value="admin">Created by Admin</option>
            <option value="user">Created by Partner</option>
          </select>
        </form>
      </section>
      <Table />
    </main>
  );
}

export default Campaign;
