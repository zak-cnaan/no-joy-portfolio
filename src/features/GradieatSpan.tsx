import styled from "styled-components";

const GradieatSpan = styled.span`
  --bg-1: var(--accent-11);
  --bg-2: var(--accent-12);
  --bg-3: var(--accent-9);
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

export default GradieatSpan