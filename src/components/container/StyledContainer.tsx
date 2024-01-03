import React from "react";
import styled from "styled-components";
import { responsive } from "../../assets/styles/bp";

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
  max-width: var(--bp-lg);

  ${responsive.min_md} {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;
function StyledContainer(props: {
  as?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return <Container as={props.as} className={props.className}>{props.children}</Container>;
}

export default StyledContainer;
