"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";
import { User } from "@/types/user";

const UserList = () => {
  const [user, setUserData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = Cookies.get("auth_token");
        console.log("authToken :>> ", authToken);
        const response = await axios.get(
          "http://127.0.0.1:8000/api/auth/users",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Nama
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Email
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Dibuat
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Diupdate
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Role
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {user.map((userItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {userItem.name}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{userItem.email}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {userItem.created_at}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {userItem.updated_at}
                  </p>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      userItem.role === "admin"
                        ? "text-success bg-success"
                        : userItem.role === "user"
                        ? "text-danger bg-danger"
                        : "text-warning bg-warning"
                    }`}
                  >
                    {userItem.role}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="cursor-pointer hover:text-primary">
                      <FaEye />
                    </button>
                    <button className="cursor-pointer hover:text-primary">
                      <FaEdit />
                    </button>
                    <button className="cursor-pointer hover:text-primary">
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

export default UserList;
