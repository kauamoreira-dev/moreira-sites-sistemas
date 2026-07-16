import { type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Code2, Gauge, MessageSquareText } from "lucide-react";
import { Button } from "../../components/Button/Button";
import { RiverLine } from "../../components/RiverLine/RiverLine";
import styles from "./Hero.module.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 50, damping: 18, mass: 0.6 });
  const springY = useSpring(my, { stiffness: 50, damping: 18, mass: 0.6 });

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set(((event.clientX - rect.left) / rect.width - 0.5) * 28);
    my.set(((event.clientY - rect.top) / rect.height - 0.5) * 28);
  }

  return (
    <section id="top" className={`${styles.hero} section`} onMouseMove={handleMouseMove}>
      <div className={styles.glow} />
      <motion.div className={styles.riverWrap} style={{ x: springX, y: springY }}>
        <RiverLine variant="hero" delay={0.6} />
      </motion.div>

      <div className="container">
        <motion.div className={styles.inner} variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className={`eyebrow ${styles.eyebrow}`}>
            Estúdio de desenvolvimento web · Tapajós, Pará
          </motion.p>

          <motion.h1 variants={item} className={styles.headline}>
            Sites e <span className={styles.gradientWord}>sistemas</span> que carregam o padrão da sua empresa.
          </motion.h1>

          <motion.p variants={item} className={styles.lead}>
            Projetamos e construímos experiências digitais rápidas e sob medida — com o rigor de uma agência
            premium e o contato direto de quem escreve o código.
          </motion.p>

          <motion.div variants={item} className={styles.ctaRow}>
            <Button href="#contato" variant="primary">
              Solicitar orçamento
            </Button>
            <Button href="#projetos" variant="secondary">
              Ver projetos
            </Button>
          </motion.div>

          <motion.div variants={item} className={styles.trustRow}>
            <span className={styles.trustItem}>
              <Code2 size={18} aria-hidden="true" /> Código limpo
            </span>
            <span className={styles.trustItem}>
              <Gauge size={18} aria-hidden="true" /> Performance real
            </span>
            <span className={styles.trustItem}>
              <MessageSquareText size={18} aria-hidden="true" /> Atendimento direto
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
