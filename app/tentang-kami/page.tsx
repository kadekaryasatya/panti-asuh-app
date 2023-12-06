import About from "@/components/About/About";
import { Footer } from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami ",
  description: "This is tentang Kami for Panti Asuhan App",
  // other metadata
};

const TentangKamiPage = () => {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
};

export default TentangKamiPage;
