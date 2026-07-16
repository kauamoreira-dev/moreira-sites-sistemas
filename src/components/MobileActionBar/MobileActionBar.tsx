import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "../Button/Button";
import styles from "./MobileActionBar.module.css";

export function MobileActionBar() {
  const [pastHero, setPastHero] = useState(false);
  const [nearContact, setNearContact] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setPastHero(window.scrollY > window.innerHeight * 0.65);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = [document.getElementById("contato"), document.querySelector("footer")].filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (targets.length === 0) return;

    const states = new Map<Element, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => states.set(entry.target, entry.isIntersecting));
        setNearContact(Array.from(states.values()).some(Boolean));
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !nearContact;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.bar}
          initial={{ y: reduceMotion ? 0 : 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: reduceMotion ? 0 : 80, opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button
            href="https://wa.me/5569984299960"
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            className={styles.whatsapp}
            aria-label="Conversar no WhatsApp"
          >
            <MessageCircle size={19} aria-hidden="true" />
          </Button>
          <Button href="#contato" variant="primary" style={{ flex: 1 }}>
            Solicitar orçamento
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
