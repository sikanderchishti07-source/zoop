import type { MouseEvent } from "react";
import { KITS } from "../data";
import Reveal from "./Reveal";
import { ArrowScribble, Check, Drop, Star4 } from "./Doodles";

export default function Kits({
  onAdd,
}: {
  onAdd: (e: MouseEvent<HTMLButtonElement>, label: string) => void;
}) {
  return (
    <section id="kits" className="relative scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-14 text-center">
          <p className="font-hand text-3xl text-grape -rotate-2">the lineup ↓</p>
          <h2 className="mt-1 font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-none">
            PICK YOUR <span className="text-coral">CHAOS</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg font-bold text-ink-soft">
            Every box is a whole afternoon of WHOOSH, FIZZ and WOW — goggles,
            instructions and giggles included.
          </p>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3 md:gap-7">
          {KITS.map((kit, i) => (
            <Reveal
              key={kit.id}
              delay={i * 140}
              className={i === 1 ? "md:-translate-y-6" : ""}
            >
              <article
                className={`group flex h-full flex-col overflow-hidden rounded-3xl border-[3px] border-ink bg-cream shadow-chunky transition-transform duration-300 hover:-translate-y-2 hover:rotate-0 ${kit.rotate}`}
              >
                <div className="relative">
                  <img
                    src={kit.image}
                    alt={kit.name}
                    loading="lazy"
                    className="h-52 w-full border-b-[3px] border-ink object-cover transition-transform duration-500 group-hover:scale-105"
                    width={1024}
                    height={768}
                  />
                  <span
                    className={`absolute left-4 top-4 -rotate-6 rounded-full border-[3px] border-ink px-3 py-1 font-display text-xs tracking-wider ${kit.tagBg}`}
                  >
                    {kit.tag}
                  </span>
                  <span className="absolute right-4 top-4 rotate-3 rounded-full border-[3px] border-ink bg-paper px-3 py-1 font-display text-xs tracking-wider">
                    AGES {kit.ages}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl leading-tight">{kit.name}</h3>
                  <p className="mt-2 font-bold text-ink-soft">{kit.blurb}</p>

                  <ul className="mt-4 space-y-2">
                    {kit.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[15px] font-bold">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center gap-2">
                    <span className="font-display text-sm tracking-wide text-ink-soft">
                      MESS-O-METER
                    </span>
                    <span className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Drop
                          key={n}
                          filled={n <= kit.mess}
                          className={`h-4 w-4 ${n <= kit.mess ? "text-sky" : "text-ink/20"}`}
                        />
                      ))}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t-[3px] border-dashed border-ink/20 pt-5">
                    <p className="font-display text-4xl">
                      ${kit.price}
                      <span className="ml-1 align-middle font-body text-xs font-black uppercase text-ink-soft">
                        usd
                      </span>
                    </p>
                    <button
                      type="button"
                      onClick={(e) => onAdd(e, kit.name)}
                      className={`rounded-xl border-[3px] border-ink px-5 py-3 font-display text-lg text-paper shadow-chunky-sm btn-chunky ${kit.accent}`}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-16 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-hand text-2xl leading-tight text-grape">
                every kit ships with tiny goggles
                <br />+ our 30-day giggle guarantee
              </p>
            </div>
            <ArrowScribble className="h-14 w-16 -scale-x-100 rotate-12 text-grape" />
            <div className="grid h-16 w-16 place-items-center rounded-2xl border-[3px] border-ink bg-sun shadow-chunky-sm">
              <Star4 className="h-8 w-8 text-coral animate-wiggle" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
