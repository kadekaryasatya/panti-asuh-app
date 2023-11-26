import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Anak Panti Page | Panti Asuhan",
  description: "This is Anak Panti page for Panti Asuhan App",
  // other metadata
};

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Anak Panti" />

      <div className="flex flex-col gap-10">
        <TableThree />
      </div>
    </>
  );
};

export default TablesPage;
