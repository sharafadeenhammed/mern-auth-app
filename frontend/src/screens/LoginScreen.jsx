import FormContainer from "../components/FormContainer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";
import UserContext from "../context/UserContext";
import { Form, Button, Row, Col } from "react-bootstrap";
const LoginScreen = () => {
  const { userDispatchReducer } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandeler = async (e) => {
    e.preventDefault();
    try {
      const req = await fetch(`${import.meta.env.VITE_BASE_URL}/auth`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await req.json();

      if (json.message === "success") {
        toast.success(`welcome ${json.user.name}`);
        userDispatchReducer("setLocalStorage", json.user);
      } else {
        toast.error(`${json.message}`);
      }
    } catch (err) {
      console.log(err);
      toast.error(`Can't log you in`);
    }
  };
  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandeler}>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value.trim())}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
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
  );
};

export default LoginScreen;
