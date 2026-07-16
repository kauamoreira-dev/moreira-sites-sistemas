import { Fingerprint, Layers, Infinity as InfinityIcon } from "lucide-react";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./About.module.css";

const principles = [
  {
    icon: Fingerprint,
    title: "Identidade própria",
    text: "Cada projeto ganha uma cara sua — nada de template remontado com sua logo em cima.",
  },
  {
    icon: Layers,
    title: "Escopo real",
    text: "O sistema é desenhado a partir do seu processo, não encaixado à força num modelo pronto.",
  },
  {
    icon: InfinityIcon,
    title: "Relação contínua",
    text: "A entrega é o começo: o canal com quem desenvolveu o projeto continua aberto depois.",
  },
];

export function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <Reveal variant="title">
              <p className="eyebrow">Sobre a Moreira</p>
              <h2 className={styles.heading}>Um estúdio, não uma esteira de produção.</h2>
            </Reveal>

            <Reveal variant="text" delay={0.1}>
              <div className={styles.paragraphs}>
                <p>
                  A Moreira existe para preencher o espaço entre dois extremos: o site montado em uma tarde
                  num construtor genérico, e a agência grande onde o seu projeto vira só mais um número na
                  fila.
                </p>
                <p>
                  Aqui, <strong>cada site e cada sistema é desenhado e codado pensando no negócio específico</strong>{" "}
                  que vai usá-lo — um restaurante que precisa de comandas mais rápidas, uma empresa que
                  precisa de um sistema de gestão que ninguém vende pronto.
                </p>
                <p>O nome carrega um compromisso: o que sai daqui tem o padrão que a Moreira assina.</p>
              </div>
            </Reveal>
          </div>

          <Reveal variant="card" delay={0.15}>
            <div className={styles.card}>
              <span className={styles.cardLabel}>Como trabalhamos</span>
              {principles.map((p) => (
                <div className={styles.principle} key={p.title}>
                  <span className={styles.principleIcon}>
                    <p.icon size={19} aria-hidden="true" />
                  </span>
                  <div>
                    <div className={styles.principleTitle}>{p.title}</div>
                    <p className={styles.principleText}>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
