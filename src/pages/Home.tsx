import styled from "styled-components";
import StyledContainer from "../components/container/StyledContainer";

const Hero = styled.section`

--white:var(--gray-1);
--blue:var(--accent-12);
--mask-height:5rem;
    
color:var(--gray-1);
    position: relative;
    padding-bottom: var(--mask-height);
    background: var(--blue);
    z-index: 1;
  
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: var(--mask-height);
    z-index: 1;
    background: var(--white);
    /* clip-path: ellipse(130vw 100vw at 50vw 100vw); */

    content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: var(--white);
  transform: skewY(2deg);
  transform-origin:0 100%;
  }
`
const Hero1 = styled(StyledContainer)`
    padding: 2.5rem 2rem;
    text-align:center;
    max-width: var(--bp-sm);
`;
const Text = styled.p`
    color: var(--gray-7);
`
function Home() {
  return (
    <>
    <Hero>
        <Hero1>
            <h1>Hero</h1>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa odio excepturi ducimus quia voluptas, accusamus nobis aut blanditiis reprehenderit facere numquam voluptates beatae fugit at illum laudantium quas veniam dicta.</Text>
        </Hero1>
    </Hero>
      Home
    </>
  );
}

export default Home;
