import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Ball, Brick, GameScreen, GameState, Paddle, Vec2 } from '../types/domain';
import { loadHighScores, saveHighScore } from '../utils/storage';

const BOARD_WIDTH = 800;
const BOARD_HEIGHT = 600;
const PADDLE_WIDTH = 120;
const PADDLE_HEIGHT = 16;
const BALL_RADIUS = 8;
const BRICK_ROWS = 5;
const BRICK_COLS = 8;
const BRICK_WIDTH = 80;
const BRICK_HEIGHT = 24;
const BRICK_PADDING = 8;
const BRICK_OFFSET_TOP = 60;
const BRICK_OFFSET_LEFT = 48;
const BASE_BALL_SPEED = 4;

function createPaddle(): Paddle {
  return {
    x: BOARD_WIDTH / 2 - PADDLE_WIDTH / 2,
    y: BOARD_HEIGHT - PADDLE_HEIGHT - 16,
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    speed: 8,
  };
}

function createBall(): Ball {
  return {
    x: BOARD_WIDTH / 2,
    y: BOARD_HEIGHT - PADDLE_HEIGHT - 32,
    radius: BALL_RADIUS,
    dx: 0,
    dy: 0,
    speed: BASE_BALL_SPEED,
  };
}

function createBricks(level: number): Brick[] {
  const bricks: Brick[] = [];
  const colors = [
    'var(--color-error)',
    'var(--color-tertiary)',
    'var(--color-primary)',
    'var(--color-secondary)',
    'var(--color-primary-container)',
  ];
  for (let r = 0; r < BRICK_ROWS; r++) {
    for (let c = 0; c < BRICK_COLS; c++) {
      bricks.push({
        x: BRICK_OFFSET_LEFT + c * (BRICK_WIDTH + BRICK_PADDING),
        y: BRICK_OFFSET_TOP + r * (BRICK_HEIGHT + BRICK_PADDING),
        width: BRICK_WIDTH,
        height: BRICK_HEIGHT,
        color: colors[r % colors.length],
        points: (BRICK_ROWS - r) * 10 * level,
        broken: false,
      });
    }
  }
  return bricks;
}

function createInitialState(): GameState {
  return {
    screen: 'menu',
    score: 0,
    lives: 3,
    level: 1,
    isRunning: false,
    paddle: createPaddle(),
    ball: createBall(),
    bricks: [],
    highScores: loadHighScores(),
    width: BOARD_WIDTH,
    height: BOARD_HEIGHT,
  };
}

