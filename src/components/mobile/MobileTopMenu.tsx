import styled from "styled-components";
import TopNav from "../menues/TopNav";
import { responsive } from "../../assets/styles/bp";

const Div = styled.div`
  ${responsive.min_md} {
    display: none;
  }
`;

function MobileTopMenu() {
  return (
    <Div>
      <button>Hamborger</button>
      <TopNav />
    </Div>
  );
}

export default MobileTopMenu;
