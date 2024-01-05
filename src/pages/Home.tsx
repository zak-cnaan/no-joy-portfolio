// import ColorSelect from "../features/ColorSelect";
import HomeHero from "../features/HomeHero";
import ContactSection from "../features/contact-section/ContactSection";
import Projects from "../features/projects/Projects";
import Skills from "../features/skills/Skills";

function Home() {
  return (
    <>
    {/* <ColorSelect /> */}
      <HomeHero />
      <Skills />
      <Projects />
      <ContactSection />
    </>
  );
}

export default Home;
