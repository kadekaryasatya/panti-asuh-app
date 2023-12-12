"use client";
import { ProgramPanti } from "@/types/program-panti";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Program = () => {
  const [program, setProgramData] = useState<ProgramPanti[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const authToken = Cookies.get("auth_token");
      const response = await axios.get(
        `http://127.0.0.1:8000/api/program-panti`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      // Set artikel data
      setProgramData(response.data.program);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:px-30 px-4 py-8 lg:py-16 text-background2 ">
      <div className="flex justify-between">
        <div className="lg:flex gap-5 items-center mb-10">
          <hr className="max-w-full w-[68px] border border-t-6 border-t-[#23549e] " />
          <h1 className="lg:text-4xl text-2xl font-extrabold text-background2 mt-2 lg:mt-0">
            <span className="text-[#23549e] "> Program </span> Kami
          </h1>
        </div>
        <Link
          href="/program"
          className="mt-2 hover:text-background2 text-[#23549e] text-xs md:text-base font-semibold"
        >
          Lihat Selengkapnya
        </Link>
      </div>
      <div className="flex justify-between gap-5">
        <div className="grid gap-x-4 gap-y-4 lg:grid-cols-3 md:grid-cols-2 w-full">
          {loading ? (
            // Display skeleton cards while loading
            [...Array(3)].map((_, index) => (
              <div key={index} className="">
                <div className="lg:hidden">
                  <Skeleton height={200} width={350} />
                </div>
                <div className="hidden lg:block">
                  <Skeleton height={200} width={400} />
                </div>
                <div className="flex flex-col justify-between leading-normal w-full">
                  <Skeleton height={16} width={100} />
                  <Skeleton height={24} width={200} />
                  <Skeleton height={60} width={300} />
                </div>
              </div>
            ))
          ) : program.length > 0 ? (
            program
              .slice(0, 3)
              .filter((programItem) => programItem.status === "disetujui")
              .map((programItem, key) => (
                <Link
                  key={key}
                  href={`/program/${programItem.id}`}
                  className="scale-95 lg:hover:scale-100 transition transform ease-in-out tracking-widest flex flex-col items-center w-full  bg-white border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <Image
                    width={300}
                    height={300}
                    src={`http://127.0.0.1:8000/program-panti/${programItem.gambar_thumbnail}`}
                    alt="Logo"
                    className="h-[200px] w-full object-cover rounded-t-lg"
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal w-full">
                    <div className="flex text-xs">
                      <p className="">{programItem.nama},</p>
                      <span className="ml-1">
                        {programItem.created_at
                          ? new Date(programItem.created_at).toLocaleDateString(
                              "id-ID",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }
                            )
                          : "No date available"}
                      </span>
                    </div>

                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-[#23549e] hover:text-background2">
                      {programItem.judul}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                      {programItem.deskripsi}
                    </p>
                  </div>
                </Link>
              ))
          ) : (
            <p className="font-medium text-black dark:text-white">
              No Program Panti
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Program;
