import { differentiators } from "../../data/content";
import { Reveal } from "../../components/Reveal/Reveal";
import { SpotlightCard } from "../../components/SpotlightCard/SpotlightCard";
import styles from "./Differentiators.module.css";

export function Differentiators() {
  return (
    <section id="diferenciais" className="section">
      <div className="container">
        <div className={styles.wrap}>
          <div>
            <Reveal variant="title">
              <p className="eyebrow">Diferenciais</p>
              <h2 className={styles.heading}>Por que escolher um estúdio boutique.</h2>
            </Reveal>
            <Reveal variant="text" delay={0.1}>
              <p className={styles.subtext}>
                Sem promessas vagas: são escolhas concretas de como o trabalho é conduzido, do orçamento ao
                suporte pós-entrega.
              </p>
            </Reveal>
          </div>

          <div className={styles.grid}>
            {differentiators.map((d, index) => (
              <Reveal key={d.title} variant="card" delay={index * 0.08}>
                <SpotlightCard className={styles.card}>
                  <span className={`${styles.icon} ${index % 2 === 0 ? styles.iconGold : styles.iconTide}`}>
                    <d.icon size={20} aria-hidden="true" />
                  </span>
                  <div className={styles.title}>{d.title}</div>
                  <p className={styles.text}>{d.description}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
