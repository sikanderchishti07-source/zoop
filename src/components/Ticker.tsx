import { Star4 } from "./Doodles";

export default function Ticker({
  items,
  className = "",
  reverse = false,
  fast = false,
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
  fast?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div
      className={`relative overflow-hidden border-y-[3px] border-ink select-none ${className}`}
      aria-hidden
    >
      <div
        className={`flex w-max animate-marquee ${reverse ? "marquee-reverse" : ""} ${fast ? "marquee-fast" : ""}`}
      >
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-5 pr-5 py-2.5 font-display text-sm sm:text-base tracking-wider whitespace-nowrap"
          >
            {t}
            <Star4 className="w-4 h-4 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
