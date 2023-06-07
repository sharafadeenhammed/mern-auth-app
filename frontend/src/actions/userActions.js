const setLocalStorage = async (data) => {
  localStorage.setItem("userData", JSON.stringify(data));
};

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("userData"));
};

export { setLocalStorage, getUserFromLocalStorage };