export function useAppState() {
  const [state, setState] = useState<GameState>(createInitialState);
  const stateRef = useRef<GameState>(state);
  const rafRef = useRef<number>(0);
  const keysRef = useRef<Set<string>>(new Set());
  const launchedRef = useRef(false);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const updateState = useCallback((updater: (prev: GameState) => GameState) => {
    setState((prev) => {
      const next = updater(prev);
      stateRef.current = next;
      return next;
    });
  }, []);

  const startGame = useCallback(() => {
    launchedRef.current = false;
    updateState((prev) => ({
      ...prev,
      screen: 'playing',
      score: 0,
      lives: 3,
      level: 1,
      isRunning: true,
      paddle: createPaddle(),
      ball: createBall(),
      bricks: createBricks(1),
    }));
  }, [updateState]);

  const pauseGame = useCallback(() => {
    updateState((prev) =>
      prev.screen === 'playing'
        ? { ...prev, screen: 'paused', isRunning: false }
        : prev,
    );
  }, [updateState]);

  const resumeGame = useCallback(() => {
    updateState((prev) =>
      prev.screen === 'paused'
        ? { ...prev, screen: 'playing', isRunning: true }
        : prev,
    );
  }, [updateState]);

  const restartLevel = useCallback(() => {
    launchedRef.current = false;
    updateState((prev) => ({
      ...prev,
      screen: 'playing',
      isRunning: true,
      paddle: createPaddle(),
      ball: createBall(),
      bricks: createBricks(prev.level),
    }));
  }, [updateState]);

  const quitToMenu = useCallback(() => {
    updateState((prev) => ({
      ...prev,
      screen: 'menu',
      isRunning: false,
    }));
  }, [updateState]);

  const showControls = useCallback(() => {
    updateState((prev) => ({ ...prev, screen: 'controls' }));
  }, [updateState]);

  const showHighScores = useCallback(() => {
    updateState((prev) => ({ ...prev, screen: 'highscores', highScores: loadHighScores() }));
  }, [updateState]);

  const showSettings = useCallback(() => {
    updateState((prev) => ({ ...prev, screen: 'settings' }));
  }, [updateState]);

  const showMenu = useCallback(() => {
    updateState((prev) => ({ ...prev, screen: 'menu', isRunning: false }));
  }, [updateState]);

  const launchBall = useCallback(() => {
    if (launchedRef.current) return;
    launchedRef.current = true;
    updateState((prev) => {
      const angle = (Math.random() * 60 + 60) * (Math.PI / 180);
      const dx = prev.ball.speed * Math.cos(angle) * (Math.random() > 0.5 ? 1 : -1);
      const dy = -prev.ball.speed * Math.sin(angle);
      return {
        ...prev,
        ball: { ...prev.ball, dx, dy },
      };
    });
  }, [updateState]);

  const movePaddleLeft = useCallback(() => {
    updateState((prev) => {
      const x = Math.max(0, prev.paddle.x - prev.paddle.speed);
      return { ...prev, paddle: { ...prev.paddle, x } };
    });
  }, [updateState]);

  const movePaddleRight = useCallback(() => {
    updateState((prev) => {
      const x = Math.min(prev.width - prev.paddle.width, prev.paddle.x + prev.paddle.speed);
      return { ...prev, paddle: { ...prev.paddle, x } };
    });
  }, [updateState]);

  const nextLevel = useCallback(() => {
    launchedRef.current = false;
    updateState((prev) => {
      const nextLevel = prev.level + 1;
      return {
        ...prev,
        level: nextLevel,
        paddle: createPaddle(),
        ball: createBall(),
        bricks: createBricks(nextLevel),
      };
    });
  }, [updateState]);

  const loseLife = useCallback(() => {
    launchedRef.current = false;
    updateState((prev) => {
      const lives = prev.lives - 1;
      if (lives <= 0) {
        const entry = { name: 'Player', score: prev.score, date: new Date().toISOString() };
        const highScores = saveHighScore(entry);
        return {
          ...prev,
          screen: 'gameover',
          isRunning: false,
          lives: 0,
          highScores,
        };
      }
      return {
        ...prev,
        lives,
        paddle: createPaddle(),
        ball: createBall(),
      };
    });
  }, [updateState]);

  // Game loop
  useEffect(() => {
    const loop = () => {
      const s = stateRef.current;
      if (s.screen !== 'playing' || !s.isRunning) {
        rafRef.current = requestAnimationFrame(loop);
        return;
      }

      setState((prev) => {
        let { paddle, ball, bricks, score, level } = prev;

        // Paddle auto-follow ball if not launched
        if (!launchedRef.current) {
          const targetX = ball.x - paddle.width / 2;
          const clampedX = Math.max(0, Math.min(prev.width - paddle.width, targetX));
          paddle = { ...paddle, x: clampedX };
        }

        // Keyboard paddle control
        if (keysRef.current.has('ArrowLeft') || keysRef.current.has('a')) {
          paddle = { ...paddle, x: Math.max(0, paddle.x - paddle.speed) };
        }
        if (keysRef.current.has('ArrowRight') || keysRef.current.has('d')) {
          paddle = { ...paddle, x: Math.min(prev.width - paddle.width, paddle.x + paddle.speed) };
        }

        if (!launchedRef.current) {
          ball = { ...ball, x: paddle.x + paddle.width / 2, y: paddle.y - ball.radius - 2 };
          const next: GameState = { ...prev, paddle, ball, bricks, score };
          stateRef.current = next;
          return next;
        }

        // Move ball
        let nx = ball.x + ball.dx;
        let ny = ball.y + ball.dy;
        let ndx = ball.dx;
        let ndy = ball.dy;

        // Wall collisions
        if (nx - ball.radius < 0) {
          nx = ball.radius;
          ndx = Math.abs(ndx);
        } else if (nx + ball.radius > prev.width) {
          nx = prev.width - ball.radius;
          ndx = -Math.abs(ndx);
        }
        if (ny - ball.radius < 0) {
          ny = ball.radius;
          ndy = Math.abs(ndy);
        }
        if (ny + ball.radius > prev.height) {
          // Ball lost
          const nextState = { ...prev, paddle, ball: { ...ball, x: nx, y: ny, dx: ndx, dy: ndy }, bricks, score };
          stateRef.current = nextState;
          // Schedule loseLife after this frame
          setTimeout(() => loseLife(), 0);
          return nextState;
        }

        // Paddle collision
        if (
          ny + ball.radius >= paddle.y &&
          ny - ball.radius <= paddle.y + paddle.height &&
          nx + ball.radius >= paddle.x &&
          nx - ball.radius <= paddle.x + paddle.width
        ) {
          ny = paddle.y - ball.radius;
          ndy = -Math.abs(ndy);
          const hitPoint = (nx - (paddle.x + paddle.width / 2)) / (paddle.width / 2);
          ndx = hitPoint * ball.speed;
        }

        // Brick collisions
        const newBricks = bricks.map((b) => {
          if (b.broken) return b;
          if (
            nx + ball.radius >= b.x &&
            nx - ball.radius <= b.x + b.width &&
            ny + ball.radius >= b.y &&
            ny - ball.radius <= b.y + b.height
          ) {
            ndy = -ndy;
            score += b.points;
            return { ...b, broken: true };
          }
          return b;
        });

        // Level complete
        if (newBricks.every((b) => b.broken)) {
          const nextState = {
            ...prev,
            paddle,
            ball: { ...ball, x: nx, y: ny, dx: ndx, dy: ndy },
            bricks: newBricks,
            score,
          };
          stateRef.current = nextState;
          setTimeout(() => nextLevel(), 0);
          return nextState;
        }

        ball = { ...ball, x: nx, y: ny, dx: ndx, dy: ndy };
        const next: GameState = { ...prev, paddle, ball, bricks: newBricks, score };
        stateRef.current = next;
        return next;
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [loseLife, nextLevel]);

  // Keyboard input
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      keysRef.current.add(e.key);
      if (e.key === ' ' || e.key === 'Spacebar') {
        const s = stateRef.current;
        if (s.screen === 'playing' && !launchedRef.current) {
          launchBall();
        } else if (s.screen === 'playing') {
          pauseGame();
        } else if (s.screen === 'paused') {
          resumeGame();
        }
      }
      if (e.key === 'Escape') {
        const s = stateRef.current;
        if (s.screen === 'playing') {
          pauseGame();
        } else if (s.screen === 'paused') {
          resumeGame();
        }
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      keysRef.current.delete(e.key);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [launchBall, pauseGame, resumeGame]);

  const actions = useMemo(
    () => ({
      startGame,
      pauseGame,
      resumeGame,
      restartLevel,
      quitToMenu,
      showControls,
      showHighScores,
      showSettings,
      showMenu,
      launchBall,
      movePaddleLeft,
      movePaddleRight,
    }),
    [
      startGame,
      pauseGame,
      resumeGame,
      restartLevel,
      quitToMenu,
      showControls,
      showHighScores,
      showSettings,
      showMenu,
      launchBall,
      movePaddleLeft,
      movePaddleRight,
    ],
  );

  const app = useMemo(
    () => ({ state, actions }),
    [state, actions],
  );

  return app;
}
