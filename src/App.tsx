import React from "react";

import {
  ProdCanvasPlayGameProvider,
  highScoreEntityValue,
  scoreDisplayValue,
  useApplicationActions,
  useApplicationState,
} from "./features/prod-canvas-play-game/prod-canvas-play-game.store";
import { PlayPageCanvasPlayGame } from "./screens/PlayPageCanvasPlayGame";

const PLAY_ROUTE_PATH = "/play";

function useIsPlayRoute(): boolean {
  if (typeof window === "undefined") return true;
  return window.location.pathname === PLAY_ROUTE_PATH;
}

function PlayPage(): React.ReactElement {
  const state = useApplicationState();
  const { startGame } = useApplicationActions();

  return (
    <PlayPageCanvasPlayGame
      actions={{ "start-game-1": startGame }}
      statusMessage={state.status_message}
      scoreValue={scoreDisplayValue(state)}
      highScoreValue={highScoreEntityValue(state)}
    />
  );
}

export default function App() {
  const isPlayRoute = useIsPlayRoute();

  return (
    <ProdCanvasPlayGameProvider>
      <div
        data-setfarm-root="baseline"
        data-testid="setfarm-app-root"
        data-route={
          isPlayRoute
            ? PLAY_ROUTE_PATH
            : typeof window === "undefined"
              ? PLAY_ROUTE_PATH
              : window.location.pathname
        }
        className="min-h-screen bg-slate-950 text-slate-100"
      >
        <PlayPage />
      </div>
    </ProdCanvasPlayGameProvider>
  );
}
