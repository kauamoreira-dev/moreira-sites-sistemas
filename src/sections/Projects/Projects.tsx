import { useRef, type MouseEvent } from "react";
import { projects, type Project } from "../../data/content";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Projects.module.css";

function accentVar(accent: Project["accent"]) {
  return accent === "gold" ? "var(--gold)" : "var(--tide)";
}

function MesaProntaMockup({ accent }: { accent: Project["accent"] }) {
  const color = accentVar(accent);
  const active = [1, 4, 6, 9];
  return (
    <div className={styles.mesaGrid}>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className={styles.mesaCell}
          style={active.includes(i) ? { background: color, opacity: 0.35, borderColor: color } : undefined}
        />
      ))}
    </div>
  );
}

function VagasMockup({ accent }: { accent: Project["accent"] }) {
  const color = accentVar(accent);
  const widths = ["70%", "45%", "58%"];
  return (
    <div className={styles.vagasList}>
      {widths.map((w, i) => (
        <div className={styles.vagasRow} key={i}>
          <span className={styles.vagasAvatar} style={{ background: color, opacity: 0.6 }} />
          <span className={styles.vagasBar} style={{ width: w }} />
        </div>
      ))}
    </div>
  );
}

function PratoMockup({ accent }: { accent: Project["accent"] }) {
  const color = accentVar(accent);
  return (
    <div className={styles.pratoList}>
      {[0, 1, 2].map((i) => (
        <div className={styles.pratoRow} key={i}>
          <div className={styles.pratoInfo}>
            <span className={styles.pratoThumb} style={{ background: color, opacity: 0.3 }} />
            <span className={styles.pratoBar} />
          </div>
          <span className={styles.pratoPrice} style={{ background: color, opacity: 0.7 }} />
        </div>
      ))}
    </div>
  );
}

const mockups: Record<string, (p: { accent: Project["accent"] }) => JSX.Element> = {
  MesaPronta: MesaProntaMockup,
  "Vagas Tapajós": VagasMockup,
  "Prato do Dia": PratoMockup,
};

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);
  const Mockup = mockups[project.name];

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  return (
    <article ref={ref} className={`spotlight ${styles.card}`} onMouseMove={handleMouseMove}>
      <span className={styles.badge}>Projeto demonstrativo</span>
      <div className={styles.mockup}>
        <div className={styles.chrome} aria-hidden="true">
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
        <Mockup accent={project.accent} />
      </div>
      <div className={styles.body}>
        <span className={styles.tag}>{project.tag}</span>
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.stack}>
          {project.stack.map((s) => (
            <span className={styles.pill} key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <Reveal>
          <div className={styles.head}>
            <div>
              <p className="eyebrow">Projetos</p>
              <h2 className={styles.heading}>Projetos demonstrativos que mostram como pensamos produto.</h2>
            </div>
            <p className={styles.note}>
              Interfaces construídas para apresentar capacidade técnica e de design — não sites de clientes
              reais.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
