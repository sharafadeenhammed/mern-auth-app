const setLocalStorage = async (data) => {
  localStorage.setItem("userData", JSON.stringify(data));
};

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("userData"));
};

const clearUserDataFromLocalStorage = () => {
  localStorage.removeItem("userData");
};

export {
  setLocalStorage,
  getUserFromLocalStorage,
  clearUserDataFromLocalStorage,
};
