"use client";
import { PengurusPanti } from "@/types/pengurus-panti";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

const Pengurus = () => {
  const [pengurus, setPengurusData] = useState<PengurusPanti[]>([]);
  const [loading, setLoading] = useState(true);

  //Get All Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = Cookies.get("auth_token");
        const response = await axios.get(
          "http://127.0.0.1:8000/api/pengurus-panti/",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setPengurusData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="relative text-center ">
        {/* Image */}
        <Image
          width={700}
          height={700}
          src={"/images/pengurus/pengurus.jpg"}
          alt="Background"
          className="object-cover w-full lg:h-[500px] h-[300px] brightness-50 blur-sm"
        />

        {/* Text Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <hr className="max-w-full w-[68px] border border-t-6  mx-auto mb-5" />
          <h1 className="lg:text-4xl text-lg font-extrabold text-white">
            Berkolaborasi Membangun Masa Depan
          </h1>
          <h1 className="lg:text-4xl text-lg mt-2 text-white">
            Sosok-sosok Hebat di Balik Panti Asuhan Kami
          </h1>
        </div>
      </div>
      <div className="lg:px-30 px-4 py-8 lg:py-16 text-background2 bg-white">
        <div className="lg:flex gap-5 items-center mb-10">
          <hr className="max-w-full w-[68px] border border-t-6 border-t-[#23549e] " />
          <h1 className="lg:text-4xl text-2xl font-extrabold text-background2 mt-2 lg:mt-0">
            Pengurus<span className="text-[#23549e] "> SIMPATI </span>
          </h1>
        </div>
        <div className="w-full mb-20 border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 grid gap-x-4 gap-y-4 lg:grid-cols-4 md:grid-cols-3">
          {loading ? (
            // Display skeleton cards while loading
            [...Array(6)].map((_, index) => (
              <div key={index} className="flex flex-col items-center pb-10">
                <Skeleton
                  className="w-16 h-16 mb-3 rounded-full shadow-lg object-cover mt-5"
                  height={100}
                  width={100}
                  circle={true}
                />
                <Skeleton height={20} width={100} />
                <Skeleton height={16} width={80} />
              </div>
            ))
          ) : pengurus.length > 0 ? ( // Display actual cards once data is loaded
            pengurus.map((pengurusItem, key) => (
              <div
                className="flex flex-col items-center pb-10 rounded-lg shadow-lg"
                key={key}
              >
                <Image
                  className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover mt-5"
                  src={"/images/logo/panti-logo.png"}
                  width={200}
                  height={200}
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  {pengurusItem.nama}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {pengurusItem.tempat_lahir}
                </span>
              </div>
            ))
          ) : (
            <p className="font-medium text-black dark:text-white">
              Tidak ada data Pengurus
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Pengurus;
