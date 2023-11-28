import { PengurusPanti } from "@/types/pengurus-panti";
import React, { useState, useEffect } from "react";

interface UpdatePengurusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdatePengurus: (pengurus: PengurusPanti) => void;
  pengurusData: PengurusPanti; // Data of the Pengurus to be updated
}

const UpdatePengurusModal: React.FC<UpdatePengurusModalProps> = ({
  isOpen,
  onClose,
  onUpdatePengurus,
  pengurusData,
}) => {
  const [formData, setFormData] = useState<PengurusPanti>({
    ...pengurusData,
  });

  useEffect(() => {
    // Update form data when pengurusData changes
    setFormData({ ...pengurusData });
  }, [pengurusData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

  const handleSubmit = () => {
    // You can add validation here before submitting
    onUpdatePengurus(formData);
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
          Update Pengurus
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
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePengurusModal;
