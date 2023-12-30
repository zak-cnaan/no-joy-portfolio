import styled from "styled-components";
import StyledContainer from "../container/StyledContainer";

const Hero1 = styled(StyledContainer)`
  padding: 2.5rem 2rem;
  text-align: center;
  max-width: var(--bp-sm);
`;
const Text = styled.p`
  color: var(--gray-11);
`;
export const GradiantText2 = styled.span`
  --bg-1: var(--accent-10);
  --bg-2: var(--blue-10);
  --bg-3: var(--accent-8);

  color: var(--fgColor-done, var(--color-done-fg));
  color: inherit;
  background: linear-gradient(
      260deg,
      var(--bg-1) 0%,
      var(--bg-2) 50%,
      var(--bg-3) 80%
    ),
    currentColor;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;
const GradieatSpan = styled.span`
  --bg-1: var(--accent-11);
  --bg-2: var(--accent-12);
  --bg-3: var(--gray-11);
  --angle: 90deg;

  color: inherit;
  background: linear-gradient(
      var(--angle),
      var(--bg-1),
      var(--bg-2),
      var(--bg-3)
    ),
    currentColor;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
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
