import { useCallback, useEffect, useRef, useReducer } from "react";
import type { Ball, Brick, GameAction, GameState, Paddle, Screen, Size } from "../types/domain";
import { getHighScore, saveHighScore } from "../utils/storage";

const BALL_RADIUS = 8;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 12;
const BRICK_WIDTH = 60;
const BRICK_HEIGHT = 20;
const BRICK_GAP = 4;
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const INITIAL_LIVES = 3;
const INITIAL_SPEED = 4;

function createBricks(level: number): Brick[] {
  const rows = Math.min(3 + level, 8);
  const cols = Math.floor(GAME_WIDTH / (BRICK_WIDTH + BRICK_GAP)) - 1;
  const bricks: Brick[] = [];
  const startX = (GAME_WIDTH - cols * (BRICK_WIDTH + BRICK_GAP)) / 2;
  const colors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#a855f7", "#ec4899", "#14b8a6"];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      bricks.push({
        id: `b-${r}-${c}`,
        position: { x: startX + c * (BRICK_WIDTH + BRICK_GAP), y: 40 + r * (BRICK_HEIGHT + BRICK_GAP) },
        size: { width: BRICK_WIDTH, height: BRICK_HEIGHT },
        color: colors[r % colors.length],
        points: (rows - r) * 10,
        hit: false,
      });
    }
  }
  return bricks;
}

function initialBall(): Ball {
  return {
    position: { x: GAME_WIDTH / 2, y: GAME_HEIGHT - 60 },
    velocity: { x: 0, y: 0 },
    radius: BALL_RADIUS,
    speed: INITIAL_SPEED,
  };
}

function initialPaddle(): Paddle {
  return {
    position: { x: GAME_WIDTH / 2 - PADDLE_WIDTH / 2, y: GAME_HEIGHT - 30 },
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    speed: 0,
  };
}

function createInitialState(): GameState {
  return {
    screen: "menu",
    score: 0,
    lives: INITIAL_LIVES,
    level: 1,
    highScore: getHighScore(),
    ball: initialBall(),
    paddle: initialPaddle(),
    bricks: [],
    gameArea: { width: GAME_WIDTH, height: GAME_HEIGHT },
    isRunning: false,
  };
}

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "START_GAME": {
      const bricks = createBricks(1);
      return {
        ...createInitialState(),
        screen: "playing",
        highScore: state.highScore,
        bricks,
        ball: initialBall(),
        paddle: initialPaddle(),
        isRunning: true,
      };
    }
    case "PAUSE_GAME":
      return { ...state, screen: "paused", isRunning: false };
    case "RESUME_GAME":
      return { ...state, screen: "playing", isRunning: true };
    case "RESTART_LEVEL": {
      const bricks = createBricks(state.level);
      return {
        ...state,
        screen: "playing",
        ball: initialBall(),
        paddle: initialPaddle(),
        bricks,
        isRunning: true,
      };
    }
    case "GAME_OVER": {
      const highScores = saveHighScore({ score: state.score, level: state.level, date: new Date().toISOString() });
      return {
        ...state,
        screen: "gameover",
        isRunning: false,
        highScore: highScores.length > 0 ? highScores[0].score : state.highScore,
      };
    }
    case "QUIT_TO_MENU":
      return { ...createInitialState(), highScore: state.highScore };
    case "SHOW_CONTROLS":
      return { ...state, screen: "controls", isRunning: false };
    case "SHOW_HIGH_SCORES":
      return { ...state, screen: "highscores", isRunning: false };
    case "SHOW_SETTINGS":
      return { ...state, screen: "settings", isRunning: false };
    case "SHOW_MENU":
      return { ...state, screen: "menu", isRunning: false };
    case "UPDATE_BALL":
      return { ...state, ball: action.payload };
    case "UPDATE_PADDLE":
      return { ...state, paddle: action.payload };
    case "UPDATE_BRICKS":
      return { ...state, bricks: action.payload };
    case "ADD_SCORE":
      return { ...state, score: state.score + action.payload };
    case "LOSE_LIFE": {
      const lives = state.lives - 1;
      if (lives <= 0) {
        const highScores = saveHighScore({ score: state.score, level: state.level, date: new Date().toISOString() });
        return {
          ...state,
          lives: 0,
          screen: "gameover",
          isRunning: false,
          highScore: highScores.length > 0 ? highScores[0].score : state.highScore,
        };
      }
      return {
        ...state,
        lives,
        ball: initialBall(),
        paddle: initialPaddle(),
        isRunning: true,
      };
    }
    case "NEXT_LEVEL": {
      const nextLevel = state.level + 1;
      return {
        ...state,
        level: nextLevel,
        bricks: createBricks(nextLevel),
        ball: initialBall(),
        paddle: initialPaddle(),
        isRunning: true,
      };
    }
    case "SET_GAME_AREA":
      return { ...state, gameArea: action.payload };
    case "MOVE_PADDLE_LEFT":
      return {
        ...state,
        paddle: { ...state.paddle, speed: -6 },
      };
    case "MOVE_PADDLE_RIGHT":
      return {
        ...state,
        paddle: { ...state.paddle, speed: 6 },
      };
    case "STOP_PADDLE":
      return {
        ...state,
        paddle: { ...state.paddle, speed: 0 },
      };
    case "LAUNCH_BALL": {
      if (state.ball.velocity.x !== 0 || state.ball.velocity.y !== 0) return state;
      const angle = (Math.random() * Math.PI) / 2 + Math.PI / 4;
      return {
        ...state,
        ball: {
          ...state.ball,
          velocity: { x: Math.cos(angle) * state.ball.speed, y: -Math.sin(angle) * state.ball.speed },
        },
      };
    }
    default:
      return state;
  }
}

