export const enum Action {
  Left = "Left",
  FastDrop = "FastDrop",
  Pause = "Pause",
  Quit = "Quit",
  Right = "Right",
  Rotate = "Rotate",
  SlowDrop = "SlowDrop",
}

type KeyType = {
  [key: string]: `${Action}`;
};

export const Key: KeyType = {
  ArrowUp: Action.Rotate,
  ArrowDown: Action.SlowDrop,
  ArrowLeft: Action.Left,
  ArrowRight: Action.Right,
  KeyQ: Action.Quit,
  KeyP: Action.Pause,
  Space: Action.FastDrop,
};

export const getActionForKey = (keyCode: string) => Key[keyCode];