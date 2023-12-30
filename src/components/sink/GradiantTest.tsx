import GradieatSpan from "../../features/GradieatSpan";

function GradiantTest() {
  return (
    <div>
      {[
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
      ].map((item) => {
        return (
          <div
            data-accent-color={item}
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              display: "inline-block",
              margin: "0 8px",
            }}
          >
            <GradieatSpan>{item}</GradieatSpan>
          </div>
        );
      })}
    </div>
  );
}

export default GradiantTest;
