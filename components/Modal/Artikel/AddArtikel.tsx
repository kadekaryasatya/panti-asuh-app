import { Artikel } from "@/types/artikel";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";

interface ArtikelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddArtikel: (artikel: Artikel) => void;
}

const AddArtikelModal: React.FC<ArtikelModalProps> = ({
  isOpen,
  onClose,
  onAddArtikel,
}) => {
  const [formData, setFormData] = useState<Artikel>({
    id: 0,
    judul: "",
    deskripsi: "",
    pengurus_panti_id: 0,
    gambar: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Access the first file from the input
    const file = e.target.files?.[0];
    setFormData((prevData) => ({
      ...prevData,
      gambar: file ? URL.createObjectURL(file) : null,
    }));
  };

  const handleSubmit = () => {
    // You can add validation here before submitting
    onAddArtikel(formData);
    onClose();
  };

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center lg:ml-40 z-99`}
    >
      <div className="bg-white p-8 max-w-md w-full rounded-lg shadow-md border shadow-[#2D9596]">
        <div className="text-xl font-bold mb-4 dark:text-black">
          Add Artikel
        </div>

        {/* Form inputs */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-black">
            Judul
          </label>
          <input
            type="text"
            name="judul"
            value={formData.judul}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-black">
            Deskripsi
          </label>
          <input
            type="text"
            name="deskripsi"
            value={formData.deskripsi}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-black">
            Pengurus Panti ID
          </label>
          <input
            type="number"
            name="pengurus_panti_id"
            value={formData.pengurus_panti_id}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Add file input for gambar */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-black">
            Gambar
          </label>
          <input
            type="file"
            accept="image/*"
            name="gambar"
            onChange={handleFileChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Display preview of the selected image */}
        {formData.gambar && (
          <div className="mb-4">
            <Image
              width={500}
              height={500}
              src={formData.gambar}
              alt="Gambar Artikel"
              className="max-w-full h-auto rounded-md"
            />
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-[#B31312] rounded-md border text-white hover:bg-opacity-80 "
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-[#0174BE] rounded-md border text-white hover:bg-opacity-80 "
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddArtikelModal;
