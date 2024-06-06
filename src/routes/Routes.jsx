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
import Message from "../pages/Dashboard/Admin/Message";
import EmployeeDetails from "../pages/Dashboard/HR/EmployeeDetails";
import UpdateProfile from "../pages/Dashboard/Common/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import HrRoute from "./HrRoute";

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
        element: (
          <PrivateRoute>
            <DashboardLayout></DashboardLayout>
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: (
              <PrivateRoute>
                <Profile></Profile>
              </PrivateRoute>
            ),
          },
          {
            path: "update-profile/:email",
            element: (
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            ),
          },
          {
            path: "work-sheet",
            element: (
              <PrivateRoute>
                <WorkSheet></WorkSheet>
              </PrivateRoute>
            ),
          },
          {
            path: "payment-history",
            element: (
              <PrivateRoute>
                <PaymentHistory></PaymentHistory>
              </PrivateRoute>
            ),
          },
          {
            path: "employee-list",
            element: (
              <PrivateRoute>
                <HrRoute>
                  <EmployeeList></EmployeeList>
                </HrRoute>
              </PrivateRoute>
            ),
          },

          {
            path: "user-details/:email",
            element: (
              <PrivateRoute>
                <HrRoute>
                  <EmployeeDetails></EmployeeDetails>
                </HrRoute>
              </PrivateRoute>
            ),
          },

          {
            path: "progress",
            element: (
              <PrivateRoute>
                <HrRoute>
                  <Progress></Progress>
                </HrRoute>
              </PrivateRoute>
            ),
          },
          {
            path: "all-employee-list",
            element: (
              <PrivateRoute>
                <AdminRoute>
                  <AllEmployeeList></AllEmployeeList>
                </AdminRoute>
              </PrivateRoute>
            ),
          },
          {
            path: "message",
            element: (
              <PrivateRoute>
                <AdminRoute>
                  <Message></Message>
                </AdminRoute>
              </PrivateRoute>
            ),
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
