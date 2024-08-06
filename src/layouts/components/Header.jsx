import { useSelector } from "react-redux";

const Header = () => {
  const userData = useSelector((state) => state.user.userData);
  console.log(userData);
  return (
    <div className="bg-blue-500 w-full h-10">
      Welcome {userData?.name || userData.email}
    </div>
  );
};

export default Header;
