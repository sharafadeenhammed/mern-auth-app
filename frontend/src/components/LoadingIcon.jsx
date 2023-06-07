import image from "../assets/spinner.gif";
import { Container } from "react-bootstrap";

function LoadingIcon({ size }) {
  const style = {
    large: {
      height: "100px",
      width: "100px",
    },
    medium: {
      height: "50px",
      width: "50px",
    },
    small: {
      height: "20px",
      width: "20px",
    },
    thumbnail: {
      height: "10px",
      width: "10px",
    },
  };
  return (
    <Container style={style[size || small]}>
      <img src={image} alt="" />
    </Container>
  );
}

export default LoadingIcon;
