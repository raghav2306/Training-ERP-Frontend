import React from "react";
// import { GiCrossMark } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[600px]  bg-white p-2 rounded">
        <div className=" p-2">
          <div className="flex justify-end">
            <RxCross2 onClick={() => onClose()} className="cursor-pointer t" />
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
