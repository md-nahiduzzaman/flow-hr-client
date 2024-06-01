import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Profile from "../pages/Dashboard/Common/Profile";
import WorkSheet from "../pages/Dashboard/Employee/WorkSheet";
import PaymentHistory from "../pages/Dashboard/Employee/PaymentHistory";
import EmployeeList from "../pages/Dashboard/HR/EmployeeList";
import Progress from "../pages/Dashboard/HR/Progress";
import AllEmployeeList from "../pages/Dashboard/Admin/AllEmployeeList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            index: true,
            element: <Profile></Profile>,
          },
          {
            path: "work-sheet",
            element: <WorkSheet></WorkSheet>,
          },
          {
            path: "payment-history",
            element: <PaymentHistory></PaymentHistory>,
          },
          {
            path: "employee-list",
            element: <EmployeeList></EmployeeList>,
          },
          {
            path: "progress",
            element: <Progress></Progress>,
          },
          {
            path: "all-employee-list",
            element: <AllEmployeeList></AllEmployeeList>,
          },
        ],
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
