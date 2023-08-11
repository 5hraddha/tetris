import TetrisLogo from "../../assets/images/tetris-official-logo.png";
import "./Logo.css";

type LogoProps = {
  size: "small" | "large";
};

function Logo({ size }: LogoProps) {
  const sizeClassName = size === "small" ? "logo_small" : "";
  return (
    <img
      className={`logo ${sizeClassName}`}
      src={TetrisLogo}
      alt="logo having text spelling the word tetris"
    />
  );
}

export default Logo;
