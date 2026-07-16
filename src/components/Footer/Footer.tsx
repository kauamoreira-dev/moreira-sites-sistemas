import { nav } from "../../data/content";
import { RiverLine } from "../RiverLine/RiverLine";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <RiverLine variant="divider" />
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <span className={styles.logoMark}>Moreira</span>
          <p className={styles.tagline}>
            Sites e sistemas sob medida, construídos com código limpo e atendimento direto — da região do
            Tapajós para quem quiser chegar longe.
          </p>
        </div>

        <div>
          <div className={styles.heading}>Navegação</div>
          <nav className={styles.list} aria-label="Navegação do rodapé">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <div className={styles.heading}>Contato</div>
          <div className={styles.list}>
            <a href="mailto:kauacirinom@icloud.com">kauacirinom@icloud.com</a>
            <a href="https://wa.me/5569984299960" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <span>Santarém, Pará — Brasil</span>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {year} Moreira | Sites &amp; Sistemas. Todos os direitos reservados.</span>
        <span>Projetos apresentados são demonstrativos, desenvolvidos para exibir capacidade técnica.</span>
      </div>
    </footer>
  );
}
