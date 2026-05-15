export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Ball {
  position: Position;
  velocity: Position;
  radius: number;
  speed: number;
}

export interface Paddle {
  position: Position;
  width: number;
  height: number;
  speed: number;
}

export interface Brick {
  id: string;
  position: Position;
  size: Size;
  color: string;
  points: number;
  hit: boolean;
}

export type Screen =
  | "menu"
  | "playing"
  | "paused"
  | "gameover"
  | "controls"
  | "highscores"
  | "settings";

export interface GameState {
  screen: Screen;
  score: number;
  lives: number;
  level: number;
  highScore: number;
  ball: Ball;
  paddle: Paddle;
  bricks: Brick[];
  gameArea: Size;
  isRunning: boolean;
}

export type GameAction =
  | { type: "START_GAME" }
  | { type: "PAUSE_GAME" }
  | { type: "RESUME_GAME" }
  | { type: "RESTART_LEVEL" }
  | { type: "GAME_OVER" }
  | { type: "QUIT_TO_MENU" }
  | { type: "SHOW_CONTROLS" }
  | { type: "SHOW_HIGH_SCORES" }
  | { type: "SHOW_SETTINGS" }
  | { type: "SHOW_MENU" }
  | { type: "UPDATE_BALL"; payload: Ball }
  | { type: "UPDATE_PADDLE"; payload: Paddle }
  | { type: "UPDATE_BRICKS"; payload: Brick[] }
  | { type: "ADD_SCORE"; payload: number }
  | { type: "LOSE_LIFE" }
  | { type: "NEXT_LEVEL" }
  | { type: "SET_GAME_AREA"; payload: Size }
  | { type: "MOVE_PADDLE_LEFT" }
  | { type: "MOVE_PADDLE_RIGHT" }
  | { type: "STOP_PADDLE" }
  | { type: "LAUNCH_BALL" };

export interface HighScoreEntry {
  score: number;
  level: number;
  date: string;
}

export interface AppBridge {
  getState: () => GameState;
  dispatch: (action: GameAction) => void;
  actions: {
    startGame: () => void;
    pauseGame: () => void;
    resumeGame: () => void;
    restartLevel: () => void;
    quitToMenu: () => void;
    showControls: () => void;
    showHighScores: () => void;
    showSettings: () => void;
    movePaddleLeft: () => void;
    movePaddleRight: () => void;
    stopPaddle: () => void;
    launchBall: () => void;
  };
}

declare global {
  interface Window {
    app?: AppBridge;
  }
}
