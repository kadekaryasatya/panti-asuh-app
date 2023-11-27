import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import UserList from "@/components/Dashboard/User";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "User Page | Panti Asuhan",
  description: "This is User page for Panti Asuhan App",
  // other metadata
};

const UserPage = () => {
  return (
    <>
      <Breadcrumb pageName="User" />

      <div className="flex flex-col gap-10">
        <UserList />
      </div>
    </>
  );
};

export default UserPage;
