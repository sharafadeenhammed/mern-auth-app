import image from "../assets/spinner.gif";
import { Container } from "react-bootstrap";

function LoadingIcon({ size, position }) {
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
    center: {
      position: "fixed",
      top: "50%",
      left: "50%",
    },
  };
  return (
    <Container
      style={position && style[position]}
      className={position ? "" : "mx-auto py-5"}
    >
      <img style={style[size || small]} src={image} alt="" />
    </Container>
  );
}

export default LoadingIcon;
