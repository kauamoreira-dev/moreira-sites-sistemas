import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../../components/Button/Button";
import { Reveal } from "../../components/Reveal/Reveal";
import { VIEWPORT_ONCE } from "../../lib/motion";
import styles from "./CTA.module.css";

export function CTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section" style={{ paddingBlock: "var(--space-16)" }}>
      <Reveal variant="card">
        <div className={styles.band}>
          <motion.div
            className={styles.glow}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: reduceMotion ? 0.01 : 1.3, delay: reduceMotion ? 0 : 0.15 }}
          />
          <h2 className={styles.heading}>Vamos construir o próximo site ou sistema da sua empresa?</h2>
          <p className={styles.subtext}>
            Conte o que você precisa resolver. Em até um dia útil você recebe um retorno com os próximos
            passos.
          </p>
          <div className={styles.actions}>
            <Button href="#contato" variant="primary">
              Solicitar orçamento <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
