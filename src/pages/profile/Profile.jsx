import { useState } from "react";
import UploadPhoto from "./UploadPhoto";

const Profile = () => {
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(userData);

    //API call...
  };

  const getImageHandler = (img) => {
    setUserData({ dp: img });
  };

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={submitHandler}>
        <UploadPhoto onGetImage={getImageHandler} />
        <button className="bg-green-500">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
