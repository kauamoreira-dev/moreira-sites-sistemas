import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "../../data/content";
import { Reveal } from "../../components/Reveal/Reveal";
import { EASE_OUT } from "../../lib/motion";
import styles from "./FAQ.module.css";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className={styles.wrap}>
          <Reveal variant="title">
            <div className={styles.head}>
              <p className="eyebrow">Perguntas frequentes</p>
              <h2 className={styles.heading}>Antes de falar com a gente.</h2>
            </div>
          </Reveal>

          {faqItems.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;
            return (
              <Reveal key={faq.question} variant="text" delay={index * 0.05} y={14}>
                <div className={styles.item}>
                  <button
                    id={buttonId}
                    className={styles.question}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    {faq.question}
                    <motion.span
                      style={{ display: "inline-flex" }}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: reduceMotion ? 0.01 : 0.35, ease: EASE_OUT }}
                    >
                      <ChevronDown
                        size={20}
                        className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                        aria-hidden="true"
                      />
                    </motion.span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`${styles.answerWrap} ${isOpen ? styles.answerWrapOpen : ""}`}
                  >
                    <div className={styles.answerInner}>
                      <motion.p
                        className={styles.answer}
                        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -6 }}
                        transition={{
                          duration: reduceMotion ? 0.01 : 0.35,
                          delay: reduceMotion ? 0 : isOpen ? 0.1 : 0,
                          ease: EASE_OUT,
                        }}
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
