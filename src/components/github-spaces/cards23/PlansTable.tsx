import styled from "styled-components";

const Container = styled.div`
  --mktg-accent-primary: #efceff;
  --mktg-accent-secondary: #9773ff;

  background: #24292f;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5), 0 70px 65px rgba(0, 0, 0, 0.18),
    0 30px 30px rgba(0, 0, 0, 0.14), 0 15px 15px rgba(0, 0, 0, 0.12),
    0 10px 8px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.08),
    0 2px 2px rgba(0, 0, 0, 0.06) !important;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  .padder {
    padding: 4rem 6rem;
    padding-bottom: 0;
  }
  .title {
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    text-align: left;
    margin: 0;
  }
  .subTitle {
    color: rgb(132, 141, 151);
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 40px;
  }
`;
const Raw = styled.div`
  border-top: 1px solid rgb(48, 54, 61);
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;

  > * {
    width: 100%;
  }

  .f3-mktg {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }

  .f5 {
    font-size: 14px;
  }
  .color-fg-muted {
    color: rgb(132, 141, 151);
  }
  .text-gradient-mktg {
    background: -webkit-linear-gradient(
      -70deg,
      var(--mktg-accent-primary, #9867f0) 0%,
      var(--mktg-accent-secondary, #ed4e50) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  }
`;

const Raw2 = styled(Raw)`
  background: #32383f;

  padding: 2rem 6rem;
`;
const Link = styled.a`
  font-weight: 600;
  position: relative;
  display: inline-block;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;

  &::after,
  &::before {
    opacity: 0.2;
    transform: scaleX(1);
    transition: transform 0.3s ease;

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    pointer-events: none;
    content: "";
    background-color: currentColor;
    transform-origin: 0 0;
  }

  &::after {
    transform: scaleX(0);
  }

  &:active::after,
  &:hover::after {
    opacity: 1;
    transform: scaleX(1);
  }
`;

function PlansTable() {
  return (
    <Container>
      <div className="padder">
        <h3 className="title">Get up to 60 hours free each month</h3>
        <p className="subTitle">
          Decide how many cores you need and go. Your free hours reset each
          month.
        </p>

        <div className="width-full lh-condensed text-medium">
          <Raw>
            <div className="col-sm-3">
              <span className="f3-mktg text-medium">2 cores</span>
            </div>
            <div className="col-sm-5">
              <span className="f3-mktg text-medium color-fg-done text-gradient-mktg">
                60 hours free
              </span>
              <span className="f5 text-normal color-fg-muted">/month</span>
            </div>
            <div className="col-sm-4">
              <span className="f3-mktg text-medium">$0.18</span>
              <span className="f5 text-normal color-fg-muted">
                /additional hour
              </span>
            </div>
          </Raw>
          <Raw>
            <div className="col-sm-3">
              <span className="f3-mktg text-medium">4 cores</span>
            </div>
            <div className="col-sm-5">
              <span className="f3-mktg text-medium color-fg-done text-gradient-mktg">
                30 hours free
              </span>
              <span className="f5 text-normal color-fg-muted">/month</span>
            </div>
            <div className="col-sm-4">
              <span className="f3-mktg text-medium">$0.36</span>
              <span className="f5 text-normal color-fg-muted">
                /additional hour
              </span>
            </div>
          </Raw>
          <Raw className="d-sm-flex py-4 border-top">
            <div className="col-sm-3">
              <span className="f3-mktg text-medium">8 cores</span>
            </div>
            <div className="col-sm-5">
              <span className="f3-mktg text-medium color-fg-done text-gradient-mktg">
                15 hours free
              </span>
              <span className="f5 text-normal color-fg-muted">/month</span>
            </div>
            <div className="col-sm-4">
              <span className="f3-mktg text-medium">$0.72</span>
              <span className="f5 text-normal color-fg-muted">
                /additional hour
              </span>
            </div>
          </Raw>
          <Raw>
            <div className="col-sm-3">
              <span className="f3-mktg text-medium">16+ cores</span>
            </div>
            <div className="col-sm-5">
              <span className="f4-mktg text-normal color-fg-muted">N/A</span>
            </div>
            <div className="col-sm-4">
              <Link
                className="link-mktg text-semibold color-fg-default py-1 codespaces-pricing-link-mktg f4-mktg link-emphasis-mktg"
                href="https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces"
                data-analytics-event='{"category":"See pricing docs","action":"click to See pricing docs","label":"ref_cta:See pricing docs;"}'
              >
                See pricing docs
              </Link>
            </div>
          </Raw>
        </div>
      </div>

      <Raw2>
        <div className="col-sm-3">
          <h3 className="f3-mktg text-medium">Storage</h3>
        </div>
        <div className="col-sm-5">
          <span className="f3-mktg text-medium color-fg-done text-gradient-mktg">
            15 GB free
          </span>
          <span className="f5 text-normal color-fg-muted">/month</span>
        </div>
        <div className="col-sm-4">
          <span className="f3-mktg text-medium">$0.07</span>
          <span className="f5 text-normal color-fg-muted">/GB per month</span>
        </div>
      </Raw2>
    </Container>
  );
}

export default PlansTable;
