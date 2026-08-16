import { useState } from "react";
import { FAQS } from "../data";
import Reveal from "./Reveal";

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 border-t-[3px] border-ink bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="mb-12 text-center">
          <p className="font-hand text-3xl text-coral rotate-2">grown-up questions ↓</p>
          <h2 className="mt-1 font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-none">
            BUT… IS IT <span className="text-teal">SAFE?</span>
          </h2>
          <p className="mt-4 text-lg font-bold text-ink-soft">
            (Yes. But here&apos;s everything else you&apos;re wondering too.)
          </p>
        </Reveal>

        <div className="space-y-5">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 90}>
                <div
                  className={`overflow-hidden rounded-2xl border-[3px] border-ink bg-paper shadow-chunky-sm transition-shadow duration-300 ${
                    isOpen ? "shadow-chunky" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-lg sm:text-xl leading-snug">
                      {f.q}
                    </span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border-[3px] border-ink bg-sun font-display text-xl transition-transform duration-300 ${
                        isOpen ? "rotate-45 bg-coral text-paper" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t-[3px] border-dashed border-ink/15 px-6 py-5 font-bold leading-relaxed text-ink-soft">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
