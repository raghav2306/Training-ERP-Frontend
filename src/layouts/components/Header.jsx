import { useSelector } from "react-redux";

const Header = () => {
  const userData = useSelector((state) => state.user.userData);

  return (
    <div className="bg-white w-full h-[10%]  border border-b-2">
      Welcome {userData?.name || userData.email}
    </div>
  );
};

export default Header;
