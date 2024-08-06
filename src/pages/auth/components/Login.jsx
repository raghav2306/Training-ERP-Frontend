import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../store/slices/authslice";
import { setUser } from "../../../store/slices/userSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputChangeHandler = (name, value) => {
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!loginData?.email || !loginData?.password) {
      return setIsError("Please fill all the fields.");
    }

    try {
      setIsLoading(true);
      const response = await login(loginData);
      console.log(response);
      dispatch(setLogin({ accessToken: response.data.accessToken }));
      dispatch(setUser({ user: response.data.user }));
      navigate("/");
    } catch (err) {
      setIsError(err?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && (
        <Alert variant="filled" severity="error">
          {isError}
        </Alert>
      )}
      <div className="w-full h-full flex items-center justify-center bg-blue-100">
        <div className="w-[800px] h-[480px] bg-white rounded-lg flex item-center">
          <div className="w-2/4 h-full  p-4 ">
            <img
              className="w-full h-full rounded-lg"
              src="../../../../public/login.jpg"
              alt="login Image "
              loading="lazy"
            />
          </div>
          <div className="w-2/4 h-full p-4">
            <h1 className="text-center mt-5 text-2xl font-bold">Login</h1>
            <form onSubmit={submitHandler}>
              <div className="flex flex-col">
                <label className="font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  className="border border-gray outline-none rounded px-2  p-1 mt-2 "
                  id="email"
                  name="email"
                  onChange={(e) => inputChangeHandler("email", e.target.value)}
                />
              </div>

              <div className="flex flex-col mt-5">
                <label className="font-semibold" htmlFor="password">
                  Password
                </label>
                <div className="border border-gray rounded flex items-center mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    className=" outline-none px-2  p-1 rounded w-11/12"
                    id="password"
                    name="password"
                    onChange={(e) =>
                      inputChangeHandler("password", e.target.value)
                    }
                  />

                  {showPassword ? (
                    <FaEye
                      className="cursor-pointer text-gray-500"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  ) : (
                    <FaEyeSlash
                      className="cursor-pointer text-gray-500"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  )}
                </div>
              </div>

              <Link to="#" className="flex justify-end mt-4 text-gray-400">
                forgot password?
              </Link>

              <button className="w-full  bg-blue-500 py-2 rounded text-white mt-6">
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
