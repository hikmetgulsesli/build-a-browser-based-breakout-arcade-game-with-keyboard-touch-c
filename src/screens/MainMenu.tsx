// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type MainMenuActionId = "start-game-1" | "controls-and-rules-2" | "high-scores-3" | "settings-4";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-pattern-overlay z-0 pointer-events-none opacity-50"></div>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Floating Bricks Simulation */}
      <div className="absolute top-[20%] left-[15%] w-24 h-8 border border-outline-variant rounded-sm opacity-20 transform -rotate-12"></div>
      <div className="absolute top-[60%] right-[20%] w-32 h-8 border border-outline-variant rounded-sm opacity-10 transform rotate-6"></div>
      <div className="absolute bottom-[15%] left-[30%] w-20 h-8 border border-outline-variant rounded-sm opacity-30 transform rotate-45"></div>
      {/* Ball Silhouette */}
      <div className="absolute top-[40%] right-[35%] w-6 h-6 rounded-full bg-primary/10 shadow-[0_0_20px_rgba(173,198,255,0.2)]"></div>
      </div>
      {/* Main Navigation (TopAppBar - Reinterpreted for a Game Menu context, typically hidden on pure Main Menu, but keeping as per Source of Truth if considered a top-level hub) */}
      {/* Note: Suppressing TopAppBar and BottomNavBar as this is a linear/transactional landing screen (Main Menu) acting as the entry point, prioritizing the canvas as per rules. */}
      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-container-margin py-xl w-full max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-xl">
      <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tighter drop-shadow-[0_0_12px_rgba(173,198,255,0.6)] mb-sm">NEON BREAKOUT</h1>
      <p className="font-hud-label text-hud-label text-tertiary uppercase tracking-widest">Arcade Edition v2.0</p>
      </div>
      {/* Menu Navigation Structure */}
      <div className="w-full max-w-sm flex flex-col gap-gutter">
      {/* Primary Action */}
      <button className="group w-full relative flex items-center justify-center px-lg py-md bg-primary text-on-primary rounded-lg font-button-text text-button-text hover:bg-primary-fixed transition-colors hover:scale-[1.02] active:scale-95 shadow-[0_0_15px_rgba(173,198,255,0.3)] hover:shadow-[0_0_25px_rgba(173,198,255,0.6)]" type="button" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
      <Play data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} className="mr-sm" aria-hidden={true} focusable="false" />
                      START GAME
                  </button>
      {/* Secondary Actions */}
      <button className="group w-full flex items-center justify-center px-lg py-md bg-surface border border-outline-variant text-on-surface rounded-lg font-button-text text-button-text hover:border-primary hover:text-primary transition-colors hover:bg-surface-variant/30 active:scale-95" type="button" data-action-id="controls-and-rules-2" onClick={actions?.["controls-and-rules-2"]}>
      <Circle className="mr-sm text-outline group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
                      CONTROLS &amp; RULES
                  </button>
      <button className="group w-full flex items-center justify-center px-lg py-md bg-surface border border-outline-variant text-on-surface rounded-lg font-button-text text-button-text hover:border-primary hover:text-primary transition-colors hover:bg-surface-variant/30 active:scale-95" type="button" data-action-id="high-scores-3" onClick={actions?.["high-scores-3"]}>
      <Circle className="mr-sm text-outline group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
                      HIGH SCORES
                  </button>
      <button className="group w-full flex items-center justify-center px-lg py-md bg-surface border border-outline-variant text-on-surface rounded-lg font-button-text text-button-text hover:border-primary hover:text-primary transition-colors hover:bg-surface-variant/30 active:scale-95" type="button" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <Settings className="mr-sm text-outline group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
                      SETTINGS
                  </button>
      </div>
      {/* Decorative Footer HUD Elements */}
      <div className="absolute bottom-lg w-full flex justify-between px-container-margin max-w-4xl mx-auto pointer-events-none opacity-50">
      <div className="flex items-center gap-sm">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase">System Online</span>
      </div>
      <div className="font-hud-label text-hud-label text-on-surface-variant uppercase">
                      Credits: 99
                  </div>
      </div>
      </main>
    </>
  );
}
