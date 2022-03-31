import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
  //   const userName = useSelector((state) => state.user.user.user.name);
  const userName = localStorage.getItem("name");
  const location = useLocation();
  var text = "";

  if (userName) {
    text = userName.toLowerCase();
  }
  const check = allowedRoles.toLowerCase();

  return !userName ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : text.includes(check) ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  );
};

export default RequireAuth;
