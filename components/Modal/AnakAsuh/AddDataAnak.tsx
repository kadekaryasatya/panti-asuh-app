import { DataAnak } from "@/types/data-anak";
import React, { useState } from "react";

interface AddAnakModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddDataAnak: (anak: DataAnak) => void;
}

const AddAnakModal: React.FC<AddAnakModalProps> = ({
  isOpen,
  onClose,
  onAddDataAnak,
}) => {
  const [formData, setFormData] = useState<DataAnak>({
    id: 2,
    nama: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    agama: "",
    status: "Aktif",
    akta_kelahiran: "",
    kartu_keluarga: "",
    ktp: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: file.name,
      }));
    }
  };

  const handleSubmit = () => {
    console.log("Data yang akan dikirim:", formData);
    onAddDataAnak(formData);
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
      status: prevData.status === "Aktif" ? "Non-aktif" : "Aktif",
    }));
  };

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center lg:ml-40 z-99`}
    >
      <div className="bg-white p-8 w-6/12 rounded-lg shadow-md border shadow-[#2D9596] max-h-[80vh] overflow-y-auto">
        <div className="text-xl font-bold mb-4 dark:text-black">
          Add Data Anak
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
            className="mt-1 p-1 w-full border rounded-md"
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
            className="mt-1 p-1 w-full border rounded-md"
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
            className="mt-1 p-1 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Jenis Kelamin
            </label>
            <div className="relative z-20 bg-white dark:bg-form-input">
              <select
                name="jenis_kelamin"
                value={formData.jenis_kelamin}
                onChange={handleInputChange}
                className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
              >
                <option value="" hidden>
                  Pilih Jenis Kelamin
                </option>
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Agama Anak
            </label>
            <div className="relative z-20 bg-white dark:bg-form-input">
              <select
                name="agama"
                value={formData.agama}
                onChange={handleInputChange}
                className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
              >
                <option value="" hidden>
                  Pilih Agama
                </option>
                <option value="Islam">Islam</option>
                <option value="Kristen Protestan">Kristen Protestan</option>
                <option value="Kristen Katolik">Kristen Katolik</option>
                <option value="Hindu">Hindu</option>
                <option value="Budha">Budha</option>
                <option value="Konghucu">Konghucu</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-4 flex gap-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-black">
            Status
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="status"
              checked={formData.status === "Aktif"}
              onChange={handleToggleChange}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2">{formData.status}</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-3 block text-black dark:text-white">
            Akta Kelahiran
          </label>
          <input
            type="file"
            onChange={(e) => handleFileChange(e, "akta_kelahiran")}
            className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
          />
        </div>

        <div className="mb-4">
          <label className="mb-3 block text-black dark:text-white">
            Kartu Keluarga
          </label>
          <input
            type="file"
            onChange={(e) => handleFileChange(e, "kartu_keluarga")}
            className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
          />
        </div>

        <div className="mb-4">
          <label className="mb-3 block text-black dark:text-white">
            Kartu Pengenal
          </label>
          <input
            type="file"
            onChange={(e) => handleFileChange(e, "ktp")}
            className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
          />
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

export default AddAnakModal;
