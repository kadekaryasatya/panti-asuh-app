import Calendar from "@/components/Calender";
import { Footer } from "@/components/Footer/Footer";
import AnakPanti from "@/components/List/AnakPanti";
import Navbar from "@/components/Navbar/Navbar";
import Program from "@/components/Program/Program";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program Page ",
  description: "This is Program page for Panti Asuhan App",
  // other metadata
};

const ProgramPage = () => {
  return (
    <>
      <Navbar />
      <Program />
      <Footer />
    </>
  );
};

export default ProgramPage;
