import { useEffect, useState, useContext } from "react";
import UsePrivateApi from "../../hooks/UsePrivateApi";
import { ClipLoader } from "react-spinners";
import UseAlert from "../../hooks/UseAlert";
import TeamCtx from "../../contexts/TeamContext";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import CreateRole from "./CreateRole";
import ConfirmBox from "../../custom/components/ConfirmBox";

const RoleList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState({
    type: "",
    msg: "",
    show: false,
  });

  const { data, loading, error, get } = UsePrivateApi();
  const {
    data: delData,
    loading: delLoading,
    error: delError,
    del,
  } = UsePrivateApi();
  const teamCtx = useContext(TeamCtx);
  const [showModal, setShowModal] = useState(false);
  const [roleEditId, setRoleEditId] = useState("");
  const [showConfirmBox, setShowConfirmBox] = useState(false);

  //for handling get api side-effects
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
        msg: error,
        show: true,
      });
    }
  }, [data, loading, error]);

  //for handling delete api side-effects
  useEffect(() => {
    if (delData) {
      setIsLoading(false);
      const updatedRoles = teamCtx.roles.filter(
        (item) => item._id !== roleEditId
      );
      teamCtx.addRoleHandler(updatedRoles);
    }
    if (delLoading) {
      setIsLoading(true);
    }
    if (delError) {
      setIsLoading(false);
      setShowAlert({
        type: "error",
        msg: delError,
        show: true,
      });
    }
  }, [delData, delLoading, delError]);

  useEffect(() => {
    get("/api/role/get-roles");
  }, []);

  const handleDeleteConfirmation = (arg) => {
    if (arg) {
      del(`/api/role/delete-role/${roleEditId}`);
    }
    setShowConfirmBox(false);
  };

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
              <tr className="even:bg-blue-100" key={role._id}>
                <td className="text-center  py-2 ">{role.name}</td>
                <td>
                  <button
                    className="flex justify-center items-center gap-5 "
                    disabled={role.name === "admin"}
                  >
                    <FaUserEdit
                      className={`text-2xl cursor-pointer ${
                        role.name === "admin"
                          ? "text-gray-600"
                          : "text-green-600"
                      }`}
                      onClick={() => {
                        setShowModal(true), setRoleEditId(role._id);
                      }}
                    />
                    <RiDeleteBin5Line
                      className={`text-2xl cursor-pointer ${
                        role.name === "admin" ? "text-gray-600" : "text-red-500"
                      }`}
                      onClick={() => {
                        setShowConfirmBox(true), setRoleEditId(role._id);
                      }}
                    />
                  </button>
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
      {showModal && (
        <CreateRole
          showModal={showModal}
          setShowModal={setShowModal}
          roleEditId={roleEditId}
        />
      )}
      {showConfirmBox && (
        <ConfirmBox handleDeleteConfirmation={handleDeleteConfirmation} />
      )}
    </>
  );
};

export default RoleList;
