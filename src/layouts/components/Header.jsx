import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const userData = useSelector((state) => state.user.userData);

  return (
    <div className="bg-white w-full h-[10%]  border border-b-2 flex justify-between items-center p-5">
      Welcome {userData?.name || userData.email}
      <Link to="/profile">
        <FaUserCircle className="text-xl cursor-pointer" />
      </Link>
    </div>
  );
};

export default Header;
