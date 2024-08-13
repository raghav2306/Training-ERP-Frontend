import React, { useContext, useEffect, useState } from "react";
import UsePrivateApi from "../../hooks/UsePrivateApi";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ClipLoader } from "react-spinners";
import UseAlert from "../../hooks/UseAlert";
import TeamCtx from "../../contexts/TeamContext";

const RoleList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState({
    type: "",
    msg: "",
    show: false,
  });

  const { data, loading, error, get } = UsePrivateApi();
  const teamCtx = useContext(TeamCtx);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
      teamCtx.addRoleHandler(data?.data);
    }
    if (loading) {
      setIsLoading(true);
    }
    if (error) {
      setIsLoading(false);
      setShowAlert({
        type: "error",
        msg: "error",
        show: true,
      });
    }
  }, [data, loading, error]);

  useEffect(() => {
    if (teamCtx.roles.length === 0) get("/api/role/get-roles");
  }, []);
  return (
    <>
      <table className="w-[80%] m-auto mt-5 ">
        <thead className="  bg-black text-white">
          <tr>
            <th className=" py-2">Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teamCtx.roles.length > 0 &&
            teamCtx.roles.map((role) => (
              <tr className="even:bg-blue-100">
                <td className="text-center  py-2 ">{role.name}</td>
                <td>
                  <div className="flex justify-center items-center gap-5 ">
                    <FaUserEdit className="text-2xl cursor-pointer text-green-600 hover:text-green-700 ease-in duration-200" />
                    <RiDeleteBin5Line className="text-2xl cursor-pointer text-red-500 hover:text-red-600 ease-in duration-200" />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {isLoading && (
        <div className="flex justify-center">
          <ClipLoader size={40} color="#333" />
        </div>
      )}

      {showAlert.show && (
        <UseAlert showAlert={showAlert} setShowAlert={setShowAlert} />
      )}
    </>
  );
};

export default RoleList;
