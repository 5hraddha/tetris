import { ArrowRight } from "lucide-react";
import ThemeSwitcher from "../ThemeSwitcher";
import "./Menu.css";

type MenuProps = {
  onClick: () => void;
  theme: string;
  switchTheme: () => void;
};

function Menu({ onClick, theme, switchTheme }: MenuProps) {
  return (
    <div className="menu">
      <ThemeSwitcher theme={theme} switchTheme={switchTheme} />
      <button type="button" className="menu__button" onClick={onClick}>
        <ArrowRight className="menu__button-icon" />
      </button>
    </div>
  );
}

export default Menu;
