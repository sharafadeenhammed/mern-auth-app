import { setLocalStorage } from "../actions/userActions";
const userReducer = (state, action) => {
  switch (action.type) {
    case "setLocalStorage":
      setLocalStorage(action.payload);
      return { ...state, userData: action.payload };
      break;

    default:
      return { ...state };
  }
};

export default userReducer;
