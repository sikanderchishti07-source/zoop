import confetti from "canvas-confetti";
import { prefersReducedMotion } from "../hooks/useReveal";
import { Heart, Star4 } from "./Doodles";

const COLS = [
  {
    title: "Shop",
    links: [
      { label: "All kits", href: "#kits" },
      { label: "Slime Volcano Lab", href: "#kits" },
      { label: "Fizzy Rocket Blast-Off", href: "#kits" },
      { label: "Glow Dino Dig", href: "#kits" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "How it works", href: "#how" },
      { label: "ZOOP squad gallery", href: "#gallery" },
      { label: "Fan mail", href: "#love" },
      { label: "Plans & pricing", href: "#plans" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Grown-up FAQ", href: "#faq" },
      { label: "Giggle guarantee", href: "#faq" },
      { label: "Join the club", href: "#club" },
      { label: "hello@zooplabs.fun", href: "mailto:hello@zooplabs.fun" },
    ],
  },
];

export default function Footer() {
  const pop = () => {
    if (!prefersReducedMotion()) {
      confetti({
        particleCount: 40,
        spread: 60,
        startVelocity: 25,
        origin: { x: 0.5, y: 0.9 },
        colors: ["#FFC53D", "#FF6B5E", "#17C3A8", "#58C7F3", "#FF8FD8"],
      });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <p
        className="text-outline-paper pointer-events-none select-none whitespace-nowrap text-center font-display leading-none text-[22vw] lg:text-[16rem]"
        aria-hidden
      >
        ZOOP!
      </p>

      <div className="relative mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <div className="grid gap-10 border-t border-paper/15 pt-12 md:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border-[3px] border-sun bg-sun font-display text-2xl text-ink">
                Z
              </span>
              <span className="font-display text-3xl leading-none">
                ZOOP<span className="text-coral">!</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs font-bold text-paper/65">
              Gigantic fun for tiny humans. Made in a garage that smells
              faintly of volcano.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                {
                  label: "Watch silly videos",
                  path: "m9 6.5 9 5.5-9 5.5v-11z M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z",
                },
                {
                  label: "See squad photos",
                  path: "M4 8h3l2-3h6l2 3h3v12H4V8z M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
                },
                {
                  label: "Chat with Ziggy",
                  path: "M4 5h16v11H9l-5 4V5z M8 9h8M8 12h5",
                },
              ].map((s) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={pop}
                  aria-label={s.label}
                  title={`${s.label} (Ziggy says hi!)`}
                  className="grid h-11 w-11 place-items-center rounded-xl border-[3px] border-paper/25 text-paper/80 transition-all duration-200 hover:-translate-y-1 hover:border-sun hover:text-sun"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                    <path
                      d={s.path}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-display text-xl text-sun">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-2 font-bold text-paper/65 transition-colors hover:text-paper"
                    >
                      <Star4 className="h-3 w-3 text-coral opacity-0 transition-opacity group-hover:opacity-100" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-paper/15 pt-6 sm:flex-row">
          <p className="text-sm font-bold text-paper/50">
            © 2026 ZOOP! Labs. All wiggles reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm font-bold text-paper/50">
            Made with
            <Heart className="h-4 w-4 animate-wiggle text-coral" />
            by tiny humans &amp; one monster
          </p>
        </div>
      </div>
    </footer>
  );
}
