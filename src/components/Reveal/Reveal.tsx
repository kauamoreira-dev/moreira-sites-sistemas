import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE_OUT, VIEWPORT_ONCE } from "../../lib/motion";

type RevealVariant = "title" | "text" | "card";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li";
  /** título = entrada mais ampla; texto = sutil e rápida; card = leve profundidade (scale). */
  variant?: RevealVariant;
}

const PRESETS: Record<RevealVariant, { y: number; scale?: number; duration: number }> = {
  title: { y: 34, duration: DURATION.slow },
  text: { y: 16, duration: DURATION.fast },
  card: { y: 26, scale: 0.96, duration: DURATION.base },
};

export function Reveal({ children, delay = 0, y, className, as = "div", variant = "text" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];
  const preset = PRESETS[variant];
  const offsetY = y ?? preset.y;

  const initial = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: offsetY, ...(preset.scale ? { scale: preset.scale } : {}) };

  const animate = { opacity: 1, y: 0, ...(preset.scale ? { scale: 1 } : {}) };

  return (
    <Component
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={VIEWPORT_ONCE}
      transition={{
        duration: reduceMotion ? 0.01 : preset.duration,
        delay: reduceMotion ? 0 : delay,
        ease: EASE_OUT,
      }}
    >
      {children}
    </Component>
  );
}
