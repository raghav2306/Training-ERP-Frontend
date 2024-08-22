import { createContext, useState } from "react";

const TeamCtx = createContext({
  roles: [],
});

export const TeamCtxProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);

  const addRoleHandler = (newRoles) => {
    if (newRoles?.length > 0) {
      setRoles(newRoles);
    } else {
      setRoles((prevState) => [...prevState, newRoles]);
    }
  };

  return (
    <TeamCtx.Provider value={{ roles, addRoleHandler }}>
      {children}
    </TeamCtx.Provider>
  );
};

export default TeamCtx;
