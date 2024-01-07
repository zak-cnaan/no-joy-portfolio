import styled from "styled-components";
import { responsive } from "../../assets/styles/bp";

const ProjectImg = styled.img`
  width: 100%;
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;

  ${responsive.min_sm} {
    height: 160px;
    object-fit: cover;
  }
  ${responsive.min_lg} {
    height: 220px;
    object-fit: cover;
  }
`;

export default ProjectImg