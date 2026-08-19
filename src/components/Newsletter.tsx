import { useState } from "react";
import confetti from "canvas-confetti";
import { IMG } from "../data";
import { prefersReducedMotion } from "../hooks/useReveal";
import Reveal from "./Reveal";
import { Star4 } from "./Doodles";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@") || email.length < 5) {
      setStatus("error");
      return;
    }
    setStatus("done");
    if (!prefersReducedMotion()) {
      confetti({
        particleCount: 160,
        spread: 100,
        origin: { x: 0.5, y: 0.7 },
        colors: ["#FFC53D", "#FF6B5E", "#17C3A8", "#58C7F3", "#FF8FD8", "#7B5FE0"],
      });
    }
  };

  return (
    <section id="club" className="relative scroll-mt-24 border-t-[3px] border-ink bg-ink py-20 sm:py-28">
      <div className="dots-overlay absolute inset-0 opacity-[0.07] invert" aria-hidden />
      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal from="left" className="mx-auto">
          <div className="relative">
            <div className="w-56 overflow-hidden rounded-full border-4 border-ink bg-mint shadow-[8px_9px_0_0_rgba(255,197,61,1)] rotate-3 sm:w-64">
              <img
                src={IMG.buddy}
                alt="Blip the blob holding a star"
                loading="lazy"
                className="block h-auto w-full"
                width={1024}
                height={1024}
              />
            </div>
            <Star4 className="absolute -right-4 -top-4 h-10 w-10 animate-wiggle text-sun" />
            <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 -rotate-2 whitespace-nowrap rounded-full border-[3px] border-ink bg-bubble px-4 py-1.5 font-hand text-xl shadow-chunky-sm">
              Blip approves!
            </p>
          </div>
        </Reveal>

        <Reveal from="right">
          <p className="font-hand text-3xl text-mint rotate-1">p.s.s.t. — free stuff ↓</p>
          <h2 className="mt-1 font-display text-[clamp(2.2rem,5.5vw,3.8rem)] leading-tight text-paper">
            JOIN THE ZOOP CLUB,
            <br />
            <span className="text-sun">GET FREE EXPERIMENTS</span>
          </h2>
          <p className="mt-4 max-w-md text-lg font-bold text-paper/75">
            One silly email a month: a free kitchen experiment, early access to
            new kits, and a coupon Ziggy definitely wasn&apos;t supposed to give you.
          </p>

          {status === "done" ? (
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border-[3px] border-ink bg-teal px-6 py-4 shadow-chunky">
              <Star4 className="h-6 w-6 text-paper" />
              <p className="font-display text-xl text-paper">
                BOOM! A welcome surprise is zooming to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-8 flex max-w-md flex-col gap-4 sm:flex-row" noValidate>
              <label htmlFor="club-email" className="sr-only">
                Email address
              </label>
              <input
                id="club-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="grownup@email.com"
                className={`w-full rounded-2xl border-[3px] border-ink bg-paper px-5 py-4 font-body font-bold text-ink outline-none placeholder:text-ink-soft/60 focus:ring-4 focus:ring-sun/70 ${
                  status === "error" ? "animate-wiggle ring-4 ring-coral/60" : ""
                }`}
              />
              <button
                type="submit"
                className="shrink-0 rounded-2xl border-[3px] border-sun bg-coral px-7 py-4 font-display text-xl text-paper shadow-[5px_6px_0_0_#FFC53D] btn-chunky"
              >
                ZOOP ME IN
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="mt-3 font-bold text-bubble">
              Hmm, that email looks wonky — one more try?
            </p>
          )}
          <p className="mt-4 text-sm font-bold text-paper/50">
            No spam. Unsubscribe whenever. Blip will be sad but brave.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
