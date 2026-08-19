import { STEPS } from "../data";
import Reveal from "./Reveal";
import { BoxIcon, Burst, PlayIcon, TruckIcon, Wave } from "./Doodles";

const ICONS: Record<string, (p: { className?: string }) => React.ReactElement> = {
  box: BoxIcon,
  truck: TruckIcon,
  play: PlayIcon,
  burst: Burst,
};

export default function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-24">
      <Wave fill="#FFC53D" flip className="bg-paper" />
      <div className="relative bg-sun py-16 sm:py-24">
        <div className="dots-overlay absolute inset-0 opacity-[0.06]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="mb-14 text-center">
            <p className="font-hand text-3xl text-coral rotate-2">stupidly simple ↓</p>
            <h2 className="mt-1 font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-none">
              FROM YOUR DOOR TO <span className="text-coral">KA-BOOM</span>
            </h2>
          </Reveal>

          <div className="relative">
            <div
              className="absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 border-t-4 border-dashed border-ink/25 lg:block"
              aria-hidden
            />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {STEPS.map((s, i) => {
                const Icon = ICONS[s.icon];
                return (
                  <Reveal key={s.n} delay={i * 150}>
                    <div
                      className={`group relative h-full rounded-3xl border-[3px] border-ink bg-paper p-6 pt-9 shadow-chunky transition-transform duration-300 hover:-translate-y-2 hover:rotate-0 ${
                        i % 2 ? "rotate-1" : "-rotate-1"
                      }`}
                    >
                      <span className="absolute -left-3 -top-4 grid h-11 w-11 place-items-center rounded-full border-[3px] border-ink bg-ink font-display text-xl text-sun">
                        {s.n}
                      </span>
                      <div
                        className={`mb-4 grid h-16 w-16 place-items-center rounded-2xl border-[3px] border-ink text-paper shadow-chunky-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${s.bg}`}
                      >
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="font-display text-2xl leading-tight">{s.title}</h3>
                      <p className="mt-2 font-bold text-ink-soft">{s.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Wave fill="#FFC53D" className="bg-paper" />
    </section>
  );
}
