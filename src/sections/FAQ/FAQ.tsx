import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "../../data/content";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./FAQ.module.css";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className={styles.wrap}>
          <Reveal>
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
              <Reveal key={faq.question} delay={index * 0.05} y={14}>
                <div className={styles.item}>
                  <button
                    id={buttonId}
                    className={styles.question}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    {faq.question}
                    <ChevronDown
                      size={20}
                      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`${styles.answerWrap} ${isOpen ? styles.answerWrapOpen : ""}`}
                  >
                    <div className={styles.answerInner}>
                      <p className={styles.answer}>{faq.answer}</p>
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
