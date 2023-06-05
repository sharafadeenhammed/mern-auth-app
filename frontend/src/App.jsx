import React, { useReducer } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { UserContextProvider } from "./context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      {/* <UserContextProvider> */}
      <Header />
      <Container>
        <Outlet />
        <ToastContainer />
      </Container>
      {/* </UserContextProvider> */}
    </>
  );
}

export default App;
