import { Footer } from "@/components/Footer/Footer";
import { Jumbotron } from "@/components/Jumbotron/Jumbotron";
import Artikel from "@/components/LandingPage/Artikel";
import Description from "@/components/LandingPage/Description";
import Program from "@/components/LandingPage/Program";
import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIMPATI | Sistem Informasi Panti Asuhan",
  description: "This is Landing page for Panti Asuhan App",
  // other metadata
};

export default function LandingPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <Jumbotron />
      <Description />
      <Program />
      <Artikel />
      <Footer />
    </div>
  );
}
