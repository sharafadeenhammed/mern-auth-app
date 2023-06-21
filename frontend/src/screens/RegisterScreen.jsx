import FormContainer from "../components/FormContainer";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import LoadingIcon from "../components/LoadingIcon";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPAssword] = useState("");
  const { userDispatchReducer } = useContext(UserContext);
  const navigate = useNavigate();
  const submitHandeler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (password !== confirmPassword)
        throw new Error("password does not match !");
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/users`, {
        method: "post",
        credentials: "include",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw data;
      userDispatchReducer("setLocalStorage", data.user);
      navigate("/");
      toast.success(
        `congratulations ${data.user.name} your account is succesfully registered.`
      );
    } catch (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  };
  return (
    (isloading && <LoadingIcon size="medium" position="center" />) || (
      <FormContainer>
        <h1>Sign Up</h1>
        <Form onSubmit={submitHandeler}>
          <Form.Group className="my-2" controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              value={name}
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter Full Name"
            />
          </Form.Group>

          <Form.Group className="my-2" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-2" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="py-2" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              value={confirmPassword}
              type="password"
              placeholder="Re-enter Password"
              onChange={(e) => {
                setConfirmPAssword(e.target.value);
              }}
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="mt-3">
            Sign In
          </Button>

          <Row className="py-3">
            <Col>
              Already Have An Account? &nbsp;
              <Link to="/login">Login</Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    )
  );
};

export default RegisterScreen;
