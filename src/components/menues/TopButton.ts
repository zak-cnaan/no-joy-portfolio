import styled from "styled-components";

const TopButton = styled.button`
  margin: 0;
  border: 0;
  display: inline-flex;
  padding: 0.25rem;

  background: none;
  color: hsl(var(--color-foreground));
  border-radius: 4px;
  transition: background-color 0.4s;
  cursor: pointer;

  &:hover {
    color: hsl(var(--color-background));
    background: hsl(var(--color-foreground));
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default TopButton;
