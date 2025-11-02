
import Layout from "../components/Layout";
import { IoMdHappy } from "react-icons/io";


const Rewards = () => {
  return (
    <Layout title="Rewards">
      <div className="flex ">
        <h2 className="font-bold text-4xl ">Coming soon</h2>
        <div className="flex gap-3 font-bold  px-3 text-yellow-500 text-3xl mt-3">
        <IoMdHappy  />
          <IoMdHappy  />
            <IoMdHappy  />
            </div>

        </div>
    </Layout>
  );
};

export default Rewards;
