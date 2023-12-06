import Image from "next/image";
import React from "react";

export const Jumbotron = () => {
  return (
    <section className="bg-background dark:bg-gray-900 pt-10">
      <div className="lg:px-30 px-4 py-8 lg:py-16 text-background2 flex justify-between items-center">
        <div>
          <div className="flex justify-between">
            <div>
              <h1 className="mb-1 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
                Menginspirasi Masa Depan,
              </h1>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
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
              className=" tracking-widest inline-flex justify-center items-center py-2 px-3 text-base font-medium text-center text-white bg-background2 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              DONASI
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 top-20">
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
