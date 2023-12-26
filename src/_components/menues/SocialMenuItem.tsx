import { IconType } from "react-icons";

function SocialMenuItem(props: { link: string; icon: IconType; }) {
  return (
    <li style={{ display: "inline-flex" }}>
      <button
        aria-label="Open in new tab"
    
      >
        <props.icon />
      </button>
    </li>
  );
}

export default SocialMenuItem;
