import { useContext } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Badge,
  Dropdown,
} from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import UserContext from "../context/UserContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const {
    userDispatchReducer,
    userData: { userData },
  } = useContext(UserContext);

  const logout = async () => {
    try {
      const req = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      if (!req.ok) throw "error";
      const json = await req.json();
      userDispatchReducer("logout", {});
      toast.success("logged out succesful");
      navigate("/");
    } catch (error) {
      toast.error("error logging you out!");
    }
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand> MERN Auth</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {(userData && (
                <NavDropdown title={userData.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  {/* <LinkContainer to="/logout"> */}
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                  {/* </LinkContainer> */}
                </NavDropdown>
              )) || (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <FaSignInAlt /> Sign In
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>
                      <FaSignOutAlt /> Sign Up
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
