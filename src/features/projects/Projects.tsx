import styled from "styled-components";
import StyledContainer from "../../components/container/StyledContainer";
import ProjectContainer from "./ProjectContainer";

const Container = styled(StyledContainer)`
  padding-top: 4rem;
  padding-bottom: 4rem;
  font-size:var(--fontSize-xl);

`;
const H2 = styled.h2`
  margin-bottom: 1rem;
`
function Projects() {
  return (
    <Container>
      <H2>Featured projects</H2>
     <ProjectContainer />
    </Container>
  );
}

export default Projects;
