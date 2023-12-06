import Calendar from "@/components/Calender";
import { Footer } from "@/components/Footer/Footer";
import DonasiForm from "@/components/Forms/DonasiForm";
import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donasi Page ",
  description: "This is Donasi page for Panti Asuhan App",
  // other metadata
};

const DonasiPage = () => {
  return (
    <>
      <Navbar />
      <DonasiForm />
      <Footer />
    </>
  );
};

export default DonasiPage;
