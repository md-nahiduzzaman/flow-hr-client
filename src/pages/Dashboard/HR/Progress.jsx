import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";

const Progress = () => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const handleReset = () => {
    setFilter("");
    setSort("");
  };

  // get user
  const {
    data: works = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-works"],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-works`);
      return data;
    },
  });
  console.log(works);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <h1>this is progress</h1>
      {/* filter */}
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-11">
          <div className="flex gap-10 items-center">
            <h1>Filter Your Data</h1>
            {/*   Name */}
            <div>
              <select
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
                value={filter}
                name="name"
                id="name"
                className="input input-bordered w-full max-w-xs"
              >
                <option value="">Name</option>
                <option value="Easy">a</option>
                <option value="Medium">b</option>
                <option value="Hard">c</option>
              </select>
            </div>

            {/* month */}
            <div>
              <select
                onChange={(e) => {
                  setSort(e.target.value);
                }}
                value={sort}
                name="month"
                id="month"
                className="input input-bordered w-full max-w-xs"
              >
                <option value="">Month</option>
                <option value="Easy">jan</option>
                <option value="Medium">feb</option>
                <option value="Hard">mar</option>
              </select>
            </div>
            <div>
              <button
                className="btn bg-[#59c6bc] text-white hover:bg-[#368880]"
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
              <tr>
                <td>Yahya</td>
                <td>January</td>
                <td>Sales</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Progress;
