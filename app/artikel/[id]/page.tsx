import Artikel from "@/components/Artikel/Artikel";
import { DetailArtikel } from "@/components/Artikel/DetailArtikel";
import Calendar from "@/components/Calender";
import { Footer } from "@/components/Footer/Footer";
import AnakPanti from "@/components/List/AnakPanti";
import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artikel Page ",
  description: "This is Artikel page for Panti Asuhan App",
  // other metadata
};

const DetailArtikelPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <DetailArtikel />
      <Footer />
    </div>
  );
};

export default DetailArtikelPage;
