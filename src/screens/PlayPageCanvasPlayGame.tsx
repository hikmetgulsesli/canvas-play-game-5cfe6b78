// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play Page - Canvas Play Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageCanvasPlayGameActionId = "start-game-1";

export interface PlayPageCanvasPlayGameProps {
  actions?: {
    "start-game-1"?: () => void;
  };

}

export type PlayPageCanvasPlayGameActionCallbacks = NonNullable<PlayPageCanvasPlayGameProps["actions"]>;

export function PlayPageCanvasPlayGame({ actions }: PlayPageCanvasPlayGameProps) {
  return (
    <>
      <div data-surface-id="SURF_PLAY_PAGE" className="flex-1 flex flex-col min-h-screen relative w-full" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_ROUTE_REMAINING OBS_START_GAME_STATUS_TEXT">
          {/* Header decorative bar (non-actionable) */}
          <header className="w-full border-b border-slate-800 bg-slate-900/80 px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50"></div>
              <span className="font-semibold text-lg tracking-tight text-white">Canvas Play Game</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono border border-slate-700/60">/play</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-xs text-slate-400">
                Status: <span className="text-emerald-400 font-medium">Ready</span>
              </div>
            </div>
          </header>
      
          {/* Main Workspace */}
          <main className="flex-1 max-w-7xl w-full mx-auto p-8 flex flex-col lg:flex-row gap-8 items-start">
            {/* Game Board / Canvas Container */}
            <section className="flex-1 w-full flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-white tracking-tight">Arena Viewport</h1>
                  <p className="text-sm text-slate-400 mt-0.5">Interactive 2D physics surface and gameplay stream</p>
                </div>
                <div className="text-xs font-mono text-slate-500 bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800">
                  60 FPS | 800 x 500
                </div>
              </div>
      
              {/* Contained Surface: SURF_GAME_CANVAS */}
              <div data-surface-id="SURF_GAME_CANVAS" className="w-full aspect-[16/10] bg-slate-900/90 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center group" data-setfarm-element-ref="E000002">
                {/* Canvas Grid Visual Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
                
                {/* Decorative canvas game elements */}
                <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center shadow-inner">
                    <div className="w-8 h-8 rounded-lg bg-emerald-400 animate-pulse"></div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-medium text-slate-200">Playground Initialized</p>
                    <p className="text-xs text-slate-400 max-w-xs">Render pipeline active. Awaiting round engagement.</p>
                  </div>
                </div>
      
                {/* Subtle viewport boundary markings */}
                <div className="absolute top-4 left-4 text-[10px] font-mono text-slate-600">POS (0, 0)</div>
                <div className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-600">POS (800, 500)</div>
              </div>
            </section>
      
            {/* Sidebar Controls & Score Metrics */}
            <aside className="w-full lg:w-96 flex flex-col gap-6">
              {/* Control Panel Card */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col gap-5">
                <div className="border-b border-slate-800/80 pb-4">
                  <h2 className="text-base font-semibold text-white">Session Controls</h2>
                  <p className="text-xs text-slate-400 mt-1">Start and manage live rounds on the canvas</p>
                </div>
      
                {/* Physical Control Slot: CSLOT_START_GAME_START_BUTTON */}
                <div className="flex flex-col gap-3">
                  <button data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/20 transition-colors flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900" data-setfarm-element-ref="E000003" data-observable-refs="OBS_START_GAME_START_BUTTON_STATE" type="button" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
                    <span>Start Game</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-500">Initiates game loop and synchronizes high score storage</p>
                </div>
      
                {/* Status Message Text (Contains 'Game started' text contract support) */}
                <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Current Phase</span>
                  <span className="text-xs font-semibold text-emerald-400">Game started</span>
                </div>
              </div>
      
              {/* Contained Surface: SURF_SCORE_DISPLAY */}
              <div data-surface-id="SURF_SCORE_DISPLAY" className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col gap-4" data-setfarm-element-ref="E000004" data-observable-refs="OBS_START_GAME_SCORE_VALUE">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Current Score</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">LIVE</span>
                </div>
                
                <div className="flex items-baseline justify-center py-4">
                  <span className="text-6xl font-extrabold tracking-tight text-white font-mono">0</span>
                </div>
      
                <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Session High Score</span>
                  <span className="font-mono text-slate-200 font-semibold">0</span>
                </div>
              </div>
            </aside>
          </main>
      
          {/* Footer decorative chrome (non-actionable) */}
          <footer className="w-full border-t border-slate-900 bg-slate-950 px-8 py-4 text-xs text-slate-500 flex items-center justify-between mt-auto">
            <span>Canvas Play Game Architecture</span>
            <span>UTF-8 Certified Environment</span>
          </footer>
        </div>
    </>
  );
}
