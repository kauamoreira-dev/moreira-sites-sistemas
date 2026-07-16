import { processSteps } from "../../data/content";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Process.module.css";

export function Process() {
  return (
    <section id="processo" className="section">
      <div className="container">
        <Reveal>
          <div className={styles.head}>
            <p className="eyebrow">Processo</p>
            <h2 className={styles.heading}>Cinco etapas, do primeiro contato ao suporte contínuo.</h2>
          </div>
        </Reveal>

        <div className={styles.list}>
          <div className={styles.line} aria-hidden="true" />
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.06} y={18}>
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
