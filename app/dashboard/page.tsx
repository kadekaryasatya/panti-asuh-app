import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dahsboard | Panti Asuhan",
  description: "This is Dahsboard page for Panti Asuhan App",
  // other metadata
};

export default function Dashboard() {
  return (
    <>
      <ECommerce />
    </>
  );
}
