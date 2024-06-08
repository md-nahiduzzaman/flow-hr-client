import { FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { useState } from "react";
import { Link } from "react-router-dom";
import PaymentModal from "../../../components/Modal/PaymentModal";
import PayModal from "../../../components/Modal/PayModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const EmployeeList = () => {
  const axiosSecure = useAxiosSecure();
  // const [isOpen, setIsOpen] = useState(false);

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  let [isOpen, setIsOpen] = useState(true);

  // function close() {
  //   setIsOpen(false);
  // }

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
      const response = await axiosSecure.put(
        `/user-verified-status/${id}`,
        verifiedData
      );
      refetch();
      console.log("verified updated:", response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // // payment submit
  // const handlePaymentSubmit = async (e, id, salary) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const month = form.month.value;
  //   const year = form.year.value;

  //   console.log(month, year);
  // };

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
                        className="btn btn-ghost btn-xs text-white bg-[#22303c] hover:bg-[#15202b]"
                      >
                        <FaCheck />
                      </button>
                    ) : (
                      <button
                        onClick={() => toggleVerified(user?._id)}
                        className="btn btn-ghost btn-xs text-white bg-[#22303c] hover:bg-[#15202b]"
                      >
                        <FaXmark />
                      </button>
                    )}
                  </td>

                  <td>{user?.bank_account_no}</td>
                  <td>{user?.salary}</td>
                  <td>
                    {/* modal */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    {/* <button
                      onClick={() => setIsOpen(true)}
                      className="btn btn-xs"
                      disabled={user?.verified}
                    >
                      Paysdsd
                    </button> */}
                    {/* <PaymentModal
                      isOpen={isOpen}
                      refetch={refetch}
                      closeModal={closeModal}
                      paymentInfo={{
                        name: user?.name,
                        email: user?.email,
                        salary: user?.salary,
                      }}
                    /> */}

                    <PayModal
                      refetch={refetch}
                      close={close}
                      paymentInfo={{
                        user,
                      }}
                    ></PayModal>
                  </td>
                  <td>
                    <Link to={`/dashboard/user-details/${user?.email}`}>
                      <button className="btn btn-xs text-white bg-[#22303c] hover:bg-[#15202b]">
                        Details
                      </button>
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
