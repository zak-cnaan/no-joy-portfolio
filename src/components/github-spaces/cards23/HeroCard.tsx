import styled from "styled-components";

const Card = styled.div`
  background-color: rgb(22, 27, 34);
  border-radius: 12px;
  padding: 2rem;
  position: relative;

  box-shadow: 0 0 0 1px rgba(53, 72, 91, 0.14),
    0 2.75px 2.21px rgba(0, 0, 0, 0.07), 0 6.65px 5.32px rgba(0, 0, 0, 0.043),
    0 12.5px 10px rgba(0, 0, 0, 0.03), 0 22px 18px rgba(0, 0, 0, 0.03),
    0 42px 33.4px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.017) !important;

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

  .h2-mktg {
    font-size: 48px !important;
    line-height: 52px !important;
    letter-spacing: -0.03em !important;
    font-weight: 800;

    span {
      color: rgb(163, 113, 247);
      background: linear-gradient(260deg, #3d67ff 0%, #9773ff 50%, #efceff 80%),
        #fff;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }

}
    .f3-mktg {
    font-size: 20px !important;
    line-height: 28px !important;
    margin:1.5rem 0;
    color: rgb(132, 141, 151);
  }
`;
function HeroCard() {
  return (
    <div style={{ backgroundColor: "rgb(13, 17, 23)", padding: "2rem" }}>
      <Card className="width-full mx-auto mb-8 px-5 px-md-8 py-6 py-md-8 py-lg-12 text-center color-bg-default rounded-3 box-shadow-default-border-mktg position-relative z-1 color-bg-subtle box-shadow-card-dark-mktg codespaces-footer-card">
        <h2 className="h2-mktg mx-auto col-7-max">
          <span>Start coding</span> in seconds with Codespaces
        </h2>
        <p className="f3-mktg color-fg-muted mt-4">
          Go to any repository and open your own Codespaces environment in
          seconds.
        </p>
      </Card>
    </div>
  );
}

export default HeroCard;
