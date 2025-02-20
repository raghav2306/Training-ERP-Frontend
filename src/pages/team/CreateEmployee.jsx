import React, { useEffect, useState } from "react";
import Modal from "../../custom/components/Modal";
import UseAlert from "../../hooks/UseAlert";

const CreateEmployee = ({ showModal, setShowModal }) => {
  const [employee, setEmployee] = useState("");
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

    post("", { name: employee });
  };
  return (
    <div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <form className="flex flex-col gap-2" onSubmit={submitHandler}>
          <label htmlFor="employee">Employee Name</label>
          <input
            id="employee"
            type="text"
            placeholder="Enter name"
            className="border bg-blue-100 rounded px-2 py-1 outline-none"
            onChange={(e) => setEmployee(e.target.value)}
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
    </div>
  );
};

export default CreateEmployee;
