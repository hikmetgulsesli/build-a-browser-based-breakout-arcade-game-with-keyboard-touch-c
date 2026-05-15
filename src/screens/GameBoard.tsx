// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Menu, Pause, Settings } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "button-3-3" | "button-4-4";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-container-margin h-16 md:h-20 bg-surface-dim dark:bg-surface-dim border-b border-outline-variant bg-opacity-80 backdrop-blur-xl">
      {/* Leading Icon */}
      <button className="text-on-surface-variant hover:text-primary hover:drop-shadow-[0_0_10px_rgba(173,198,255,0.4)] transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-variant/30" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Menu  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      {/* Headline/Brand Logo */}
      <div className="text-primary dark:text-primary font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg tracking-tighter drop-shadow-[0_0_8px_rgba(173,198,255,0.5)]">
                  NEON BREAKOUT
              </div>
      {/* Trailing Icons */}
      <div className="flex items-center gap-2">
      <button className="text-on-surface-variant hover:text-primary hover:drop-shadow-[0_0_10px_rgba(173,198,255,0.4)] transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-variant/30" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-primary hover:drop-shadow-[0_0_10px_rgba(173,198,255,0.4)] transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-variant/30" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Pause  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-primary hover:drop-shadow-[0_0_10px_rgba(173,198,255,0.4)] transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-variant/30 hidden md:flex" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Game Area */}
      <main className="flex-1 w-full h-full flex items-center justify-center pt-20 pb-24 px-4 md:px-8">
      {/* Playfield Container */}
      <div className="relative w-full max-w-4xl aspect-[4/3] md:aspect-video bg-[#0F172A] border border-outline-variant rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] flex flex-col items-center">
      {/* Grid Background Lines (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(51,65,85,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(51,65,85,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      {/* Bricks Area */}
      <div className="w-full pt-12 px-8 flex flex-col gap-2 z-10">
      {/* Row 1: Error/Red */}
      <div className="flex w-full gap-2 justify-center">
      <div className="h-6 flex-1 bg-error rounded-sm border border-white/20 neon-glow-error"></div>
      <div className="h-6 flex-1 bg-error rounded-sm border border-white/20 neon-glow-error opacity-0 scale-150 transition-colors duration-300"></div> {/* Shattered Brick */}
      <div className="h-6 flex-1 bg-error rounded-sm border border-white/20 neon-glow-error"></div>
      <div className="h-6 flex-1 bg-error rounded-sm border border-white/20 neon-glow-error"></div>
      <div className="h-6 flex-1 bg-error rounded-sm border border-white/20 neon-glow-error"></div>
      <div className="h-6 flex-1 bg-error rounded-sm border border-white/20 neon-glow-error"></div>
      </div>
      {/* Row 2: Tertiary/Orange */}
      <div className="flex w-full gap-2 justify-center">
      <div className="h-6 flex-1 bg-tertiary rounded-sm border border-white/20 neon-glow-tertiary"></div>
      <div className="h-6 flex-1 bg-tertiary rounded-sm border border-white/20 neon-glow-tertiary"></div>
      <div className="h-6 flex-1 bg-tertiary rounded-sm border border-white/20 neon-glow-tertiary"></div>
      <div className="h-6 flex-1 bg-tertiary rounded-sm border border-white/20 neon-glow-tertiary opacity-0 scale-150 transition-colors duration-300"></div> {/* Shattered Brick */}
      <div className="h-6 flex-1 bg-tertiary rounded-sm border border-white/20 neon-glow-tertiary"></div>
      <div className="h-6 flex-1 bg-tertiary rounded-sm border border-white/20 neon-glow-tertiary"></div>
      </div>
      {/* Row 3: Secondary/Purple */}
      <div className="flex w-full gap-2 justify-center">
      <div className="h-6 flex-1 bg-secondary rounded-sm border border-white/20 neon-glow-secondary"></div>
      <div className="h-6 flex-1 bg-secondary rounded-sm border border-white/20 neon-glow-secondary"></div>
      <div className="h-6 flex-1 bg-secondary rounded-sm border border-white/20 neon-glow-secondary"></div>
      <div className="h-6 flex-1 bg-secondary rounded-sm border border-white/20 neon-glow-secondary"></div>
      <div className="h-6 flex-1 bg-secondary rounded-sm border border-white/20 neon-glow-secondary"></div>
      <div className="h-6 flex-1 bg-secondary rounded-sm border border-white/20 neon-glow-secondary"></div>
      </div>
      {/* Row 4: Primary/Blue */}
      <div className="flex w-full gap-2 justify-center">
      <div className="h-6 flex-1 bg-primary rounded-sm border border-white/20 neon-glow-primary"></div>
      <div className="h-6 flex-1 bg-primary rounded-sm border border-white/20 neon-glow-primary"></div>
      <div className="h-6 flex-1 bg-primary rounded-sm border border-white/20 neon-glow-primary"></div>
      <div className="h-6 flex-1 bg-primary rounded-sm border border-white/20 neon-glow-primary"></div>
      <div className="h-6 flex-1 bg-primary rounded-sm border border-white/20 neon-glow-primary"></div>
      <div className="h-6 flex-1 bg-primary rounded-sm border border-white/20 neon-glow-primary"></div>
      </div>
      </div>
      {/* Particle effect pseudo-element for shattered brick */}
      <div className="absolute top-16 left-1/4 w-2 h-2 bg-error rounded-full blur-[1px] shadow-[0_0_10px_#ffb4ab] translate-x-4 translate-y-4"></div>
      <div className="absolute top-16 left-1/4 w-1 h-1 bg-error rounded-full blur-[1px] shadow-[0_0_8px_#ffb4ab] -translate-x-6 translate-y-2"></div>
      <div className="absolute top-[104px] right-1/3 w-2 h-2 bg-tertiary rounded-full blur-[1px] shadow-[0_0_10px_#ffb786] -translate-x-4 -translate-y-4"></div>
      <div className="absolute top-[104px] right-1/3 w-1.5 h-1.5 bg-tertiary rounded-full blur-[1px] shadow-[0_0_8px_#ffb786] translate-x-6 translate-y-6"></div>
      {/* Ball */}
      <div className="absolute top-2/3 left-1/2 w-4 h-4 bg-on-surface rounded-full shadow-[0_0_12px_2px_rgba(225,226,236,0.8)] -translate-x-1/2 -translate-y-1/2 z-20"></div>
      {/* Paddle */}
      <div className="absolute bottom-8 left-1/2 w-32 h-4 bg-primary rounded-full border border-white/30 neon-glow-primary -translate-x-[40%] z-20"></div>
      </div>
      </main>
      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-4 pb-safe bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant bg-opacity-90 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      {/* Item 1: SCORE */}
      <div className="flex flex-col items-center justify-center text-primary bg-primary-container/20 rounded-lg py-1 px-4 scale-98 transition-transform">
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-hud-label text-hud-label uppercase">SCORE: 2500</span>
      </div>
      {/* Item 2: LIVES */}
      <div className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant/30 transition-colors py-1 px-4 rounded-lg">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-error mb-1" aria-hidden={true} focusable="false" />
      <span className="font-hud-label text-hud-label uppercase text-tertiary dark:text-tertiary">LIVES: 3</span>
      </div>
      {/* Item 3: LEVEL */}
      <div className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant/30 transition-colors py-1 px-4 rounded-lg">
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-hud-label text-hud-label uppercase text-tertiary dark:text-tertiary">LEVEL: 04</span>
      </div>
      {/* Item 4: INPUT */}
      <div className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant/30 transition-colors py-1 px-4 rounded-lg hidden sm:flex">
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-hud-label text-hud-label uppercase text-tertiary dark:text-tertiary">INPUT: KEYS</span>
      </div>
      </nav>
    </>
  );
}