function resolveCollision(ball: Ball, paddle: Paddle, bricks: Brick[], gameArea: Size): { ball: Ball; bricks: Brick[]; scoreDelta: number; lostLife: boolean; levelComplete: boolean } {
  let newBall: Ball = { ...ball, position: { x: ball.position.x + ball.velocity.x, y: ball.position.y + ball.velocity.y } };
  let scoreDelta = 0;
  let lostLife = false;
  let levelComplete = false;

  // Wall collisions
  if (newBall.position.x - newBall.radius <= 0 || newBall.position.x + newBall.radius >= gameArea.width) {
    newBall = { ...newBall, velocity: { x: -newBall.velocity.x, y: newBall.velocity.y } };
  }
  if (newBall.position.y - newBall.radius <= 0) {
    newBall = { ...newBall, velocity: { x: newBall.velocity.x, y: -newBall.velocity.y } };
  }
  if (newBall.position.y + newBall.radius >= gameArea.height) {
    lostLife = true;
    return { ball: newBall, bricks, scoreDelta, lostLife, levelComplete };
  }

  // Paddle collision
  const paddleTop = paddle.position.y;
  const paddleBottom = paddle.position.y + paddle.height;
  const paddleLeft = paddle.position.x;
  const paddleRight = paddle.position.x + paddle.width;

  if (
    newBall.position.y + newBall.radius >= paddleTop &&
    newBall.position.y - newBall.radius <= paddleBottom &&
    newBall.position.x >= paddleLeft &&
    newBall.position.x <= paddleRight
  ) {
    const hitPos = (newBall.position.x - paddleLeft) / paddle.width;
    const angle = (hitPos * Math.PI) / 2 + Math.PI / 4;
    const speed = Math.sqrt(newBall.velocity.x ** 2 + newBall.velocity.y ** 2);
    newBall = {
      ...newBall,
      velocity: { x: Math.cos(angle) * speed * (hitPos < 0.5 ? -1 : 1), y: -Math.sin(angle) * speed },
    };
  }

  // Brick collisions
  const newBricks = bricks.map((brick) => {
    if (brick.hit) return brick;
    if (
      newBall.position.x + newBall.radius >= brick.position.x &&
      newBall.position.x - newBall.radius <= brick.position.x + brick.size.width &&
      newBall.position.y + newBall.radius >= brick.position.y &&
      newBall.position.y - newBall.radius <= brick.position.y + brick.size.height
    ) {
      newBall = { ...newBall, velocity: { x: newBall.velocity.x, y: -newBall.velocity.y } };
      scoreDelta += brick.points;
      return { ...brick, hit: true };
    }
    return brick;
  });

  const remaining = newBricks.filter((b) => !b.hit).length;
  if (remaining === 0 && bricks.length > 0) {
    levelComplete = true;
  }

  return { ball: newBall, bricks: newBricks, scoreDelta, lostLife, levelComplete };
}

