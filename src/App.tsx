import { useMemo, useCallback, useEffect } from "react";
import { AppContext } from "./contexts/AppContext";
import { useAppState } from "./hooks/useAppState";
import { ControlsHelp, GameBoard, GameOver, MainMenu, PauseOverlay } from "./screens";
import "./App.css";

export default function App() {
  const { state, actions } = useAppState();

  const contextValue = useMemo(
    () => ({ state, actions }),
    [state, actions]
  );

  // Keyboard controls
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft" || e.key === "a") {
        actions.movePaddleLeft();
      } else if (e.key === "ArrowRight" || e.key === "d") {
        actions.movePaddleRight();
      } else if (e.key === " ") {
        e.preventDefault();
        if (state.screen === "playing") {
          actions.launchBall();
        } else if (state.screen === "menu") {
          actions.startGame();
        }
      } else if (e.key === "Escape" || e.key === "p") {
        if (state.screen === "playing") {
          actions.pauseGame();
        } else if (state.screen === "paused") {
          actions.resumeGame();
        }
      }
    }

    function handleKeyUp(e: KeyboardEvent) {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "a" || e.key === "d") {
        actions.stopPaddle();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [actions, state.screen]);

  // Touch controls
  useEffect(() => {
    let touchStartX = 0;
    function handleTouchStart(e: TouchEvent) {
      touchStartX = e.touches[0].clientX;
    }
    function handleTouchMove(e: TouchEvent) {
      e.preventDefault();
      const dx = e.touches[0].clientX - touchStartX;
      if (dx < -10) actions.movePaddleLeft();
      else if (dx > 10) actions.movePaddleRight();
      else actions.stopPaddle();
      touchStartX = e.touches[0].clientX;
    }
    function handleTouchEnd() {
      actions.stopPaddle();
    }

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [actions]);

  const menuActions = useMemo(
    () => ({
      "start-game-1": actions.startGame,
      "controls-and-rules-2": actions.showControls,
      "high-scores-3": actions.showHighScores,
      "settings-4": actions.showSettings,
    }),
    [actions]
  );

  const controlsActions = useMemo(
    () => ({
      "back-to-menu-5": actions.showMenu,
    }),
    [actions]
  );

  const gameOverActions = useMemo(
    () => ({
      "play-again-1": actions.startGame,
      "main-menu-2": actions.showMenu,
    }),
    [actions]
  );

  const pauseActions = useMemo(
    () => ({
      "resume-5": actions.resumeGame,
      "restart-level-6": actions.restartLevel,
      "quit-to-menu-7": actions.quitToMenu,
    }),
    [actions]
  );

  const gameBoardActions = useMemo(
    () => ({
      "button-1-1": actions.showMenu,
      "button-2-2": () => {},
      "button-3-3": actions.pauseGame,
      "button-4-4": () => {},
    }),
    [actions]
  );

  const renderScreen = useCallback(() => {
    switch (state.screen) {
      case "menu":
        return <MainMenu actions={menuActions} />;
      case "playing":
        return (
          <>
            <GameBoard actions={gameBoardActions} />
            <div className="game-hud">
              <div className="hud-item">Skor: {state.score}</div>
              <div className="hud-item">Can: {state.lives}</div>
              <div className="hud-item">Seviye: {state.level}</div>
            </div>
          </>
        );
      case "paused":
        return (
          <>
            <GameBoard actions={gameBoardActions} />
            <PauseOverlay actions={pauseActions} />
          </>
        );
      case "gameover":
        return <GameOver actions={gameOverActions} />;
      case "controls":
        return <ControlsHelp actions={controlsActions} />;
      case "highscores":
        return (
          <div className="screen-highscores">
            <h2>En Yüksek Skorlar</h2>
            <button className="btn-back" onClick={actions.showMenu}>Ana Menü</button>
          </div>
        );
      case "settings":
        return (
          <div className="screen-settings">
            <h2>Ayarlar</h2>
            <button className="btn-back" onClick={actions.showMenu}>Ana Menü</button>
          </div>
        );
      default:
        return <MainMenu actions={menuActions} />;
    }
  }, [state, menuActions, controlsActions, gameOverActions, pauseActions, gameBoardActions, actions]);

  return (
    <AppContext.Provider value={contextValue}>
      <main data-setfarm-root="US-001" className="app-root">
        {renderScreen()}
      </main>
    </AppContext.Provider>
  );
}
