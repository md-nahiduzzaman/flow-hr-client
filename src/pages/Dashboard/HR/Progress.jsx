import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";

const Progress = () => {
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");

  console.log(name, month);

  const handleReset = () => {
    setName("");
    setMonth("");
  };

  // get works
  const { data: works = [], isLoading } = useQuery({
    queryKey: ["all-works", name, month],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/all-works?`,
        { params: { name, month } }
      );
      return data;
    },
  });
  console.log(works);

  // remove duplicate
  const uniqueMonths = [...new Set(works.map((work) => work.month))];
  const uniqueNames = [...new Set(works.map((work) => work.name))];

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <h1 className="font-bold text-2xl mb-8">Progress</h1>
      {/* filter */}
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-11">
          <div className="flex gap-2 items-center">
            <h1>Filter Your Data</h1>
            {/*   Name */}
            <div>
              <select
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                name="name"
                id="name"
                className="input input-bordered w-full max-w-xs"
              >
                <option value="">Name</option>
                {uniqueNames.map((name, index) => (
                  <option key={index} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            {/* month */}
            <div>
              <select
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
                value={month}
                name="month"
                id="month"
                className="input input-bordered w-full max-w-xs"
              >
                <option value="">Month</option>
                {uniqueMonths.map((month, index) => (
                  <option
                    key={index}
                    // value={new Date(work.date).getMonth() + 1}
                    value={month}
                  >
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                className="btn text-white bg-[#22303c] hover:bg-[#15202b]"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Month</th>
                <th>Submitted Work</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {works.map((work) => {
                const date = new Date(work.date);
                const month = date.toLocaleString("en-US", { month: "long" });
                return (
                  <tr key={work._id}>
                    <td>{work.name}</td>
                    <td>{month}</td>
                    <td>{work.task}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Progress;

// work.date.toLocaleString("en-US", { month: "long" });
// console.log(month);
