import styled from "styled-components";

const FullCard = styled.div`
  background-color: rgb(22, 27, 34);
  padding-bottom: 64px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 64px;
`;
const Title1 = styled.h4`
  font-size: 28px;
  line-height: 32px;
  font-weight: 800;
  margin-bottom: 1rem;
  padding: 1rem;
  text-align: center;
`;
const Learn = styled.a`
  font-weight: 600;
  position: relative;
  display: inline-block;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;

  &::after {
    transition: transform 0.3s ease;
    position: absolute;
    bottom: -0.15em;
    left: 0;
    width: calc(100% - 1em);
    height: 2px;
    pointer-events: none;
    content: "";
    background-color: white;
    transform: scaleX(0);
    transform-origin: 0 0;
  }
  &:hover&::after {
    transform: scaleX(1);
  }
`;

const Padder = styled.div`
  padding: 2.5rem;
`;

const Icon = styled.div`
  background: #20242b;
  display: inline-block;
  padding: 1rem;
  border-radius: 500rem;
  color: rgb(163, 113, 247);
  margin-bottom: 1rem;

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

const Title = styled.h3`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 1rem;
`;
const P1 = styled.p`
  color: rgb(110, 118, 129);
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
`;
function Card2() {
  return (
    <FullCard>
      <div
        className="river-mktg js-build-in-trigger d-flex gutter gutter-spacious my-5 my-sm-7 my-md-8 position-relative flex-md-items-center text-center flex-column build-in-animate"
        data-build-in-stagger="100"
      >
        <div className="col-12 py-3 mb-2">
          <div className="">
            <Title1>What you can do with Codespaces</Title1>

            <Learn
              className="link-mktg text-semibold color-fg-default py-1 f3-mktg"
              href="https://github.blog/2021-08-11-githubs-engineering-team-moved-codespaces/"
              data-analytics-event='{"category":"Learn how GitHub builds with Codespaces","action":"click to Learn how GitHub builds with Codespaces","label":"ref_cta:Learn how GitHub builds with Codespaces;"}'
            >
              Learn how GitHub builds with Codespaces{" "}
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
            </Learn>
          </div>
        </div>

        <div className="col-12 py-3 mt-5">
          <div className="position-relative">
            <div className="d-md-flex flex-wrap text-left gutter-spacious mx-auto">
              <div className="col-md-6">
                <Padder>
                  <Icon>
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      className="octicon octicon-device-mobile color-fg-done d-block"
                    >
                      <path d="M10.25 5.25A.75.75 0 0 1 11 4.5h2A.75.75 0 0 1 13 6h-2a.75.75 0 0 1-.75-.75ZM12 19.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                      <path d="M4 2.75C4 1.784 4.784 1 5.75 1h12.5c.966 0 1.75.784 1.75 1.75v18.5A1.75 1.75 0 0 1 18.25 23H5.75A1.75 1.75 0 0 1 4 21.25Zm1.75-.25a.25.25 0 0 0-.25.25v18.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25Z"></path>
                    </svg>
                  </Icon>
                  <Title>Code from any device</Title>
                  <P1>
                    Want to code on an iPad? Go for it. You can spin up
                    Codespaces from any device with internet access. And forget
                    about worrying if your device is powerful enough. Codespaces
                    lives in the cloud.
                  </P1>
                </Padder>

                <Padder>
                  <Icon>
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      className="octicon octicon-zap color-fg-done d-block"
                    >
                      <path d="M15.716 1.329a1.341 1.341 0 0 1 2.109 1.55L15.147 9h4.161c1.623 0 2.372 2.016 1.143 3.075L8.102 22.721a1.148 1.148 0 0 1-1.81-1.317L8.996 15H4.674c-1.619 0-2.37-2.008-1.148-3.07l12.19-10.6Zm.452 1.595L4.51 13.061a.25.25 0 0 0 .164.439h5.45a.749.749 0 0 1 .692 1.041l-2.559 6.066 11.215-9.668a.25.25 0 0 0-.164-.439H14a.75.75 0 0 1-.687-1.05Z"></path>
                    </svg>
                  </Icon>
                  <Title>Onboard at the speed of light</Title>
                  <P1>
                    No more building your dev environment while you onboard.
                    Codespaces starts instantly from any repository on GitHub
                    with pre-configured, secure environments.
                  </P1>
                </Padder>

                <Padder>
                  <Icon>
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      className="octicon octicon-database color-fg-done d-block"
                    >
                      <path d="M12 1.25c2.487 0 4.773.402 6.466 1.079.844.337 1.577.758 2.112 1.264.536.507.922 1.151.922 1.907v12.987l-.026.013h.026c0 .756-.386 1.4-.922 1.907-.535.506-1.268.927-2.112 1.264-1.693.677-3.979 1.079-6.466 1.079s-4.774-.402-6.466-1.079c-.844-.337-1.577-.758-2.112-1.264C2.886 19.9 2.5 19.256 2.5 18.5h.026l-.026-.013V5.5c0-.756.386-1.4.922-1.907.535-.506 1.268-.927 2.112-1.264C7.226 1.652 9.513 1.25 12 1.25ZM4 14.371v4.116l-.013.013H4c0 .211.103.487.453.817.351.332.898.666 1.638.962 1.475.589 3.564.971 5.909.971 2.345 0 4.434-.381 5.909-.971.739-.296 1.288-.63 1.638-.962.349-.33.453-.607.453-.817h.013L20 18.487v-4.116a7.85 7.85 0 0 1-1.534.8c-1.693.677-3.979 1.079-6.466 1.079s-4.774-.402-6.466-1.079a7.843 7.843 0 0 1-1.534-.8ZM20 12V7.871a7.85 7.85 0 0 1-1.534.8C16.773 9.348 14.487 9.75 12 9.75s-4.774-.402-6.466-1.079A7.85 7.85 0 0 1 4 7.871V12c0 .21.104.487.453.817.35.332.899.666 1.638.961 1.475.59 3.564.972 5.909.972 2.345 0 4.434-.382 5.909-.972.74-.295 1.287-.629 1.638-.96.35-.33.453-.607.453-.818ZM4 5.5c0 .211.103.487.453.817.351.332.898.666 1.638.962 1.475.589 3.564.971 5.909.971 2.345 0 4.434-.381 5.909-.971.739-.296 1.288-.63 1.638-.962.349-.33.453-.607.453-.817 0-.211-.103-.487-.453-.817-.351-.332-.898-.666-1.638-.962-1.475-.589-3.564-.971-5.909-.971-2.345 0-4.434.381-5.909.971-.739.296-1.288.63-1.638.962C4.104 5.013 4 5.29 4 5.5Z"></path>
                    </svg>
                  </Icon>
                  <Title>Model, train, and analyze data</Title>
                  <P1>
                    Run Jupyter notebooks right from Codespaces. Now data
                    scientists and developers can code, develop models, and
                    collaborate in powerful compute environments that spin up in
                    seconds.
                  </P1>
                </Padder>

                <Padder>
                  <Icon>
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      className="octicon octicon-bug color-fg-done d-block"
                    >
                      <path d="M7.72.22a.75.75 0 0 1 1.06 0l1.204 1.203A4.98 4.98 0 0 1 12 1c.717 0 1.4.151 2.016.423L15.22.22a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-.971.972A4.991 4.991 0 0 1 17 6v1.104a2.755 2.755 0 0 1 1.917 1.974l1.998-.999a.75.75 0 0 1 .67 1.342L19 10.714V13.5l3.25.003a.75.75 0 0 1 0 1.5L19 15.001V16c0 .568-.068 1.134-.204 1.686l.04.018 2.75 1.375a.75.75 0 1 1-.671 1.342l-2.638-1.319A6.998 6.998 0 0 1 12 23a6.998 6.998 0 0 1-6.197-3.742l-2.758 1.181a.752.752 0 0 1-1.064-.776.752.752 0 0 1 .474-.602l2.795-1.199A6.976 6.976 0 0 1 5 16v-.996H1.75a.75.75 0 0 1 0-1.5H5v-2.79L2.415 9.42a.75.75 0 0 1 .67-1.342l1.998.999A2.756 2.756 0 0 1 7 7.104V6a4.99 4.99 0 0 1 1.69-3.748l-.97-.972a.75.75 0 0 1 0-1.06ZM6.5 9.75V16a5.5 5.5 0 1 0 11 0V9.75c0-.69-.56-1.25-1.25-1.25h-8.5c-.69 0-1.25.56-1.25 1.25ZM8.5 7h7V6a3.5 3.5 0 1 0-7 0Z"></path>
                    </svg>
                  </Icon>
                  <Title>Fix bugs right from a pull request</Title>
                  <P1>
                    Got a pull request detailing a bug or security issue? Open
                    Codespaces right from the pull request to get to work
                    without waiting for your dev environment to load.
                  </P1>
                </Padder>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullCard>
  );
}

export default Card2;
