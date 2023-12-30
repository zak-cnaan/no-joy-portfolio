import styled from "styled-components";
import StyledContainer from "../components/container/StyledContainer";
import GradieatSpan from "./GradieatSpan";

const Hero1 = styled(StyledContainer)`
  padding: 2.5rem 2rem;
  text-align: center;
  max-width: var(--bp-sm);
`;
const Text = styled.p`
  color: var(--gray-11);
`;

function HomeHero() {
  return (
    <Hero1>
      <h1>
        Lorem ipsum dolor, sit
        <br />
        <GradieatSpan>zak cnaan</GradieatSpan> elit.
      </h1>
      <Text>
        Lorem ipsum dolor sit adipisicing elit. Autem explicabo expedita
        consequuntur aspernatur, sit aut consequatur quos, doloribus ab dolor
        laboriosam reiciendis nostrum assumenda esse repudiandae, at quae.
        Saepe, nisi?
      </Text>
    </Hero1>
  );
}

export default HomeHero;
