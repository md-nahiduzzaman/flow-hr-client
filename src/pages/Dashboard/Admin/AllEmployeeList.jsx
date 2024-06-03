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
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/users`);
      return data;
    },
  });

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
                <th>Make HR</th>
                <th>Fire</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user?.name}</td>
                  <td>{user?.designation}</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Make HR</button>
                    {/* HR */}
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Fire</button>
                    {/* Fired */}
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