export function useAppState() {
  const [state, dispatch] = useReducer(gameReducer, null, createInitialState);
  const stateRef = useRef(state);
  stateRef.current = state;

  const startGame = useCallback(() => dispatch({ type: "START_GAME" }), []);
  const pauseGame = useCallback(() => dispatch({ type: "PAUSE_GAME" }), []);
  const resumeGame = useCallback(() => dispatch({ type: "RESUME_GAME" }), []);
  const restartLevel = useCallback(() => dispatch({ type: "RESTART_LEVEL" }), []);
  const quitToMenu = useCallback(() => dispatch({ type: "QUIT_TO_MENU" }), []);
  const showControls = useCallback(() => dispatch({ type: "SHOW_CONTROLS" }), []);
  const showHighScores = useCallback(() => dispatch({ type: "SHOW_HIGH_SCORES" }), []);
  const showSettings = useCallback(() => dispatch({ type: "SHOW_SETTINGS" }), []);
  const showMenu = useCallback(() => dispatch({ type: "SHOW_MENU" }), []);
  const movePaddleLeft = useCallback(() => dispatch({ type: "MOVE_PADDLE_LEFT" }), []);
  const movePaddleRight = useCallback(() => dispatch({ type: "MOVE_PADDLE_RIGHT" }), []);
  const stopPaddle = useCallback(() => dispatch({ type: "STOP_PADDLE" }), []);
  const launchBall = useCallback(() => dispatch({ type: "LAUNCH_BALL" }), []);

  // Game loop
  const lastTimeRef = useRef(0);
  const animFrameRef = useRef(0);

  useEffect(() => {
    function tick(timestamp: number) {
      const s = stateRef.current;
      if (!s.isRunning) {
        animFrameRef.current = requestAnimationFrame(tick);
        return;
      }

      // Update paddle position
      let newPaddleX = s.paddle.position.x + s.paddle.speed;
      newPaddleX = Math.max(0, Math.min(s.gameArea.width - s.paddle.width, newPaddleX));
      const newPaddle = { ...s.paddle, position: { ...s.paddle.position, x: newPaddleX } };

      // Resolve collisions
      const { ball, bricks, scoreDelta, lostLife, levelComplete } = resolveCollision(s.ball, newPaddle, s.bricks, s.gameArea);

      if (scoreDelta > 0) {
        dispatch({ type: "ADD_SCORE", payload: scoreDelta });
      }
      if (newPaddle.position.x !== s.paddle.position.x) {
        dispatch({ type: "UPDATE_PADDLE", payload: newPaddle });
      }
      if (bricks !== s.bricks) {
        dispatch({ type: "UPDATE_BRICKS", payload: bricks });
      }
      if (ball.position.x !== s.ball.position.x || ball.position.y !== s.ball.position.y || ball.velocity.x !== s.ball.velocity.x || ball.velocity.y !== s.ball.velocity.y) {
        dispatch({ type: "UPDATE_BALL", payload: ball });
      }
      if (lostLife) {
        dispatch({ type: "LOSE_LIFE" });
      }
      if (levelComplete) {
        dispatch({ type: "NEXT_LEVEL" });
      }

      animFrameRef.current = requestAnimationFrame(tick);
    }

    animFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  // Expose window.app bridge — CRITICAL for acceptance criteria
  useEffect(() => {
    const bridge = {
      getState: () => stateRef.current,
      dispatch: (action: GameAction) => dispatch(action),
      actions: {
        startGame,
        pauseGame,
        resumeGame,
        restartLevel,
        quitToMenu,
        showControls,
        showHighScores,
        showSettings,
        movePaddleLeft,
        movePaddleRight,
        stopPaddle,
        launchBall,
      },
    };
    window.app = bridge;
    return () => {
      // Do not delete on cleanup to keep bridge stable
    };
  }, [startGame, pauseGame, resumeGame, restartLevel, quitToMenu, showControls, showHighScores, showSettings, movePaddleLeft, movePaddleRight, stopPaddle, launchBall]);

  return {
    state,
    dispatch,
    actions: {
      startGame,
      pauseGame,
      resumeGame,
      restartLevel,
      quitToMenu,
      showControls,
      showHighScores,
      showSettings,
      showMenu,
      movePaddleLeft,
      movePaddleRight,
      stopPaddle,
      launchBall,
    },
  };
}
