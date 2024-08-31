import React, { useState, useEffect, useContext } from "react";
import { BsBuildingFillAdd } from "react-icons/bs";
import CreateDepartment from "./CreateDepartment";
import UsePrivateApi from "../../hooks/UsePrivateApi";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import TeamCtx from "../../contexts/TeamContext";

const Department = () => {
  const [deptId, setDeptId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { data, loading, error, get } = UsePrivateApi();
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState({
    type: "",
    msg: "",
    show: false,
  });
  const teamCtx = useContext(TeamCtx);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
      teamCtx.addDeptHandler(data.data);
    }
    if (loading) {
      setIsLoading(true);
    }
    if (error) {
      setIsLoading(false);
      setShowAlert({
        type: "error",
        msg: error,
        show: true,
      });
    }
  }, [data, loading, error]);

  useEffect(() => {
    get("/api/dept/get-depts");
  }, []);

  return (
    <>
      <div className="flex justify-end px-4 py-4 ">
        <button
          className="border border-green-600 text-green-600
         hover:bg-green-600 hover:text-white rounded px-2 py-1 flex items-center gap-2 ease-in duration-200 "
          onClick={() => setShowModal(true)}
        >
          <BsBuildingFillAdd />
          Create Department
        </button>
      </div>
      <table className="w-[80%] m-auto mt-5 ">
        <thead className="  bg-black text-white">
          <tr>
            <th className=" py-2">Name</th>
            <th className=" py-2">Manager</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teamCtx.depts.length > 0 &&
            teamCtx.depts.map((item) => {
              return (
                <tr className="even:bg-blue-100" key={item._id}>
                  <td className="text-center  py-2 ">{item.name}</td>
                  <td className="text-center  py-2 ">
                    {item?.managerId?.name || item?.managerId?.email}
                  </td>
                  <td>
                    <button
                      className="flex justify-center items-center gap-5 "
                      disabled={item.name === "Management"}
                    >
                      <FaUserEdit
                        className={`text-2xl cursor-pointer ${
                          item.name === "Management"
                            ? "text-gray-600"
                            : "text-green-600"
                        }`}
                        onClick={() => {
                          setDeptId(item._id), setShowModal(true);
                        }}
                      />
                      <RiDeleteBin5Line
                        className={`text-2xl cursor-pointer ${
                          item.name === "Management"
                            ? "text-gray-600"
                            : "text-red-500"
                        }`}
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {showModal && (
        <CreateDepartment
          showModal={showModal}
          setShowModal={setShowModal}
          deptId={deptId}
        />
      )}
    </>
  );
};

export default Department;
