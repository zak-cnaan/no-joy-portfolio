import React from "react"
import styled from "styled-components"
import responsiveDesign from "../../assets/styles/bp"

const Container = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 1rem;
    padding-left: 1rem;
    // max-width: ${responsiveDesign.get("md")};
    max-width: var(--bp-lg);
  
    ${responsiveDesign.get("md-up")} {
      padding-right: 2rem;
      padding-left: 2rem;
    }
`
function StyledContainer(props: {children: React.ReactNode, className?:string}){
    return <Container className={props.className}>{props.children}</Container>
}

export default StyledContainer