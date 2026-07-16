import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { projects, type Project } from "../../data/content";
import { Reveal } from "../../components/Reveal/Reveal";
import { EASE_OUT, useCoarsePointer } from "../../lib/motion";
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
  const mockupRef = useRef<HTMLDivElement>(null);
  const Mockup = mockups[project.name];
  const reduceMotion = useReducedMotion();
  const isCoarse = useCoarsePointer();
  const tiltEnabled = !reduceMotion && !isCoarse;

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springRx = useSpring(rx, { stiffness: 150, damping: 16, mass: 0.5 });
  const springRy = useSpring(ry, { stiffness: 150, damping: 16, mass: 0.5 });

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    }

    if (!tiltEnabled || !mockupRef.current) return;
    const mRect = mockupRef.current.getBoundingClientRect();
    const px = (event.clientX - mRect.left) / mRect.width - 0.5;
    const py = (event.clientY - mRect.top) / mRect.height - 0.5;
    ry.set(px * 9);
    rx.set(py * -9);
  }

  function handleMouseLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.article
      ref={ref}
      className={`spotlight ${styles.card}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.3, ease: EASE_OUT }}
    >
      <span className={styles.badge}>Projeto demonstrativo</span>
      <div className={styles.mockupTiltWrap}>
        <motion.div
          ref={mockupRef}
          className={styles.mockup}
          style={tiltEnabled ? { rotateX: springRx, rotateY: springRy } : undefined}
          animate={reduceMotion || isCoarse ? undefined : { y: [0, -5, 0] }}
          transition={
            reduceMotion || isCoarse ? undefined : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <div className={styles.chrome} aria-hidden="true">
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
          <Mockup accent={project.accent} />
        </motion.div>
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
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <div className={styles.head}>
          <Reveal variant="title">
            <div>
              <p className="eyebrow">Projetos</p>
              <h2 className={styles.heading}>Projetos demonstrativos que mostram como pensamos produto.</h2>
            </div>
          </Reveal>
          <Reveal variant="text" delay={0.1}>
            <p className={styles.note}>
              Interfaces construídas para apresentar capacidade técnica e de design — não sites de clientes
              reais.
            </p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal key={project.name} variant="card" delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
