import styled from "styled-components";

const ProjectTitleCSS = styled.h3`
  padding: 1rem 0 0.5rem 0;

  a {
    color: inherit;
    text-decoration-style: dashed;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      transition: all 0.4s;
    }

    &:hover::after {
      backdrop-filter: brightness(105%) saturate(140%);
    }
  }
`;

function ProjectTitle(props: { link?: string; title: string }) {
  const project = props;
  return (
    <ProjectTitleCSS>
      {!project.link && project.title}
      {project.link && (
        <a href={project.link} target="_blank">
          {project.title}
        </a>
      )}
    </ProjectTitleCSS>
  );
}

export default ProjectTitle;
