import "./Menu.css";

type MenuProps = {
  onClick: () => void;
};

function Menu({ onClick }: MenuProps) {
  return (
    <div className="menu">
      <button type="button" className="menu__button" onClick={onClick}>
        Play Tetris
      </button>
    </div>
  );
}

export default Menu;
