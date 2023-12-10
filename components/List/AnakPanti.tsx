"use client";
import { DataAnak } from "@/types/data-anak";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

const AnakPanti = () => {
  const [anak, setAnakData] = useState<DataAnak[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = Cookies.get("auth_token");
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BACKEND}/api/anak-asuh`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setAnakData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to calculate age based on birthdate
  const calculateAge = (birthdate: string) => {
    const today = new Date();
    const birthdateDate = new Date(birthdate);
    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthdateDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  // Calculate the index of the last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get the current items to be displayed on the page
  const currentItems = anak.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle pagination click
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="relative text-center ">
        {/* Image */}
        <Image
          width={700}
          height={700}
          src={"/images/anak-asuh/anak-asuh.jpg"}
          alt="Background"
          className="object-cover w-full lg:h-[500px] h-[300px] brightness-50  blur-sm"
        />

        {/* Text Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <hr className="max-w-full w-[68px] border border-t-6  mx-auto mb-5" />
          <h1 className="lg:text-4xl text-lg font-extrabold text-white">
            Mereka adalah bintang-bintang kecil
          </h1>
          <h1 className="lg:text-4xl text-lg mt-2 text-white">
            yang bersinar dengan harapan dan cinta.
          </h1>
        </div>
      </div>
      <div className="lg:px-30 px-4 py-8 lg:py-16 text-background2 bg-white">
        <div className="lg:flex gap-5 items-center mb-10">
          <hr className="max-w-full w-[68px] border border-t-6 border-t-[#23549e] " />
          <h1 className="lg:text-4xl text-2xl font-extrabold text-background2 mt-2 lg:mt-0">
            Anak Asuh<span className="text-[#23549e] "> SIMPATI </span>
          </h1>
        </div>
        <div className="relative overflow-x-auto sm:rounded-lg mb-20">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="pl-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3">
                  Asal
                </th>
                <th scope="col" className="px-6 py-3">
                  Jenis Kelamin
                </th>
                <th scope="col" className="px-6 py-3">
                  Umur
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                // Display skeleton cards while loading
                [...Array(6)].map((_, index) => (
                  <tr key={index} className="">
                    <th
                      scope="row"
                      className="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <Skeleton height={20} width={50} />
                    </th>
                    <td className="px-6 py-4">
                      <Skeleton height={20} width={80} />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton height={20} width={80} />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton height={20} width={80} />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton height={20} width={50} />
                    </td>
                  </tr>
                ))
              ) : anak.length > 0 ? (
                currentItems.map((anakItem, index) => (
                  <tr key={index} className="shadow-lg  mb-4 ">
                    <th
                      scope="row"
                      className="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1 + indexOfFirstItem}
                    </th>
                    <td className="px-6 py-4">{anakItem.nama}</td>
                    <td className="px-6 py-4">{anakItem.tempat_lahir}</td>
                    <td className="px-6 py-4">{anakItem.jenis_kelamin}</td>
                    <td className="px-6 py-4">
                      {calculateAge(anakItem.tanggal_lahir)}
                    </td>
                  </tr>
                ))
              ) : (
                <td className="font-medium text-black dark:text-white">
                  Tidak ada data Anak
                </td>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <ul className="flex space-x-2">
            {[...Array(Math.ceil(anak.length / itemsPerPage)).keys()].map(
              (page) => (
                <li key={page + 1}>
                  <button
                    onClick={() => handlePageChange(page + 1)}
                    className={`px-3 py-2 rounded-md ${
                      currentPage === page + 1
                        ? "bg-background2 text-white"
                        : "bg-white border border-gray-300 text-gray-700"
                    }`}
                  >
                    {page + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AnakPanti;
