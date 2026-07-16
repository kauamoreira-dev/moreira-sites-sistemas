import { techStack } from "../../data/content";
import { Reveal } from "../../components/Reveal/Reveal";
import { SpotlightCard } from "../../components/SpotlightCard/SpotlightCard";
import styles from "./Tech.module.css";

export function Tech() {
  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <Reveal>
          <div className={styles.head}>
            <p className="eyebrow">Tecnologias</p>
            <h2 className={styles.heading}>Ferramentas modernas, escolhidas por resultado — não por moda.</h2>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {techStack.map((tech, index) => (
            <Reveal key={tech.name} delay={index * 0.04}>
              <SpotlightCard className={styles.item}>
                <span className={styles.name}>{tech.name}</span>
                <span className={styles.role}>{tech.role}</span>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
