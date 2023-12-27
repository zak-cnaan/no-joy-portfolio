import Plans from "./Plans";
import Testimonials from "./Testimonials";

function Cards23() {
  return (
    <>
    <Testimonials />
    <Plans />
      <div className="container-xl">
       
        <div
          className="px-md-6 px-lg-0 mb-8 mt-6 mt-md-8 mt-lg-12 position-relative z-1 codespaces-faq"
          data-analytics-visible='{"category":"FAQ","action":"visible","label":"text: Frequently asked questions"}'
        >
          <div className="col-lg-8 mx-auto faq-mktg" id="faq">
            <h2 className="color-fg-default mb-md-8 mx-auto text-center col-5-max mb-5 h3-mktg">
              Frequently asked&nbsp;questions
            </h2>

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
                    A codespace is a development environment that's hosted in
                    the cloud. You can customize your project for GitHub
                    Codespaces by{" "}
                    <a href="https://docs.github.com/en/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project">
                      configuring dev container files
                    </a>{" "}
                    to your repository (often known as Configuration-as-Code),
                    which creates a repeatable codespace configuration for all
                    users of your project.
                  </p>
                  <p>
                    GitHub Codespaces run on a variety of VM-based compute
                    options hosted by GitHub.com, which you can configure from 2
                    core machines up to 32 core machines. You can connect to
                    your codespaces from the browser or locally using an IDE
                    like Visual Studio Code or IntelliJ.
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
                      From a commit in the repository's history to investigate a
                      bug at a specific point in time
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
                    organization. All personal GitHub.com accounts include a
                    monthly quota of free usage each month. GitHub will provide
                    users in the Free plan 120 core hours, or 60 hours of run
                    time on a 2 core codespace, plus 15 GB of storage each
                    month. You can see how the remaining balance on the{" "}
                    <a href="https://github.com/settings/billing">
                      billing page
                    </a>
                    .
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
                    Codespaces is available for teams and companies, but needs
                    to be enabled first in an organization’s settings. Teams and
                    companies are able to select which repositories and users
                    have access to Codespaces for added security and
                    permissioning control. You can find information on{" "}
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
              id="what-does-codespaces-cost"
            >
              <details
                className="position-relative border-bottom"
                data-analytics-event='{"category":"FAQ","action":"Click to expand","label":"ref_cta:What does Codespaces cost?;ref_loc:FAQ list;"}'
              >
                <summary className="position-relative list-style-none pl-4 py-4">
                  <h3 className="d-inline-block v-align-top mt-n1 col-11 ml-1 ml-lg-6 mb-0 f3-mktg text-semibold color-fg-default">
                    What does Codespaces cost?
                  </h3>
                </summary>
                <div className="ml-4 ml-lg-6 pl-1 pl-lg-4 mt-n3 mb-5 color-fg-muted f4-mktg position-relative z-1">
                  <p>
                    Codespaces is available for free for individual use for up
                    to 60 hours a month and comes with simple, pay-as-you-go
                    pricing afterwards. For organizations, Codespaces is
                    available with pay-as-you-go pricing and has pricing
                    controls so any company or team can determine how much they
                    want to spend a month. You can learn more about Codespaces
                    pricing for organizations{" "}
                    <a href="https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces">
                      here
                    </a>
                    .
                  </p>
                </div>
              </details>{" "}
              <div className="faq-mktg-item-hover-effect position-absolute bottom-0 left-0 width-full z-n1 border-bottom"></div>
            </div>

            <div
              className="position-relative faq-mktg-item"
              id="can-i-self-host-codespaces"
            >
              <details
                className="position-relative border-bottom"
                data-analytics-event='{"category":"FAQ","action":"Click to expand","label":"ref_cta:Can I self-host Codespaces?;ref_loc:FAQ list;"}'
              >
                <summary className="position-relative list-style-none pl-4 py-4">
                  <h3 className="d-inline-block v-align-top mt-n1 col-11 ml-1 ml-lg-6 mb-0 f3-mktg text-semibold color-fg-default">
                    Can I self-host Codespaces?
                  </h3>
                </summary>
                <div className="ml-4 ml-lg-6 pl-1 pl-lg-4 mt-n3 mb-5 color-fg-muted f4-mktg position-relative z-1">
                  <p>Codespaces cannot be self-hosted.</p>
                </div>
              </details>{" "}
              <div className="faq-mktg-item-hover-effect position-absolute bottom-0 left-0 width-full z-n1 border-bottom"></div>
            </div>

            <div
              className="position-relative faq-mktg-item"
              id="how-do-i-access-codespaces-with-linkedin-learning"
            >
              <details
                className="position-relative border-bottom"
                data-analytics-event='{"category":"FAQ","action":"Click to expand","label":"ref_cta:How do I access Codespaces with;ref_loc:FAQ list;"}'
              >
                <summary className="position-relative list-style-none pl-4 py-4">
                  <h3 className="d-inline-block v-align-top mt-n1 col-11 ml-1 ml-lg-6 mb-0 f3-mktg text-semibold color-fg-default">
                    How do I access Codespaces with LinkedIn Learning?
                  </h3>
                </summary>
                <div className="ml-4 ml-lg-6 pl-1 pl-lg-4 mt-n3 mb-5 color-fg-muted f4-mktg position-relative z-1">
                  <p>
                    You can use Codespaces directly through LinkedIn Learning.
                    LinkedIn Learning offers 50+ courses across six of the most
                    popular coding languages, as well as data science and
                    machine learning. These courses are integrated with
                    Codespaces, so you can get hands-on practice at any time,
                    from any machine via LinkedIn. These courses will be
                    unlocked on LinkedIn Learning for free through Feb. 2023.
                    You can learn more about LinkedIn Learning and GitHub
                    Codespaces{" "}
                    <a
                      href="https://learning.linkedin.com/product/hands-on-practice"
                      rel="nofollow"
                    >
                      here
                    </a>
                    .
                  </p>
                </div>
              </details>{" "}
              <div className="faq-mktg-item-hover-effect position-absolute bottom-0 left-0 width-full z-n1 border-bottom"></div>
            </div>

            <div
              className="position-relative faq-mktg-item"
              id="how-do-i-enable-codespaces-on-github"
            >
              <details
                className="position-relative border-bottom"
                data-analytics-event='{"category":"FAQ","action":"Click to expand","label":"ref_cta:How do I enable Codespaces on;ref_loc:FAQ list;"}'
              >
                <summary className="position-relative list-style-none pl-4 py-4">
                  <h3 className="d-inline-block v-align-top mt-n1 col-11 ml-1 ml-lg-6 mb-0 f3-mktg text-semibold color-fg-default">
                    How do I enable Codespaces on GitHub?
                  </h3>
                </summary>
                <div className="ml-4 ml-lg-6 pl-1 pl-lg-4 mt-n3 mb-5 color-fg-muted f4-mktg position-relative z-1">
                  <p>
                    Codespaces is on by default for for developers with a GitHub
                    free account. If you belong to an organization, there may be
                    a policy that prevents cloning—but if you can clone a
                    repository, you will be able to start using Codespaces.
                    Organizations will also need to pay for, enable, and manage
                    their Codespaces instances.
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
                    GitHub Student Developer Pack. You can learn more about how
                    to sign up and start using Codespaces and other GitHub
                    products{" "}
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
          </div>
        </div>

        <div className="position-relative">
          <div className="width-full mx-auto mb-8 px-5 px-md-8 py-6 py-md-8 py-lg-12 text-center color-bg-default rounded-3 box-shadow-default-border-mktg position-relative z-1 color-bg-subtle box-shadow-card-dark-mktg codespaces-footer-card">
            <h2 className="h2-mktg mx-auto col-7-max">
              <span>Start coding</span> in seconds with Codespaces
            </h2>
            <p className="f3-mktg color-fg-muted mt-4">
              Go to any repository and open your own Codespaces environment in
              seconds.
            </p>
            <div className="d-sm-flex flex-justify-center mt-6">
              <div className="by-2 by-lg-0 bx-lg-2 d-flex flex-column flex-lg-row">
                <a
                  className="btn-mktg btn-large-mktg"
                  data-analytics-event='{"category":"Get started","action":"click to Get started","label":"ref_cta:Get started;"}'
                  href="https://github.com/codespaces"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards23;
