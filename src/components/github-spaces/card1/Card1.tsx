import styled from "styled-components";

const Div0 = styled.div`
  background-color: rgb(22, 27, 34);
  position: relative;
  box-shadow: 0 0 0 1px #000, 0 30px 30px rgba(0, 0, 0, 0.07),
    0 15px 15px rgba(0, 0, 0, 0.06), 0 10px 8px rgba(0, 0, 0, 0.05),
    0 4px 4px rgba(0, 0, 0, 0.04), 0 2px 2px rgba(0, 0, 0, 0.03);

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;
    content: "";
    border-radius: inherit;
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  }
`;
const Div1 = styled(Div0)`
  padding: 40px 24px;
  border-radius: 8px;
`;

const Title1 = styled.h3`
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  font-stretch: 125%;
`;

const P1 = styled.p`
  color: rgb(110, 118, 129);
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

const Div2 = styled(Div0)`
  display: flex;
  border-radius: 6px;
  padding: 1rem 1.5rem;
  gap: 1rem;
  align-items: center;
  margin-top: 1.5rem;

  h4 {
    font-size: 1rem;
    font-weight: 600;
  }
`;
function Card1() {
  return (
    <Div1>
      <Title1>Personalized just how you like it ✨</Title1>
      <P1>
        Tabs vs. spaces, Monokai, Solarized, light dark, Prettier, or Beautify?
        o you. Control every nerdy detail only you care about with your own
        dotfiles repository.
      </P1>
      <div className="d-sm-flex flex-wrap gutter">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Div2>
            <img
              alt="IntelliCode logo"
              width="48"
              height="48"
              loading="lazy"
              src="https://github.githubassets.com/assets/intellicode-08346cb96aee.png"
            />
            <h4>IntelliCode</h4>
          </Div2>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Div2>
            <img
              alt="ES Lint logo"
              width="48"
              height="48"
              loading="lazy"
              className="mr-3"
              src="https://github.githubassets.com/assets/es-lint-a6270aa432db.png"
            />
            <h4>ES Lint</h4>
          </Div2>
        </div>
     
      </div>
    </Div1>
  );
}

export default Card1;
