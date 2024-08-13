import { Outlet } from "react-router-dom";
import TeamHeader from "./TeamHeader";
import { TeamCtxProvider } from "../../contexts/TeamContext";

const Index = () => {
  return (
    <div className="">
      <TeamHeader />
      <TeamCtxProvider>
        <Outlet />
      </TeamCtxProvider>
    </div>
  );
};

export default Index;
