import confetti from "canvas-confetti";
import { IMG } from "../data";
import { prefersReducedMotion } from "../hooks/useReveal";
import { ArrowScribble, Burst, DoodleField, Squiggle, Star4 } from "./Doodles";

function BounceWord({
  word,
  startDelay = 0,
  className = "",
}: {
  word: string;
  startDelay?: number;
  className?: string;
}) {
  return (
    <span className={`inline-block whitespace-nowrap ${className}`}>
      {word.split("").map((ch, i) => (
        <span
          key={i}
          className="letter"
          style={{ animationDelay: `${startDelay + i * 50}ms` }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const goKits = (e: React.MouseEvent) => {
    if (!prefersReducedMotion()) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      confetti({
        particleCount: 110,
        spread: 80,
        startVelocity: 38,
        origin: { x, y },
        colors: ["#FFC53D", "#FF6B5E", "#17C3A8", "#58C7F3", "#FF8FD8", "#7B5FE0"],
      });
    }
    document.getElementById("kits")?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      <div className="dots-overlay absolute inset-0 opacity-[0.05]" aria-hidden />
      <DoodleField />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pt-16">
        {/* ---- copy ---- */}
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-mint px-4 py-1.5 font-body text-sm font-black uppercase tracking-wider shadow-chunky-sm">
            <Star4 className="h-4 w-4 text-coral" />
            Science &amp; play kits for kids 4–12
          </p>

          <h1 className="font-display leading-[0.95] text-[clamp(3.2rem,9vw,6.8rem)]">
            <BounceWord word="GIANT" startDelay={80} />{" "}
            <BounceWord word="FUN" startDelay={380} className="text-grape" />
            <br />
            <BounceWord word="FOR" startDelay={620} />{" "}
            <BounceWord word="TINY" startDelay={760} className="text-teal" />
            <br />
            <span className="relative inline-block">
              <BounceWord word="HUMANS." startDelay={1000} className="text-coral" />
              <Squiggle className="squiggle-path absolute -bottom-3 left-0 w-full text-sun sm:-bottom-5" />
            </span>
          </h1>

          <p className="mt-8 max-w-md text-lg font-bold leading-relaxed text-ink-soft">
            ZOOP! Labs sends gloriously silly science kits to your door —
            erupting volcanoes, backyard rockets, glow-in-the-dark dino digs.
            <span className="text-ink"> Zero boring afternoons, guaranteed.</span>
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={goKits}
              className="rounded-2xl border-[3px] border-ink bg-coral px-8 py-4 font-display text-2xl text-paper shadow-chunky btn-chunky"
            >
              GRAB A KIT →
            </button>
            <a
              href="#gallery"
              className="rounded-2xl border-[3px] border-ink bg-cream px-6 py-4 font-display text-xl shadow-chunky-sm btn-chunky"
            >
              Peek the chaos ↓
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-extrabold text-ink-soft">
            <span className="flex items-center gap-1.5">
              <span className="flex text-coral">
                {[...Array(5)].map((_, i) => (
                  <Star4 key={i} className="h-4 w-4" />
                ))}
              </span>
              4.9 from 12,480 families
            </span>
            <span className="hidden h-4 w-[3px] rounded bg-ink/20 sm:block" />
            <span>Free shipping over $40</span>
            <span className="hidden h-4 w-[3px] rounded bg-ink/20 sm:block" />
            <span>30-day giggle guarantee</span>
          </div>
        </div>

        {/* ---- mascot ---- */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Burst className="absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow text-sun/70" />

          <div className="relative animate-bob">
            <div className="overflow-hidden rounded-[3rem] border-4 border-ink shadow-chunky-lg rotate-2">
              <img
                src={IMG.mascot}
                alt="Ziggy the ZOOP monster waving hello"
                className="block h-auto w-full"
                width={1024}
                height={1024}
              />
            </div>

            <div className="absolute -left-4 top-6 -rotate-6 rounded-2xl border-[3px] border-ink bg-cream px-4 py-2 font-hand text-2xl shadow-chunky-sm sm:-left-10">
              hi! i&apos;m Ziggy
            </div>

            <div className="absolute -right-3 bottom-10 rotate-6 rounded-full border-[3px] border-ink bg-bubble px-5 py-3 font-display text-sm tracking-wide shadow-chunky sm:-right-8">
              100% SILLY
            </div>

            <div className="absolute -top-5 right-8 rotate-12">
              <Star4 className="h-10 w-10 animate-wiggle text-coral" />
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-8 left-2 hidden text-grape sm:block">
            <ArrowScribble className="h-16 w-20 -scale-x-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
