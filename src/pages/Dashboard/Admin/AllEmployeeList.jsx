import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/LoadingSpinner";

import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import Swal from "sweetalert2";
import { CiViewTable } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";

const AllEmployeeList = () => {
  const axiosSecure = useAxiosSecure();

  // toggle
  const [cardView, setCardView] = useState(true);
  const toggleView = async () => {
    setCardView(!cardView);
  };

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["verified-user"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users-verified?verified=true`);
      return data;
    },
  });

  // salary change
  const handleSalarySubmit = async (e, id, oldSalary) => {
    e.preventDefault();
    const form = e.target;
    const salary = parseInt(form.newSalary.value);
    const salaryData = {
      salary,
    };
    console.log(id);
    console.log(salaryData);

    if (oldSalary > salary) {
      toast.error("Only allow increasing of the salary");
      return;
    }

    try {
      const response = await axiosSecure.put(`/user-salary/${id}`, salaryData);
      console.log("Salary updated:", response.data);
      toast.success("Successfully Change Salary");
      refetch();
    } catch (err) {
      console.log(err);
    }
    // close modal
    const modal = document.getElementById(`my_modal_${id}`);
    modal.close();
  };

  // role change
  const handleMakeHR = async (id) => {
    const role = "HR";
    const roleData = {
      role,
    };

    console.log(roleData, id);
    try {
      const response = await axiosSecure.put(`/user-role/${id}`, roleData);
      console.log("Role updated:", response.data);
      toast.success("Successfully Make HR");
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  // fire
  const handleMakeFire = async (id, email) => {
    const status = "fired";

    const roleData = {
      status,
    };

    const emailData = {
      email,
    };

    console.log(emailData);

    console.log(roleData, id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Fire",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.put(
            `/user-status/${id}`,
            roleData
          );
          console.log("Status updated:", response.data);
          toast.success("Fired Operation Successful");
          refetch();
        } catch (err) {
          console.log(err);
          toast.error(err?.message);
        }

        try {
          const response = await axios.put(
            `${import.meta.env.VITE_API_URL}/block-user`,
            emailData
          );
          console.log("block email", response.data);
          refetch();
        } catch (err) {
          console.log(err);
        }
      }
    });

    // try {
    //   const response = await axiosSecure.put(`/user-status/${id}`, roleData);
    //   console.log("Status updated:", response.data);
    //   refetch();
    // } catch (err) {
    //   console.log(err);
    // }

    // try {
    //   const response = await axios.put(
    //     `${import.meta.env.VITE_API_URL}/block-user`,
    //     emailData
    //   );
    //   console.log("block email", response.data);
    //   refetch();
    // } catch (err) {
    //   console.log(err);
    // }
  };

  console.log(users);
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      {/* card view */}
      <div className="flex items-center gap-8 mb-6">
        <h1 className="font-semibold text-xl">View:</h1>
        <div>
          {cardView ? (
            <button onClick={() => toggleView()} className="btn ">
              <IoGridOutline className="font-bold text-2xl" />
            </button>
          ) : (
            <button onClick={() => toggleView()} className="btn ">
              <CiViewTable className="font-bold text-2xl" />
            </button>
          )}
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl mb-8">Employee List</h1>
      </div>
      {cardView ? (
        <>
          {/* table */}
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    {/* <th>Status</th> */}
                    <th>Salary</th>
                    <th>Make HR</th>
                    <th>Fire</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td>{user?.name}</td>
                      <td>{user?.designation}</td>
                      {/* <td>{user?.verified ? "Verified" : "Not Verified"}</td> */}
                      <td className="flex flex-col sm:flex-row gap-2">
                        <h1 className="">{user?.salary}</h1>
                        {/* modal */}
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button
                          className="btn btn-xs text-white bg-[#22303c] hover:bg-[#15202b]"
                          onClick={() =>
                            document
                              .getElementById(`my_modal_${user?._id}`)
                              .showModal()
                          }
                        >
                          Change salary
                        </button>

                        <dialog id={`my_modal_${user?._id}`} className="modal">
                          <div className="modal-box flex flex-col items-center">
                            <h3 className="font-bold text-lg">{user?.name}</h3>
                            <p className="py-4">
                              Present Salary: {user?.salary}
                            </p>
                            <div className="modal-action">
                              <form
                                onSubmit={(e) =>
                                  handleSalarySubmit(e, user?._id, user?.salary)
                                }
                                method="dialog"
                              >
                                <div className="col-span-2 w-full">
                                  <label className="form-control w-full">
                                    <div className="label">
                                      <span className="label-text">
                                        New Salary
                                      </span>
                                    </div>
                                    <input
                                      type="number"
                                      name="newSalary"
                                      className="input input-bordered w-full"
                                      required
                                    />
                                  </label>
                                </div>
                                {/* if there is a button in form, it will close the modal */}
                                <button
                                  onClick={() => document.closeModal()}
                                  className="btn mt-5 w-full text-white bg-[#22303c] hover:bg-[#15202b]"
                                >
                                  Submit
                                </button>
                              </form>
                            </div>
                          </div>
                        </dialog>

                        {/* HR */}
                      </td>
                      <td>
                        {user?.role === "HR" ? (
                          "HR"
                        ) : (
                          <button
                            onClick={() => handleMakeHR(user._id)}
                            className="btn btn-ghost btn-xs text-white bg-[#22303c] hover:bg-[#15202b]"
                            hidden={user?.role === "HR"}
                          >
                            Make HR
                          </button>
                        )}

                        {/* <button
                      onClick={() => handleMakeHR(user._id)}
                      className="btn btn-ghost btn-xs"
                      disabled={user?.role === "HR"}
                    >
                      {user?.role === "HR" ? "HR" : "Make HR"}
                    </button> */}
                        {/* HR */}
                      </td>
                      <td>
                        {user?.status === "fired" ? (
                          "Fired"
                        ) : (
                          <button
                            onClick={() => handleMakeFire(user._id, user.email)}
                            className="btn btn-xs text-white bg-[#22303c] hover:bg-[#15202b]"
                            hidden={user?.status === "working"}
                          >
                            Fire
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {users.map((user) => (
              <div
                key={user._id}
                className="w-full max-w-sm px-4 py-6 bg-white rounded-md shadow-md"
              >
                <h1 className="mt-2 text-lg font-semibold text-gray-800">
                  Name: {user?.name}
                </h1>
                <div className="flex flex-row gap-8">
                  <h1 className="mt-2 text-sm text-gray-600 ">
                    Designation: {user?.designation}
                  </h1>
                  {/* <h1 className="mt-2 text-sm text-gray-600 ">
                    Status: {user?.verified ? "Verified" : "Not Verified"}
                  </h1> */}
                </div>

                <h1 className="mt-2 text-sm text-gray-600 mb-2 ">
                  Salary: {user?.salary}
                  <span>
                    {" "}
                    {/* modal */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="btn btn-xs text-white bg-[#22303c] hover:bg-[#15202b]"
                      onClick={() =>
                        document
                          .getElementById(`my_modal_${user?._id}`)
                          .showModal()
                      }
                    >
                      Change salary
                    </button>
                    <dialog id={`my_modal_${user?._id}`} className="modal">
                      <div className="modal-box flex flex-col items-center">
                        <h3 className="font-bold text-lg">{user?.name}</h3>
                        <p className="py-4">Present Salary: {user?.salary}</p>
                        <div className="modal-action">
                          <form
                            onSubmit={(e) =>
                              handleSalarySubmit(e, user?._id, user?.salary)
                            }
                            method="dialog"
                          >
                            <div className="col-span-2 w-full">
                              <label className="form-control w-full">
                                <div className="label">
                                  <span className="label-text">New Salary</span>
                                </div>
                                <input
                                  type="number"
                                  name="newSalary"
                                  className="input input-bordered w-full"
                                  required
                                />
                              </label>
                            </div>
                            {/* if there is a button in form, it will close the modal */}
                            <button
                              onClick={() => document.closeModal()}
                              className="btn mt-5 w-full text-white bg-[#22303c] hover:bg-[#15202b]"
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </span>
                </h1>
                <div className="mt-4 flex flex-row gap-4">
                  <div>
                    {user?.role === "HR" ? (
                      "HR"
                    ) : (
                      <button
                        onClick={() => handleMakeHR(user._id)}
                        className="btn  btn-xs text-white bg-[#22303c] hover:bg-[#15202b]"
                        hidden={user?.role === "HR"}
                      >
                        Make HR
                      </button>
                    )}
                  </div>
                  <div>
                    {user?.status === "fired" ? (
                      "Fired"
                    ) : (
                      <button
                        onClick={() => handleMakeFire(user._id, user.email)}
                        className="btn btn-xs text-white bg-[#22303c] hover:bg-[#15202b] "
                        hidden={user?.status === "working"}
                      >
                        Fire
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllEmployeeList;
