import { Sun, Moon } from "lucide-react";
import "./ThemeSwitcher.css";

type ThemeSwitcherProps = {
  theme: string;
  switchTheme: () => void;
};

function ThemeSwitcher({ theme, switchTheme }: ThemeSwitcherProps) {
  return (
    <button className="theme-switcher" type="button" onClick={switchTheme}>
      {theme === "light" ? (
        <Moon className="theme-switcher-icon" />
      ) : (
        <Sun className="theme-switcher-icon" />
      )}
    </button>
  );
}

export default ThemeSwitcher;
