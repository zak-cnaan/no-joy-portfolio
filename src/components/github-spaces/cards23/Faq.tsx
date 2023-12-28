import styled from "styled-components";

const FaqWrap = styled.div`
  --mktg-accent-primary: #efceff;
  --mktg-accent-secondary: #9773ff;

  padding: 4rem 1rem;
  background-color: rgb(13, 17, 23);
  text-align: center;
  .title {
    font-size: 40px;
    line-height: 44px;
    max-width: 400px;
    display: inline-block;
  }
`;
const List = styled.div`
  padding: 4rem;
  text-align: left;

  details {
    position: relative;
    border-bottom: 1px solid rgb(48, 54, 61);
    summary {
      padding: 1.5rem;
      position: relative;

      &::marker {
        display: none;
        content: "";
      }

      &::after,
      &::before {
        position: absolute;
        top: -8px;
        bottom: 0;
        left: 0;
        display: block;
        width: 23px;
        height: 30px;
        margin-top: auto;
        margin-bottom: auto;
        font-size: 32px;
        line-height: 1em;
        text-align: center;
        background: linear-gradient(
          -70deg,
          var(--mktg-accent-primary, var(--color-fg-muted)) 0%,
          var(--mktg-accent-secondary, var(--color-fg-muted)) 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        transition: transform 0.3s ease, opacity 0.2s ease;

        top: 0px;
        font-weight: 700;
        content: "-";
        opacity: 0;
      }
      &::after {
        top: -12px;
        content: "+";
        opacity: 1;
      }

      h3 {
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        margin: 0;
      }
    }

    &[open] summary::before {
      opacity: 1;
      transform: rotateZ(180deg);
    }
    &[open] summary::after {
      opacity: 0;
      transform: rotateZ(180deg);
    }

    &[open] div {
    position: relative;
    border-bottom: 1px solid rgb(48, 54, 61);
    color: rgb(132, 141, 151);
    font-size:1rem;

    a{
        color: rgb(47, 129, 247);
    }
    }
  }
`;
function Faq() {
  return (
    <FaqWrap>
      <h2 className="title">Frequently asked&nbsp;questions</h2>
      <List>
        <div
          className="position-relative faq-mktg-item"
          id="how-does-codespaces-work"
        >
          <details
            className="position-relative border-bottom"
            data-analytics-event='{"category":"FAQ","action":"Click to expand","label":"ref_cta:How does Codespaces work?;ref_loc:FAQ list;"}'
          >
            <summary className="position-relative list-style-none pl-4 py-4">
              <h3 className="d-inline-block v-align-top mt-n1 col-11 ml-1 ml-lg-6 mb-0 f3-mktg text-semibold color-fg-default">
                How does Codespaces work?
              </h3>
            </summary>
            <div className="ml-4 ml-lg-6 pl-1 pl-lg-4 mt-n3 mb-5 color-fg-muted f4-mktg position-relative z-1">
              <p>
                A codespace is a development environment that's hosted in the
                cloud. You can customize your project for GitHub Codespaces by{" "}
                <a href="https://docs.github.com/en/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project">
                  configuring dev container files
                </a>{" "}
                to your repository (often known as Configuration-as-Code), which
                creates a repeatable codespace configuration for all users of
                your project.
              </p>
              <p>
                GitHub Codespaces run on a variety of VM-based compute options
                hosted by GitHub.com, which you can configure from 2 core
                machines up to 32 core machines. You can connect to your
                codespaces from the browser or locally using an IDE like Visual
                Studio Code or IntelliJ.
              </p>
            </div>
          </details>{" "}
          <div className="faq-mktg-item-hover-effect position-absolute bottom-0 left-0 width-full z-n1 border-bottom"></div>
        </div>

        <div
          className="position-relative faq-mktg-item"
          id="how-do-i-use-codespaces"
        >
          <details
            className="position-relative border-bottom"
            data-analytics-event='{"category":"FAQ","action":"Click to expand","label":"ref_cta:How do I use Codespaces?;ref_loc:FAQ list;"}'
          >
            <summary className="position-relative list-style-none pl-4 py-4">
              <h3 className="d-inline-block v-align-top mt-n1 col-11 ml-1 ml-lg-6 mb-0 f3-mktg text-semibold color-fg-default">
                How do I use Codespaces?
              </h3>
            </summary>
            <div className="ml-4 ml-lg-6 pl-1 pl-lg-4 mt-n3 mb-5 color-fg-muted f4-mktg position-relative z-1">
              <p>
                There are a number of entry points to spin up a Codespaces
                environment. These include:
              </p>
              <ul>
                <li>
                  From a{" "}
                  <a href="https://docs.github.com/en/codespaces/getting-started/quickstart">
                    template
                  </a>
                  .
                </li>
                <li>
                  From{" "}
                  <a href="https://docs.github.com/en/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace">
                    your repository
                  </a>{" "}
                  for new feature work
                </li>
                <li>
                  From an{" "}
                  <a href="https://docs.github.com/en/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests#opening-a-pull-request-in-codespaces">
                    open pull request
                  </a>{" "}
                  to explore work-in-progress
                </li>
                <li>
                  From a commit in the repository's history to investigate a bug
                  at a specific point in time
                </li>
                <li>
                  From{" "}
                  <a href="https://docs.github.com/en/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code#creating-a-codespace-in-vs-code">
                    Visual Studio Code
                  </a>
                </li>
                <li>From JetBrains IntelliJ</li>
              </ul>
              <p>
                Learn more about how to use Codespaces in our{" "}
                <a href="https://docs.github.com/en/codespaces/overview">
                  documentation
                </a>
                .
              </p>
            </div>
          </details>{" "}
          <div className="faq-mktg-item-hover-effect position-absolute bottom-0 left-0 width-full z-n1 border-bottom"></div>
        </div>

        <div
          className="position-relative faq-mktg-item"
          id="is-codespaces-available-for-individual-developers"
        >
          <details
            className="position-relative border-bottom"
            data-analytics-event='{"category":"FAQ","action":"Click to expand","label":"ref_cta:Is Codespaces available for individual developers?;ref_loc:FAQ list;"}'
          >
            <summary className="position-relative list-style-none pl-4 py-4">
              <h3 className="d-inline-block v-align-top mt-n1 col-11 ml-1 ml-lg-6 mb-0 f3-mktg text-semibold color-fg-default">
                Is Codespaces available for individual developers?
              </h3>
            </summary>
            <div className="ml-4 ml-lg-6 pl-1 pl-lg-4 mt-n3 mb-5 color-fg-muted f4-mktg position-relative z-1">
              <p>
                GitHub Codespaces is available for developers in every
                organization. All personal GitHub.com accounts include a monthly
                quota of free usage each month. GitHub will provide users in the
                Free plan 120 core hours, or 60 hours of run time on a 2 core
                codespace, plus 15 GB of storage each month. You can see how the
                remaining balance on the{" "}
                <a href="https://github.com/settings/billing">billing page</a>.
              </p>
            </div>
          </details>{" "}
          <div className="faq-mktg-item-hover-effect position-absolute bottom-0 left-0 width-full z-n1 border-bottom"></div>
        </div>

        <div
          className="position-relative faq-mktg-item"
          id="is-codespaces-available-for-teams-and-companies"
        >
          <details
            className="position-relative border-bottom"
            data-analytics-event='{"category":"FAQ","action":"Click to expand","label":"ref_cta:Is Codespaces available for teams and;ref_loc:FAQ list;"}'
          >
            <summary className="position-relative list-style-none pl-4 py-4">
              <h3 className="d-inline-block v-align-top mt-n1 col-11 ml-1 ml-lg-6 mb-0 f3-mktg text-semibold color-fg-default">
                Is Codespaces available for teams and companies?
              </h3>
            </summary>
            <div className="ml-4 ml-lg-6 pl-1 pl-lg-4 mt-n3 mb-5 color-fg-muted f4-mktg position-relative z-1">
              <p>
                Codespaces is available for teams and companies, but needs to be
                enabled first in an organization’s settings. Teams and companies
                are able to select which repositories and users have access to
                Codespaces for added security and permissioning control. You can
                find information on{" "}
                <a href="https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization">
                  how to enable Codespaces in an organization in our docs
                </a>
                .
              </p>
            </div>
          </details>{" "}
          <div className="faq-mktg-item-hover-effect position-absolute bottom-0 left-0 width-full z-n1 border-bottom"></div>
        </div>

        <div
          className="position-relative faq-mktg-item"
          id="is-codespaces-available-for-students"
        >
          <details
            className="position-relative border-bottom"
            data-analytics-event='{"category":"FAQ","action":"Click to expand","label":"ref_cta:Is Codespaces available for students?;ref_loc:FAQ list;"}'
          >
            <summary className="position-relative list-style-none pl-4 py-4">
              <h3 className="d-inline-block v-align-top mt-n1 col-11 ml-1 ml-lg-6 mb-0 f3-mktg text-semibold color-fg-default">
                Is Codespaces available for students?
              </h3>
            </summary>
            <div className="ml-4 ml-lg-6 pl-1 pl-lg-4 mt-n3 mb-5 color-fg-muted f4-mktg position-relative z-1">
              <p>
                Codespaces is available for free to students as part of the
                GitHub Student Developer Pack. You can learn more about how to
                sign up and start using Codespaces and other GitHub products{" "}
                <a href="https://education.github.com/pack">here</a>.
              </p>
            </div>
          </details>{" "}
          <div className="faq-mktg-item-hover-effect position-absolute bottom-0 left-0 width-full z-n1 border-bottom"></div>
        </div>

        <div
          className="position-relative faq-mktg-item"
          id="is-codespaces-available-for-open-source-maintainers"
        >
          <details
            className="position-relative border-bottom"
            data-analytics-event='{"category":"FAQ","action":"Click to expand","label":"ref_cta:Is Codespaces available for open source;ref_loc:FAQ list;"}'
          >
            <summary className="position-relative list-style-none pl-4 py-4">
              <h3 className="d-inline-block v-align-top mt-n1 col-11 ml-1 ml-lg-6 mb-0 f3-mktg text-semibold color-fg-default">
                Is Codespaces available for open source maintainers?
              </h3>
            </summary>
            <div className="ml-4 ml-lg-6 pl-1 pl-lg-4 mt-n3 mb-5 color-fg-muted f4-mktg position-relative z-1">
              <p>
                Codespaces provides both maintainers and contributors with{" "}
                <a href="https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#monthly-included-storage-and-core-hours-for-personal-accounts">
                  generous monthly free usage
                </a>
                .
              </p>
            </div>
          </details>{" "}
          <div className="faq-mktg-item-hover-effect position-absolute bottom-0 left-0 width-full z-n1 border-bottom"></div>
        </div>
      </List>
    </FaqWrap>
  );
}

export default Faq;
