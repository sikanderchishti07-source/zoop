import { useState } from "react";
import { Star4 } from "./Doodles";

const LINKS = [
  { label: "Kits", href: "#kits" },
  { label: "How it works", href: "#how" },
  { label: "Gallery", href: "#gallery" },
  { label: "Plans", href: "#plans" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav({ cart }: { cart: number }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 py-3">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="ZOOP! Labs home">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border-[3px] border-ink bg-sun font-display text-2xl shadow-chunky-sm transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
            Z
          </span>
          <span className="font-display text-2xl sm:text-3xl leading-none">
            ZOOP<span className="text-coral">!</span>
            <span className="ml-1 hidden sm:inline text-xs font-body font-black uppercase tracking-widest text-ink-soft align-middle">
              Labs
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 font-body font-extrabold text-[15px] transition-colors hover:bg-sun"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={`Cart, ${cart} items`}
            className="relative grid h-11 w-11 place-items-center rounded-xl border-[3px] border-ink bg-cream shadow-chunky-sm btn-chunky"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
              <path
                d="M4 7h16l-1.5 12.5a2 2 0 0 1-2 1.5h-9a2 2 0 0 1-2-1.5L4 7z M8.5 10V6a3.5 3.5 0 0 1 7 0v4"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
            {cart > 0 && (
              <span
                key={cart}
                className="animate-badge-pop absolute -top-2.5 -right-2.5 grid h-6 min-w-6 place-items-center rounded-full border-2 border-ink bg-coral px-1 font-display text-xs text-paper"
              >
                {cart}
              </span>
            )}
          </button>
          <a
            href="#plans"
            className="hidden sm:inline-block rounded-xl border-[3px] border-ink bg-coral px-5 py-2.5 font-display text-lg text-paper shadow-chunky btn-chunky"
          >
            Get a kit
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden grid h-11 w-11 place-items-center rounded-xl border-[3px] border-ink bg-mint shadow-chunky-sm btn-chunky"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t-[3px] border-ink bg-paper px-4 pb-5 pt-2">
          <ul className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 font-display text-xl hover:bg-sun"
                >
                  <Star4 className="h-4 w-4 text-coral" />
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#plans"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-xl border-[3px] border-ink bg-coral px-4 py-3 text-center font-display text-xl text-paper shadow-chunky-sm"
              >
                Get a kit →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
