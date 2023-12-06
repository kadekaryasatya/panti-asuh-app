import Image from "next/image";
import React from "react";

const Artikel = () => {
  return (
    <div className="lg:px-30 px-4 py-8 lg:py-16 text-background2 bg-white">
      <h1 className="lg:text-4xl font-bold  mb-10">Artikel Terbaru</h1>
      <div className="flex gap-10">
        <a
          href="#"
          className="flex flex-col items-center w-full bg-white  border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <Image
            width={300}
            height={300}
            src={"/images/landing-page/artikel1.jpg"}
            alt="Logo"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Anak Berprestasi
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Anak anak panti asuhan yang berprestasi 2023
            </p>
          </div>
        </a>

        <a
          href="#"
          className="flex flex-col items-center w-full bg-white  border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <Image
            width={300}
            height={300}
            src={"/images/landing-page/artikel2.jpg"}
            alt="Logo"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cara membayar zakat yang baik
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Panduan cara membayar zakat yang baik dan benar menurut UUD
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Artikel;
