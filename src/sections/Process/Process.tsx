import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { processSteps } from "../../data/content";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Process.module.css";

export function Process() {
  const listRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start center", "end center"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section id="processo" className="section">
      <div className="container">
        <Reveal variant="title">
          <div className={styles.head}>
            <p className="eyebrow">Processo</p>
            <h2 className={styles.heading}>Cinco etapas, do primeiro contato ao suporte contínuo.</h2>
          </div>
        </Reveal>

        <div className={styles.list} ref={listRef}>
          <div className={styles.line} aria-hidden="true" />
          <motion.div
            className={styles.lineFill}
            aria-hidden="true"
            style={{ scaleY: reduceMotion ? scrollYProgress : smoothProgress }}
          />
          {processSteps.map((step, index) => (
            <Reveal key={step.number} variant="card" delay={index * 0.06} y={18}>
              <div className={styles.step}>
                <span className={styles.marker}>
                  <step.icon size={22} aria-hidden="true" />
                </span>
                <div className={styles.content}>
                  <span className={styles.number}>{step.number}</span>
                  <h3 className={styles.title}>{step.title}</h3>
                  <p className={styles.description}>{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
