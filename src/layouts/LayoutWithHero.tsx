import { Outlet } from "react-router-dom";
import css from "./layout.module.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styled from "styled-components";


const Hero = styled.section`
  padding: 40rem 0;
  background-color: var(--accent-10);;
  position: relative;
  z-index: 10;
`;
const UnStyledHeader = styled(Header)`
  --color-1: var(--accent-6);

  background-color: var(--color-1);
  border-color: var(--color-1);
`;
function LayoutWithHero() {
  return (
    <div className={css.layout}>
        <UnStyledHeader />
        <Hero>Hero</Hero>
      <main className={css.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default LayoutWithHero;
