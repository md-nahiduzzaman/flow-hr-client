import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const WorkSheet = () => {
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  console.log(user);

  const {
    data: works = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["works"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/work-sheet/${user?.email}`
      );
      return data;
    },
  });
  console.log(works);

  const handleWorkSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const task = form.task.value;
    const hours = parseInt(form.hours_worked.value);
    const date = startDate;
    // const month = new Date(startDate).getMonth() + 1;

    // const date = new Date(work.date);
    const month = date.toLocaleString("en-US", { month: "long" });

    const name = user?.displayName;
    const email = user?.email;
    const photo = user?.photoURL;

    const workData = {
      task,
      hours,
      date,
      month,
      name,
      email,
      photo,
    };

    console.log(workData);
    // save data in db
    try {
      const response = await axiosSecure.put(`/work-sheet`, workData);
      console.log("work updated:", response.data);
      toast.success("Add Successful");
      refetch();
    } catch (err) {
      console.log(err);
      toast.success("Something wrong");
    }
  };

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      {/* table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Task</th>
                <th>Hours Worked</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {works.map((work) => (
                <tr key={work?._id}>
                  <td>{work?.task}</td>
                  <td>{work?.hours}</td>
                  <td>{new Date(work?.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-16">
            <h1 className="font-semibold text-2xl">Add Your Work</h1>
          </div>
          <form
            onSubmit={(e) => handleWorkSubmit(e)}
            className="flex flex-col lg:flex-row items-start lg:items-end  gap-4 mt-4 "
          >
            {/* task */}
            <div className="mb-3">
              <label className="form-control w-full">Task</label>

              <select
                name="task"
                required
                className="input input-bordered  block  px-4 py-2 mt-2"
              >
                <option>Sales</option>
                <option>Support</option>
                <option>Content</option>
                <option>Paper-work</option>
              </select>
            </div>
            {/* Hours Worked */}
            <div className="mb-3">
              <label className="form-control w-full">Hours Worked</label>
              <input
                type="number"
                placeholder="Hours Worked"
                name="hours_worked"
                required
                className="input input-bordered  block px-4 py-2 mt-2"
              />
            </div>
            {/* date */}
            <div className="mb-3">
              <label className="form-control w-full">Date</label>

              <DatePicker
                required
                name="date"
                className="input input-bordered  block  px-4 py-2 mt-2"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {/* btn */}
            <div className="mb-3">
              <button className="btn text-white bg-[#22303c] hover:bg-[#15202b]">
                {" "}
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkSheet;
