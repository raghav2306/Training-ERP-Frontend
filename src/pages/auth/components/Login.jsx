import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const passwordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  const changeHandler = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (email.value === "") {
      console.log("please enter your email");
    } else if (password.value === "") {
      console.log("please enter your password");
    } else {
      console.log(formData);
    }
  };

  return (
    <>
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
            <p className="text-center text-sm mt-2">
              Please enter your details.
            </p>

            <form onSubmit={submitHandler}>
              <div className="flex flex-col">
                <label className="font-semibold" htmlFor="email">
                  *Email
                </label>
                <input
                  type="text"
                  onChange={changeHandler}
                  className="border border-gray outline-none rounded px-2  p-1 mt-2 "
                  id="email"
                  name="email"
                  value={formData.email}
                />
              </div>

              <div className="flex flex-col mt-5">
                <label className="font-semibold" htmlFor="password">
                  *Password
                </label>
                <div className="border border-gray rounded flex items-center mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    onChange={changeHandler}
                    className=" outline-none px-2  p-1 rounded w-11/12"
                    id="password"
                    name="password"
                    value={formData.password}
                  />

                  {showPassword ? (
                    <FaEye
                      className="cursor-pointer text-gray-500"
                      onClick={passwordHandler}
                    />
                  ) : (
                    <FaEyeSlash
                      className="cursor-pointer text-gray-500"
                      onClick={passwordHandler}
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
