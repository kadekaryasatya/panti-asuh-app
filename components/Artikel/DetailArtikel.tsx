// DetailArtikel.tsx
"use client";
import { Artikel } from "@/types/artikel";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";

import { useParams } from "next/navigation";

export const DetailArtikel = () => {
  const [artikel, setArtikelData] = useState<Artikel | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchArtikelDetails(id as string);
    }
  }, [id]);

  const fetchArtikelDetails = async (articleId: string) => {
    try {
      const authToken = Cookies.get("auth_token");

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BACKEND}/api/artikel/${articleId}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setArtikelData(response.data);

      // Dynamically set the title based on artikel.judul
      document.title = `${response.data.judul} - SIMPATI`;
    } catch (error) {
      console.error("Error fetching artikel details:", error);
    }
  };

  if (!artikel) {
    return <p>Loading...</p>;
  }

  return (
    <div className="lg:px-35 px-4 py-8 lg:py-16 text-background2 bg-white">
      <h1 className="lg:text-4xl text-3xl font-bold mb-2">{artikel.judul}</h1>
      <div className="flex flex-col justify-between leading-normal w-full mb-5">
        <p className="">
          {artikel.users.name},
          <span className="ml-1">
            {artikel.created_at
              ? new Date(artikel.created_at).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "No date available"}
          </span>
        </p>
      </div>
      <Image
        width={300}
        height={300}
        src={`${process.env.NEXT_PUBLIC_API_BACKEND}/artikel/${artikel.gambar}`}
        alt="Logo"
        className="h-[500px] w-full object-cover rounded-t-lg"
      />
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-5">
        {artikel.deskripsi}
      </p>
    </div>
  );
};
