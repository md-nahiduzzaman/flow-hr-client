import { FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { useState } from "react";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  // months
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // get all employee
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/users`);
      return data;
    },
  });
  console.log(users);

  // toggle
  const [verified, setVerified] = useState(false);
  const toggleVerified = async (id) => {
    setVerified(!verified);

    const verifiedData = {
      verified,
    };
    console.log(verifiedData, id);
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/user-verified/${id}`,
        verifiedData
      );
      refetch();
      console.log("verified updated:", response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // payment submit
  const handlePaymentSubmit = async (e, id, salary) => {
    e.preventDefault();
    const form = e.target;
    const month = form.month.value;
    const year = form.year.value;

    console.log(month, year);
  };

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <h1>employee list</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Verified</th>
                <th>Bank Account</th>
                <th>Salary</th>
                <th>Pay</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user) => (
                <tr key={user?._id}>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    {user?.verified ? (
                      <button
                        onClick={() => toggleVerified(user?._id)}
                        className="btn btn-ghost btn-xs"
                      >
                        <FaXmark />
                      </button>
                    ) : (
                      <button
                        onClick={() => toggleVerified(user?._id)}
                        className="btn btn-ghost btn-xs"
                      >
                        <FaCheck />
                      </button>
                    )}
                  </td>

                  <td>{user?.bank_account_no}</td>
                  <td>{user?.salary}</td>
                  <td>
                    {/* modal */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="btn btn-xs"
                      disabled={user?.verified}
                      onClick={() =>
                        document
                          .getElementById(`my_modal_${user?._id}`)
                          .showModal()
                      }
                    >
                      Pay
                    </button>
                    <dialog id={`my_modal_${user?._id}`} className="modal">
                      <div className="modal-box flex flex-col items-center">
                        <h3 className="font-bold text-lg">
                          User Name:{user?.name}
                        </h3>
                        <p className="py-4">User Salary: {user?.salary}</p>
                        <div className="modal-action">
                          <form
                            onSubmit={(e) =>
                              handlePaymentSubmit(e, user?._id, user?.salary)
                            }
                            method="dialog"
                          >
                            <div className="col-span-2 w-full">
                              <select
                                name="month"
                                id="month"
                                className="input input-bordered w-full max-w-xs"
                              >
                                {months.map((month, index) => (
                                  <option
                                    key={index}
                                    value={month.toLocaleLowerCase()}
                                  >
                                    {month}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-span-2 w-full">
                              <label className="form-control w-full">
                                <div className="label">
                                  <span className="label-text">Year</span>
                                </div>
                                <input
                                  type="number"
                                  name="year"
                                  className="input input-bordered w-full"
                                  required
                                />
                              </label>
                            </div>
                            {/* if there is a button in form, it will close the modal */}
                            <button
                              // onClick={() => document.closeModal()}
                              className="btn mt-5 w-full"
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </td>
                  <td>
                    <Link to={`/dashboard/user-details/${user?.email}`}>
                      <button className="btn btn-xs">Details</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
