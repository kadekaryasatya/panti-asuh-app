import React from "react";

const DonasiForm = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 text-background2">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Donasi
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Terima kasih atas niat baik Anda untuk membantu anak-anak di panti
            asuhan. Dengan berdonasi, Anda turut berperan dalam menciptakan masa
            depan yang lebih baik bagi mereka.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="nominal"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nominal
              </label>
              <input
                type="text"
                id="nominal"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Masukkan Jumlah Donasi Anda"
                required
              />
            </div>
            <div>
              <label
                htmlFor="nama"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nama
              </label>
              <input
                type="text"
                id="nama"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Nama"
                required
              />
            </div>
            <div>
              <label
                htmlFor="alamat"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Alamat
              </label>
              <input
                type="text"
                id="alamat"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Alamat"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="pesan"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Pesan
              </label>
              <textarea
                id="pesan"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Berikan pesan anda..."
              ></textarea>
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="user_avatar"
              >
                Upload Bukti Pembayaran
              </label>
              <input
                className=" block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white bg-background2 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Donasi
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default DonasiForm;
