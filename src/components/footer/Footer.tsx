import styled from "styled-components";
import _Container from "../container/StyledContainer";
import SocialNav from "../menues/SocialNav";
import style from "./style.module.css";

const Container = styled(_Container)`
    text-align:center;
    padding:1rem 0;
`

function Footer() {
  return (
    <footer className={style.footer}>
      <Container>
        <SocialNav />
        <span>
          &copy; 2023 &hearts; <span>zak cnaan</span>
        </span>
      </Container>
    </footer>
  );
}

export default Footer;
