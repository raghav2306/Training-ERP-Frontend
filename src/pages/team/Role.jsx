import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
import Modal from "../auth/components/Modal";

const Role = () => {
  const [showModal, setShowModal] = useState();

  return (
    <>
      <div className="flex justify-end px-4 py-4 ">
        <button
          className="border border-green-600 text-green-600
         hover:bg-green-600 hover:text-white rounded px-2 py-1 flex items-center gap-2 ease-in duration-200 "
          onClick={() => setShowModal(true)}
        >
          <FaUserPlus />
          Create Role
        </button>

        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <form className="flex flex-col gap-2">
            <label htmlFor="role">Role Name</label>
            <input
              id="role"
              type="text"
              placeholder="Enter your role here..."
              className="border bg-blue-100 rounded px-2 py-1 outline-none"
            />
            <button className="border border-blue-500 px-2 py-1 rounded text-blue-500 hover:bg-blue-600 hover:text-white ease duration-300 mt-4">
              Submit
            </button>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default Role;
