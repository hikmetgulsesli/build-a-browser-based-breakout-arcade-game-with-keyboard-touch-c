// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, Circle, Gavel, Menu, MousePointerClick, Pause, Settings } from "lucide-react";


export type ControlsHelpActionId = "button-1-1" | "button-2-2" | "button-3-3" | "button-4-4" | "back-to-menu-5";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-container-margin h-16 md:h-20 bg-surface-dim dark:bg-surface-dim bg-opacity-80 backdrop-blur-xl border-b border-outline-variant">
      <button aria-label="Menu" className="flex items-center justify-center p-2 text-primary dark:text-primary hover:text-primary hover:drop-shadow-[0_0_10px_rgba(173,198,255,0.4)] transition-colors active:scale-95 duration-100" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg tracking-tighter text-primary dark:text-primary drop-shadow-[0_0_8px_rgba(173,198,255,0.5)]">
                  NEON BREAKOUT
              </h1>
      <div className="flex items-center gap-2">
      <button aria-label="Volume" className="p-2 text-primary dark:text-primary hover:text-primary hover:drop-shadow-[0_0_10px_rgba(173,198,255,0.4)] transition-colors active:scale-95 duration-100" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Pause" className="p-2 text-primary dark:text-primary hover:text-primary hover:drop-shadow-[0_0_10px_rgba(173,198,255,0.4)] transition-colors active:scale-95 duration-100" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Pause aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Settings" className="p-2 text-primary dark:text-primary hover:text-primary hover:drop-shadow-[0_0_10px_rgba(173,198,255,0.4)] transition-colors active:scale-95 duration-100" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <main className="flex-grow container mx-auto px-container-margin max-w-4xl flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between mt-8 border-b border-outline-variant pb-4">
      <h2 className="font-headline-md text-headline-md text-primary">Controls &amp; Rules</h2>
      <button className="bg-[#334155] border border-outline-variant text-on-surface px-6 py-2 rounded font-button-text text-button-text hover:bg-surface-variant transition-colors flex items-center gap-2" type="button" data-action-id="back-to-menu-5" onClick={actions?.["back-to-menu-5"]}>
      <ArrowLeft className="text-sm" aria-hidden={true} focusable="false" />
                      Back to Menu
                  </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Controls Section */}
      <section className="bg-[#111827] panel-border rounded-xl p-6 flex flex-col gap-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
      <h3 className="font-hud-label text-hud-label text-tertiary uppercase flex items-center gap-2">
      <Circle className="text-tertiary text-lg" aria-hidden={true} focusable="false" />
                          Keyboard Controls
                      </h3>
      <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
      <span className="text-on-surface-variant">Move Paddle</span>
      <div className="flex gap-2">
      <kbd className="bg-surface-dim border border-outline-variant rounded px-2 py-1 font-hud-label text-hud-label text-primary shadow-[0_2px_0_#424754]">A</kbd>
      <kbd className="bg-surface-dim border border-outline-variant rounded px-2 py-1 font-hud-label text-hud-label text-primary shadow-[0_2px_0_#424754]">D</kbd>
      <span className="mx-1 text-outline">or</span>
      <kbd className="bg-surface-dim border border-outline-variant rounded px-2 py-1 font-hud-label text-hud-label text-primary shadow-[0_2px_0_#424754] material-symbols-outlined text-xs">arrow_left</kbd>
      <kbd className="bg-surface-dim border border-outline-variant rounded px-2 py-1 font-hud-label text-hud-label text-primary shadow-[0_2px_0_#424754] material-symbols-outlined text-xs">arrow_right</kbd>
      </div>
      </div>
      <div className="flex items-center justify-between">
      <span className="text-on-surface-variant">Launch / Pause</span>
      <kbd className="bg-surface-dim border border-outline-variant rounded px-6 py-1 font-hud-label text-hud-label text-primary shadow-[0_2px_0_#424754] tracking-widest">SPACE</kbd>
      </div>
      </div>
      <div className="h-px w-full bg-outline-variant/50 my-2"></div>
      <h3 className="font-hud-label text-hud-label text-tertiary uppercase flex items-center gap-2 mt-2">
      <MousePointerClick className="text-tertiary text-lg" aria-hidden={true} focusable="false" />
                          Touch &amp; Mouse
                      </h3>
      <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
      <span className="text-on-surface-variant">Move Paddle</span>
      <div className="flex items-center gap-2 text-primary font-hud-label text-hud-label">
      <span>Drag</span> <span className="text-outline">/</span> <span>Click &amp; Hold</span>
      </div>
      </div>
      <div className="flex items-center justify-between">
      <span className="text-on-surface-variant">Launch Ball</span>
      <div className="flex items-center gap-2 text-primary font-hud-label text-hud-label">
      <span>Tap Screen</span>
      </div>
      </div>
      </div>
      </section>
      {/* Rules Section */}
      <section className="bg-[#111827] panel-border rounded-xl p-6 flex flex-col gap-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-secondary/5 to-transparent pointer-events-none"></div>
      <h3 className="font-hud-label text-hud-label text-secondary uppercase flex items-center gap-2">
      <Gavel className="text-secondary text-lg" aria-hidden={true} focusable="false" />
                          Rules of Engagement
                      </h3>
      <ul className="flex flex-col gap-4">
      <li className="flex items-start gap-3">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary text-xl mt-0.5" aria-hidden={true} focusable="false" />
      <div>
      <strong className="block text-on-surface mb-1">Scoring</strong>
      <p className="text-on-surface-variant text-sm">Destroy bricks to earn points. Higher rows yield higher scores. Chaining multiple hits without touching the paddle multiplies your score.</p>
      </div>
      </li>
      <li className="flex items-start gap-3">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-tertiary text-xl mt-0.5" aria-hidden={true} focusable="false" />
      <div>
      <strong className="block text-on-surface mb-1">Power-ups</strong>
      <p className="text-on-surface-variant text-sm">Catch falling neon capsules to gain temporary advantages like Multi-Ball, Expanded Paddle, or Laser Cannons.</p>
      </div>
      </li>
      <li className="flex items-start gap-3">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-error text-xl mt-0.5" aria-hidden={true} focusable="false" />
      <div>
      <strong className="block text-on-surface mb-1">Lives</strong>
      <p className="text-on-surface-variant text-sm">You start with 3 lives. Letting the ball pass the bottom boundary costs one life. Game over when all lives are depleted.</p>
      </div>
      </li>
      </ul>
      </section>
      </div>
      </main>
    </>
  );
}
