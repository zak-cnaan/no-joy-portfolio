import styled from "styled-components";
import _Container from "../container/StyledContainer";
import TopNav from "../menues/TopNav";
import ChangeTheme from "./ChangeTheme";
import MobileTopMenu from "../mobile/MobileTopMenu";
import { responsive } from "../../assets/styles/bp";
import { Link } from "react-router-dom";
import Paths from "../../routes/Paths";

const Div = styled.div`
  display: none;

  ${responsive.min_lg} {
    display: block;
    margin-left: auto;
  }
`;

const Container = styled(_Container)`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
`;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  ${responsive.min_lg} {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  background-color: var(--gray-2);
  border-bottom: 1px solid var(--gray-6);
  z-index: 20;
`;

// const Logo = styled(Link)`
//   text-decoration: none;
//   font-size: var(--fontSize-lg);
//   color: var(--gray-12);

//   &:hover {
//     color: var(--gray-11);
//   }

//   ${responsive.min_lg} {
//     font-size: var(--fontSize-xl);
//   }

//   ${responsive.min_xl} {
//     font-size: var(--fontSize-xl2);
//   }
// `;
const Z = styled(Link)`
text-decoration: none;
  width: 40px;
  height:40px;
  border-radius: 8px;
  box-shadow: 4px 0px var(--accent-10),-4px 0 var(--accent-10);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:var(--fontSize-xl2);
  font-weight: 900;
  font-style: italic;
  transition: border-radius 0.2s;

  &:hover{
    border-radius: 30%;

  }
`
function Header(props: {className?: string}) {
  return (
    <StyledHeader className={props.className}>
      <Container>
        <MobileTopMenu />
        <Z to={Paths.Home}>Z</Z>
        {/* <Logo to={Paths.Home}>zak cnaan</Logo> */}
        <Div>
          <TopNav variant="web" />
        </Div>
        <ChangeTheme />
      </Container>
    </StyledHeader>
  );
}

export default Header;
