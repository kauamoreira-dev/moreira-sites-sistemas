import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "../../lib/motion";

interface RiverLineProps {
  /** "hero" = traço espesso com brilho, desenha-se ao carregar a página.
   *  "divider" = traço fino, discreto, revela-se ao rolar (assinatura recorrente). */
  variant?: "hero" | "divider";
  className?: string;
  delay?: number;
}

/**
 * Assinatura visual do estúdio: uma curva que representa ao mesmo tempo
 * o rio Tapajós e o "fluxo" de um produto bem construído. Reaparece,
 * discreta, como divisor entre seções.
 */
export function RiverLine({ variant = "divider", className, delay = 0 }: RiverLineProps) {
  const gradientId = useId();
  const glowId = useId();
  const reduceMotion = useReducedMotion();
  const isHero = variant === "hero";

  const path =
    "M0,150 C90,150 100,86 190,86 C280,86 300,40 400,40 C500,40 520,118 630,118 C720,118 750,64 850,52 C910,45 950,30 1000,18";

  const drawTransition = reduceMotion
    ? { duration: 0.01 }
    : { duration: isHero ? 2.1 : 1.4, ease: EASE_OUT, delay };

  return (
    <svg
      className={className}
      viewBox="0 0 1000 170"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ width: "100%", height: "100%", overflow: "visible" }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="170" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--gold)" />
          <stop offset="1" stopColor="var(--tide)" />
        </linearGradient>
        {isHero && (
          <filter id={glowId} x="-20%" y="-100%" width="140%" height="300%">
            <feGaussianBlur stdDeviation="10" result="blur" />
          </filter>
        )}
      </defs>

      {isHero && (
        <motion.path
          d={path}
          stroke={`url(#${gradientId})`}
          strokeWidth={6}
          strokeLinecap="round"
          filter={`url(#${glowId})`}
          opacity={0.55}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={drawTransition}
        />
      )}

      <motion.path
        d={path}
        stroke={`url(#${gradientId})`}
        strokeWidth={isHero ? 2.5 : 1.5}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={isHero ? undefined : { pathLength: 1, opacity: 1 }}
        animate={isHero ? { pathLength: 1, opacity: 1 } : undefined}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={drawTransition}
      />
    </svg>
  );
}
