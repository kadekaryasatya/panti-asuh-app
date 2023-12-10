"use client";
import { Artikel } from "@/types/artikel";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Artikel = () => {
  const [artikel, setArtikelData] = useState<Artikel[]>([]);
  const [pengurusData, setPengurusData] = useState<any[]>([]); // State to store pengurus data
  const [pagination, setPagination] = useState({
    total: 0,
    per_page: 5,
    current_page: 1,
    last_page: 1,
    from: 1,
    to: 1,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (page = 1) => {
    try {
      const authToken = Cookies.get("auth_token");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BACKEND}/api/artikel?page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      // Set artikel data
      setArtikelData(response.data.data);
      setPagination(response.data.pagination);

      // Fetch and set pengurus data for each artikel
      const pengurusPromises = response.data.data.map(
        async (artikelItem: any) => {
          const pengurusResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BACKEND}/api/pengurus-panti/${artikelItem.pengurus_panti_id}`
          );
          return pengurusResponse.data;
        }
      );

      const pengurusDataArray = await Promise.all(pengurusPromises);
      setPengurusData(pengurusDataArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    fetchData(page);
  };

  return (
    <>
      <div className="relative text-center ">
        {/* Image */}
        <Image
          width={700}
          height={700}
          src={"/images/artikel/artikel.jpg"}
          alt="Background"
          className="object-cover w-full  lg:h-[500px] h-[300px]  brightness-50 "
        />

        {/* Text Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <hr className="max-w-full w-[68px] border border-t-6  mx-auto mb-5" />
          <h1 className="lg:text-4xl text-lg font-extrabold text-white">
            Jelajahi Ragam Artikel Yang
          </h1>
          <h1 className="lg:text-4xl text-lg mt-2 text-white">
            Menginspirasi dari Panti Asuhan Kami
          </h1>
        </div>
      </div>
      <div className="lg:px-30 px-4 py-8 lg:py-16 text-background2 bg-white">
        <div className="lg:flex gap-5 items-center mb-10">
          <hr className="max-w-full w-[68px] border border-t-6 border-t-[#23549e] " />
          <h1 className="lg:text-4xl text-2xl font-extrabold text-background2 mt-2 lg:mt-0">
            Artikel<span className="text-[#23549e] "> SIMPATI </span>
          </h1>
        </div>
        <div className="">
          <div className="grid gap-x-4 gap-y-4 lg:grid-cols-3 md:grid-cols-2">
            {loading ? (
              // Display skeleton cards while loading
              [...Array(6)].map((_, index) => (
                <div key={index} className="">
                  <Skeleton height={200} width="100%" />
                  <div className="flex flex-col justify-between leading-normal w-full">
                    <Skeleton height={16} width={100} />
                    <Skeleton height={24} width={200} />
                    <Skeleton height={60} width="100%" />
                  </div>
                </div>
              ))
            ) : artikel.length > 0 ? (
              artikel.map((artikelItem, key) => (
                <Link
                  key={key}
                  href={`/artikel/${artikelItem.id}`}
                  className="scale-95 lg:hover:scale-100 transition transform ease-in-out tracking-widest flex flex-col items-center w-full  bg-white border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <Image
                    width={300}
                    height={300}
                    src={`${process.env.NEXT_PUBLIC_API_BACKEND}/storage/artikel/${artikelItem.gambar}`}
                    alt="Logo"
                    className="h-[200px] w-full object-cover rounded-t-lg"
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal w-full">
                    <div className="flex text-xs">
                      {pengurusData[key] && (
                        <p className="">{pengurusData[key].nama},</p>
                      )}
                      <span className="ml-1">
                        {artikelItem.created_at
                          ? new Date(artikelItem.created_at).toLocaleDateString(
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
                      {artikelItem.judul}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                      {artikelItem.deskripsi}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="font-medium text-black dark:text-white">
                No Artikel
              </p>
            )}
          </div>
          {pagination.total > pagination.per_page && (
            <div className="flex justify-center mt-4">
              <ul className="flex gap-1">
                {[...Array(pagination.last_page).keys()].map((page) => (
                  <li key={page + 1}>
                    <button
                      onClick={() => handlePageChange(page + 1)}
                      className={`px-3 py-2 rounded-md ${
                        pagination.current_page === page + 1
                          ? "bg-background2 text-white border"
                          : "bg-white border "
                      }`}
                    >
                      {page + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Artikel;
