import styled from "styled-components";
import GradieatSpan from "./GradieatSpan";

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

function SectionTitle(props: {text:string}){
    return(
        <Title><GradieatSpan>{props.text}</GradieatSpan></Title>

    )
}

export default SectionTitle