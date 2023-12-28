import styled from "styled-components";

const Head = styled.header`
  padding: 1rem 2rem;
  position: absolute;
  right: 0;
  left: 0;
  z-index: 32;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  color: white;
`;
const LogoLink = styled.a`
  color: white;
  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;
const GlobalNav = styled.nav`
display: flex;
flex-shrink: 0;
align-items: center;
gap:1rem;
padding: 0 1rem;;

a{
    font-size:14px;
    font-weight:600;
    text-decoration: none;

    &:hover{
        color:rgba(255, 255, 255, 0.7);
    }
}
`
function Header() {
  return (
    <Head
      className="Header js-details-container Details px-3 px-md-4 px-lg-5 flex-wrap flex-md-nowrap"
      role="banner"
    >
      <div>
        <LogoLink
          href="https://github.com/"
          data-hotkey="g d"
          aria-label="Homepage "
          data-turbo="false"
          data-analytics-event='{"category":"Header","action":"go to dashboard","label":"icon:logo"}'
        >
          <svg
            height="32"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            data-view-component="true"
          >
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
        </LogoLink>
      </div>

      <GlobalNav  aria-label="Global">
        <a
          className="Header-link py-md-3 d-block d-md-none py-2 border-top border-md-top-0 border-white-fade"
          data-ga-click="Header, click, Nav menu - item:dashboard:user"
          aria-label="Dashboard"
          data-turbo="false"
          href="/dashboard"
        >
          Dashboard
        </a>

        <a
          className="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade"
          data-hotkey="g p"
          data-ga-click="Header, click, Nav menu - item:pulls context:user"
          aria-label="Pull requests you created"
          data-turbo="false"
          data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls"
          href="/pulls"
        >
          Pull<span className="d-inline d-md-none d-lg-inline"> request</span>s
        </a>
        <a
          className="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade"
          data-hotkey="g i"
          data-ga-click="Header, click, Nav menu - item:issues context:user"
          aria-label="Issues you created"
          data-turbo="false"
          data-selected-links="/issues /issues/assigned /issues/mentioned /issues"
          href="/issues"
        >
          Issues
        </a>

        <a
          className="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade"
          data-ga-click="Header, click, Nav menu - item:workspaces context:user"
          data-turbo="false"
          data-selected-links="/codespaces /codespaces"
          href="/codespaces"
        >
          Codespaces
        </a>

        <div className="d-flex position-relative">
          <a
            className="js-selected-navigation-item Header-link flex-auto mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade"
            data-ga-click="Header, click, Nav menu - item:marketplace context:user"
            data-octo-click="marketplace_click"
            data-octo-dimensions="location:nav_bar"
            data-turbo="false"
            data-selected-links=" /marketplace"
            href="/marketplace"
          >
            Marketplace
          </a>
        </div>

        <a
          className="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade"
          data-ga-click="Header, click, Nav menu - item:explore"
          data-turbo="false"
          data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore"
          href="/explore"
        >
          Explore
        </a>

        <a
          className="js-selected-navigation-item Header-link d-block d-md-none py-2 py-md-3 border-top border-md-top-0 border-white-fade"
          data-ga-click="Header, click, Nav menu - item:Sponsors"
          data-hydro-click='{"event_type":"sponsors.button_click","payload":{"button":"HEADER_SPONSORS_DASHBOARD","sponsorable_login":"zak-cnaan","originating_url":"https://github.com/features/codespaces","user_id":116171099}}'
          data-hydro-click-hmac="3d92ec28ba3eb650446d0e77a17281d96c6240924b2ef7fc56bd9489707e5731"
          data-turbo="false"
          data-selected-links=" /sponsors/accounts"
          href="/sponsors/accounts"
        >
          Sponsors
        </a>

        <a
          className="Header-link d-block d-md-none mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade"
          data-turbo="false"
          href="/settings/profile"
        >
          Settings
        </a>

        <a
          className="Header-link d-block d-md-none mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade"
          data-turbo="false"
          href="/zak-cnaan"
        >
          <img
            className="avatar avatar-user"
            loading="lazy"
            decoding="async"
            src="https://avatars.githubusercontent.com/u/116171099?s=40&amp;v=4"
            width="20"
            height="20"
            alt="@zak-cnaan"
          />
          zak-cnaan
        </a>
      </GlobalNav>
    </Head>
  );
}

export default Header;
