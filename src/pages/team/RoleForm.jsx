import { useState } from "react";
import CustomModal from "../../custom/components/CustomModal";
import UsePrivateApi from "../../hooks/UsePrivateApi";

const RoleForm = () => {
  const [name, setName] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { data, loading, error, post } = UsePrivateApi();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      return setIsError("Please enter the name for the role.");
    }
    post("/api/role/create-role", { name });
  };
  
  return (
    <>
      <CustomModal>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <button>Add Role</button>
        </form>
      </CustomModal>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{isError}</div>}
    </>
  );
};

export default RoleForm;
