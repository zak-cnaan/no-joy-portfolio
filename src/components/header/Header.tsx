import styled from "styled-components";
import _Container from "../container/StyledContainer";
import TopNav from "../menues/TopNav";
import ChangeTheme from "../ChangeTheme";
import MobileTopMenu from "../mobile/MobileTopMenu";
import { responsive } from "../../assets/styles/bp";

const Div = styled.div`
  display: none;

  ${responsive.min_md} {
    display: block;
  }
`;

const Container = styled(_Container)`
  padding-top: 0.5rem;
  padding-top: 0.5rem;
`;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 1rem 0;

  background-color: hsl(var(--color-accent));
  z-index: 20;
  border-bottom: 1px solid hsl(var(--color-foreground) / 0.2);
`;

const Logo = styled.a`
  text-decoration: none;
  color: hsl(var(--color-foreground) / 0.8);
  font-size: var(--fontSize-lg);

  &:hover {
    color: hsl(var(--color-foreground));
  }

  ${responsive.min_lg} {
    font-size: var(--fontSize-xl);
  }

  ${responsive.min_xl} {
    font-size: var(--fontSize-xl2);
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Container>
        <MobileTopMenu />
        <Logo href="/">zak cnaan</Logo>
        <Div>
          <TopNav />
        </Div>
        <ChangeTheme />
      </Container>
    </StyledHeader>
  );
}

export default Header;
