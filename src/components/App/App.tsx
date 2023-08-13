import useLocalStorage from "use-local-storage";
import Logo from "../Logo";
import Menu from "../Menu";
import Tetris from "../Tetris";
import { useGameOver } from "../../hooks/useGameOver";
import "./App.css";
import ThemeSwitcher from "../ThemeSwitcher";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const startGame = () => resetGameOver();

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      {gameOver ? (
        <main className="app__welcome">
          <p className="app__tagline app__tagline_top">Where Blocks Unite</p>
          <Logo size="large" />
          <p className="app__tagline app__tagline_bottom">Fun Takes Flight</p>
          <Menu onClick={startGame} theme={theme} switchTheme={switchTheme} />
        </main>
      ) : (
        <main className="app__main">
          <header className="app__header">
            <Logo size="small" />
            <ThemeSwitcher
              size="small"
              theme={theme}
              switchTheme={switchTheme}
            />
          </header>
          <Tetris
            rows={20}
            columns={10}
            setGameOver={setGameOver}
            gameOver={gameOver}
          />
        </main>
      )}
    </div>
  );
}

export default App;
