const setLocalStorage = async (data) => {
  localStorage.setItem("userData", JSON.stringify(data));
};

export { setLocalStorage };
