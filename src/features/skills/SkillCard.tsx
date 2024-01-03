import styled from "styled-components";
import { getIconByName } from "./Icons";

const SkillCardCSS = styled.div`
  background-color: var(--gray-3);
  padding: 1rem;;
  border-radius: .5rem;

  h3 {
    margin-top: 0.25rem;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  img {
    width: 40px;
    background-color: #242938;
    border-radius: 8px;
    padding: 2px;
  }
`;

const SkillCard = (props: { title: string; text: string; icons: string[] }) => {
  return (
    <SkillCardCSS>
      <IconsContainer>
        {props.icons.map((icon) => {
          const iconData = getIconByName(icon);
          if (!iconData) return;

          return (
            <img src={iconData.icon} alt={iconData.text || iconData.name} />
          );
        })}
      </IconsContainer>
      <h3>{props.title}</h3>
      <div>{props.text}</div>
    </SkillCardCSS>
  );
};

export default SkillCard;
