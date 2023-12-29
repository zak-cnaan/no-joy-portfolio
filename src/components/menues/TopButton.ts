import styled from "styled-components";

const TopButton = styled.button`
  margin: 0;
  border: 0;
  display: inline-flex;
  padding: 0.25rem;

  background: none;
  color: var(--gray-12);
  border-radius: 4px;
  transition: background-color 0.4s;
  cursor: pointer;

  &:hover {
    color: hsl(var(--color-background));
    color: var(--gray-2);
    background: var(--gray-12);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default TopButton;
