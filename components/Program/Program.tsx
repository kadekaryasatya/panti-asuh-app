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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

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
    <>
      <div className="relative text-center ">
        {/* Image */}
        <Image
          width={700}
          height={700}
          src={"/images/program/program.png"}
          alt="Background"
          className="object-cover w-full lg:h-[400px] h-[300px] brightness-50 "
        />

        {/* Text Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <hr className="max-w-full w-[68px] border border-t-6  mx-auto mb-5" />
          <h1 className="lg:text-4xl text-lg font-extrabold text-white">
            Tindakan Kebaikan Memberi Sayap
          </h1>
          <h1 className="lg:text-3xl text-lg mt-2 text-white mb-8">
            Pada Impian Anak-Anak Panti Asuhan
          </h1>
          <a
            href="/buat-program"
            className="scale-100 hover:scale-110 transition transform ease-in-out tracking-widest inline-flex justify-center items-center py-2 px-4 lg:text-base font-medium text-center text-white hover:bg-background2 bg-[#23549e] rounded-lg text-sm"
          >
            Buat Program
          </a>
        </div>
      </div>
      <div className="lg:px-30 px-4 py-8 lg:py-16 text-background2 ">
        <>
          <div className="flex justify-between mt-10">
            <div className="lg:flex gap-5 items-center mb-10">
              <hr className="max-w-full w-[68px] border border-t-6 border-t-[#23549e] " />
              <h1 className="lg:text-4xl text-2xl font-extrabold text-background2 mt-2 lg:mt-0">
                Program <span className="text-[#23549e] "> SIMPATI </span>
              </h1>
            </div>
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
                        src={`http://127.0.0.1:8000program-panti/${programItem.gambar_thumbnail}`}
                        alt="Logo"
                        className="h-[200px] w-full object-cover rounded-t-lg"
                      />
                      <div className="flex flex-col justify-between p-4 leading-normal w-full">
                        <div className="flex text-xs">
                          <p className="">{programItem.nama},</p>
                          <span className="ml-1">
                            {programItem.created_at
                              ? new Date(
                                  programItem.created_at
                                ).toLocaleDateString("id-ID", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })
                              : "No date available"}
                          </span>
                        </div>

                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-[#23549e] hover:text-background2">
                          {programItem.judul}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3 ">
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
        </>
      </div>
    </>
  );
};

export default Program;
