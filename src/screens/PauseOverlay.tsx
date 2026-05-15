// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Menu, Pause, Play, RefreshCw, Settings } from "lucide-react";


export type PauseOverlayActionId = "button-1-1" | "button-2-2" | "button-3-3" | "button-4-4" | "resume-5" | "restart-level-6" | "quit-to-menu-7";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* BACKGROUND LAYER: Simulated Game Board 
            This layer sits behind the pause overlay and is subject to the backdrop blur. */}
      <div className="absolute inset-0 flex flex-col">
      {/* TopAppBar (Shared Component) */}
      <header className="fixed top-0 w-full z-10 flex justify-between items-center px-container-margin h-16 md:h-20 bg-surface-dim dark:bg-surface-dim border-b border-outline-variant bg-opacity-80 backdrop-blur-xl">
      {/* Leading Icon */}
      <button className="text-on-surface-variant font-medium hover:text-primary hover:drop-shadow-[0_0_10px_rgba(173,198,255,0.4)] transition-colors" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Menu className="text-[24px]" aria-hidden={true} focusable="false" />
      </button>
      {/* Headline / Brand */}
      <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg tracking-tighter text-primary dark:text-primary drop-shadow-[0_0_8px_rgba(173,198,255,0.5)] truncate max-w-[50%] text-center">
                      NEON BREAKOUT
                  </h1>
      {/* Trailing Icons */}
      <div className="flex gap-4 md:gap-6 items-center">
      <button className="text-on-surface-variant font-medium hover:text-primary hover:drop-shadow-[0_0_10px_rgba(173,198,255,0.4)] transition-colors" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle className="text-[24px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-primary font-bold hover:drop-shadow-[0_0_10px_rgba(173,198,255,0.4)] transition-colors" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Pause  style={{fontVariationSettings: "'FILL' 1"}} className="text-[24px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant font-medium hover:text-primary hover:drop-shadow-[0_0_10px_rgba(173,198,255,0.4)] transition-colors" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Settings className="text-[24px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Simulated Game Canvas */}
      <main className="flex-1 mt-[80px] mb-[80px] relative flex flex-col items-center pt-16 px-4 md:px-12">
      {/* Grid of Bricks */}
      <div className="w-full max-w-4xl grid grid-cols-6 md:grid-cols-10 gap-1 md:gap-2">
      {/* Row 1 */}
      <div className="h-6 md:h-8 bg-error border border-error-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80"></div>
      <div className="h-6 md:h-8 bg-error border border-error-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80 invisible"></div> {/* Destroyed */}
      <div className="h-6 md:h-8 bg-error border border-error-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80"></div>
      <div className="h-6 md:h-8 bg-error border border-error-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80"></div>
      <div className="h-6 md:h-8 bg-error border border-error-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80 invisible"></div>
      <div className="h-6 md:h-8 bg-error border border-error-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80"></div>
      <div className="h-6 md:h-8 bg-error border border-error-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80 hidden md:block"></div>
      <div className="h-6 md:h-8 bg-error border border-error-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80 hidden md:block"></div>
      <div className="h-6 md:h-8 bg-error border border-error-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80 hidden md:block"></div>
      <div className="h-6 md:h-8 bg-error border border-error-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80 hidden md:block"></div>
      {/* Row 2 */}
      <div className="h-6 md:h-8 bg-tertiary border border-tertiary-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80"></div>
      <div className="h-6 md:h-8 bg-tertiary border border-tertiary-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80"></div>
      <div className="h-6 md:h-8 bg-tertiary border border-tertiary-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80 invisible"></div>
      <div className="h-6 md:h-8 bg-tertiary border border-tertiary-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80"></div>
      <div className="h-6 md:h-8 bg-tertiary border border-tertiary-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80"></div>
      <div className="h-6 md:h-8 bg-tertiary border border-tertiary-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80"></div>
      <div className="h-6 md:h-8 bg-tertiary border border-tertiary-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80 hidden md:block"></div>
      <div className="h-6 md:h-8 bg-tertiary border border-tertiary-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80 hidden md:block"></div>
      <div className="h-6 md:h-8 bg-tertiary border border-tertiary-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80 hidden md:block invisible"></div>
      <div className="h-6 md:h-8 bg-tertiary border border-tertiary-container shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80 hidden md:block"></div>
      {/* Row 3 */}
      <div className="h-6 md:h-8 bg-primary-container border border-primary shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80"></div>
      <div className="h-6 md:h-8 bg-primary-container border border-primary shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80"></div>
      <div className="h-6 md:h-8 bg-primary-container border border-primary shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80"></div>
      <div className="h-6 md:h-8 bg-primary-container border border-primary shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80"></div>
      <div className="h-6 md:h-8 bg-primary-container border border-primary shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80 invisible"></div>
      <div className="h-6 md:h-8 bg-primary-container border border-primary shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80"></div>
      <div className="h-6 md:h-8 bg-primary-container border border-primary shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80 hidden md:block"></div>
      <div className="h-6 md:h-8 bg-primary-container border border-primary shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80 hidden md:block"></div>
      <div className="h-6 md:h-8 bg-primary-container border border-primary shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80 hidden md:block"></div>
      <div className="h-6 md:h-8 bg-primary-container border border-primary shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] rounded-sm opacity-80 hidden md:block"></div>
      </div>
      {/* Simulated Ball */}
      <div className="absolute bottom-[30%] left-[45%] w-4 h-4 bg-tertiary rounded-full shadow-[0_0_15px_rgba(255,183,134,0.9)]"></div>
      {/* Simulated Paddle */}
      <div className="absolute bottom-12 w-32 h-4 bg-primary-container rounded-full shadow-[0_0_10px_rgba(77,142,255,0.6)] border border-primary/50"></div>
      </main>
      {/* BottomNavBar / HUD (Shared Component) */}
      <nav className="fixed bottom-0 left-0 w-full z-10 flex justify-around items-center h-20 px-4 pb-safe bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant bg-opacity-90 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.5)] rounded-t-xl">
      {/* Item 1: SCORE */}
      <div className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant/30 transition-colors p-2 rounded-lg cursor-default">
      <Circle className="text-[20px] mb-1" aria-hidden={true} focusable="false" />
      <span className="font-hud-label text-hud-label uppercase tracking-widest text-[10px] md:text-hud-label">SCORE: 2500</span>
      </div>
      {/* Item 2: LIVES */}
      <div className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant/30 transition-colors p-2 rounded-lg cursor-default">
      <Circle className="text-[20px] mb-1 text-error/80" aria-hidden={true} focusable="false" />
      <span className="font-hud-label text-hud-label uppercase tracking-widest text-[10px] md:text-hud-label">LIVES: 3</span>
      </div>
      {/* Item 3: LEVEL */}
      <div className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant/30 transition-colors p-2 rounded-lg cursor-default">
      <Circle className="text-[20px] mb-1 text-primary/80" aria-hidden={true} focusable="false" />
      <span className="font-hud-label text-hud-label uppercase tracking-widest text-[10px] md:text-hud-label">LEVEL: 04</span>
      </div>
      {/* Item 4: INPUT */}
      <div className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant/30 transition-colors p-2 rounded-lg hidden md:flex cursor-default">
      <Circle className="text-[20px] mb-1" aria-hidden={true} focusable="false" />
      <span className="font-hud-label text-hud-label uppercase tracking-widest text-[10px] md:text-hud-label">INPUT: KEYS</span>
      </div>
      </nav>
      </div>
      {/* FOREGROUND LAYER: Pause Overlay 
            This is the active UI intercepting user input. */}
      <div className="fixed inset-0 z-[100] bg-background/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      {/* Ambient Background Glow for Modal */}
      <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-container/20 blur-[100px] rounded-full pointer-events-none"></div>
      {/* Central Modal Panel */}
      <div className="relative w-full max-w-sm bg-surface-container-high border border-outline-variant/60 shadow-[0_10px_40px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden flex flex-col">
      {/* Top Edge Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"></div>
      <div className="p-8 flex flex-col items-center">
      {/* Decorative Icon Header */}
      <div className="w-16 h-16 rounded-full bg-surface border border-outline-variant/50 shadow-[0_0_20px_rgba(173,198,255,0.15)] flex items-center justify-center mb-6">
      <Pause  style={{fontVariationSettings: "'FILL' 1"}} className="text-[32px] text-primary" aria-hidden={true} focusable="false" />
      </div>
      {/* Modal Title */}
      <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tighter drop-shadow-[0_0_12px_rgba(173,198,255,0.5)] mb-10 text-center">
                          GAME PAUSED
                      </h2>
      {/* Action Buttons Container */}
      <div className="w-full flex flex-col gap-4">
      {/* Primary Action */}
      <button className="w-full h-14 bg-primary-container text-on-primary-container font-button-text text-[16px] font-bold rounded-xl flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(77,142,255,0.2)] hover:shadow-[0_0_20px_rgba(77,142,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-colors duration-200" type="button" data-action-id="resume-5" onClick={actions?.["resume-5"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} className="text-[24px]" aria-hidden={true} focusable="false" />
                              Resume
                          </button>
      {/* Secondary Action 1 */}
      <button className="w-full h-14 bg-surface-dim text-on-surface border border-outline-variant font-button-text text-button-text rounded-xl flex items-center justify-center gap-3 hover:bg-surface-variant/50 hover:border-primary-container hover:text-primary-container hover:shadow-[0_0_10px_rgba(173,198,255,0.1)] active:scale-[0.98] transition-colors duration-200" type="button" data-action-id="restart-level-6" onClick={actions?.["restart-level-6"]}>
      <RefreshCw className="text-[20px]" aria-hidden={true} focusable="false" />
                              Restart Level
                          </button>
      {/* Secondary Action 2 (Destructive Intent) */}
      <button className="w-full h-14 bg-surface-dim text-on-surface border border-outline-variant font-button-text text-button-text rounded-xl flex items-center justify-center gap-3 hover:bg-error-container/10 hover:border-error/50 hover:text-error hover:shadow-[0_0_10px_rgba(255,180,171,0.1)] active:scale-[0.98] transition-colors duration-200" type="button" data-action-id="quit-to-menu-7" onClick={actions?.["quit-to-menu-7"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                              Quit to Menu
                          </button>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
