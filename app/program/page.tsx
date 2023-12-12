import { Footer } from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Program from "@/components/Program/Program";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program | SIMPATI ",
  description: "This is Program Page for SIMPATI ",
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
