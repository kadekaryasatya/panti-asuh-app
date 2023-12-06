import React from "react";

const Pengurus = () => {
  return (
    <div className="lg:px-30 px-4 py-8 lg:py-16 text-background2 bg-white">
      <h1 className="lg:text-3xl font-bold  mb-20">Pengurus Panti</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-20">
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
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                No Telepon
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <td className="px-6 py-4">Rizky Chandra</td>
              <td className="px-6 py-4">Panjer</td>
              <td className="px-6 py-4">0898712721</td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                2
              </th>
              <td className="px-6 py-4">Dede Oka</td>
              <td className="px-6 py-4">Panjer</td>
              <td className="px-6 py-4">0818712221</td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800  dark:border-gray-700">
              <th
                scope="row"
                className="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                3
              </th>
              <td className="px-6 py-4">Nova Chandra</td>
              <td className="px-6 py-4">Ubung</td>
              <td className="px-6 py-4">0828712721</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pengurus;
