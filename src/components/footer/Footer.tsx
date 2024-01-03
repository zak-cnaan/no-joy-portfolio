import styled from "styled-components";
import _Container from "../container/StyledContainer";
import style from "./style.module.css";

const Container = styled(_Container)`
    text-align:center;
`

function Footer() {
  return (
    <footer className={style.footer}>
      <Container>
        <span>
          &copy; 2023 &hearts; <span>zak cnaan</span>
        </span>
      </Container>
    </footer>
  );
}

export default Footer;
