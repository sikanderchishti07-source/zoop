type P = { className?: string };

export function Star4({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12z" />
    </svg>
  );
}

export function Squiggle({ className = "" }: P) {
  return (
    <svg viewBox="0 0 120 24" fill="none" className={className} aria-hidden>
      <path
        d="M3 15C10 4 17 4 24 12s14 10 21 0 14-11 21-2 14 10 21 0 14-11 27-2"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Ring({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}

export function PlusSign({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M10 2h4v8h8v4h-8v8h-4v-8H2v-4h8V2z" />
    </svg>
  );
}

export function Bolt({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

export function Heart({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 21S3 14.7 3 8.6C3 5.5 5.4 3 8.4 3c1.6 0 3 .9 3.6 1.9C12.6 3.9 14 3 15.6 3 18.6 3 21 5.5 21 8.6 21 14.7 12 21 12 21z" />
    </svg>
  );
}

export function Drop({ className = "", filled = true }: P & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2C7.5 8.6 4 12.6 4 16a8 8 0 0 0 16 0c0-3.4-3.5-7.4-8-14z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2.4"
      />
    </svg>
  );
}

export function Check({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 13.5 9.5 19 20 6"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Burst({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="m12 0 2.5 6.8L21 4.5l-4.6 5.7L23 12l-6.6 1.8L21 19.5l-6.5-2.3L12 24l-2.5-6.8L3 19.5l4.6-5.7L1 12l6.6-1.8L3 4.5l6.5 2.3L12 0z" />
    </svg>
  );
}

export function ArrowScribble({ className = "" }: P) {
  return (
    <svg viewBox="0 0 90 70" fill="none" className={className} aria-hidden>
      <path
        d="M8 8c22 2 44 12 56 34 4 8 5 14 4 20"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="m58 54 10 9 3-14"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BoxIcon({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M3 8.5 12 4l9 4.5v9L12 22l-9-4.5v-9z M3 8.5l9 4.5 9-4.5 M12 13v9"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TruckIcon({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M2 6h12v11H2zM14 10h5l3 3v4h-8zM6.5 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm11 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlayIcon({ className = "" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="2.5" y="4" width="19" height="16" rx="4" stroke="currentColor" strokeWidth="2.2" />
      <path d="m10 9 6 3-6 3V9z" fill="currentColor" />
    </svg>
  );
}

export function Wave({ className = "", flip = false, fill = "#FFF6E8" }: P & { flip?: boolean; fill?: string }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={`block w-full h-12 sm:h-16 md:h-20 ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden
    >
      <path
        d="M0 50C120 20 240 5 360 15s240 45 360 40 240-45 360-45 240 30 360 20v60H0z"
        fill={fill}
      />
    </svg>
  );
}

const DOODLES: {
  Icon: (p: P) => React.ReactElement;
  cls: string;
  pos: string;
  w: string;
  delay: string;
  r: string;
}[] = [
  { Icon: Star4, cls: "text-coral", pos: "top-[12%] left-[4%]", w: "w-8", delay: "0s", r: "-8deg" },
  { Icon: Ring, cls: "text-teal", pos: "top-[22%] right-[6%]", w: "w-10", delay: ".7s", r: "0deg" },
  { Icon: PlusSign, cls: "text-sky", pos: "top-[64%] left-[7%]", w: "w-7", delay: "1.3s", r: "12deg" },
  { Icon: Bolt, cls: "text-sun", pos: "top-[78%] right-[10%]", w: "w-8", delay: ".4s", r: "-10deg" },
  { Icon: Heart, cls: "text-bubble", pos: "top-[44%] left-[14%]", w: "w-6", delay: "1.8s", r: "8deg" },
  { Icon: Squiggle, cls: "text-grape", pos: "top-[8%] left-[42%]", w: "w-24", delay: "1s", r: "-4deg" },
  { Icon: Star4, cls: "text-teal", pos: "top-[86%] left-[38%]", w: "w-6", delay: "2.2s", r: "16deg" },
  { Icon: Ring, cls: "text-coral", pos: "top-[36%] right-[16%]", w: "w-6", delay: "1.5s", r: "0deg" },
];

export function DoodleField({ className = "" }: P) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {DOODLES.map((d, i) => (
        <div
          key={i}
          className={`absolute animate-floaty ${d.pos} ${d.w} ${d.cls}`}
          style={{ animationDelay: d.delay, ["--r" as string]: d.r }}
        >
          <d.Icon className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}
