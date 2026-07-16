import { ArrowRight } from "lucide-react";
import { Button } from "../../components/Button/Button";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./CTA.module.css";

export function CTA() {
  return (
    <section className="section" style={{ paddingBlock: "var(--space-16)" }}>
      <Reveal>
        <div className={styles.band}>
          <div className={styles.glow} />
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
