/**
 * Persistence repository for ENTITY_HIGH_SCORE.
 *
 * Authority: PERSIST_HIGH_SCORE_STORAGE (local_storage, durability: reload,
 * rehydration: initialization), bound to AUTH_DATA_BROWSER_ORIGIN.
 */

import {
  HIGH_SCORE_STORAGE_KEY,
  HighScoreEntity,
} from "./prod-canvas-play-game.types";

function safeStorage(): Storage | null {
  try {
    if (typeof window === "undefined") return null;
    const storage = window.localStorage;
    if (!storage) return null;
    return storage;
  } catch {
    return null;
  }
}

/** Reads the persisted high score entity, or null when nothing is persisted. */
export function readHighScore(): number | null {
  const storage = safeStorage();
  if (!storage) return null;
  try {
    const raw = storage.getItem(HIGH_SCORE_STORAGE_KEY);
    if (raw === null) return null;
    const parsed = JSON.parse(raw) as HighScoreEntity | number | null;
    const value = typeof parsed === "number" ? parsed : parsed ? parsed.value : null;
    if (typeof value !== "number" || !Number.isFinite(value)) return null;
    return value;
  } catch {
    return null;
  }
}

/** Writes the high score entity to local storage. */
export function writeHighScore(value: number): void {
  const storage = safeStorage();
  if (!storage) return;
  try {
    const entity: HighScoreEntity = { value };
    storage.setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify(entity));
  } catch {
    /* storage unavailable: persistence effect is a no-op */
  }
}

/** Removes the persisted high score entity. */
export function clearHighScore(): void {
  const storage = safeStorage();
  if (!storage) return;
  try {
    storage.removeItem(HIGH_SCORE_STORAGE_KEY);
  } catch {
    /* storage unavailable: nothing to clear */
  }
}
