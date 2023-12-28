import Faq from "./Faq";
import Plans from "./Plans";
import Testimonials from "./Testimonials";

function Cards23() {
  return (
    <>
    <Testimonials />
    <Plans />
    <Faq />
      <div className="container-xl">
       
        <div
          className="px-md-6 px-lg-0 mb-8 mt-6 mt-md-8 mt-lg-12 position-relative z-1 codespaces-faq"
          data-analytics-visible='{"category":"FAQ","action":"visible","label":"text: Frequently asked questions"}'
        >
        
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
