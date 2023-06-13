import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const {
    userDispatchReducer,
    userData: { userData },
  } = useContext(UserContext);
  return <div>Profile</div>;
};

export default Profile;
