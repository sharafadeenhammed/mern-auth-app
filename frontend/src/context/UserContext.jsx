import { createContext, useReducer } from "react";
import userReducer from "../userActions/userReducer";
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const userData =
    localStorage.getItem("userData") &&
    JSON.parse(localStorage.getItem("userData"));
  const [state, userDispatch] = useReducer(userReducer, { userData });
  const setUserDispatcher = (type, payload) => {
    userDispatch({
      type: type,
      payload: payload,
    });
  };
  return (
    <UserContext.Provider
      value={{
        user: state,
        setUserDispatcher: setUserDispatcher,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
