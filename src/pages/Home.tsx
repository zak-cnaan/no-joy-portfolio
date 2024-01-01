import HomeHero from "../features/HomeHero";
import Projects from "../features/projects/Projects";
import Skills from "../features/skills/Skills";

function Home() {
  return (
    <>
      <HomeHero />
      <Skills />
      <Projects />
    </>
  );
}

export default Home;
