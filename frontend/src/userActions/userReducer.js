const userReducer = (state, action) => {
  const key = "login";
  switch (key) {
    case "login":
      console.log(state, "login user...");
      return { ...state };
      break;

    default:
      return { ...state };
  }
};

export default userReducer;
