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
          <div
            className="min-h-screen flex flex-col items-center justify-center p-6"
            style={{ background: 'var(--color-background)', color: 'var(--color-on-surface)' }}
          >
            <h1
              className="text-3xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-display-lg)' }}
            >
              HIGH SCORES
            </h1>
            {state.highScores.length === 0 ? (
              <p style={{ color: 'var(--color-on-surface-variant)' }}>
                No scores yet. Play a game to set a record!
              </p>
            ) : (
              <div className="w-full max-w-md space-y-2">
                {state.highScores.map((entry, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center px-4 py-3 rounded"
                    style={{ background: 'var(--color-surface-container)' }}
                  >
                    <span className="font-medium">
                      {i + 1}. {entry.name}
                    </span>
                    <span
                      className="font-bold"
                      style={{ fontFamily: 'var(--font-hud-label)' }}
                    >
                      {entry.score}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <button
              onClick={actions.showMenu}
              className="mt-8 px-6 py-3 rounded font-semibold"
              style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)' }}
            >
              BACK TO MENU
            </button>
          </div>
        );
      case 'settings':
        return (
          <div
            className="min-h-screen flex flex-col items-center justify-center p-6"
            style={{ background: 'var(--color-background)', color: 'var(--color-on-surface)' }}
          >
            <h1
              className="text-3xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-display-lg)' }}
            >
              SETTINGS
            </h1>
            <p style={{ color: 'var(--color-on-surface-variant)' }}>
              Game settings will be available here.
            </p>
            <button
              onClick={actions.showMenu}
              className="mt-8 px-6 py-3 rounded font-semibold"
              style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)' }}
            >
              BACK TO MENU
            </button>
          </div>
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
