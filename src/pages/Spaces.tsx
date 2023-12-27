import styled from "styled-components";
import Header from "../components/github-spaces/Header";
import Hero1 from "../components/github-spaces/Hero1";
import Section2 from "../components/github-spaces/Section2";
import Card1 from "../components/github-spaces/card1/Card1";
import css from './spaces.module.css';

const Bg= styled.div`
   background-color: rgb(13, 17, 23);
  color: rgb(255, 255, 255);
  font-size: 14px;
  line-height: 21px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 24px;
`



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
      </div>
    </main>
  );
}

export default Spaces;
