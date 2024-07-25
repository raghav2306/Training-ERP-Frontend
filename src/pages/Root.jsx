import { Outlet } from "react-router-dom";
import Header from "../layouts/components/Header";
import SideMenu from "../layouts/components/SideMenu";
import Main from "../layouts/components/Main";

const Root = () => {
  return (
    <>
      <Header />
      <div className="flex h-[90%]">
        <SideMenu />
        <Main>
          <Outlet />
        </Main>
      </div>
    </>
  );
};

export default Root;
