import { IconType } from "react-icons";

function SocialMenuItem(props: { link: string; icon: IconType; }) {
  return (
    <li>
      <a href={props.link}>
        <props.icon />
      </a>
    </li>
  );
}

export default SocialMenuItem;
