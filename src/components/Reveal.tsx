import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

const HIDDEN: Record<string, string> = {
  up: "translateY(34px)",
  down: "translateY(-34px)",
  left: "translateX(-40px)",
  right: "translateX(40px)",
  pop: "scale(0.82)",
};

export default function Reveal({
  children,
  delay = 0,
  from = "up",
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  from?: keyof typeof HIDDEN;
  className?: string;
  style?: CSSProperties;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(.2,.9,.3,1.05)] will-change-transform ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : HIDDEN[from],
        ...style,
      }}
    >
      {children}
    </div>
  );
}
