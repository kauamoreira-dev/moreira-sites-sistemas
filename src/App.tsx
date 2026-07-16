import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { MobileActionBar } from "./components/MobileActionBar/MobileActionBar";
import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import { Services } from "./sections/Services/Services";
import { Process } from "./sections/Process/Process";
import { Projects } from "./sections/Projects/Projects";
import { Tech } from "./sections/Tech/Tech";
import { Differentiators } from "./sections/Differentiators/Differentiators";
import { FAQ } from "./sections/FAQ/FAQ";
import { CTA } from "./sections/CTA/CTA";
import { Contact } from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Process />
        <Projects />
        <Tech />
        <Differentiators />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}

export default App;
