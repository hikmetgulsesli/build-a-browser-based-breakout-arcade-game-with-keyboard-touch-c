import type { HighScoreEntry } from "../types/domain";

const STORAGE_KEY = "breakout_high_scores";
const MAX_ENTRIES = 10;

export function loadHighScores(): HighScoreEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as HighScoreEntry[];
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (e): e is HighScoreEntry =>
          typeof e?.score === "number" &&
          typeof e?.level === "number" &&
          typeof e?.date === "string"
      )
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_ENTRIES);
  } catch {
    return [];
  }
}

export function saveHighScore(entry: HighScoreEntry): HighScoreEntry[] {
  const scores = loadHighScores();
  scores.push(entry);
  scores.sort((a, b) => b.score - a.score);
  const trimmed = scores.slice(0, MAX_ENTRIES);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
  return trimmed;
}

export function getHighScore(): number {
  const scores = loadHighScores();
  return scores.length > 0 ? scores[0].score : 0;
}
