import { STATS } from "../data";
import Reveal from "./Reveal";
import { Bolt } from "./Doodles";

export default function StatsStrip() {
  return (
    <section className="border-y-[3px] border-ink bg-coral">
      <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 120}
            className={`px-4 py-8 text-center sm:py-10 ${
              i > 0 ? "border-l-[3px] border-dashed border-paper/40" : ""
            } ${i >= 2 ? "border-t-[3px] border-dashed border-paper/40 lg:border-t-0" : ""}`}
          >
            <p className="font-display text-4xl text-paper sm:text-5xl">
              {s.big}
              {i === 0 && <Bolt className="ml-1 inline h-7 w-7 text-sun" />}
            </p>
            <p className="mt-2 font-body text-sm font-black uppercase tracking-wider text-paper/90">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
