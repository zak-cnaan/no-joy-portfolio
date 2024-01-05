import { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  background-color: var(--accent-9);
  color: var(--accent-9-contrast);
  padding: 0.125rem;
  display: inline-flex;
  gap: 0.25rem;
  border-radius: 4px;
  margin-right: 4px;
`;
const GrayLabel = styled(Label)`
  background: linear-gradient(var(--gray-2), var(--gray-9) 100%);
  color: var(--gray-11);
`;
const accentColors = [
  "tomato",
  "red",
  "ruby",
  "plum",
  "crimson",
  "pink",
  "purple",
  "violet",
  "indigo",
  "blue",
  "cyan",
  "iris",
  "jade",
  "green",
  "teal",
  "orange",
  "sky",
  "brown",
  "grass",
  "mint",
  "lime",
  "yellow",
  "amber",
  "gold",
  "bronze",
  "gray",
];
const Container = styled.div`
  padding: 2rem;
  position: sticky;
  top: 60px;
  background-color: var(--gray-1);
  z-index: 600;

  h4 {
    margin-top: 1rem;
  }
`;
const grayColors = ["mauve", "slate", "sage", "olive", "sand"];

function ColorSelect() {
  const [accent, set_accent] = useState("iris");
  const [grey, set_grey] = useState("sage");

  const radioHandler = (type: string, value: string) => {
    if (type === "accent") {
      set_accent(value);
    }
    if (type === "grey") {
      set_grey(value);
      type = "gray";
    }

    const dataAttr = `data-${type}-color`;

    document.body.setAttribute(dataAttr, value);
  };

  return (
    <Container>
      <div>
        <h4>Select accent color</h4>
        <div>
          {accentColors.map((color) => (
            <Label key={color} data-accent-color={color}>
              <input
                type="radio"
                checked={color === accent}
                name="accent"
                onChange={() => radioHandler("accent", color)}
              />
              <span>{color}</span>
            </Label>
          ))}
        </div>
      </div>

      <div>
        <h4>Select gray color</h4>
        <div>
          {grayColors.map((color) => (
            <GrayLabel data-gray-color={color} key={color}>
              <input
                type="radio"
                checked={color === grey}
                name="grey"
                onChange={() => radioHandler("grey", color)}
              />
              <span>{color}</span>
            </GrayLabel>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default ColorSelect;
