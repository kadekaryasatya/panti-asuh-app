import { PengurusPanti } from "@/types/pengurus-panti";
import React, { useState } from "react";

interface AddPengurusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPengurus: (pengurus: PengurusPanti) => void;
}

// ... (previous imports and interfaces remain unchanged)

const AddPengurusModal: React.FC<AddPengurusModalProps> = ({
  isOpen,
  onClose,
  onAddPengurus,
}) => {
  const [formData, setFormData] = useState<PengurusPanti>({
    id: 0,
    nama: "",
    alamat: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    no_telepon: "",
    isActive: "aktif",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // You can add validation here before submitting
    onAddPengurus(formData);
    onClose();
  };

  const handleDateChange = (date: string) => {
    setFormData((prevData) => ({
      ...prevData,
      tanggal_lahir: date,
    }));
  };

  const handleToggleChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      isActive: prevData.isActive === "aktif" ? "non-aktif" : "aktif",
    }));
  };

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center lg:ml-40 z-99`}
    >
      <div className="bg-white p-8 max-w-md w-full rounded-lg shadow-md border shadow-[#2D9596]">
        <div className="text-xl font-bold mb-4 dark:text-black">
          Add Pengurus
        </div>

        {/* Form inputs */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-black">
            Nama
          </label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-black">
            Alamat
          </label>
          <input
            type="text"
            name="alamat"
            value={formData.alamat}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-black">
            Tempat Lahir
          </label>
          <input
            type="text"
            name="tempat_lahir"
            value={formData.tempat_lahir}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-black">
            Tanggal Lahir
          </label>
          <input
            type="date"
            name="tanggal_lahir"
            value={formData.tanggal_lahir}
            onChange={(e) => handleDateChange(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-black">
            No Telepon
          </label>
          <input
            type="tel"
            name="no_telepon"
            value={formData.no_telepon}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4 flex gap-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-black">
            Aktif
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive === "aktif"}
              onChange={handleToggleChange}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2"></span>
          </div>
        </div>

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

export default AddPengurusModal;
