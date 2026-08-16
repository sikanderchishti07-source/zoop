import { useCallback, useRef, useState } from "react";
import confetti from "canvas-confetti";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Kits from "./components/Kits";
import HowItWorks from "./components/HowItWorks";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import StatsStrip from "./components/StatsStrip";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { Check } from "./components/Doodles";
import { TICKER_ITEMS } from "./data";
import { usePrefersReducedMotion } from "./hooks/useReveal";

const CONFETTI_COLORS = [
  "#FFC53D",
  "#FF6B5E",
  "#17C3A8",
  "#58C7F3",
  "#FF8FD8",
  "#7B5FE0",
];

export default function App() {
  const [cart, setCart] = useState(0);
  const [toast, setToast] = useState<{ msg: string; id: number } | null>(null);
  const toastTimer = useRef<number | null>(null);
  const reduced = usePrefersReducedMotion();

  const addToCart = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, label: string) => {
      setCart((c) => c + 1);
      if (!reduced) {
        const r = e.currentTarget.getBoundingClientRect();
        confetti({
          particleCount: 80,
          spread: 75,
          startVelocity: 32,
          origin: {
            x: (r.left + r.width / 2) / window.innerWidth,
            y: r.top / window.innerHeight,
          },
          colors: CONFETTI_COLORS,
        });
      }
      setToast({ msg: `${label} — ZOOPED into your cart!`, id: Date.now() });
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
      toastTimer.current = window.setTimeout(() => setToast(null), 2400);
    },
    [reduced],
  );

  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      <Ticker items={TICKER_ITEMS} className="bg-ink text-sun" fast />
      <Nav cart={cart} />

      <main>
        <Hero />
        <Ticker items={TICKER_ITEMS} reverse className="bg-sun text-ink" />
        <Kits onAdd={addToCart} />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <StatsStrip />
        <Pricing onAdd={addToCart} />
        <FAQ />
        <Newsletter />
      </main>

      <Footer />

      {toast && (
        <div
          key={toast.id}
          role="status"
          className="animate-badge-pop fixed bottom-6 left-1/2 z-[100] -translate-x-1/2"
        >
          <p className="flex items-center gap-2.5 whitespace-nowrap rounded-2xl border-[3px] border-ink bg-teal px-5 py-3 font-display text-lg text-paper shadow-chunky">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-paper">
              <Check className="h-3.5 w-3.5 text-teal" />
            </span>
            {toast.msg}
          </p>
        </div>
      )}
    </div>
  );
}
