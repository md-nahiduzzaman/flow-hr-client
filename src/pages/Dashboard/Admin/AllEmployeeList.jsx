import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/LoadingSpinner";

const AllEmployeeList = () => {
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/users?verified=true`
      );
      return data;
    },
  });

  // salary change
  const handleSalarySubmit = async (e, id, oldSalary) => {
    e.preventDefault();
    const form = e.target;
    const salary = form.newSalary.value;
    const salaryData = {
      salary,
    };
    console.log(id);
    console.log(salaryData);

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/user-salary/${id}`,
        salaryData
      );
      console.log("Salary updated:", response.data);
      refetch();
    } catch (err) {
      console.log(err);
    }
    // close modal
    // const modal = document.getElementById(`my_modal_${id}`);
    // modal.close();
  };

  // role change
  const handleMakeHR = async (id) => {
    const role = "HR";
    const roleData = {
      role,
    };

    console.log(roleData, id);
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/user-role/${id}`,
        roleData
      );
      console.log("Role updated:", response.data);
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
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/user-status/${id}`,
        roleData
      );
      console.log("Status updated:", response.data);
      refetch();
    } catch (err) {
      console.log(err);
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
  };

  console.log(users);
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <h1>this is all employee list</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Status</th>
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
                  <td>{user?.verified ? "Verified" : "Not Verified"}</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">
                      {user?.salary}
                    </button>
                    {/* modal */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="btn btn-xs"
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
                              className="btn mt-5 w-full"
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
                        className="btn btn-ghost btn-xs"
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
                        className="btn btn-ghost btn-xs"
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
    </div>
  );
};

export default AllEmployeeList;
