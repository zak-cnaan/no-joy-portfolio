import styled from "styled-components";
import { responsive } from "../../assets/styles/bp";
import { Link } from "react-router-dom";
import Paths from "../../routes/Paths";

const topNavLinks = [
  { url: Paths.Home, text: "Home" },
  { url: Paths.Sink, text: "Sink" },
  { url: Paths.Spaces, text: "Spaces" },
];

const Ul = styled.ul<{ variant?: string }>`
  padding: 0;
  margin: 0;
  list-style: none;

  a {
    color: var(--gray-12);
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
        <li key={link.text}>
          <Link to={link.url}>{link.text}</Link>
        </li>
      ))}
    </Ul>
  );
}

export default TopNav;
