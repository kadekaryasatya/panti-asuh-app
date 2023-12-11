"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaWallet, FaMoneyCheckAlt } from "react-icons/fa";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { JenisProgram } from "@/types/jenis-program";

const BuatProgramForm = () => {
  const [programData, setProgramData] = useState({
    jenisProgramId: "",
    judul: "",
    nama: "",
    email: "",
    jadwal: "",
    deskripsi: "",
    isAdmin: "False",
  });

  const [thumbnail, setThumbnail] = useState<File | null>(null); // Specify thumbnail type
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  const [jenisProgramOptions, setJenisProgramOptions] = useState<
    JenisProgram[]
  >([]);

  // Fetch jenis program options from the API
  useEffect(() => {
    const fetchJenisProgramOptions = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/jenis-program"
        );
        setJenisProgramOptions(response.data);
      } catch (error) {
        console.error("Error fetching jenis program options:", error);
      }
    };

    fetchJenisProgramOptions();
  }, []); // Run the effect only once on component mount

  console.log("jenisProgramOptions :>> ", jenisProgramOptions);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setProgramData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setProgramData((prevData) => ({
      ...prevData,
      jenisProgramId: value,
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

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("judul", programData.judul);
      formData.append("nama", programData.nama);
      formData.append("email", programData.email);
      formData.append("jadwal", programData.jadwal);
      formData.append("deskripsi", programData.deskripsi);
      formData.append("isAdmin", programData.isAdmin);

      // Append jenis_program_id to FormData
      formData.append("jenis_program_id", programData.jenisProgramId);

      if (thumbnail) {
        formData.append("gambar_thumbnail", thumbnail);
      }

      const programResponse = await axios.post(
        "http://127.0.0.1:8000/api/program-panti",
        formData
      );

      console.log("Program created successfully:", programResponse.data);
    } catch (error) {
      console.error("Error creating program:", error);
    }
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 text-background2">
        <div className="relative text-center ">
          {/* Image */}
          <Image
            width={700}
            height={700}
            src={"/images/program/program.png"}
            alt="Background"
            className="object-cover w-full lg:h-[400px] h-[300px] brightness-50 "
          />

          {/* Text Overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <hr className="max-w-full w-[68px] border border-t-6  mx-auto mb-5" />
            <h1 className="lg:text-4xl text-lg font-extrabold text-white">
              Tindakan Kebaikan Memberi Sayap
            </h1>
            <h1 className="lg:text-3xl text-lg mt-2 text-white">
              Pada Impian Anak-Anak Panti Asuhan
            </h1>
          </div>
        </div>
        <div className="py-8 lg:py-16 px-4 ">
          <div className="lg:flex  justify-between gap-10 lg:px-30">
            <div className="shadow-lg p-5 lg:w-1/2 border-[#eee] border">
              <div className="flex gap-5 items-center mb-5 text-4xl text-[#23549e]">
                <FaWallet />
                <h1 className="font-semibold">Detail Program</h1>
              </div>
              <p>Lengkapi data dibawah ini</p>

              <form className="space-y-8 mt-5">
                <div>
                  <label
                    htmlFor="judul"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Judul Program
                  </label>
                  <input
                    value={programData.judul}
                    onChange={handleInputChange}
                    type="text"
                    id="judul"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Masukkan Jumlah Donasi Anda"
                    required
                  />
                </div>

                <div className="w-full mt-5 lg:mt-0">
                  <label
                    htmlFor="jenis-program"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Jenis Program
                  </label>
                  <select
                    id="jenis-program"
                    value={programData.jenisProgramId}
                    onChange={handleSelectChange}
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    required
                  >
                    <option value="" disabled>
                      Pilih Jenis Program
                    </option>
                    {jenisProgramOptions.map((jenisProgram) => (
                      <option key={jenisProgram.id} value={jenisProgram.id}>
                        {jenisProgram.nama}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="lg:flex justify-between gap-2">
                  <div className="w-full">
                    <label
                      htmlFor="nama"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Nama
                    </label>
                    <input
                      value={programData.nama}
                      onChange={handleInputChange}
                      type="text"
                      id="nama"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Nama"
                      required
                    />
                  </div>
                  <div className="w-full mt-5 lg:mt-0">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      value={programData.email}
                      onChange={handleInputChange}
                      type="email"
                      id="email"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="jadwal"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Jadwal
                  </label>
                  <input
                    value={programData.jadwal}
                    onChange={handleInputChange}
                    type="date"
                    id="jadwal"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Nama"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="pesan"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Deskripsi
                  </label>
                  <textarea
                    value={programData.deskripsi}
                    onChange={handleInputChange}
                    id="deskripsi"
                    rows={6}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Berikan deskripsi program anda..."
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="lg:w-1/2 mt-5 lg:mt-0">
              <div className="shadow-lg  border-[#eee] border">
                <div className="flex gap-5 items-center  text-4xl p-5 text-[#23549e]">
                  <FaMoneyCheckAlt />
                  <h1 className="font-semibold">Gambar Program</h1>
                </div>
                <p className="px-5 mb-5">Upload gambar thumbnail</p>

                {/* Dropzone for image upload */}
                <div className="mt-5 p-5">
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

                <hr className="text-[#B6BBC4]" />
              </div>
              <button
                type="submit"
                onClick={handleSubmit} // Add this line to handle the button click
                className="mt-5 w-full py-3 px-5 text-base text-center text-white bg-[#23549e] hover:bg-background2 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none font-bold "
              >
                Buat Program
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuatProgramForm;
