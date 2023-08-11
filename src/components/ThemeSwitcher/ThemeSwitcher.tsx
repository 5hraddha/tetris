import { Sun, Moon } from "lucide-react";
import "./ThemeSwitcher.css";

type ThemeSwitcherProps = {
  size: "small" | "large";
  theme: string;
  switchTheme: () => void;
};

function ThemeSwitcher({ size, theme, switchTheme }: ThemeSwitcherProps) {
  return (
    <button
      className={`theme-switcher ${size === "small" && "theme-switcher_small"}`}
      type="button"
      onClick={switchTheme}
    >
      {theme === "light" ? (
        <Moon
          className={`theme-switcher-icon ${
            size === "small" && "theme-switcher-icon_small"
          }`}
        />
      ) : (
        <Sun
          className={`theme-switcher-icon ${
            size === "small" && "theme-switcher-icon_small"
          }`}
        />
      )}
    </button>
  );
}

export default ThemeSwitcher;
