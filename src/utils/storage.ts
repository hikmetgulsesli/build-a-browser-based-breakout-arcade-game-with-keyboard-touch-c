import type { HighScoreEntry } from '../types/domain';

const HIGH_SCORES_KEY = 'breakout_high_scores';
const MAX_HIGH_SCORES = 10;

export function loadHighScores(): HighScoreEntry[] {
  try {
    const raw = localStorage.getItem(HIGH_SCORES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (e): e is HighScoreEntry =>
        typeof e.name === 'string' &&
        typeof e.score === 'number' &&
        typeof e.date === 'string',
    );
  } catch {
    console.error('Breakout: localStorage high scores corrupted; clearing persisted data.');
    clearHighScores();
    return [];
  }
}

export function saveHighScore(entry: HighScoreEntry): HighScoreEntry[] {
  const scores = loadHighScores();
  scores.push(entry);
  scores.sort((a, b) => b.score - a.score);
  const trimmed = scores.slice(0, MAX_HIGH_SCORES);
  localStorage.setItem(HIGH_SCORES_KEY, JSON.stringify(trimmed));
  return trimmed;
}

export function clearHighScores(): void {
  localStorage.removeItem(HIGH_SCORES_KEY);
}
