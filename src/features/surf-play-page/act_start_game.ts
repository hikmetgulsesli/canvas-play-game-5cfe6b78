/**
 * ACT_START_GAME implementation for the Surf Play Page feature.
 *
 * Contract (sealed ProductSpecV2):
 *  - trigger: user, invocation interface: rendered_control
 *  - state deltas: /phase = "playing", /high_score = 0, /status_message = "Game started"
 *  - navigation: stay
 *  - persistence effect: write ENTITY_HIGH_SCORE via PERSIST_HIGH_SCORE_STORAGE
 */

import { writeHighScore } from "../prod-canvas-play-game/prod-canvas-play-game.repo";
import { ApplicationState } from "../prod-canvas-play-game/prod-canvas-play-game.types";

export const START_GAME_ACTION_REF = "ACT_START_GAME";
export const START_GAME_STATUS_MESSAGE = "Game started";
export const START_GAME_PHASE = "playing" as const;
export const START_GAME_HIGH_SCORE = 0;

export interface StartGameResult {
  state: ApplicationState;
  persisted: boolean;
}

/**
 * Applies the ACT_START_GAME state deltas to the given application state.
 * The function is pure: persistence is applied separately by the caller.
 */
export function applyStartGame(state: ApplicationState): ApplicationState {
  return {
    ...state,
    phase: START_GAME_PHASE,
    high_score: START_GAME_HIGH_SCORE,
    status_message: START_GAME_STATUS_MESSAGE,
  };
}

/**
 * Executes ACT_START_GAME: computes the next state and performs the
 * PERSIST_HIGH_SCORE_STORAGE write effect for /high_score.
 */
export function startGame(state: ApplicationState): StartGameResult {
  const next = applyStartGame(state);
  writeHighScore(next.high_score as number);
  return { state: next, persisted: true };
}
