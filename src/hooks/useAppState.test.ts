import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useAppState } from "../hooks/useAppState";

describe("useAppState", () => {
  beforeEach(() => {
    localStorage.clear();
    delete (window as any).app;
  });

  afterEach(() => {
    delete (window as any).app;
  });

  it("initializes with menu screen", () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.screen).toBe("menu");
    expect(result.current.state.score).toBe(0);
    expect(result.current.state.lives).toBe(3);
    expect(result.current.state.level).toBe(1);
  });

  it("exposes window.app after mount", () => {
    const { result } = renderHook(() => useAppState());
    expect(window.app).toBeDefined();
    expect(window.app!.getState).toBeInstanceOf(Function);
    expect(window.app!.dispatch).toBeInstanceOf(Function);
    expect(window.app!.actions.startGame).toBeInstanceOf(Function);
  });

  it("window.app.getState returns live state", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.actions.startGame();
    });
    const liveState = window.app!.getState();
    expect(liveState.screen).toBe("playing");
    expect(liveState.score).toBe(0);
    expect(liveState.lives).toBe(3);
  });

  it("window.app.actions.startGame transitions to playing", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      window.app!.actions.startGame();
    });
    expect(result.current.state.screen).toBe("playing");
    expect(result.current.state.isRunning).toBe(true);
    expect(result.current.state.bricks.length).toBeGreaterThan(0);
  });

  it("window.app.actions.pauseGame pauses", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.actions.startGame();
    });
    act(() => {
      window.app!.actions.pauseGame();
    });
    expect(result.current.state.screen).toBe("paused");
    expect(result.current.state.isRunning).toBe(false);
  });

  it("window.app.actions.resumeGame resumes", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.actions.startGame();
      result.current.actions.pauseGame();
    });
    act(() => {
      window.app!.actions.resumeGame();
    });
    expect(result.current.state.screen).toBe("playing");
    expect(result.current.state.isRunning).toBe(true);
  });

  it("window.app.actions.quitToMenu returns to menu", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.actions.startGame();
    });
    act(() => {
      window.app!.actions.quitToMenu();
    });
    expect(result.current.state.screen).toBe("menu");
    expect(result.current.state.isRunning).toBe(false);
  });

  it("window.app.dispatch works for actions", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      window.app!.dispatch({ type: "SHOW_CONTROLS" });
    });
    expect(result.current.state.screen).toBe("controls");
  });

  it("navigates to high scores", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.actions.showHighScores();
    });
    expect(result.current.state.screen).toBe("highscores");
  });

  it("navigates to settings", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.actions.showSettings();
    });
    expect(result.current.state.screen).toBe("settings");
  });

  it("navigates to controls", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.actions.showControls();
    });
    expect(result.current.state.screen).toBe("controls");
  });

  it("showMenu returns to menu from controls", () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.actions.showControls();
    });
    act(() => {
      result.current.actions.showMenu();
    });
    expect(result.current.state.screen).toBe("menu");
  });
});
