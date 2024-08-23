import Modal from "./Modal";

const ConfirmBox = ({ handleDeleteConfirmation }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-red-500">
      <div>Are you Sure?</div>
      <div>
        <button onClick={() => handleDeleteConfirmation(true)}>Yes</button>
        <button onClick={() => handleDeleteConfirmation(false)}>No</button>
      </div>
    </div>
  );
};

export default ConfirmBox;
