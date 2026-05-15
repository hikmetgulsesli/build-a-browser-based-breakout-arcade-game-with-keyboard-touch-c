import { createContext, useContext } from "react";
import type { GameState } from "../types/domain";

interface AppContextValue {
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
    stopPaddle: () => void;
    launchBall: () => void;
  };
}

export const AppContext = createContext<AppContextValue | null>(null);

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return ctx;
}
