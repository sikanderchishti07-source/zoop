import type { MouseEvent } from "react";
import { PLANS } from "../data";
import Reveal from "./Reveal";
import { Burst, Check } from "./Doodles";

export default function Pricing({
  onAdd,
}: {
  onAdd: (e: MouseEvent<HTMLButtonElement>, label: string) => void;
}) {
  return (
    <section id="plans" className="relative scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-14 text-center">
          <p className="font-hand text-3xl text-teal -rotate-1">join the club ↓</p>
          <h2 className="mt-1 font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-none">
            HOW ZOOP DO YOU <span className="text-grape">WANNA GO?</span>
          </h2>
        </Reveal>

        <div className="grid items-stretch gap-10 md:grid-cols-3 md:gap-7">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 140} className={p.featured ? "md:-translate-y-5" : ""}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border-[3px] border-ink p-7 shadow-chunky transition-transform duration-300 hover:-translate-y-2 hover:rotate-0 ${p.bg} ${p.rotate} ${
                  p.featured ? "shadow-chunky-lg md:scale-[1.04]" : ""
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-5 left-1/2 flex -translate-x-1/2 -rotate-2 items-center gap-1.5 whitespace-nowrap rounded-full border-[3px] border-ink bg-coral px-4 py-1.5 font-display text-sm tracking-wide text-paper shadow-chunky-sm">
                    <Burst className="h-4 w-4 text-sun" />
                    MOST ZOOPULAR
                  </span>
                )}
                <h3 className="font-display text-3xl">{p.name}</h3>
                <p className="mt-2 font-bold text-ink-soft">{p.desc}</p>
                <p className="mt-5 font-display text-6xl">
                  ${p.price}
                  <span className="ml-2 align-middle font-body text-sm font-black uppercase text-ink-soft">
                    {p.per}
                  </span>
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 font-bold">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 border-ink bg-teal">
                        <Check className="h-3 w-3 text-paper" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={(e) => onAdd(e, p.name)}
                  className={`mt-7 w-full rounded-2xl border-[3px] border-ink py-4 font-display text-xl shadow-chunky-sm btn-chunky ${
                    p.featured ? "bg-ink text-sun" : "bg-sun text-ink"
                  }`}
                >
                  {p.featured ? "START THE CLUB!" : "PICK THIS ONE"}
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={250}>
          <p className="mt-14 text-center font-bold text-ink-soft">
            All plans include the{" "}
            <span className="rounded-full bg-sun px-2 py-0.5 font-black text-ink">
              30-day giggle guarantee
            </span>{" "}
            — not laughing? Full refund, no interrogation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
