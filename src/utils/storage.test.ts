import { describe, it, expect, beforeEach } from 'vitest';
import { loadHighScores, saveHighScore, clearHighScores } from './storage';

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns empty array when no scores stored', () => {
    expect(loadHighScores()).toEqual([]);
  });

  it('saves and loads high scores', () => {
    saveHighScore({ name: 'Alice', score: 100, date: '2024-01-01' });
    saveHighScore({ name: 'Bob', score: 200, date: '2024-01-02' });
    const scores = loadHighScores();
    expect(scores).toHaveLength(2);
    expect(scores[0].score).toBe(200);
    expect(scores[1].score).toBe(100);
  });

  it('limits to 10 scores', () => {
    for (let i = 0; i < 15; i++) {
      saveHighScore({ name: `Player${i}`, score: i * 10, date: '2024-01-01' });
    }
    expect(loadHighScores()).toHaveLength(10);
  });

  it('clears high scores', () => {
    saveHighScore({ name: 'Alice', score: 100, date: '2024-01-01' });
    clearHighScores();
    expect(loadHighScores()).toEqual([]);
  });
});
