import FormContainer from "../components/FormContainer";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";
import UserContext from "../context/UserContext";
import LoadingIcon from "../components/LoadingIcon";
import { Form, Button, Row, Col } from "react-bootstrap";
const LoginScreen = () => {
  const {
    userDispatchReducer,
    userData: { userData },
  } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (userData) {
      navigate("/");
    }
  }, [userData]);
  const submitHandeler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const req = await fetch(`${import.meta.env.VITE_BASE_URL}/auth`, {
        method: "POST",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await req.json();
      if (json.message === "success") {
        toast.success(`welcome ${json.user.name}`);
        userDispatchReducer("setLocalStorage", json.user);
        navigate("/");
      } else {
        toast.error(`${json.message}`);
        setIsLoading(false);
      }
    } catch (err) {
      toast.error(`Can't log you in`);
      setIsLoading(false);
    }
  };
  return (
    (isLoading && <LoadingIcon size="medium" position="center" />) || (
      <FormContainer>
        <h1>Sign In</h1>
        <Form onSubmit={submitHandeler}>
          <Form.Group className="my-2" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
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
          <Button type="submit" variant="primary" className="mt-3">
            Sign In
          </Button>
          <Row className="py-3">
            <Col>
              New Customer? &nbsp;
              <Link to="/register">Register</Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    )
  );
};

export default LoginScreen;
