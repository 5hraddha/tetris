export const enum Action {
  Left = "Left",
  FastDrop = "FastDrop",
  Pause = "Pause",
  Quit = "Quit",
  Right = "Right",
  RotateClockwise = "RotateClockwise",
  RotateAnticlockwise = "RotateAnticlockwise",
  SlowDrop = "SlowDrop",
}

type KeyType = {
  [key: string]: `${Action}`;
};

export const Key: KeyType = {
  ArrowUp: Action.RotateClockwise,
  KeyX: Action.RotateClockwise,
  ControlLeft: Action.RotateAnticlockwise,
  ControlRight: Action.RotateAnticlockwise,
  KeyZ: Action.RotateAnticlockwise,
  ArrowDown: Action.SlowDrop,
  ArrowLeft: Action.Left,
  ArrowRight: Action.Right,
  KeyQ: Action.Quit,
  KeyP: Action.Pause,
  Space: Action.FastDrop,
};

export const getActionForKey = (keyCode: string) => Key[keyCode];
