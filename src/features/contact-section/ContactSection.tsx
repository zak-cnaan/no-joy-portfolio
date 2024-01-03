import styled from "styled-components";
import StyledContainer from "../../components/container/StyledContainer";
import SocialNav from "../../components/menues/SocialNav";
import { MdEmail } from "react-icons/md";
const SectionCSS = styled.section`
  background-color: var(--gray-3);
  padding: 2.5rem 0;
  font-size: var(--fontSize-xl);
  text-align: center;
  .title {
    margin: 0;
  }
  .text {
    color: var(--gray-11);
  }
  .email {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    transition: all 0.4s;

    &:hover{
        color: var(--gray-12);
    }

    svg {
      height: 24px;
      width: 24px;
      margin-top: 3px;
    }
  }
`;
const CotactContainer = styled(StyledContainer)`
    max-width: var(--bp-md);
`;
function ContactSection() {
  return (
    <SectionCSS>
      <CotactContainer>
        <div>
          <h2 className="title">Let's chat</h2>
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing dolor sit adipisicing elit. Autem explicabo expedita consequuntur aspernatur, sit aut consequatur quos, doloribus ab dolor laboriosam reiciendi.
          </p>
        </div>
        <div>
          <a className="email" href="mailto:me">
            <MdEmail />
            <span>zak@gmail.com</span>
          </a>
          <SocialNav />
        </div>
      </CotactContainer>
    </SectionCSS>
  );
}

export default ContactSection;
