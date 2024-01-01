import styled from "styled-components";
import StyledContainer from "../../components/container/StyledContainer";
import GradieatSpan from "../GradieatSpan";
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
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`;
const HeroText = styled(StyledContainer)`
  max-width: var(--bp-sm);
  text-align: center;
  margin-bottom: 2rem;

  .text {
    color: var(--gray-11);
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  ${responsive.min_sm} {
    > div{
    max-width: var(--bp-sm);
    }
  }

  ${responsive.min_md} {
  align-items: initial;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

  }
`;
function Skills() {
  return (
    <>
      <Container>
        <HeroText>
          <h2>
            <GradieatSpan>What I do</GradieatSpan>
          </h2>
          <div className="text">
            Lorem ipsum dolor sit amet <a href="#">consectetur adipisicing</a>{" "}
            elit. Ex, vitae laboriosam tempore modi voluptas, saepe impedit
            laborum debitis consequatur voluptatibus enim at. Fuga commodi
            laborum dignissimos ab facilis libero voluptatibus.
          </div>
        </HeroText>

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
    </>
  );
}

export default Skills;
