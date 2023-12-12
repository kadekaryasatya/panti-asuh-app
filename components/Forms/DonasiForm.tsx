"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaWallet, FaMoneyCheckAlt } from "react-icons/fa";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { JenisProgram } from "@/types/jenis-program";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const DonasiForm = () => {
  const [donasiData, setDonasiData] = useState({
    nama: "",
    email: "",
    nominal: "",
    pesan: "",
    donatur: "individu",
  });

  const [thumbnail, setThumbnail] = useState<File | null>(null); // Specify thumbnail type
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setDonasiData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const onDrop = (acceptedFiles: File[]) => {
    // Assuming you want to handle only one image
    const file = acceptedFiles[0];
    setThumbnail(file);

    // Create a preview URL for the selected image
    setThumbnailPreview(URL.createObjectURL(file));
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const router = useRouter();

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("nama", donasiData.nama);
      formData.append("email", donasiData.email);
      formData.append("nominal", donasiData.nominal);
      formData.append("pesan", donasiData.pesan);
      formData.append("donatur", donasiData.donatur);

      if (thumbnail) {
        formData.append("bukti_bayar", thumbnail);
      }

      await axios.post("http://127.0.0.1:8000/api/donasi", formData);

      Swal.fire({
        title: "Terimakasih",
        text: "Donasi Anda telah berhasil diproses!",
        icon: "success",
      });
      router.push("/donasi");
    } catch (error) {
      console.error("Error Donasi:", error);
    }
  };

  //Meode Pembayaran

  const [showImage, setShowImage] = useState(false);
  const [showImageBank, setShowImageBank] = useState(false);

  const handleClick = () => {
    setShowImage((prev) => !prev);
    setShowImageBank(false);
  };

  const handleClickBank = () => {
    setShowImage(false);
    setShowImageBank((prev) => !prev);
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 text-background2">
        <div className="relative text-center ">
          {/* Image */}
          <Image
            width={700}
            height={700}
            src={"/images/donasi/donasi.jpg"}
            alt="Background"
            className="object-cover w-full lg:h-[400px] h-[300px] brightness-50 "
          />

          {/* Text Overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <hr className="max-w-full w-[68px] border border-t-6  mx-auto mb-5" />
            <h1 className="lg:text-4xl text-lg font-extrabold text-white">
              Donasi Anda Membentuk Kisah Mereka
            </h1>
            <h1 className="lg:text-3xl text-lg mt-2 text-white">
              Setiap Kontribusi adalah Langkah Menuju Mimpi.
            </h1>
          </div>
        </div>
        <div className="py-8 lg:py-16 px-4 ">
          <div className="lg:flex  justify-between gap-10 lg:px-30">
            <div className="shadow-lg p-5 lg:w-1/2 border-[#eee] border">
              <div className="flex gap-5 items-center mb-5 text-4xl text-[#23549e]">
                <FaWallet />
                <h1 className="font-semibold">Pembayaran</h1>
              </div>
              <p>Lengkapi data dibawah ini</p>

              <form action="#" className="space-y-8 mt-5">
                <div>
                  <label
                    htmlFor="nominal"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Nominal
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 dark:text-gray-400">
                      Rp
                    </span>
                    <input
                      value={donasiData.nominal}
                      onChange={handleInputChange}
                      type="text"
                      name="nominal"
                      id="nominal"
                      className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Masukkan Jumlah Donasi Anda"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="nama"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Nama
                  </label>
                  <input
                    value={donasiData.nama}
                    onChange={handleInputChange}
                    type="text"
                    id="nama"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Nama"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    value={donasiData.email}
                    onChange={handleInputChange}
                    type="email"
                    id="email"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Email"
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
                    value={donasiData.pesan}
                    onChange={handleInputChange}
                    id="pesan"
                    rows={6}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Berikan pesan anda..."
                  ></textarea>
                </div>

                <div className="">
                  <label
                    htmlFor="bukti-bayar"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Upload Bukti transfer
                  </label>
                  <div
                    {...getRootProps()}
                    className="border-2 border-gray-300 border-dashed rounded-md p-4"
                  >
                    <input
                      {...getInputProps()}
                      className="hidden"
                      aria-describedby="thumbnail_help"
                      id="thumbnail"
                      type="file"
                    />
                    <p className="text-center text-gray-600 dark:text-gray-400">
                      Drag & drop an image here, or click to select one
                    </p>
                  </div>
                  {/* Display the selected thumbnail preview */}
                  {thumbnailPreview && (
                    <div className="mt-3">
                      <Image
                        width={500}
                        height={150}
                        src={thumbnailPreview}
                        alt="Thumbnail Preview"
                        className="max-w-full h-auto mx-auto"
                      />
                    </div>
                  )}
                </div>
              </form>
            </div>
            <div className="lg:w-1/2 mt-5 lg:mt-0">
              <div className="shadow-lg  border-[#eee] border">
                <div className="flex gap-5 items-center  text-4xl p-5 text-[#23549e]">
                  <FaMoneyCheckAlt />
                  <h1 className="font-semibold">Metode Pembayaran</h1>
                </div>
                <p className="px-5 mb-5">Pilih metode pembayaran dibawah ini</p>

                <div
                  onClick={handleClick}
                  className="cursor-pointer w-full p-4 hover:bg-[#eee]"
                >
                  <h1 className="font-semibold">Dompet Digital</h1>
                  <p>Pembayaran dengan dompet digital.</p>
                </div>
                {showImage && (
                  <Image
                    width={500}
                    height={500}
                    src={"/images/donasi/qris.png"}
                    alt="QRIS"
                    className="object-cover w-[300px] mx-auto"
                  />
                )}
                <hr className="text-[#B6BBC4]" />
                <div
                  onClick={handleClickBank}
                  className="cursor-pointer w-full p-4 hover:bg-[#eee]"
                >
                  <h1 className="font-semibold">Transfer Bank</h1>
                  <p>Pembayaran dengan transfer bank.</p>
                </div>
                {showImageBank && (
                  <>
                    <Image
                      width={500}
                      height={500}
                      src={"/images/donasi/bca.png"}
                      alt="bca"
                      className="object-cover w-[150px] mx-auto p-5"
                    />
                    <Image
                      width={500}
                      height={500}
                      src={"/images/donasi/bni.png"}
                      alt="bni"
                      className="object-cover w-[150px] mx-auto p-5"
                    />
                    <Image
                      width={500}
                      height={500}
                      src={"/images/donasi/bri.png"}
                      alt="bri"
                      className="object-cover w-[150px] mx-auto p-5"
                    />
                    <Image
                      width={500}
                      height={500}
                      src={"/images/donasi/bsi.png"}
                      alt="bsi"
                      className="object-cover w-[150px] mx-auto p-5"
                    />
                    <Image
                      width={500}
                      height={500}
                      src={"/images/donasi/mandiri.png"}
                      alt="mandiri"
                      className="object-cover w-[150px] mx-auto p-5"
                    />
                  </>
                )}

                <hr className="text-[#B6BBC4]" />
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="mt-5 w-full py-3 px-5 text-base text-center text-white bg-[#23549e] hover:bg-background2 rounded-lg bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none font-bold "
              >
                Donasi
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonasiForm;
