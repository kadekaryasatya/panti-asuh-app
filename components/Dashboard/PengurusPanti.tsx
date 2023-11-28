"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { PengurusPanti } from "@/types/pengurus-panti";
import { FaTrash, FaEdit, FaEye, FaPlus } from "react-icons/fa";
import AddPengurusModal from "../Modal/PengurusPanti/AddPengursPanti";
import Swal from "sweetalert2";
import UpdatePengurusModal from "../Modal/PengurusPanti/UpdatePengurusPanti";

const defaultPengurusData: PengurusPanti = {
  id: 0,
  nama: "",
  alamat: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  no_telepon: "",
  isActive: "aktif",
  created_at: null,
  updated_at: "",
};

const PengursPanti = () => {
  const [pengurus, setPengurusData] = useState<PengurusPanti[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedPengurus, setSelectedPengurus] =
    useState<PengurusPanti | null>(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  //Get All Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = Cookies.get("auth_token");
        console.log("authToken :>> ", authToken);
        const response = await axios.get(
          "http://127.0.0.1:8000/api/pengurus-panti/",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setPengurusData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //Add Pengurus
  const handleAddPengurus = async (pengurus: PengurusPanti) => {
    try {
      const authToken = Cookies.get("auth_token");

      // Make a POST request to add new Pengurus
      const response = await axios.post(
        "http://127.0.0.1:8000/api/pengurus-panti/",
        pengurus,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the success response
      Swal.fire("Saved", "", "success");
      console.log("Pengurus added successfully:", response.data);

      // Fetch updated data after adding
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://127.0.0.1:8000/api/pengurus-panti/",
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );
          setPengurusData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      // Refetch data to update the table
      fetchData();
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error("Error adding Pengurus:", error);
    }
  };

  //Delete Pengurus
  const handleDeletePengurus = async (id: number) => {
    try {
      const authToken = Cookies.get("auth_token");

      // Make a DELETE request to delete Pengurus by ID
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      // If user confirms the deletion
      if (result.isConfirmed) {
        // Make a DELETE request to delete Pengurus by ID
        await axios.delete(`http://127.0.0.1:8000/api/pengurus-panti/${id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        // Show success Swal alert
        Swal.fire({
          title: "Deleted!",
          text: "Pengurus has been deleted.",
          icon: "success",
        });
        // Remove the deleted Pengurus from the state
        setPengurusData((prevPengurus) =>
          prevPengurus.filter((pengurusItem) => pengurusItem.id !== id)
        );
      }
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error("Error deleting Pengurus:", error);
    }
  };

  //Update Pengurus
  const handleEditPengurus = (pengurusItem: PengurusPanti) => {
    setSelectedPengurus(pengurusItem);
    setIsUpdateModalOpen(true);
  };

  const handleUpdatePengurus = async (updatedPengurus: PengurusPanti) => {
    try {
      const authToken = Cookies.get("auth_token");

      // Make a PUT request to update Pengurus by ID
      await axios.put(
        `http://127.0.0.1:8000/api/pengurus-panti/${updatedPengurus.id}`,
        updatedPengurus,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      // Update the PengurusData state with the updated Pengurus
      setPengurusData((prevPengurus) =>
        prevPengurus.map((pengurusItem) =>
          pengurusItem.id === updatedPengurus.id
            ? updatedPengurus
            : pengurusItem
        )
      );

      // Close the update modal
      setIsUpdateModalOpen(false);
      Swal.fire("Saved", "", "success");
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error("Error updating Pengurus:", error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-5 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <div className="justify-end flex">
          {/* Button to open the modal */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-[#2D9596] rounded-md border mb-4 text-white flex items-center gap-2 hover:bg-opacity-90 "
          >
            <FaPlus />
            Add New
          </button>

          {/* Modal component */}
          <AddPengurusModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAddPengurus={handleAddPengurus}
          />

          <UpdatePengurusModal
            isOpen={isUpdateModalOpen}
            onClose={() => setIsUpdateModalOpen(false)}
            onUpdatePengurus={handleUpdatePengurus}
            pengurusData={selectedPengurus || defaultPengurusData}
          />
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Nama
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Alamat
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Tempat Lahir
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Tanggal Lahir
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                No telepon
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Aktif
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {pengurus.map((pengurusItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {pengurusItem.nama}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {pengurusItem.alamat}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {pengurusItem.tempat_lahir}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {pengurusItem.tanggal_lahir}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {pengurusItem.no_telepon}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      pengurusItem.isActive === "aktif"
                        ? "text-success bg-success"
                        : pengurusItem.isActive === "non-aktif"
                        ? "text-danger bg-danger"
                        : "text-warning bg-warning"
                    }`}
                  >
                    {pengurusItem.isActive}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="cursor-pointer hover:text-primary">
                      <FaEye />
                    </button>
                    <button
                      className="cursor-pointer hover:text-[#FFC436]"
                      onClick={() => handleEditPengurus(pengurusItem)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="cursor-pointer hover:text-[#B31312]"
                      onClick={() => handleDeletePengurus(pengurusItem.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PengursPanti;
