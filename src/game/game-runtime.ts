/**
 * Runtime state container for the Canvas Play Game application.
 *
 * Holds the single STATE_APPLICATION instance, dispatches product actions and
 * exposes the state through the browser test bridge.
 */

import { readHighScore } from "../features/prod-canvas-play-game/prod-canvas-play-game.repo";
import {
  ApplicationState,
  STATE_APPLICATION_REF,
  createApplicationState,
} from "../features/prod-canvas-play-game/prod-canvas-play-game.types";
import {
  START_GAME_ACTION_REF,
  startGame,
} from "../features/surf-play-page/act_start_game";
import {
  ActionInvocationResult,
  TestBridge,
  installTestBridge,
} from "../test/bridge";

type Listener = () => void;

export class GameRuntime {
  private state: ApplicationState;

  private readonly listeners = new Set<Listener>();

  private bridge: TestBridge | null = null;

  constructor() {
    this.state = this.rehydrate();
  }

  /** Rehydration (initialization) of PERSIST_HIGH_SCORE_STORAGE. */
  private rehydrate(): ApplicationState {
    const state = createApplicationState();
    const stored = readHighScore();
    if (stored !== null) {
      state.high_score = stored;
    }
    return state;
  }

  getState = (): ApplicationState => this.state;

  subscribe = (listener: Listener): (() => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  private setState(next: ApplicationState): void {
    this.state = next;
    this.listeners.forEach((listener) => listener());
  }

  /** Executes a product action by reference. */
  invokeAction = (actionRef: string): ActionInvocationResult => {
    if (actionRef !== START_GAME_ACTION_REF) {
      return { ok: false, error: `UNKNOWN_ACTION:${actionRef}` };
    }
    const result = startGame(this.state);
    this.setState(result.state);
    return { ok: true };
  };

  getStateBindings = (): Record<string, unknown> => ({
    [STATE_APPLICATION_REF]: this.state,
  });

  /** Installs the browser test bridge (idempotent). */
  installBridge(): TestBridge {
    if (this.bridge) return this.bridge;
    this.bridge = installTestBridge(this.getStateBindings, this.invokeAction);
    return this.bridge;
  }
}

export const gameRuntime = new GameRuntime();

if (typeof window !== "undefined") {
  gameRuntime.installBridge();
}
