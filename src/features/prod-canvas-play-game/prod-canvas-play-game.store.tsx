import React, {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

import { gameRuntime } from "../../game/game-runtime";
import {
  ApplicationState,
  ENTITY_HIGH_SCORE_REF,
} from "./prod-canvas-play-game.types";

const ApplicationStateContext = createContext<ApplicationState>(gameRuntime.getState());

/** Subscribes to the single STATE_APPLICATION instance. */
export function useApplicationState(): ApplicationState {
  return useSyncExternalStore(
    gameRuntime.subscribe,
    gameRuntime.getState,
    gameRuntime.getState,
  );
}

/** Action dispatchers bound to the runtime. */
export function useApplicationActions(): { startGame: () => void } {
  return useMemo(
    () => ({
      startGame: () => {
        gameRuntime.invokeAction("ACT_START_GAME");
      },
    }),
    [],
  );
}

/** Serialized value exposed by the score display surface. */
export function scoreDisplayValue(state: ApplicationState): string {
  return state.high_score === null ? "" : String(state.high_score);
}

/** Serialized high score entity value exposed by the score display surface. */
export function highScoreEntityValue(state: ApplicationState): string {
  return state.high_score === null ? "" : String(state.high_score);
}

export function ProdCanvasPlayGameProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const state = useApplicationState();
  return (
    <ApplicationStateContext.Provider value={state}>
      {children}
    </ApplicationStateContext.Provider>
  );
}

export function useApplicationStateContext(): ApplicationState {
  return useContext(ApplicationStateContext);
}

export const HIGH_SCORE_ENTITY_REF = ENTITY_HIGH_SCORE_REF;
