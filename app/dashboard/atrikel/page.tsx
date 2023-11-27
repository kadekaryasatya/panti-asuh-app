import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PengursPanti from "@/components/Dashboard/PengurusPanti";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Artikel Panti Page | Panti Asuhan",
  description: "This is Artikel Panti page for Panti Asuhan App",
  // other metadata
};

const ArtikelPage = () => {
  return (
    <>
      <Breadcrumb pageName="Artikel Panti" />

      <div className="flex flex-col gap-10">
        <PengursPanti />
      </div>
    </>
  );
};

export default ArtikelPage;
