import FormContainer from "../components/FormContainer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandeler = (e) => {
    e.preventDefault();
    console.log("\n", email, password);
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
            onChange={(e) => setEmail(e.target.value)}
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
