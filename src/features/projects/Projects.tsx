import styled from "styled-components";
import StyledContainer from "../../components/container/StyledContainer";
import { responsive } from "../../assets/styles/bp";
import GradiantTest from "../../components/sink/GradiantTest";
import GradieatSpan from "../GradieatSpan";

const projectsList = [
  {
    id: 1,
    image: "https://picsum.photos/600/300",
    title: "Ipsum dolor sit",
    link: "http://www.google.com",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates necessitatibus placeat tempore impedit! Voluptas esse sint inventore! Eius incidunt ipsam perspiciatis, dolorem ad quis tempore ab labore enim veritatis.",
    tags: ["jQuery", "HTML", "CSS"],
  },
  {
    id: 2,
    image: "https://picsum.photos/600/300",
    title: "Consectetur adipisicing elit",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates necessitatibus placeat tempore impedit! Voluptas esse sint inventore! Eius incidunt ipsam perspiciatis, dolorem ad quis tempore ab labore enim veritatis.",
    tags: ["jQuery", "HTML", "CSS"],
  },
  {
    id: 3,
    image: "https://picsum.photos/300/200",
    title: "Amet consectetur adipisicing",
    text: "text",
    tags: ["jQuery", "HTML", "CSS"],
  },
  {
    id: 4,
    image: "https://picsum.photos/300/200",
    title: "Eaque eius officia",
    text: "text",
    tags: ["jQuery", "HTML", "CSS"],
  },
  {
    id: 5,
    image: "https://picsum.photos/600/300",
    title: "title",
    text: "text",
    tags: ["jQuery", "HTML", "CSS"],
  },
  {
    id: 6,
    image: "https://picsum.photos/300/200",
    title: "title",
    text: "text",
    tags: ["jQuery", "HTML", "CSS"],
  },
];
const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;
const Container = styled(StyledContainer)`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`;
const ProjectContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;

  ${responsive.min_sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${responsive.min_md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const ProjectImg = styled.img`
  width: 100%;
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;

  ${responsive.min_sm} {
    height: 160px;
    object-fit: cover;
  }
  ${responsive.min_md} {
    height: 220px;
    object-fit: cover;
  }
`;
const ProjectCard = styled.div`
  background-color: var(--gray-2);
  border-radius: 0.25rem;
  position: relative;

  box-shadow: 0px 0px 0px 1px #000, 0px 0px 2px 1px #fff,
    0 0 8px rgba(0, 0, 0, 0.4), inset 0 -1px 1px rgba(255, 255, 255, 0.1);

  display: flex;
  flex-direction: column;
`;
const Padder = styled.div`
  flex: 1;
  padding: 0 1rem 1rem;
  display: flex;
  flex-direction: column;

  p {
    flex: 1;
  }
`;
const ProjectTitle = styled.h3`
  padding: 1rem 0 0.5rem 0;

  a{
    color:inherit;
    text-decoration-style:dashed;

    &::after{
        content:"";
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        transition: all 0.4s;
    }

    &:hover::after{
        /* background-color: red; */
        backdrop-filter: brightness(105%) saturate(140%);
    }
  }
`;
const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;
const Badge = styled.span`
  box-shadow: inset 0 0 0 1px var(--accent-a7), inset 0 0 0 1px var(--gray-a11);
  color: var(--accent-12);
  padding: 0 1rem;
  border-radius: 0.25rem;
  background-color: var(--color-surface-accent);
  font-size: var(--fontSize-xs);
`;
function Projects() {
  return (
    <Container>
      <Title><GradieatSpan>Featured projects</GradieatSpan></Title>
      <ProjectContainer>
        {projectsList.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImg src={project.image} alt={project.title} />
            <Padder>
              <ProjectTitle>
                {!project.link && project.title}
                {project.link && <a href={project.link} target="_blank">{project.title}</a>}
              </ProjectTitle>
              <p>{project.text}</p>

              <Badges>
                {project.tags.length &&
                  project.tags.map((tag) => <Badge>{tag}</Badge>)}
              </Badges>
            </Padder>
          </ProjectCard>
        ))}
      </ProjectContainer>
    </Container>
  );
}

export default Projects;
