import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

const UsePersistLogin = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  console.log(isAuth);

  if (isAuth) return <Outlet />;
  else return <Navigate to="/login" />;
};

export default UsePersistLogin;
