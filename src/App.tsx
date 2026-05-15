import { useEffect } from 'react';
import { AppContext } from './contexts/AppContext';
import { useAppState } from './hooks/useAppState';
import {
  ControlsHelp,
  GameBoard,
  GameOver,
  MainMenu,
  PauseOverlay,
} from './screens';

export default function App() {
  const app = useAppState();

  useEffect(() => {
    // Expose live runtime state bridge as required by acceptance criteria
    (window as unknown as Record<string, unknown>).app = app;
    return () => {
      delete (window as unknown as Record<string, unknown>).app;
    };
  }, [app]);

  const { state, actions } = app;

  const renderScreen = () => {
    switch (state.screen) {
      case 'menu':
        return (
          <MainMenu
            actions={{
              'start-game-1': actions.startGame,
              'controls-and-rules-2': actions.showControls,
              'high-scores-3': actions.showHighScores,
              'settings-4': actions.showSettings,
            }}
          />
        );
      case 'playing':
        return (
          <GameBoard
            actions={{
              'button-1-1': actions.showMenu,
              'button-2-2': () => {},
              'button-3-3': actions.pauseGame,
              'button-4-4': actions.showSettings,
            }}
          />
        );
      case 'paused':
        return (
          <>
            <GameBoard
              actions={{
                'button-1-1': actions.showMenu,
                'button-2-2': () => {},
                'button-3-3': actions.resumeGame,
                'button-4-4': actions.showSettings,
              }}
            />
            <PauseOverlay
              actions={{
                'button-1-1': actions.showMenu,
                'button-2-2': () => {},
                'button-3-3': actions.resumeGame,
                'button-4-4': actions.showSettings,
                'resume-5': actions.resumeGame,
                'restart-level-6': actions.restartLevel,
                'quit-to-menu-7': actions.quitToMenu,
              }}
            />
          </>
        );
      case 'gameover':
        return (
          <>
            <GameBoard
              actions={{
                'button-1-1': actions.showMenu,
                'button-2-2': () => {},
                'button-3-3': () => {},
                'button-4-4': actions.showSettings,
              }}
            />
            <GameOver
              actions={{
                'play-again-1': actions.startGame,
                'main-menu-2': actions.quitToMenu,
              }}
            />
          </>
        );
      case 'controls':
        return (
          <ControlsHelp
            actions={{
              'button-1-1': actions.showMenu,
              'button-2-2': () => {},
              'button-3-3': () => {},
              'button-4-4': actions.showSettings,
              'back-to-menu-5': actions.showMenu,
            }}
          />
        );
      case 'highscores':
        return (
          <MainMenu
            actions={{
              'start-game-1': actions.startGame,
              'controls-and-rules-2': actions.showControls,
              'high-scores-3': actions.showHighScores,
              'settings-4': actions.showSettings,
            }}
          />
        );
      case 'settings':
        return (
          <MainMenu
            actions={{
              'start-game-1': actions.startGame,
              'controls-and-rules-2': actions.showControls,
              'high-scores-3': actions.showHighScores,
              'settings-4': actions.showSettings,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <AppContext.Provider value={app}>
      <main data-setfarm-root="app" className="min-h-screen bg-slate-50 text-slate-950">
        {renderScreen()}
      </main>
    </AppContext.Provider>
  );
}
