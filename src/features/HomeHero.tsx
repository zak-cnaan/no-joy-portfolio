import styled from "styled-components";
import StyledContainer from "../components/container/StyledContainer";
import { responsive } from "../assets/styles/bp";

const Hero1 = styled(StyledContainer)`
  padding-top: 4rem;
  padding-bottom: 4rem;
  font-size: var(--fontSize-xl);

  ${responsive.min_sm} {
    font-size: var(--fontSize-xl2);
  }

  .accent-color {
    color: var(--accent-11);
  }
  .sub-title {
    display: block;
    color: var(--gray-12);
    font-weight: 100;
    font-size: var(--fontSize-xl3);
  }

  ${responsive.min_lg} {
    display: grid;
    align-items: center;
    grid-template-columns:2fr 1fr;
    gap:4rem;
  }
`;
const Text = styled.p`
  color: var(--gray-11);
`;
const HeroImage = styled.div`
  /* box-shadow: 0 0 10px var(--accent-8); */
  border-radius: 8px;
  overflow: hidden;

  img{
    display: block;
  }

  ${responsive.min_lg} {
    img{
      transform: rotate(-20deg);
    }
  }

`

function HomeHero() {
  return (
    <Hero1>
      <div>
        <h1>
          Hello<span className="accent-color">; </span>I
          <span className="accent-color">'</span>m zak
          <span className="accent-color">.</span>
        </h1>
        <Text>
          <span className="sub-title">Senior Frontend Developer.</span>
          Lorem ipsum dolor sit adipisicing elit. Autem explicabo expedita
          consequuntur aspernatur, sit aut consequatur quos, doloribus ab dolor
          laboriosam reiciendis nostrum assumenda esse repudiandae, at quae.
          Saepe, nisi?
        </Text>
      </div>
      <HeroImage>
      <img src="/images/zak-hp.jpg" alt="zak cnaan at work" />
      </HeroImage>
    </Hero1>
  );
}

export default HomeHero;
