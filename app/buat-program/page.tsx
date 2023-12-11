import Calendar from "@/components/Calender";
import { Footer } from "@/components/Footer/Footer";
import BuatProgramForm from "@/components/Forms/BuatProgramForm";
import AnakPanti from "@/components/List/AnakPanti";
import Navbar from "@/components/Navbar/Navbar";
import Program from "@/components/Program/Program";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buat Program | SIMPATI ",
  description: "This is Buat Program Page for SIMPATI ",
  // other metadata
};

const BuatProgramPage = () => {
  return (
    <>
      <Navbar />
      <BuatProgramForm />
      <Footer />
    </>
  );
};

export default BuatProgramPage;
