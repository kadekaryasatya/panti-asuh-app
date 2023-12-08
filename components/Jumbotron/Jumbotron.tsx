import Image from "next/image";
import React from "react";

export const Jumbotron = () => {
  return (
    <section className="bg-background dark:bg-gray-900 pt-10">
      <div className="lg:px-30 px-4 py-8 lg:pt-16 lg:pb-24 text-background2 flex justify-between items-center">
        <div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-background2 mb-2 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
                Menginspirasi Masa Depan,
              </h1>
              <h1 className=" text-[#23549e]  mb-4 mt-2 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
                Menebar Kasih, Merajut Harapan
              </h1>
              <p className="mb-5 text-lg font-normal text-gray-500 lg:text-md lg:w-[500px] dark:text-gray-400">
                Sebagai Benang Pengharapan Panti Asuhan Tempat Di Mana Anak-anak
                Menemukan Cinta, Pendidikan Berkualitas, dan Pelukan Keluarga
                yang Abadi.
              </p>
            </div>
          </div>
          <div className=" space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="scale-100 hover:scale-110 transition transform ease-in-out tracking-widest inline-flex justify-center items-center py-2 px-3 text-base font-medium text-center text-white hover:bg-background2 bg-[#23549e] rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              DONASI
            </a>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 top-28">
          <Image
            width={700}
            height={700}
            src={"/images/landing-page/family.png"}
            alt="Logo"
          />
        </div>
      </div>
    </section>
  );
};
