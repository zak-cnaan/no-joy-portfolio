import styled from "styled-components";
import StyledContainer from "../components/container/StyledContainer";

const Hero1 = styled(StyledContainer)`
  padding: 4rem 2rem;
  text-align: center;
  max-width: var(--bp-sm);
  font-size: var(--fontSize-xl2);

  .accent-color{
    color: var(--accent-11);
  }
`;
const Text = styled.p`
  /* color: var(--gray-11); */
`;

function HomeHero() {
  return (
    <Hero1>
      <h1>
        Hello<span className="accent-color">; </span>
        I<span className="accent-color">'</span>m zak<span className="accent-color">.</span>
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
