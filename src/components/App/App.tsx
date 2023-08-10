import useLocalStorage from "use-local-storage";
import Logo from "../Logo";
import Menu from "../Menu";
import Tetris from "../Tetris";
import { useGameOver } from "../../hooks/useGameOver";
import "./App.css";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light",
  );

  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const startGame = () => resetGameOver();

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <main className="app__main">
        {gameOver ? (
          <>
            <p className="app__tagline app__tagline_top">Where Blocks Unite</p>
            <Logo />
            <p className="app__tagline app__tagline_bottom">Fun Takes Flight</p>
            <Menu onClick={startGame} theme={theme} switchTheme={switchTheme} />
          </>
        ) : (
          <Tetris rows={20} columns={10} setGameOver={setGameOver} />
        )}
      </main>
    </div>
  );
}

export default App;
