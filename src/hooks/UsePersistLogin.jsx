import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { fetchNewAccessToken } from "../pages/auth/api/auth";
import { setLogin } from "../store/slices/authslice";
import { setUser } from "../store/slices/userslice";

const UsePersistLogin = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getNewAT = async () => {
      try {
        const response = await fetchNewAccessToken();
        // console.log(response);
        dispatch(setLogin({ accessToken: response.data.accessToken }));
        dispatch(setUser({ user: response.data.user }));
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (!isAuth) {
<<<<<<< HEAD
      getNewAT();
=======
      getNewAt();
>>>>>>> a19380cd30f1b33d6993f0914c087ad39f8da3cc
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isError) {
    return <Navigate to="/login" />;
  }
<<<<<<< HEAD

  return <>{isLoading ? <div>Loading...</div> : <Outlet />}</>;
=======
  return <> {isLoading ? <div>Loading...</div> : <Outlet />}</>;
>>>>>>> a19380cd30f1b33d6993f0914c087ad39f8da3cc
};

export default UsePersistLogin;
