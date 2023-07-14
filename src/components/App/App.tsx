import useLocalStorage from "use-local-storage";
import "./App.css";
import Game from "../Game";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light",
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <div className="app__container">
        <button type="button" onClick={switchTheme}>
          Switch to {theme === "light" ? "dark" : "light"}
        </button>
        <h1>Tetris</h1>
        <Game rows={20} columns={10} />
      </div>
    </div>
  );
}

export default App;
