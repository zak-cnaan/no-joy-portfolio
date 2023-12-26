const topNavLinks = [
  { url: "...", text: "About" },
  { url: "...", text: "Home" },
  { url: "...", text: "Contact" },
];

function TopNav(props: { variant?: "web" | "mobile" }) {
  return (
    <ul>
      {topNavLinks.map((link) => (
        <li>
          <a href={link.url}>{link.text}</a>
          {props.variant == "web" && <span>web</span>}
        </li>
      ))}
    </ul>
  );
}

export default TopNav;
