"use client";
import { Artikel } from "@/types/artikel";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";

import { useParams } from "next/navigation";
import { ProgramPanti } from "@/types/program-panti";

export const DetailProgram = () => {
  const [program, setProgramData] = useState<ProgramPanti | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchArtikelDetails(id as string);
    }
  }, [id]);

  const fetchArtikelDetails = async (programid: string) => {
    try {
      const authToken = Cookies.get("auth_token");

      const response = await axios.get(
        `http://127.0.0.1:8000/api/program-panti/${programid}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setProgramData(response.data);

      // Dynamically set the title based on artikel.judul
      document.title = `${response.data.judul} - SIMPATI`;
    } catch (error) {
      console.error("Error fetching artikel details:", error);
    }
  };

  if (!program) {
    return <p>Loading...</p>;
  }

  return (
    <div className="lg:px-35 px-4 py-8 lg:py-16 text-background2 bg-white">
      <h1 className="lg:text-4xl text-3xl font-bold mb-2">{program.judul}</h1>
      <div className="flex flex-col justify-between leading-normal w-full mb-5">
        <p className="">
          {program.nama},
          <span className="ml-1">
            {program.created_at
              ? new Date(program.created_at).toLocaleDateString("id-ID", {
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
        src={`http://127.0.0.1:8000/program-panti/${program.gambar_thumbnail}`}
        alt="Logo"
        className="h-[500px] w-full object-cover rounded-t-lg"
      />
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-5">
        {program.deskripsi}
      </p>
    </div>
  );
};
