import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

const User = () => {
  return (
    <Layout title="Users">
      <section className="flex flex-col gap-y-[1.4rem] py-[2rem] min-h-full">
        <div className="flex gap-x-[0.8rem]  justify-end">
          <Button>
            <span>🔄</span>
            <span className="text-[1.4rem]">Export</span>
          </Button>
          <Button type={"secondary"}>
            <span className="text-[2rem]">&#43;</span>
            <span className="text-[1.4rem]">Add User</span>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default User;
