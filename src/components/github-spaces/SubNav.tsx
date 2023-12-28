import styled from "styled-components";

const Pad = styled.div`
  padding: 1rem 2rem;

  a{
    text-decoration: none;
    position: relative;
    display: inline-block;
    &:hover{
      color: rgb(47, 129, 247);
    }

    &::after {
    position: absolute;
    bottom: 0;
    left: 15%;
    width: 70%;
    height: 1px;
    content: "";
    background-color: currentColor;
    transition: transform .25s ease-in-out;
    transform: scale(0);
}

&:hover::after {
  transform: scale(1);


}
  }
`
const Nav = styled.div`
  display: flex;
  align-items: center;
  gap:2rem;
`;

const Feature = styled.a`
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
`
function SubNav() {
  return (
    <Pad className="sub-nav-mktg js-toggler-container z-3 position-relative sub-nav-mktg-shadow">
      <Nav className="sub-nav-mktg-wrapper d-flex flex-items-center py-3 px-3 px-md-4 px-lg-5">
     
        <Feature
          className="sub-nav-title-link Link--primary no-underline f3-mktg d-inline-block text-bold mr-4"
          data-analytics-event='{"category":"Featuressubnav","action":"click title to go to Features","label":"ref_cta:Features;"}'
          href="/features/"
        >
          Features
        </Feature>

        <Nav className="sub-nav-mktg-links flex-auto f4-mktg d-flex flex-column flex-lg-row with-title gap-4">
          <a
            className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2"
            data-analytics-event='{"category":"Featuressubnav","action":"click item to go to Actions","label":"ref_cta:Actions;"}'
            href="/features/actions"
          >
            Actions
          </a>
          <a
            className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2"
            data-analytics-event='{"category":"Featuressubnav","action":"click item to go to Packages","label":"ref_cta:Packages;"}'
            href="/features/packages"
          >
            Packages
          </a>
          <a
            className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2"
            data-analytics-event='{"category":"Featuressubnav","action":"click item to go to Security","label":"ref_cta:Security;"}'
            href="/features/security"
          >
            Security
          </a>
          <a
            className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2 active"
            data-analytics-event='{"category":"Featuressubnav","action":"click item to go to Codespaces","label":"ref_cta:Codespaces;"}'
            href="/features/codespaces"
          >
            Codespaces
          </a>
          <a
            className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2"
            data-analytics-event='{"category":"Featuressubnav","action":"click item to go to Copilot","label":"ref_cta:Copilot;"}'
            href="/features/copilot"
          >
            Copilot
          </a>
          <a
            className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2"
            data-analytics-event='{"category":"Featuressubnav","action":"click item to go to Code review","label":"ref_cta:Code review;"}'
            href="/features/code-review"
          >
            Code review
          </a>
          <a
            className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2"
            data-analytics-event='{"category":"Featuressubnav","action":"click item to go to Search","label":"ref_cta:Search;"}'
            href="/features/code-search"
          >
            Search
          </a>
          <a
            className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2"
            data-analytics-event='{"category":"Featuressubnav","action":"click item to go to Issues","label":"ref_cta:Issues;"}'
            href="/features/issues"
          >
            Issues
          </a>
          <a
            className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2"
            data-analytics-event='{"category":"Featuressubnav","action":"click item to go to Discussions","label":"ref_cta:Discussions;"}'
            href="/features/discussions"
          >
            Discussions
          </a>
        </Nav>
      </Nav>
    </Pad>
  );
}

export default SubNav;
