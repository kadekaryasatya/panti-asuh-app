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

  const [loading, setLoading] = useState(true); // Add loading state

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
      setArtikelData(response.data.data);
      setPagination(response.data.pagination);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false once data is fetched
    }
  };

  const handlePageChange = (page: number) => {
    fetchData(page);
  };
  return (
    <div className="lg:px-30 px-4 py-8 lg:py-16 text-background2 bg-white">
      <h1 className="lg:text-4xl  text-3xl font-bold  mb-10 ">List Artikel</h1>
      <div className="">
        <div className="grid gap-x-4 gap-y-4 lg:grid-cols-3 md:grid-cols-2">
          {loading ? ( // Check loading state
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
                className="flex flex-col items-center w-full  bg-white border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <Image
                  width={300}
                  height={300}
                  src={`${process.env.NEXT_PUBLIC_API_BACKEND}/storage/artikel/${artikelItem.gambar}`}
                  alt="Logo"
                  className="h-[200px] w-full object-cover rounded-t-lg"
                />
                <div className="flex flex-col justify-between p-4 leading-normal w-full">
                  <p className="text-xs">
                    Admin,
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
                  </p>

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
            <p className="font-medium text-black dark:text-white">No Artikel</p>
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
  );
};

export default Artikel;
