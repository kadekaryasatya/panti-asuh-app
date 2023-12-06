import Calendar from "@/components/Calender";
import { Footer } from "@/components/Footer/Footer";
import AnakPanti from "@/components/List/AnakPanti";
import Pengurus from "@/components/List/Pengurus";
import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pengurus Page ",
  description: "This is Pengurus page for Panti Asuhan App",
  // other metadata
};

const PengurusPage = () => {
  return (
    <>
      <Navbar />
      <Pengurus />
      <Footer />
    </>
  );
};

export default PengurusPage;
