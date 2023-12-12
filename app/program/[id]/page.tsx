import { Footer } from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { DetailProgram } from "@/components/Program/DetailProgram";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program Detail Page ",
  description: "This is Program Detail page for Panti Asuhan App",
  // other metadata
};

const DetailProgramPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <DetailProgram />
      <Footer />
    </div>
  );
};

export default DetailProgramPage;
