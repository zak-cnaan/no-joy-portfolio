import styled from "styled-components";
import { responsive } from "../../assets/styles/bp";
import Badge from "../../components/ui/Badge";
import projectsList from "./propjects";
import { FaLink } from "react-icons/fa6";

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
const TextCard = styled.div`
  border-radius: 1rem;
  border-left: 0.5rem solid var(--accent-8);
  padding-left: 1rem;
`;
const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  ${responsive.min_md} {
    grid-template-columns: 2fr 3fr;
    gap: 4rem;
    align-items: center;
  }
`;
const ProjectContainerCSS = styled.div`
  display: grid;
  gap: 2rem;

  ${responsive.min_md} {
    gap: 4rem;
  }
`;
const ImageCard = styled.div`
  border-radius: 0.25rem;
  img {
    border-radius: inherit;
    width: 100%;

  }

  ${responsive.min_md} {
    order: -1;
  }
`;
const Link = styled.a`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--fontSize-lg);
  margin-top: 0.25rem;

  &:hover {
    text-decoration: underline;
  }
`;
const Title = styled.h3`
  font-weight: 100;
`;
function ProjectContainer() {
  return (
    <ProjectContainerCSS>
      {projectsList?.map((project) => (
        <ProjectCard key={project.id}>
          <TextCard>
            <Title>{project.title}</Title>

            <p>{project.text}</p>

            <Badges>
              {project.tags.length &&
                project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
            </Badges>
            {project.link && (
              <Link href={project.link} target="_blank">
                <FaLink />
                <span>{project.link}</span>
              </Link>
            )}
          </TextCard>
          <ImageCard>
            <img src={project.image} alt={project.title} />
          </ImageCard>
        </ProjectCard>
      ))}
    </ProjectContainerCSS>
  );
}

export default ProjectContainer;
