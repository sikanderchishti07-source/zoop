import { TESTIMONIALS } from "../data";
import Reveal from "./Reveal";
import { Star4, Wave } from "./Doodles";

export default function Testimonials() {
  return (
    <section id="love" className="relative scroll-mt-24">
      <Wave fill="#7FE3D2" flip className="bg-paper" />
      <div className="relative bg-mint py-16 sm:py-24">
        <div className="dots-overlay absolute inset-0 opacity-[0.05]" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal className="mb-14 text-center">
            <p className="font-hand text-3xl text-grape rotate-1">the fan mail ↓</p>
            <h2 className="mt-1 font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-none">
              GROWN-UPS TALK. <span className="text-coral">WE LISTEN.</span>
            </h2>
          </Reveal>

          <div className="grid gap-9 sm:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 130} from={i % 2 ? "right" : "left"}>
                <blockquote
                  className={`relative h-full rounded-3xl border-[3px] border-ink p-6 pb-7 shadow-chunky transition-transform duration-300 hover:rotate-0 hover:-translate-y-1.5 ${t.bg} ${t.rotate}`}
                >
                  <span
                    className={`absolute -bottom-[13px] left-10 h-6 w-6 rotate-45 border-b-[3px] border-r-[3px] border-ink ${t.bg}`}
                    aria-hidden
                  />
                  <div className="flex gap-1 text-coral">
                    {[...Array(t.stars)].map((_, s) => (
                      <Star4 key={s} className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="mt-3 text-lg font-extrabold leading-snug">
                    “{t.quote}”
                  </p>
                  <footer className="mt-5 flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-[3px] border-ink bg-ink font-display text-lg text-sun">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-display text-lg leading-none">{t.name}</p>
                      <p className="mt-1 text-sm font-bold text-ink-soft">{t.role}</p>
                    </div>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <Wave fill="#7FE3D2" className="bg-paper" />
    </section>
  );
}
