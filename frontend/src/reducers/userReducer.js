import {
  clearUserDataFromLocalStorage,
  setLocalStorage,
} from "../actions/userActions";
const userReducer = (state, action) => {
  switch (action.type) {
    case "setLocalStorage":
      setLocalStorage(action.payload);
      return { ...state, userData: action.payload };
      break;
    case "logout":
      clearUserDataFromLocalStorage();
      return {};
      break;

    default:
      return { ...state };
  }
};

export default userReducer;
