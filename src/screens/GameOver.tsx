// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Home } from "lucide-react";


export type GameOverActionId = "play-again-1" | "main-menu-2";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* Background Layer (Darkened final game state) */}
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30" data-alt="A darkened, high-contrast arcade game screen showing a scattered pattern of glowing neon blue and purple rectangular blocks floating in a deep black void. A luminous paddle and a single trailing light orb are frozen in motion at the bottom edge. The overall scene is moody and cybernetic, typical of an 80s arcade cabinet but rendered with modern sharp lighting." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDV0uptpLXb3F-MFNJTovlP9DeJlC4A2LPJEik9Ht_BUgtjtsXMsKHHal4sXAOpSryP1PFOeeOcrii3a0NUgcsL0pY-gh-xJ-YqGhoGRxNa2NPJi-OPW3jG-Xm3ed70pqiFqCzYKrV8hEJp0eB7x71w1_5590a5raDC_OzhitCTkwpbRhc3ENpt69Qaw5UdpV4VNUVZsWarutPvcuKBcedGFBe-BxRKXrhE1D7kgmlX9wPKDDOz-NKVEIlSMrO95rF83zAQnIT7hxa_')"}}></div>
      {/* Heavy Backdrop Blur for the UI overlay */}
      <div className="absolute inset-0 z-10 backdrop-blur-[12px] bg-background/60"></div>
      {/* Main Content Canvas */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center px-container-margin py-xl w-full max-w-4xl mx-auto">
      {/* Game Over Container */}
      <div className="w-full bg-surface-container-high/80 border border-outline-variant rounded-xl p-lg md:p-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-md flex flex-col items-center text-center">
      {/* Headline */}
      <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-error mb-sm uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(255,180,171,0.6)]">
                      GAME OVER
                  </h1>
      {/* High Score Badge */}
      <div className="mb-lg inline-flex items-center gap-sm px-md py-sm bg-tertiary-container/20 border border-tertiary text-tertiary rounded-full font-hud-label text-hud-label uppercase shadow-[0_0_10px_rgba(255,183,134,0.3)]">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      NEW HIGH SCORE!
                  </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md w-full mb-xl">
      {/* Stat: Final Score */}
      <div className="bg-surface-container/50 border border-outline-variant rounded-lg p-md flex flex-col items-center justify-center">
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase mb-xs">Final Score</span>
      <span className="font-headline-md text-headline-md text-primary drop-shadow-[0_0_8px_rgba(173,198,255,0.4)]">2,500</span>
      </div>
      {/* Stat: Bricks Destroyed */}
      <div className="bg-surface-container/50 border border-outline-variant rounded-lg p-md flex flex-col items-center justify-center">
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase mb-xs">Bricks Destroyed</span>
      <span className="font-headline-md text-headline-md text-on-surface">142</span>
      </div>
      {/* Stat: Time Played */}
      <div className="bg-surface-container/50 border border-outline-variant rounded-lg p-md flex flex-col items-center justify-center">
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase mb-xs">Time Played</span>
      <span className="font-headline-md text-headline-md text-on-surface">04:23</span>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-md w-full max-w-md mx-auto">
      {/* Play Again */}
      <button className="flex-1 bg-[#3B82F6] hover:bg-primary-container text-white font-button-text text-button-text uppercase tracking-widest py-md px-lg rounded-lg shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-colors flex items-center justify-center gap-sm" type="button" data-action-id="play-again-1" onClick={actions?.["play-again-1"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                          PLAY AGAIN
                      </button>
      {/* Main Menu */}
      <button className="flex-1 bg-transparent border-2 border-outline-variant hover:border-primary text-on-surface hover:text-primary font-button-text text-button-text uppercase tracking-widest py-md px-lg rounded-lg transition-colors flex items-center justify-center gap-sm" type="button" data-action-id="main-menu-2" onClick={actions?.["main-menu-2"]}>
      <Home  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
                          MAIN MENU
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
