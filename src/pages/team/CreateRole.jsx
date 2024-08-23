import { useContext, useEffect, useState } from "react";
import Modal from "../../custom/components/Modal";
import UsePrivateApi from "../../hooks/UsePrivateApi";
import { ClipLoader } from "react-spinners";
import UseAlert from "../../hooks/UseAlert";
import TeamCtx from "../../contexts/TeamContext";

const CreateRole = ({ showModal, setShowModal, roleEditId }) => {
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { data, loading, error, post } = UsePrivateApi();
  const {
    data: patchData,
    loading: patchLoading,
    error: patchError,
    patch,
  } = UsePrivateApi();
  const [showAlert, setShowAlert] = useState({
    type: "",
    msg: "",
    show: false,
  });

  const teamCtx = useContext(TeamCtx);

  //for updation
  useEffect(() => {
    if (roleEditId) {
      setRole(teamCtx.roles.find((item) => item._id === roleEditId).name);
    }
  }, [roleEditId]);

  // for handling updation api side-effect
  useEffect(() => {
    if (patchData) {
      setIsLoading(false);
      setShowAlert({
        type: "success",
        msg: patchData?.message,
        show: true,
      });
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
      const updatedRoles = teamCtx.roles.map((item) => {
        if (item._id === roleEditId) {
          return { ...item, name: role };
        }
        return item;
      });
      teamCtx.addRoleHandler(updatedRoles);
    }
    if (patchLoading) {
      setIsLoading(true);
    }
    if (patchError) {
      setIsLoading(false);
      setShowAlert({
        type: "error",
        msg: patchError,
        show: true,
      });
    }
  }, [patchData, patchLoading, patchError]);

  //for handling create api side-effect
  useEffect(() => {
    if (data) {
      setIsLoading(false);
      setShowAlert({
        type: "success",
        msg: data?.message,
        show: true,
      });
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
      teamCtx.addRoleHandler(data?.role);
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

  const submitHandler = (e) => {
    e.preventDefault();

    if (!role) {
      setShowAlert({
        type: "error",
        msg: "Please enter name for the role.",
        show: true,
      });
      return;
    }

    if (!roleEditId) {
      post("/api/role/create-role", { name: role });
    } else {
      patch(`/api/role/edit-role/${roleEditId}`, { name: role });
    }
  };

  return (
    <>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <form className="flex flex-col gap-2" onSubmit={submitHandler}>
          <label htmlFor="role">Role/Designation Name</label>
          <input
            id="role"
            type="text"
            placeholder="Enter name"
            className="border bg-blue-100 rounded px-2 py-1 outline-none"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          />
          <button className="border border-blue-500 px-2 py-1 rounded text-blue-500 hover:bg-blue-600 hover:text-white ease duration-300 mt-4">
            {!isLoading ? (
              roleEditId ? (
                "Update Role"
              ) : (
                "Create Role"
              )
            ) : (
              <div className="grid place-content-center">
                <ClipLoader size={30} color="#fff" />
              </div>
            )}
          </button>
        </form>
      </Modal>
      {showAlert.show && (
        <UseAlert showAlert={showAlert} setShowAlert={setShowAlert} />
      )}
    </>
  );
};

export default CreateRole;
