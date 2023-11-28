import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ArtikelList from "@/components/Dashboard/Artikel";

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
        <ArtikelList />
      </div>
    </>
  );
};

export default ArtikelPage;
