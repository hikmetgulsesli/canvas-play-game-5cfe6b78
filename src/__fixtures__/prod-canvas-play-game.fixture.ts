/**
 * Deterministic fixtures for the Canvas Play Game product surface.
 */

import {
  ApplicationState,
  HIGH_SCORE_STORAGE_KEY,
  INITIAL_APPLICATION_STATE,
  STATE_APPLICATION_REF,
} from "../features/prod-canvas-play-game/prod-canvas-play-game.types";

export const prodCanvasPlayGameFixture = {
  stateRef: STATE_APPLICATION_REF,
  storageKey: HIGH_SCORE_STORAGE_KEY,
  initialState: INITIAL_APPLICATION_STATE,
} as const;

export function createFixtureState(
  overrides: Partial<ApplicationState> = {},
): ApplicationState {
  return { ...INITIAL_APPLICATION_STATE, ...overrides };
}

export const startedGameFixture = createFixtureState({
  phase: "playing",
  high_score: 0,
  status_message: "Game started",
});
