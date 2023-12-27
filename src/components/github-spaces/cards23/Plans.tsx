import styled from "styled-components";
import PlansTable from "./PlansTable";

const Container = styled.div`
  padding: 4rem 1rem;
  background-color: rgb(13, 17, 23);

  .position-relative{
    position: relative;
  }

  .title {
    font-size: 40px;
    font-weight: 800;
    line-height: 44px;
    margin-bottom: 1rem;
    text-align: center;
  }
  .text {
    color: rgb(132, 141, 151);
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

const Div = styled.div`
  --color-mktg-btn-bg: #f6f8fa;
  padding-bottom: 4rem;

  .btn-large-mktg {
    padding: 18px 30px !important;
    font-size: 1.25rem;
  }
  .btn-mktg {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .btn-mktg {
    position: relative;
    z-index: 1;
    display: inline-block;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    user-select: none;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.15) 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      var(--color-mktg-btn-bg) !important;
    border: 0;
    border-radius: 0.375rem;
    transition: box-shadow 0.2s, outline 0.2s ease;
    -webkit-appearance: none !important;
    appearance: none !important;
    color: rgb(13, 17, 23);
    text-decoration: none;
    display: inline-flex;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      content: "";
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.15) 0%,
        rgba(255, 255, 255, 0) 100%
      ) !important;
      border-radius: inherit;
      opacity: 0;
      opacity: 0;
      transition: opacity 0.2s;
      background-blend-mode: normal;
    }

    &:hover::before {
      opacity: 1;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 7px 0px,
        rgba(255, 255, 255, 0.02) 0px 100px 80px 0px,
        rgba(255, 255, 255, 0.024) 0px 42px 33px 0px,
        rgba(255, 255, 255, 0.027) 0px 22px 18px 0px,
        rgba(255, 255, 255, 0.035) 0px 12px 10px 0px,
        rgba(255, 255, 255, 0.04) 0px 7px 5px 0px,
        rgba(255, 255, 255, 0.07) 0px 3px 2px 0px;
    }
  }

  .btn-muted-mktg {
    color: white;
    background: none !important;
    box-shadow: rgba(255, 255, 255, 0.25) 0px 0px 0px 1px inset;
    &:hover::before {
      display: none;
    }
  }
  .btn-muted-mktg:hover {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px inset;
  }
`;
const Img = styled.img`
max-width: initial;
  width: 120%;
  height: 160%;
  left: -10%;
  top: -30%;
  position: absolute;
`;
function Plans() {
  return (
    <Container>
      <div className="col-12 py-3 mb-2">
        <div className="">
          <h2 className="title">Start free, pay as you go after</h2>
          <p className="text">
            Use Codespaces for free each month to start with pay-as-you-go
            pricing after. Plus, you can set your maximum monthly cap for extra
            pricing control.
          </p>

          <div className="d-flex flex-justify-center mt-5">
            <Div className="by-2 by-lg-0 bx-lg-2 d-flex flex-column flex-lg-row">
              <a
                className="btn-mktg btn-large-mktg"
                data-analytics-event='{"category":"Get started","action":"click to Get started","label":"ref_cta:Get started;"}'
                href="https://docs.github.com/codespaces/overview"
              >
                Get started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="octicon arrow-symbol-mktg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                  ></path>
                  <path
                    className="octicon-chevrow-stem"
                    stroke="currentColor"
                    d="M1.75 8H11"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </a>
              <a
                className="btn-mktg btn-large-mktg btn-muted-mktg"
                data-analytics-event='{"category":"See pricing","action":"click to See pricing","label":"ref_cta:See pricing;"}'
                href="/pricing/calculator"
              >
                See pricing
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="octicon arrow-symbol-mktg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                  ></path>
                  <path
                    className="octicon-chevrow-stem"
                    stroke="currentColor"
                    d="M1.75 8H11"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </a>
            </Div>
          </div>
        </div>
      </div>

      <div className="col-12 py-3 mt-5">
        <div className="position-relative">
          <Img
            alt=""
            aria-hidden="true"
            className="position-absolute"
            loading="lazy"
            src="https://github.githubassets.com/assets/glow-new-5791965524ef.png"
          />

        <PlansTable />
        </div>
      </div>
    </Container>
  );
}

export default Plans;
