import TetrisLogo from "../../assets/images/tetris-official-logo.png";
import "./Logo.css";

function Logo() {
  return (
    <img
      className="logo"
      src={TetrisLogo}
      alt="logo having text spelling the word tetris"
    />
  );
}

export default Logo;
