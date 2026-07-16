import { useEffect, useState } from "react";

/** Curva de saída premium usada em toda a camada de animação do site. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

export const DURATION = {
  fast: 0.35,
  base: 0.55,
  slow: 0.75,
} as const;

export const VIEWPORT_ONCE = { once: true, margin: "-10% 0px -10% 0px" } as const;

/** Verdadeiro em telas pequenas ou dispositivos sem hover fino (touch) —
 *  usado para reduzir amplitude/duração das animações, nunca para desativá-las. */
export function useCoarsePointer() {
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: coarse), (max-width: 640px)");
    setCoarse(query.matches);
    const onChange = (event: MediaQueryListEvent) => setCoarse(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return coarse;
}
