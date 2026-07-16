import { Check } from "lucide-react";
import { services } from "../../data/content";
import { Reveal } from "../../components/Reveal/Reveal";
import { SpotlightCard } from "../../components/SpotlightCard/SpotlightCard";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section id="servicos" className="section">
      <div className="container">
        <Reveal variant="title">
          <div className={styles.head}>
            <p className="eyebrow">Serviços</p>
            <h2 className={styles.heading}>Do primeiro rascunho ao sistema em produção.</h2>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Reveal key={service.title} variant="card" delay={index * 0.08}>
              <SpotlightCard className={styles.card}>
                <span className={styles.icon}>
                  <service.icon size={22} aria-hidden="true" />
                </span>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                <ul className={styles.items}>
                  {service.items.map((it) => (
                    <li key={it} className={styles.itemRow}>
                      <Check size={15} aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
