import React, {useRef} from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import SpacerDiv from "./components/SpacerDiv";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const about = useRef(null);
  const menu = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (section) => {
    const targetRef = section === 'about'
      ? about
      : section === 'menu'
      ? menu
      : contact;

    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Header scrollToSection={scrollToSection}/>
      <Hero  scrollToSection={scrollToSection}/>
      <SpacerDiv />
      <section ref={about}>
        <About />
      </section>
      <SpacerDiv />
      <section ref={menu}>
        <Menu />
      </section>
      <SpacerDiv />
      <section ref={contact}>
        <Contact />
      </section>
      <SpacerDiv />
      <Footer scrollToSection={scrollToSection} />
    </>
  );
}
