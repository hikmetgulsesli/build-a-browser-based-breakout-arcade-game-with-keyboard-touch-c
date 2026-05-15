import { describe, it, expect, vi, afterEach } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App window.app bridge', () => {
  afterEach(() => {
    delete (window as unknown as Record<string, unknown>).app;
  });

  it('exposes window.app after mount', () => {
    render(<App />);
    const app = (window as unknown as Record<string, unknown>).app;
    expect(app).toBeDefined();
    expect(typeof app).toBe('object');
    expect(app).not.toBeNull();

    const typedApp = app as {
      state: { screen: string };
      actions: Record<string, unknown>;
    };
    expect(typedApp.state.screen).toBe('menu');
    expect(typeof typedApp.actions.startGame).toBe('function');
    expect(typeof typedApp.actions.pauseGame).toBe('function');
    expect(typeof typedApp.actions.resumeGame).toBe('function');
    expect(typeof typedApp.actions.quitToMenu).toBe('function');
    expect(typeof typedApp.actions.launchBall).toBe('function');
  });
});
