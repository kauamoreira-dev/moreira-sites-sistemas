import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "../../data/content";
import { Button } from "../Button/Button";
import { EASE_OUT } from "../../lib/motion";
import styles from "./Header.module.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) {
      closeButtonRef.current?.focus();
    } else {
      menuButtonRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled || menuOpen ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} aria-label="Moreira | Sites & Sistemas — início">
          <span className={styles.logoMark}>Moreira</span>
          <span className={styles.logoTag}>SITES &amp; SISTEMAS</span>
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${active === item.href ? styles.navLinkActive : ""}`}
              aria-current={active === item.href ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button href="#contato" variant="primary" className={styles.cta}>
            Solicitar orçamento
          </Button>
          <button
            ref={menuButtonRef}
            className={styles.menuButton}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="x"
                  style={{ display: "inline-flex" }}
                  initial={reduceMotion ? undefined : { rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={reduceMotion ? undefined : { rotate: 90, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0.01 : 0.25, ease: EASE_OUT }}
                >
                  <X size={22} aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  style={{ display: "inline-flex" }}
                  initial={reduceMotion ? undefined : { rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={reduceMotion ? undefined : { rotate: -90, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0.01 : 0.25, ease: EASE_OUT }}
                >
                  <Menu size={22} aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              ref={panelRef}
              className={styles.mobilePanel}
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.99 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.3, ease: EASE_OUT }}
            >
              <button
                ref={closeButtonRef}
                className={styles.closeButton}
                onClick={() => setMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={26} aria-hidden="true" />
              </button>
              <nav className={styles.mobileLinks} aria-label="Navegação móvel">
                {nav.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={styles.mobileLink}
                    onClick={() => setMenuOpen(false)}
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduceMotion ? 0.01 : 0.35,
                      delay: reduceMotion ? 0 : 0.05 + index * 0.05,
                      ease: EASE_OUT,
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              <Button href="#contato" variant="primary" onClick={() => setMenuOpen(false)}>
                Solicitar orçamento
              </Button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
}
