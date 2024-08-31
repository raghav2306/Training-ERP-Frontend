import { createContext, useState } from "react";

const TeamCtx = createContext({
  roles: [],
  depts: [],
});

export const TeamCtxProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);
  const [depts, setDepts] = useState([]);

  const addRoleHandler = (newRoles) => {
    if (newRoles?.length > 0) {
      setRoles(newRoles);
    } else {
      setRoles((prevState) => [...prevState, newRoles]);
    }
  };

  const addDeptHandler = (newDepts) => {
    if (newDepts?.length > 0) {
      setDepts(newDepts);
    } else {
      setDepts((prevState) => [...prevState, newDepts]);
    }
  };

  return (
    <TeamCtx.Provider value={{ roles, addRoleHandler, depts, addDeptHandler }}>
      {children}
    </TeamCtx.Provider>
  );
};

export default TeamCtx;
