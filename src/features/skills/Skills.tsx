import styled from "styled-components";
import StyledContainer from "../../components/container/StyledContainer";
import SkillCard from "./SkillCard";
import { responsive } from "../../assets/styles/bp";
const DATA = [
  {
    title: "HTML, CSS & JS",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                eius, doloribus iste, fugit porro accusantium earum nesciunt vero
                suscipit sed magnam vel labore corrupti magni est dolore optio
                mollitia nobis!`,
    icons: ["html", "css", "js"],
  },
  {
    title: "CSS authoring tools",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                eius, doloribus iste, fugit porro accusantium earum nesciunt vero
                suscipit sed magnam vel labore corrupti magni est dolore optio
                mollitia nobis!`,
    icons: [
      "sassIcon",
      "emotionIcon",
      "bsIcon",
      "styledComponentsIcon",
      "tailwindIcon",
      "lessIcon",
      "cssModulesIcon",
    ],
  },
  {
    title: "React.js & ecosystem",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                eius, doloribus iste, fugit porro accusantium earum nesciunt vero
                suscipit sed magnam vel labore corrupti magni est dolore optio
                mollitia nobis!`,
    icons: ["reactIcon", "tsIcon", "reduxIcon", "jestIcon"],
  },
];
const Container = styled(StyledContainer)`
  padding-top: 4rem;
  padding-bottom: 4rem;
  font-size: var(--fontSize-xl);

  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  ${responsive.min_md} {
    grid-template-columns: 1fr 2fr;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
`;
const Section = styled.section`
  background-color: var(--gray-a3);
`;
const Sticky = styled.div`
  ${responsive.min_md} {
    position: sticky;
    top: 10rem;
  }
`;
function Skills() {
  return (
    <Section>
      <Container>
        <div>
          <Sticky>
            <h2>
              <>What I do</>
            </h2>
            <div className="text">
              Lorem ipsum dolor sit amet <a href="#">consectetur adipisicing</a>.{" "}
              I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.
            </div>
          </Sticky>
        </div>
        <SkillsContainer>
          {DATA.map((item) => {
            return (
              <SkillCard
                title={item.title}
                text={item.text}
                icons={item.icons}
              />
            );
          })}
        </SkillsContainer>
      </Container>
    </Section>
  );
}

export default Skills;
