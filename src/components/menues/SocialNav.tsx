import SocialMenuItem from "./SocialMenuItem";
import { FaFacebookF } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import styled from "styled-components";

const Ul = styled.ul`
padding:0;
list-style:none;
margin:0;
display:flex;
justify-content:center;
gap:1rem;
margin-bottom:0.5rem;

a{
  padding:0.5rem;
  display:inline-flex;
  color:var(--gray-12);
  background: none;
  border-radius:4px;
  transition: background-color 0.4s;

  &:hover{

    background:var(--gray-12);
    color: var(--accent-1);

  }

  svg{
    width:24px;
    height:24px;
  }
}
`
function SocialNav() {
  return (
    <Ul>
      <SocialMenuItem link="..." icon={FaFacebookF} />
      <SocialMenuItem link="..." icon={TbBrandGithubFilled} />
      <SocialMenuItem link="..." icon={FaLinkedinIn} />
    </Ul>
  );
}

export default SocialNav;
