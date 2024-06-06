import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";

const HrRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  if (isLoading) return <LoadingSpinner />;
  if (role === "HR") return children;
  return <Navigate to="/dashboard" />;
};

export default HrRoute;
