import { GALLERY, IMG } from "../data";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="relative scroll-mt-24 overflow-hidden bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-16 text-center">
          <p className="font-hand text-3xl text-coral -rotate-2">warning: cuteness overload ↓</p>
          <h2 className="mt-1 font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-none">
            FRESH FROM THE <span className="text-teal">ZOOP SQUAD</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg font-bold text-ink-soft">
            Real kids, real explosions, real questionable haircuts. Tag{" "}
            <span className="rounded-full bg-mint px-2 font-black text-ink">#zoopsquad</span>{" "}
            and Ziggy might repost you.
          </p>
        </Reveal>

        <div className="flex flex-wrap items-start justify-center gap-8 sm:gap-10">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={i * 160} from={i % 2 ? "right" : "left"}>
              <figure
                className={`relative w-72 border-[3px] border-ink bg-cream p-3 pb-5 shadow-chunky-lg transition-all duration-300 hover:z-20 hover:rotate-0 hover:scale-[1.06] sm:w-80 ${g.rotate}`}
              >
                <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-3" aria-hidden />
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="h-56 w-full border-2 border-ink object-cover"
                  width={1024}
                  height={768}
                />
                <figcaption className="mt-3 text-center font-hand text-2xl leading-tight">
                  {g.caption}
                </figcaption>
                <span className="mt-2 block text-center font-body text-xs font-black uppercase tracking-widest text-ink-soft">
                  {g.note}
                </span>
              </figure>
            </Reveal>
          ))}

          <Reveal delay={480} from="pop">
            <div className="flex w-64 rotate-3 flex-col items-center rounded-3xl border-[3px] border-ink bg-mint p-6 text-center shadow-chunky-lg transition-all duration-300 hover:rotate-0 hover:scale-105">
              <div className="w-40 overflow-hidden rounded-full border-[3px] border-ink shadow-chunky-sm">
                <img
                  src={IMG.buddy}
                  alt="Blip the pink blob, Chief Fun Officer"
                  loading="lazy"
                  className="block h-auto w-full"
                  width={1024}
                  height={1024}
                />
              </div>
              <h3 className="mt-4 font-display text-2xl">Meet Blip</h3>
              <p className="font-hand text-2xl text-grape">Chief Fun Officer</p>
              <p className="mt-2 text-sm font-bold text-ink-soft">
                Approves every kit by hugging it. Has never rejected one.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
