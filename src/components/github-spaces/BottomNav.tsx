import styled from "styled-components";

const Container = styled.div`
  --color: rgb(132, 141, 151);

  display: flex;
  gap: 1rem;
  font-weight: 400;

  > div {
    flex: 0 0 25%;
  }
`;
const Title = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  color: var(--color);
  font-size: 14px;
  font-weight: 400;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    margin-bottom: 1rem;
    a {
      color: var(--color);
      text-decoration: none;
      &:hover {
        color: rgb(47, 129, 247);
        text-decoration: underline;
      }
    }
  }
`;

function BottomNav() {
  return (
    <Container>
      <div className="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-lg-0 pl-lg-4">
        <Title className="h5 mb-3 text-mono color-fg-muted text-normal">
          Product
        </Title>

        <List className="list-style-none color-fg-muted f5">
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to features","label":"text:features"}'
              href="/features"
            >
              Features
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to enterprise","label":"text:enterprise"}'
              href="/enterprise"
            >
              Enterprise
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to copilot","label":"text:copilot"}'
              href="/features/copilot"
            >
              Copilot
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to security","label":"text:security"}'
              href="/security"
            >
              Security
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to pricing","label":"text:pricing"}'
              href="/pricing"
            >
              Pricing
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to team","label":"text:team"}'
              href="/team"
            >
              Team
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to resources","label":"text:resources"}'
              href="https://resources.github.com"
            >
              Resources
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to roadmap","label":"text:roadmap"}'
              href="https://github.com/github/roadmap"
            >
              Roadmap
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to compare github","label":"text:compare github"}'
              href="https://resources.github.com/devops/tools/compare/"
            >
              Compare GitHub
            </a>
          </li>
        </List>
      </div>

      <div className="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4">
        <Title className="h5 mb-3 text-mono color-fg-muted text-normal">
          Platform
        </Title>

        <List className="list-style-none f5">
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to api","label":"text:api"}'
              href="https://docs.github.com/get-started/exploring-integrations/about-building-integrations"
            >
              Developer API
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to partner","label":"text:partner"}'
              href="https://partner.github.com"
            >
              Partners
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to electron","label":"text:electron"}'
              href="https://www.electronjs.org"
            >
              Electron
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to desktop","label":"text:desktop"}'
              href="https://desktop.github.com/"
            >
              GitHub Desktop
            </a>
          </li>
        </List>
      </div>

      <div className="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4">
        <Title className="h5 mb-3 text-mono color-fg-muted text-normal">
          Support
        </Title>

        <List className="list-style-none f5">
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to help","label":"text:Docs"}'
              href="https://docs.github.com"
            >
              Docs
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to community","label":"text:community"}'
              href="https://github.community"
            >
              Community Forum
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to professional services","label":"text:professional services"}'
              href="https://services.github.com/"
            >
              Professional Services
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to premium support","label":"text:premium support"}'
              href="/premium-support"
            >
              Premium Support
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to skills","label":"text:skills"}'
              href="https://skills.github.com/"
            >
              Skills
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to status","label":"text:status"}'
              href="https://www.githubstatus.com/"
            >
              Status
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to contact","label":"text:contact"}'
              href="https://support.github.com?tags=dotcom-footer"
            >
              Contact GitHub
            </a>
          </li>
        </List>
      </div>

      <div className="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4">
        <Title className="h5 mb-3 text-mono color-fg-muted text-normal">
          Company
        </Title>

        <List className="list-style-none f5">
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to about","label":"text:about"}'
              href="https://github.com/about"
            >
              About
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to customer stories","label":"text:customer stories"}'
              href="/customer-stories?type=enterprise"
            >
              Customer stories
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to blog","label":"text:blog"}'
              href="https://github.blog"
            >
              Blog
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to the readme project","label":"text:the readme project"}'
              href="/readme"
            >
              The ReadME Project
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to careers","label":"text:careers"}'
              href="/about/careers"
            >
              Careers
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to press","label":"text:press"}'
              href="/about/press"
            >
              Press
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to diversity","label":"text:Inclusion"}'
              href="/about/diversity"
            >
              Inclusion
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to social impact","label":"text:social impact"}'
              href="https://socialimpact.github.com/"
            >
              Social Impact
            </a>
          </li>
          <li className="lh-condensed mb-3">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to shop","label":"text:shop"}'
              href="https://shop.github.com"
            >
              Shop
            </a>
          </li>
        </List>
      </div>
    </Container>
  );
}

export default BottomNav;
