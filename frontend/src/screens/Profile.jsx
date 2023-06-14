import FormContainer from "../components/FormContainer";
import { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import LoadingIcon from "../components/LoadingIcon";
import UserContext from "../context/UserContext";
import { useNavigate, Navigate } from "react-router-dom";
const Profile = () => {
  const {
    userDispatchReducer,
    userData: { userData },
  } = useContext(UserContext);
  const navigate = useNavigate();
  console.log(userData);
  if (!userData) {
    return <Navigate to="/" />;
  }
  const [name, setName] = useState(userData.name || "");
  const [isloading, setIsLoading] = useState(false);
  const [email, setEmail] = useState(userData.email || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPAssword] = useState("");
  const submitHandeler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (password != null && password !== confirmPassword)
        throw new Error("password does not match !");
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/profile`, {
        method: "put",
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
      console.log(data);
      userDispatchReducer("setLocalStorage", data.updatedData);
      toast.success(`profile updated sucesfully.`);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    setIsLoading(false);
  };
  return (
    (isloading && <LoadingIcon size="medium" position="center" />) || (
      <FormContainer>
        <h3>Profile</h3>
        <Form autoComplete="off" onSubmit={submitHandeler}>
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
              autoComplete="new-password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="py-2" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              autoComplete="off"
              value={confirmPassword}
              type="password"
              placeholder="Re-enter Password"
              onChange={(e) => {
                setConfirmPAssword(e.target.value);
              }}
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="mt-3">
            Update
          </Button>
        </Form>
      </FormContainer>
    )
  );
};

export default Profile;
