import React, { useState } from "react";

const RoleList = () => {
  const [roles, setRoles] = useState([]);

  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Actions</th>
      </thead>
      <tbody>
        {roles.length > 0 && roles.map((role) => <td>{role.name}</td>)}
      </tbody>
    </table>
  );
};

export default RoleList;
