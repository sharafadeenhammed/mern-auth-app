import { createContext, useReducer } from "react";
import userReducer from "../userActions/userReducer";
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const userData =
    localStorage.getItem("userData") &&
    JSON.parse(localStorage.getItem("userData"));
  const [state, userDispatch] = useReducer(userReducer, { userData });
  return (
    <UserContext.Provider
      value={{
        user: state,
        userDispatch: userDispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
