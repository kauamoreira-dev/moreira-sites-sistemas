import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "../../components/Button/Button";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Contact.module.css";

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const projectType = String(form.get("projectType") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = `Novo contato pelo site — ${projectType}`;
    const body = [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      phone ? `Telefone: ${phone}` : null,
      `Tipo de projeto: ${projectType}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    setSubmitting(true);
    window.location.href = `mailto:kauacirinom@icloud.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setStatus("Abrindo seu aplicativo de e-mail com a mensagem preenchida.");
    window.setTimeout(() => setSubmitting(false), 1800);
  }

  return (
    <section id="contato" className="section">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <Reveal variant="title">
              <p className="eyebrow">Contato</p>
              <h2 className={styles.heading}>Vamos conversar sobre o seu projeto.</h2>
            </Reveal>
            <Reveal variant="text" delay={0.1}>
              <p className={styles.subtext}>
                Preencha o formulário ou fale direto pelos canais abaixo — sem atendimento automático entre
                você e quem desenvolve.
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoRow}>
                  <Mail size={18} aria-hidden="true" />
                  <a href="mailto:kauacirinom@icloud.com">kauacirinom@icloud.com</a>
                </div>
                <div className={styles.infoRow}>
                  <MessageCircle size={18} aria-hidden="true" />
                  <a href="https://wa.me/5569984299960" target="_blank" rel="noreferrer">
                    Conversar no WhatsApp
                  </a>
                </div>
                <div className={styles.infoRow}>
                  <MapPin size={18} aria-hidden="true" />
                  <span>Santarém, Pará — atendimento remoto para todo o Brasil</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal variant="card" delay={0.1}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">
                    Nome
                  </label>
                  <input className={styles.input} id="name" name="name" type="text" required autoComplete="name" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className={styles.input}
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="phone">
                    Telefone (opcional)
                  </label>
                  <input className={styles.input} id="phone" name="phone" type="tel" autoComplete="tel" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="projectType">
                    Tipo de projeto
                  </label>
                  <div className={styles.selectWrap}>
                    <select
                      className={styles.select}
                      id="projectType"
                      name="projectType"
                      defaultValue="Site institucional"
                    >
                      <option>Site institucional</option>
                      <option>Sistema sob medida</option>
                      <option>Cardápio digital / e-commerce</option>
                      <option>Outro</option>
                    </select>
                    <ChevronDown className={styles.selectChevron} size={18} aria-hidden="true" />
                  </div>
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  className={styles.textarea}
                  id="message"
                  name="message"
                  required
                  placeholder="Conte um pouco sobre o seu negócio e o que você precisa."
                />
              </div>

              <div className={styles.submitRow}>
                <Button type="submit" variant="primary" disabled={submitting}>
                  {submitting ? "Abrindo..." : "Enviar mensagem"}
                  <Send size={16} aria-hidden="true" />
                </Button>
              </div>
              {status && (
                <div className={styles.status} role="status">
                  <CheckCircle2 size={18} aria-hidden="true" />
                  {status}
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
