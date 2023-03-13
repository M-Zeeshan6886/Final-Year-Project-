import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

function ProtectedRoute() {
  const isLoggedIn = localStorage.getItem("userToken");
  return isLoggedIn ? <Navigate to="/home" replace /> : <Outlet />;
}

ProtectedRoute.propTypes = {
  allowedRole: PropTypes.string,
};

export default ProtectedRoute;
