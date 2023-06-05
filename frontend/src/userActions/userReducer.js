import { setLocalStorage } from "./userActions";
const userReducer = (state, action) => {
  const key = "login";
  switch (action.type) {
    case "setLocalStorage":
      setLocalStorage(action.payload);
      return { ...state };
      break;

    default:
      return { ...state };
  }
};

export default userReducer;
