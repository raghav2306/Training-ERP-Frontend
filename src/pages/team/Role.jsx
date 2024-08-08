import React, { useState } from "react";
import RoleForm from "./RoleForm";

const Role = () => {
  const [showRoleForm, setShowRoleForm] = useState(false);

  const roleFormHandler = () => {
    setShowRoleForm((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={roleFormHandler}>Add Role</button>
      {showRoleForm && <RoleForm />}
    </>
  );
};

export default Role;
