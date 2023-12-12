"use client";
import { Artikel } from "@/types/artikel";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Artikel = () => {
  const [artikel, setArtikelData] = useState<Artikel[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BACKEND}/api/artikel`
      );

      setArtikelData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set autoplay speed to 5000 milliseconds (5 seconds)
  };

  return (
    <div className="lg:px-30 px-4 py-8 lg:py-16 text-background2 bg-white">
      <div className="flex justify-between">
        <div className="lg:flex gap-5 items-center mb-10">
          <hr className="max-w-full w-[68px] border border-t-6 border-t-[#23549e] " />
          <h1 className="lg:text-4xl text-2xl font-extrabold text-background2 mt-2 lg:mt-0">
            <span className="text-[#23549e] "> Artikel </span> Kami
          </h1>
        </div>
        <Link
          href="/artikel"
          className="mt-2 hover:text-background2 text-[#23549e] text-xs md:text-base font-semibold"
        >
          Lihat Selengkapnya
        </Link>
      </div>
      <div className="">
        {loading ? (
          // Display skeleton cards while loading
          <div className=" w-full flex flex-col items-center  md:flex-row  rounded-lg">
            <Skeleton
              height={350}
              width={400}
              className="w-full md:rounded-none "
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="flex text-sm">
                <Skeleton height={20} width={200} />
              </div>
              <Skeleton height={60} width={600} />
              <Skeleton height={60} width={800} />
            </div>
          </div>
        ) : artikel.length > 0 ? (
          <Slider
            {...settings}
            className="scale-100 lg:hover:scale-105 transition transform ease-in-out tracking-widest"
          >
            {artikel.map((artikelItem, key) => (
              <div key={key} className="slide-gap ">
                <Link
                  href={`/artikel/${artikelItem.id}`}
                  className=" w-full flex flex-col items-center bg-[#F5F7F8]  md:flex-row shadow-lg rounded-lg"
                >
                  <Image
                    width={300}
                    height={300}
                    src={`${process.env.NEXT_PUBLIC_API_BACKEND}/artikel/${artikelItem.gambar}`}
                    alt="Logo"
                    className="object-cover w-full  h-96 md:h-[300px] md:w-[400px] md:rounded-none "
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className="flex text-sm">
                      <p className="">{artikelItem.users.name},</p>
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
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-[#23549e] hover:text-background2">
                      {artikelItem.judul}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                      {artikelItem.deskripsi}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="font-medium text-black dark:text-white">No Artikel</p>
        )}
      </div>
    </div>
  );
};

export default Artikel;
