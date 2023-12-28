import styled from "styled-components";
import Header from "../components/github-spaces/Header";
import Hero1 from "../components/github-spaces/Hero1";
import Section2 from "../components/github-spaces/Section2";
import Card1 from "../components/github-spaces/card1/Card1";
import css from "./spaces.module.css";
import Card2 from "../components/github-spaces/card2/Card2";
import Cards23 from "../components/github-spaces/cards23/Cards23";
import Footer from "../components/github-spaces/Footer";

const Bg = styled.div`
  background-color: rgb(13, 17, 23);
  color: rgb(255, 255, 255);
  font-size: 14px;
  line-height: 21px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 24px;
`;

function Spaces() {
  return (
    <main className={css.main}>
      <div className={css.top}>
        <Header />
        <Hero1 />
        <Bg>
          <Section2 />
          <Card1 />
        </Bg>

        <Card2 />
        <Cards23 />
        <Footer />
      </div>
    </main>
  );
}

export default Spaces;
