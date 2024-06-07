import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useRole from "../../../hooks/useRole";

const Profile = () => {
  const { user } = useAuth();
  console.log(user);
  const [role] = useRole();
  console.log(role);

  // get user
  const { data: userInfo = [], isLoading } = useQuery({
    queryKey: ["user-details", user],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/users-details/${user?.email}`
      );
      return data;
    },
  });
  console.log(userInfo);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <div className="flex items-center justify-center ">
        <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex justify-center -mt-16 md:justify-center">
            <img
              className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
              alt="User Photo"
              src={user?.photoURL}
            />
          </div>

          <h2 className="mt-2 text-xl text-center font-semibold text-gray-800 dark:text-white md:mt-0">
            Name: {user?.displayName || userInfo?.name}
          </h2>
          <h2 className="mt-2 text-sm text-center font-semibold text-gray-600 dark:text-white md:mt-0">
            {role}
          </h2>

          <div className="mt-9">
            <h1>Email: {user?.email}</h1>
            <h3>Id: {userInfo?._id}</h3>
          </div>

          <div className="flex justify-end mt-4">
            <Link to={`update-profile/${user?.email}`}>
              <button className="btn btn-xs">Edit Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
