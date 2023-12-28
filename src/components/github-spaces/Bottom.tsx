import styled from "styled-components";

const Bg = styled.div`
  background-color: rgb(22, 27, 34);
  color: rgb(230, 237, 243);
  font-size: 12px;

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    word-wrap: normal;
    border: 0;
  }
`;
const Container = styled.div`
  padding: 1.5rem 2.5rem;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;
const IconList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
`;
const BottomList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 0 1rem;
  flex-grow: 1;

  color: rgb(132, 141, 151);
  display: flex;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    &:hover {
      color: rgb(47, 129, 247);
      text-decoration: underline;
    }
  }
`;
function Bottom() {
  return (
    <Bg className="color-bg-subtle">
      <Container className="container-xl p-responsive f6 py-4 d-sm-flex flex-justify-between flex-row-reverse flex-items-center">
        <IconList className="list-style-none d-flex flex-items-center mb-3 mb-sm-0 lh-condensed-ultra">
          <li className="mr-3">
            <a
              href="https://x.com/github"
              data-analytics-event='{"category":"Footer","action":"go to X","label":"text:x"}'
              className="color-fg-subtle"
            >
              <img
                src="https://github.githubassets.com/assets/x-023c3ca5e173.svg"
                height="16"
                width="16"
                className="d-block"
                loading="lazy"
                decoding="async"
                alt="X icon"
              />
              <span className="sr-only">GitHub on X</span>
            </a>
          </li>
          <li className="mr-3">
            <a
              href="https://www.facebook.com/GitHub"
              data-analytics-event='{"category":"Footer","action":"go to Facebook","label":"text:facebook"}'
              className="color-fg-subtle"
            >
              <img
                src="https://github.githubassets.com/assets/facebook-de85282d23e6.svg"
                width="18"
                height="18"
                className="d-block"
                loading="lazy"
                decoding="async"
                alt="Facebook icon"
              />
              <span className="sr-only">GitHub on Facebook</span>
            </a>
          </li>
          <li className="mr-3 flex-self-start">
            <a
              href="https://www.linkedin.com/company/github"
              data-analytics-event='{"category":"Footer","action":"go to Linkedin","label":"text:linkedin"}'
              className="color-fg-subtle"
            >
              <img
                src="https://github.githubassets.com/assets/linkedin-3c0ace8edb5f.svg"
                width="19"
                height="18"
                className="d-block"
                loading="lazy"
                decoding="async"
                alt="Linkedin icon"
              />
              <span className="sr-only">GitHub on LinkedIn</span>
            </a>
          </li>
          <li className="mr-3">
            <a
              href="https://www.youtube.com/github"
              data-analytics-event='{"category":"Footer","action":"go to YouTube","label":"text:youtube"}'
              className="color-fg-subtle"
            >
              <img
                src="https://github.githubassets.com/assets/youtube-25bc21e924c8.svg"
                width="23"
                height="16"
                className="d-block"
                loading="lazy"
                decoding="async"
                alt="YouTube icon"
              />
              <span className="sr-only">GitHub on YouTube</span>
            </a>
          </li>
          <li className="mr-3">
            <a
              href="https://www.twitch.tv/github"
              data-analytics-event='{"category":"Footer","action":"go to Twitch","label":"text:twitch"}'
              className="color-fg-subtle"
            >
              <img
                src="https://github.githubassets.com/assets/twitch-e576606a89a7.svg"
                width="18"
                height="18"
                className="d-block"
                loading="lazy"
                decoding="async"
                alt="Twitch icon"
              />
              <span className="sr-only">GitHub on Twitch</span>
            </a>
          </li>
          <li className="mr-3">
            <a
              href="https://www.tiktok.com/@github"
              data-analytics-event='{"category":"Footer","action":"go to tiktok","label":"text:tiktok"}'
              className="color-fg-subtle"
            >
              <img
                src="https://github.githubassets.com/assets/tiktok-5d12d948d920.svg"
                width="18"
                height="18"
                className="d-block"
                loading="lazy"
                decoding="async"
                alt="TikTok icon"
              />
              <span className="sr-only">GitHub on TikTok</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/github"
              data-analytics-event='{"category":"Footer","action":"go to github&apos;s org","label":"text:github"}'
              className="color-fg-subtle"
            >
              <img
                src="https://github.githubassets.com/assets/github-mark-9be88460eaa6.svg"
                width="20"
                height="20"
                className="d-block"
                loading="lazy"
                decoding="async"
                alt="GitHub mark"
              />
              <span className="sr-only">GitHub’s organization on GitHub</span>
            </a>
          </li>
        </IconList>

        <BottomList className="list-style-none d-flex flex-wrap color-fg-muted">
          <li className="mx-2">© 2023 GitHub, Inc.</li>

          <li className="mx-2">
            <a
              href="https://docs.github.com/site-policy/github-terms/github-terms-of-service"
              data-analytics-event='{"category":"Footer","action":"go to terms","label":"text:terms"}'
              className="Link--secondary"
            >
              Terms
            </a>
          </li>

          <li className="mx-2">
            <a
              href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement"
              data-analytics-event='{"category":"Footer","action":"go to privacy","label":"text:privacy"}'
              className="Link--secondary"
            >
              Privacy
            </a>
            (
            <a
              href="https://github.com/github/site-policy/pull/582"
              className="Link--secondary"
            >
              Updated 08/2022
            </a>
            )
          </li>

          <li className="mx-2">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to sitemap","label":"text:sitemap"}'
              href="/sitemap"
            >
              Sitemap
            </a>
          </li>

          <li className="mx-2">
            <a
              className="Link--secondary"
              data-analytics-event='{"category":"Footer","action":"go to Git Guides","label":"text:What is Git?"}'
              href="/git-guides"
            >
              What is Git?
            </a>
          </li>
        </BottomList>
      </Container>
    </Bg>
  );
}

export default Bottom;
