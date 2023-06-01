import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
