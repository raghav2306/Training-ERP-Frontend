import { Outlet } from "react-router-dom";
import TeamHeader from "./TeamHeader";

const Index = () => {
  return (
    <div >
      <TeamHeader />
      <Outlet />
    </div>
  );
};

export default Index;
