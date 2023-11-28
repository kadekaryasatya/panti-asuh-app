import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PengursPanti from "@/components/Dashboard/PengurusPanti";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pengurus Panti Page | Panti Asuhan",
  description: "This is Pengurus Panti page for Panti Asuhan App",
  // other metadata
};

const PengurusPantiPage = () => {
  return (
    <>
      <Breadcrumb pageName="Pengurus Panti" />

      <div className="flex flex-col gap-10">
        <PengursPanti />
      </div>
    </>
  );
};

export default PengurusPantiPage;