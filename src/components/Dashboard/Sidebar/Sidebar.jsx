import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);

  // responsive handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* small screen nav */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <h1>Dashboard</h1>
        </div>
        <button
          onClick={handleToggle}
          className="p-4 focus:outline-none focus:bg-gray-200"
        >
          <IoMenu className="h-5 w-5" />
        </button>
      </div>

      {/* sidebar */}
      <div
        className={`min-h-[calc(100vh-160px)] z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute  left-0 transform ${
          isActive && "-translate-x-full"
        } md:translate-x-0`}
      >
        <div>
          <div>
            <h1>Dashboard</h1>
          </div>
          {/* nav item */}
          <div className="flex flex-col flex-1 mt-8">
            <nav>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  ${
                    isActive ? "bg-gray-200 text-gray-900" : "text-gray-500"
                  }`
                }
              >
                Profile
              </NavLink>
              <NavLink
                to="work-sheet"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5 ${
                    isActive ? "bg-gray-200 text-gray-900" : "text-gray-500"
                  }`
                }
              >
                Work Sheet
              </NavLink>
              <NavLink
                to="payment-history"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5 ${
                    isActive ? "bg-gray-200 text-gray-900" : "text-gray-500"
                  }`
                }
              >
                Payment History
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
