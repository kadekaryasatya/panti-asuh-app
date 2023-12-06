import { Footer } from "@/components/Footer/Footer";
import { Jumbotron } from "@/components/Jumbotron/Jumbotron";
import { Artikel } from "@/components/LandingPage/Artikel";
import Program from "@/components/LandingPage/Program";
import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panti Asuhan",
  description: "This is Landing page for Panti Asuhan App",
  // other metadata
};

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Program />
      <Artikel />
      <Footer />
    </>
  );
}
