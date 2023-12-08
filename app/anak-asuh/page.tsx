import Calendar from "@/components/Calender";
import { Footer } from "@/components/Footer/Footer";
import AnakPanti from "@/components/List/AnakPanti";
import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anak Asuh | SIMPATI ",
  description: "This is Anak Panti page for Panti Asuhan App",
  // other metadata
};

const AnakAsuhPage = () => {
  return (
    <>
      <Navbar />
      <AnakPanti />
      <Footer />
    </>
  );
};

export default AnakAsuhPage;
