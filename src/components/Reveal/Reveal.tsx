import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li";
}

export function Reveal({ children, delay = 0, y = 28, className, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: reduceMotion ? 0.01 : 0.7, delay: reduceMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
