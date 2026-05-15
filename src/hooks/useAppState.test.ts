import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAppState } from './useAppState';

describe('useAppState', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('starts in menu screen', () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.screen).toBe('menu');
    expect(result.current.state.score).toBe(0);
    expect(result.current.state.lives).toBe(3);
    expect(result.current.state.level).toBe(1);
  });

  it('exposes actions object', () => {
    const { result } = renderHook(() => useAppState());
    expect(typeof result.current.actions.startGame).toBe('function');
    expect(typeof result.current.actions.pauseGame).toBe('function');
    expect(typeof result.current.actions.resumeGame).toBe('function');
    expect(typeof result.current.actions.restartLevel).toBe('function');
    expect(typeof result.current.actions.quitToMenu).toBe('function');
    expect(typeof result.current.actions.showControls).toBe('function');
    expect(typeof result.current.actions.showHighScores).toBe('function');
    expect(typeof result.current.actions.showSettings).toBe('function');
    expect(typeof result.current.actions.showMenu).toBe('function');
    expect(typeof result.current.actions.launchBall).toBe('function');
    expect(typeof result.current.actions.movePaddleLeft).toBe('function');
    expect(typeof result.current.actions.movePaddleRight).toBe('function');
  });

  it('startGame transitions to playing', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    expect(result.current.state.screen).toBe('playing');
    expect(result.current.state.isRunning).toBe(true);
    expect(result.current.state.bricks.length).toBeGreaterThan(0);
  });

  it('pauseGame transitions to paused', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => result.current.actions.pauseGame());
    expect(result.current.state.screen).toBe('paused');
    expect(result.current.state.isRunning).toBe(false);
  });

  it('resumeGame transitions back to playing', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => result.current.actions.pauseGame());
    act(() => result.current.actions.resumeGame());
    expect(result.current.state.screen).toBe('playing');
    expect(result.current.state.isRunning).toBe(true);
  });

  it('quitToMenu returns to menu', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => result.current.actions.quitToMenu());
    expect(result.current.state.screen).toBe('menu');
    expect(result.current.state.isRunning).toBe(false);
  });

  it('showControls transitions to controls screen', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.showControls());
    expect(result.current.state.screen).toBe('controls');
  });

  it('showHighScores transitions to highscores screen', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.showHighScores());
    expect(result.current.state.screen).toBe('highscores');
  });

  it('showSettings transitions to settings screen', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.showSettings());
    expect(result.current.state.screen).toBe('settings');
  });

  it('showMenu returns to menu', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.showControls());
    act(() => result.current.actions.showMenu());
    expect(result.current.state.screen).toBe('menu');
  });

  it('movePaddleLeft moves paddle left', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const initialX = result.current.state.paddle.x;
    act(() => result.current.actions.movePaddleLeft());
    expect(result.current.state.paddle.x).toBeLessThan(initialX);
  });

  it('movePaddleRight moves paddle right', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const initialX = result.current.state.paddle.x;
    act(() => result.current.actions.movePaddleRight());
    expect(result.current.state.paddle.x).toBeGreaterThan(initialX);
  });

  it('launchBall sets ball velocity', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    expect(result.current.state.ball.dx).toBe(0);
    expect(result.current.state.ball.dy).toBe(0);
    act(() => result.current.actions.launchBall());
    expect(result.current.state.ball.dx).not.toBe(0);
    expect(result.current.state.ball.dy).not.toBe(0);
  });

  it('restartLevel resets ball and paddle but keeps score', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => result.current.actions.launchBall());
    act(() => {
      // Simulate moving paddle to alter state
      result.current.actions.movePaddleRight();
    });
    const score = result.current.state.score;
    const level = result.current.state.level;
    act(() => result.current.actions.restartLevel());
    expect(result.current.state.screen).toBe('playing');
    expect(result.current.state.score).toBe(score);
    expect(result.current.state.level).toBe(level);
    expect(result.current.state.ball.dx).toBe(0);
    expect(result.current.state.ball.dy).toBe(0);
  });
});
