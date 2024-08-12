import { useEffect, useState } from "react";
import Modal from "../../custom/components/Modal";
import UsePrivateApi from "../../hooks/UsePrivateApi";
import { ClipLoader } from "react-spinners";
import UseAlert from "../../hooks/UseAlert";

const CreateRole = ({ showModal, setShowModal }) => {
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { data, loading, error, post } = UsePrivateApi();
  const [showAlert, setShowAlert] = useState({
    type: "",
    msg: "",
    show: false,
  });

  useEffect(() => {
    if (data) {
      setIsLoading(false);
      //   console.log(data);
      setShowAlert({
        type: "success",
        msg: data?.message,
        show: true,
      });
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    }
    if (loading) {
      setIsLoading(true);
    }
    if (error) {
      setIsLoading(false);
      setIsError(error);
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

    post("/api/role/create-role", { name: role });
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
          />
          <button className="border border-blue-500 px-2 py-1 rounded text-blue-500 hover:bg-blue-600 hover:text-white ease duration-300 mt-4">
            {!isLoading ? (
              "Submit"
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
