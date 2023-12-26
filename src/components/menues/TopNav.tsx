import styled from "styled-components";
import { responsive } from "../../assets/styles/bp";

const topNavLinks = [
  { url: "...", text: "About" },
  { url: "...", text: "Home" },
  { url: "...", text: "Contact" },
];

const Ul = styled.ul<{ variant?: string }>`
  padding: 0;
  margin: 0;
  list-style: none;

  a {
    color: hsl(var(--color-foreground));
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ${(props) =>
    props.variant == "web" &&
    `
  display:flex;
  gap:1.25rem;

  ${responsive.min_md}{
    margin-right:1rem;
    gap:2.25rem;
  }
  `}

${(props) =>
    props.variant == "mobile" &&
    `
    padding:1.75rem 1rem;
    display:flex;
    flex-direction:column;
    gap:.75rem;
    align-items:center

    `}
`;
function TopNav(props: { variant?: "web" | "mobile" }) {
  return (
    <Ul variant={props.variant}>
      {topNavLinks.map((link) => (
        <li>
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </Ul>
  );
}

export default TopNav;
