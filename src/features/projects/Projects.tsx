import styled from "styled-components";
import StyledContainer from "../../components/container/StyledContainer";
import SectionTitle from "../SectionTitle";
import ProjectContainer from "./ProjectContainer";

const Container = styled(StyledContainer)`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`;

function Projects() {
  return (
    <Container>
      <SectionTitle text="Featured projects" />
     <ProjectContainer />
    </Container>
  );
}

export default Projects;
