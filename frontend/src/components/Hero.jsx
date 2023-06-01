import { Card, Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center">
          <h1 className="text-center mb-4">MERN Autentication</h1>
          <p>
            This is a boilerplate for MERN autentiction that stores a JWT in an
            HTTP-only cookie, it also uses redux toolkit and the react Bootstrap
            library
          </p>
          <div className="d-flex">
            <LinkContainer to="/login">
              <Button variant="primary" className="me-3">
                Sign In
              </Button>
            </LinkContainer>
            <LinkContainer to="/register">
              <Button variant="secondary">Sign Up</Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
