import styled from "styled-components";
import { responsive } from "../../assets/styles/bp";
import Card from "../../components/ui/Card";
import ProjectImg from "./ProjectImg";
import ProjectTitle from "./ProjectTitle";
import Badge from "../../components/ui/Badge";
import projectsList from "./propjects";

const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;

  ${responsive.min_sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${responsive.min_lg} {
    grid-template-columns: repeat(3, 1fr);
  }
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

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

function ProjectContainer() {
  return (
    <Container>
      {projectsList?.map((project) => (
        <Card key={project.id}>
          <ProjectImg src={project.image} alt={project.title} />
          <Padder>
            <ProjectTitle title={project.title} link={project.link} />
            <p>{project.text}</p>
            <Badges>
              {project.tags.length &&
                project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
            </Badges>
          </Padder>
        </Card>
      ))}
    </Container>
  );
}

export default ProjectContainer;
