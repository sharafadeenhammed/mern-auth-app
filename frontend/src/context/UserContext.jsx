import { createContext, useReducer } from "react";
import userReducer from "../userActions/userReducer";
import { getUserFromLocalStorage } from "../userActions/userActions";
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const userData = getUserFromLocalStorage();
  const [state, userDispatch] = useReducer(userReducer, { userData });
  const userDispatchReducer = (type, payload) => {
    userDispatch({
      type: type,
      payload: payload,
    });
  };
  return (
    <UserContext.Provider
      value={{
        userData: state,
        userDispatchReducer,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
