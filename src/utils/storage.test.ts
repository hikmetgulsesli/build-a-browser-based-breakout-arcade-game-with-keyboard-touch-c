import { describe, it, expect, beforeEach } from "vitest";
import { loadHighScores, saveHighScore, getHighScore } from "../utils/storage";
import type { HighScoreEntry } from "../types/domain";

describe("storage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns empty array when no scores exist", () => {
    expect(loadHighScores()).toEqual([]);
  });

  it("saves and loads high scores", () => {
    const entry: HighScoreEntry = { score: 100, level: 2, date: new Date().toISOString() };
    saveHighScore(entry);
    const scores = loadHighScores();
    expect(scores).toHaveLength(1);
    expect(scores[0].score).toBe(100);
  });

  it("sorts scores descending", () => {
    saveHighScore({ score: 50, level: 1, date: new Date().toISOString() });
    saveHighScore({ score: 200, level: 3, date: new Date().toISOString() });
    saveHighScore({ score: 100, level: 2, date: new Date().toISOString() });
    const scores = loadHighScores();
    expect(scores[0].score).toBe(200);
    expect(scores[1].score).toBe(100);
    expect(scores[2].score).toBe(50);
  });

  it("caps at 10 entries", () => {
    for (let i = 0; i < 15; i++) {
      saveHighScore({ score: i * 10, level: 1, date: new Date().toISOString() });
    }
    expect(loadHighScores()).toHaveLength(10);
  });

  it("getHighScore returns top score", () => {
    expect(getHighScore()).toBe(0);
    saveHighScore({ score: 500, level: 5, date: new Date().toISOString() });
    expect(getHighScore()).toBe(500);
  });

  it("ignores corrupted localStorage", () => {
    localStorage.setItem("breakout_high_scores", "not-json");
    expect(loadHighScores()).toEqual([]);
  });
});
