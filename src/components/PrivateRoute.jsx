import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Session } from "../App";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { username } = useContext(Session);
  if (!username) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
