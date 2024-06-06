import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = useParams();

  console.log(email);

  // get user
  const { data: user = [], isLoading } = useQuery({
    queryKey: ["user-details"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/users-details/${email}`
      );
      return data;
    },
  });
  console.log(user);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const bank_account_no = form.bank_account_no.value;
    const designation = form.designation.value;

    const userData = {
      bank_account_no,
      designation,
    };
    console.log(userData);
    try {
      const { data } = await axiosSecure.put(
        `/update-details/${user?._id}`,
        userData
      );
      console.log(data);

      toast.success("Update Successfully");
      navigate(location?.state || "/dashboard");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <div>
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Update Profile
          </h2>

          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 dark:text-gray-200">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  defaultValue={user?.name}
                  disabled
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  defaultValue={user?.email}
                  disabled
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Bank Account Number
                </label>
                <input
                  id="bank_account_no"
                  name="bank_account_no"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  defaultValue={user?.bank_account_no}
                />
              </div>
              {/* <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Salary
                </label>
                <input
                  id="salary"
                  name="salary"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  defaultValue={user?.salary}
                />
              </div> */}
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Designation
                </label>
                <input
                  id="designation"
                  name="designation"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  defaultValue={user?.designation}
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UpdateProfile;
