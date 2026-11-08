/**
 * Shared domain types for the Canvas Play Game product (US-001 / ACT_START_GAME).
 *
 * These types mirror the sealed ProductSpecV2 semantics for STATE_APPLICATION,
 * ENTITY_HIGH_SCORE and PERSIST_HIGH_SCORE_STORAGE.
 */

export const STATE_APPLICATION_REF = "STATE_APPLICATION";
export const ENTITY_HIGH_SCORE_REF = "ENTITY_HIGH_SCORE";
export const HIGH_SCORE_STORAGE_KEY = "setfarm.canvas_play_game.high_score_storage.v1";
export const HIGH_SCORE_FIELD_REF = "FIELD_HIGH_SCORE_VALUE";

export type ApplicationPhase = "idle" | "playing";

export interface ApplicationState {
  high_score: number | null;
  phase: ApplicationPhase;
  status_message: string | null;
}

export interface HighScoreEntity {
  value: number | null;
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
  high_score: null,
  phase: "idle",
  status_message: null,
};

export function createApplicationState(): ApplicationState {
  return { ...INITIAL_APPLICATION_STATE };
}

export function isApplicationPhase(value: unknown): value is ApplicationPhase {
  return value === "idle" || value === "playing";
}
