export interface Vec2 {
  x: number;
  y: number;
}

export interface Paddle {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
}

export interface Ball {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  speed: number;
}

export interface Brick {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  points: number;
  broken: boolean;
}

export type GameScreen =
  | 'menu'
  | 'playing'
  | 'paused'
  | 'gameover'
  | 'controls'
  | 'highscores'
  | 'settings';

export interface GameState {
  screen: GameScreen;
  score: number;
  lives: number;
  level: number;
  isRunning: boolean;
  paddle: Paddle;
  ball: Ball;
  bricks: Brick[];
  highScores: HighScoreEntry[];
  width: number;
  height: number;
}

export interface HighScoreEntry {
  name: string;
  score: number;
  date: string;
}

export interface AppBridge {
  state: GameState;
  actions: {
    startGame: () => void;
    pauseGame: () => void;
    resumeGame: () => void;
    restartLevel: () => void;
    quitToMenu: () => void;
    showControls: () => void;
    showHighScores: () => void;
    showSettings: () => void;
    showMenu: () => void;
    movePaddleLeft: () => void;
    movePaddleRight: () => void;
    launchBall: () => void;
  };
}
