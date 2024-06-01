import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <div className="relative min-h-[calc(100vh-160px)] md:flex">
        <Sidebar />
        <div className="flex-1 md:ml-56">
          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
