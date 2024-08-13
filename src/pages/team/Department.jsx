import React, { useState } from "react";
import { BsBuildingFillAdd } from "react-icons/bs";
import CreateRole from "./CreateRole";
import CreateDepartment from "./CreateDepartment";

const Department = () => {
  const [showModal, setShowModal] = useState(false);
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
      {showModal && (
        <CreateDepartment showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default Department;
