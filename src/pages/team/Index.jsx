import { Outlet } from "react-router-dom";
import TeamHeader from "./TeamHeader";

const Index = () => {
  return (
    <>
      <TeamHeader />
      <Outlet />
    </>
  );
};

export default Index;
