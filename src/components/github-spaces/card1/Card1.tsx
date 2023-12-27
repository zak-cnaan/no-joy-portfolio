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
    margin-bottom: 0;
  }
  h3 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 0;
  }
`;

const Icon = styled.div`
  background-color: rgb(137, 87, 229);
  color: rgb(255, 255, 255);
  border-radius: 500rem;
  padding: 0.5rem;
  line-height: 0;
  svg{
    fill: currentColor;
    width:24px;
    height:24px;
  }
`;
const Div3 = styled(Div2)`
    background: rgb(36, 41, 47);
`;

const Glow = styled.img`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    opacity: .7;
`
function Card1() {
  return (
    <>
      <Div1>
        <Title1>Personalized just how you like it ✨</Title1>
        <P1>
          Tabs vs. spaces, Monokai, Solarized, light dark, Prettier, or
          Beautify? o you. Control every nerdy detail only you care about with
          your own dotfiles repository.
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
      <div className="position-relative">
        <Div1>
          <Glow
            alt=""
            aria-hidden="true"
            className="position-absolute width-full height-full top-0 left-0"
            data-style="opacity: 70%"
            loading="lazy"
            src="https://github.githubassets.com/assets/glow-new-5791965524ef.png"
          />

          <Div3>
            <Icon>
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                width="24"
                data-view-component="true"
                className="octicon octicon-check d-block"
              >
                <path d="M21.03 5.72a.75.75 0 0 1 0 1.06l-11.5 11.5a.747.747 0 0 1-1.072-.012l-5.5-5.75a.75.75 0 1 1 1.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 0 1 1.06 0Z"></path>
              </svg>
            </Icon>
            <h3
              className="h5-mktg text-medium"
              data-style="font-stretch: 125%;"
            >
              Isolated environments
            </h3>
          </Div3>
          <Div3>
            <Icon>
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                width="24"
                data-view-component="true"
                className="octicon octicon-check d-block"
              >
                <path d="M21.03 5.72a.75.75 0 0 1 0 1.06l-11.5 11.5a.747.747 0 0 1-1.072-.012l-5.5-5.75a.75.75 0 1 1 1.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 0 1 1.06 0Z"></path>
              </svg>
            </Icon>
            <h3
              className="h5-mktg text-medium"
              data-style="font-stretch: 125%;"
            >
              Access Control
            </h3>
          </Div3>
      
        </Div1>
      </div>
    </>
  );
}

export default Card1;
