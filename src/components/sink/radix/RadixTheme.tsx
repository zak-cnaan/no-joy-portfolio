import styled from "styled-components";
import Cards12 from "./Cards12";
import Cards13 from "./Cards13";
import Cards14 from "./Cards14";
import Cards15 from "./Cards15";
import Cards16 from "./Cards16";

const PlayGround = styled.div`
  background-color: var(--gray-1);
  color: var(--gray-12);
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  .rt-reset:where(button) {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;
    border: 0;
  }

  .rt-TabsTriggerInnerHidden {
    display: none;
  }

  .rt-Link {
    color: var(--accent-a11);
  }

  .rt-BaseButton:where(.rt-variant-solid) {
    background-color: var(--accent-9);
    color: var(--accent-9-contrast);
  }
  .rt-BaseButton:where(.rt-variant-solid):where(:hover) {
    background-color: var(--accent-10);
  }

  .rt-TabsTrigger {
    color: var(--gray-a11);
    &:hover {
      background-color: var(--gray-a3);
    }
  }
  .rt-TabsTrigger:where([data-state="active"]) {
    color: var(--gray-12);
    position: relative;
  }

  .rt-TabsTrigger:where([data-state="active"]):before {
    box-sizing: border-box;
    content: "";
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--accent-10);
  }
  .rt-Badge{
    padding: 2px 8px;
    border-radius: 4px;
    margin:4px;
    display: inline-block;
  }
  .rt-Badge:where(.rt-variant-solid) {
    background-color: var(--accent-9);
    color: var(--accent-9-contrast);
}

.rt-Badge:where(.rt-variant-solid):where(.rt-high-contrast) {
    background-color: var(--accent-12);
    color: var(--accent-1);
}

.rt-Badge:where(.rt-variant-soft) {
    background-color: var(--accent-a3);
    color: var(--accent-a11);
}
.rt-Badge:where(.rt-variant-soft):where(.rt-high-contrast) {
    color: var(--accent-12);
}
.rt-Badge:where(.rt-variant-surface) {
    background-color: var(--color-surface-accent);
    box-shadow: inset 0 0 0 1px var(--accent-a7);
    color: var(--accent-a11);
}
.rt-Badge:where(.rt-variant-surface):where(.rt-high-contrast) {
    color: var(--accent-12);
}
.rt-Badge:where(.rt-variant-outline) {
    box-shadow: inset 0 0 0 1px var(--accent-a8);
    color: var(--accent-a11);
}
.rt-Badge:where(.rt-variant-outline):where(.rt-high-contrast) {
    box-shadow: inset 0 0 0 1px var(--accent-a7),inset 0 0 0 1px var(--gray-a11);
    color: var(--accent-12);
}

.rt-Blockquote {
  margin:0;
    border-left: 0.25rem solid var(--accent-a6);
    padding-left: 0.5rem;
}

[data-accent-color] {
    color: var(--accent-a11);
}

.rt-BaseButton:where(.rt-variant-solid) {
    background-color: var(--accent-9);
    color: var(--accent-9-contrast);
}

.rt-variant-solid {
    background-color: var(--accent-9);
    color: var(--accent-9-contrast);
}

.rt-variant-solid:where(.rt-high-contrast) {
    background-color: var(--accent-12);
    color: var(--gray-1);
}

.rt-BaseButton:where(.rt-variant-classic):where([data-disabled]) {
    cursor: var(--cursor-disabled);
    color: var(--gray-a8);
    background-color: var(--gray-2);
    background-image: none;
    box-shadow: var(--base-button-classic-disabled-box-shadow);
    filter: none;
}

.rt-variant-solid:where([data-disabled]) {
    color: var(--gray-a8);
    background-color: var(--gray-a3);
}

.rt-BaseButton:where(.rt-variant-soft) {
    background-color: var(--accent-a3);
}
.rt-BaseButton:where(.rt-variant-soft,.rt-variant-ghost) {
    color: var(--accent-a11);
}
.rt-BaseButton:where(.rt-variant-soft,.rt-variant-ghost):where(.rt-high-contrast) {
    color: var(--accent-12);
}

.rt-BaseButton:where(.rt-variant-soft):where([data-disabled]) {
  background-color: var(--gray-a3);
  color: var(--gray-a8);
}
`;
function Card1() {
  return (
    <div className="rt-Flex playground_PlaygroundSection__jQiIu rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-gap-5 rt-r-mb-5 sm:rt-r-mb-8">
      <div className="rt-Flex rt-r-display-flex rt-r-ai-baseline rt-r-jc-start rt-r-gap-4 rt-r-mt-2">
        <h1
          id="alert-dialog"
          className="rt-Heading rt-r-size-6 rt-r-weight-bold"
        >
          <a
            data-accent-color="gray"
            href="#alert-dialog"
            className="rt-Text rt-reset rt-Link rt-underline-hover rt-high-contrast"
          >
            Alert Dialog
          </a>
        </h1>
        <a
          href="/themes/docs/components/alert-dialog"
          className="rt-Text rt-reset rt-Link playground_PlaygroundDocsLink__iTdrz rt-underline-auto rt-r-size-2"
        >
          View in docs
        </a>
      </div>
      <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-start rt-r-gap-4">
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:r1i:"
          data-state="closed"
          className="rt-reset rt-BaseButton rt-Button rt-r-size-1 rt-variant-solid"
        >
          Open
        </button>
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:r1l:"
          data-state="closed"
          className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-solid"
        >
          Open
        </button>
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:r1o:"
          data-state="closed"
          className="rt-reset rt-BaseButton rt-Button rt-r-size-3 rt-variant-solid"
        >
          Open
        </button>
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:r1r:"
          data-state="closed"
          className="rt-reset rt-BaseButton rt-Button rt-r-size-4 rt-variant-solid"
        >
          Open
        </button>
      </div>
    </div>
  );
}
function Card2() {
  return (
    <div className="rt-Flex playground_PlaygroundSection__jQiIu rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-gap-5 rt-r-mb-5 sm:rt-r-mb-8">
      <div className="rt-Flex rt-r-display-flex rt-r-ai-baseline rt-r-jc-start rt-r-gap-4">
        <h1
          id="aspect-ratio"
          className="rt-Heading rt-r-size-6 rt-r-weight-bold"
        >
          <a
            data-accent-color="gray"
            href="#aspect-ratio"
            className="rt-Text rt-reset rt-Link rt-underline-hover rt-high-contrast"
          >
            Aspect Ratio
          </a>
        </h1>
        <a
          href="/themes/docs/components/aspect-ratio"
          className="rt-Text rt-reset rt-Link playground_PlaygroundDocsLink__iTdrz rt-underline-auto rt-r-size-2"
        >
          View in docs
        </a>
      </div>
      <div
        className="rt-Grid rt-r-gap-4"
        data-data-style="--grid-template-columns-initial: repeat(4, minmax(0, 1fr));"
      >
        <div>
          <p data-accent-color="gray" className="rt-Text rt-r-size-1 rt-r-mb-2">
            2:3
          </p>
          <div
            data-radix-aspect-ratio-wrapper=""
            data-data-style="position: relative; width: 100%; padding-bottom: 150%;"
          >
            <div data-data-style="position: absolute; inset: 0px;">
              <img
                src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"
                alt="A photo of a blue sky opening up from within a red canyon."
                data-data-style="object-fit: cover; width: 100%; height: 100%;"
              />
            </div>
          </div>
        </div>
        <div>
          <p data-accent-color="gray" className="rt-Text rt-r-size-1 rt-r-mb-2">
            1:1
          </p>
          <div
            data-radix-aspect-ratio-wrapper=""
            data-data-style="position: relative; width: 100%; padding-bottom: 100%;"
          />
          <div data-data-style="position: absolute; inset: 0px;">
            <img
              src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"
              alt="A photo of a blue sky opening up from within a red canyon."
              data-data-style="object-fit: cover; width: 100%; height: 100%;"
            />
          </div>
        </div>
      </div>
      <div>
        <p data-accent-color="gray" className="rt-Text rt-r-size-1 rt-r-mb-2">
          16:9
        </p>
        <div
          data-radix-aspect-ratio-wrapper=""
          data-data-style="position: relative; width: 100%; padding-bottom: 56.25%;"
        >
          <div data-data-style="position: absolute; inset: 0px;">
            <img
              src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"
              alt="A photo of a blue sky opening up from within a red canyon."
              data-data-style="object-fit: cover; width: 100%; height: 100%;"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="rt-Flex playground_PlaygroundSection__jQiIu rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-gap-5 rt-r-mb-5 sm:rt-r-mb-8">
      <div className="rt-Flex rt-r-display-flex rt-r-ai-baseline rt-r-jc-start rt-r-gap-4">
        <h1 id="badge" className="rt-Heading rt-r-size-6 rt-r-weight-bold">
          <a
            data-accent-color="gray"
            href="#badge"
            className="rt-Text rt-reset rt-Link rt-underline-hover rt-high-contrast"
          >
            Badge
          </a>
        </h1>
        <a
          href="/themes/docs/components/badge"
          className="rt-Text rt-reset rt-Link playground_PlaygroundDocsLink__iTdrz rt-underline-auto rt-r-size-2"
        >
          View in docs
        </a>
      </div>
      <div dir="ltr" data-orientation="horizontal" className="rt-TabsRoot">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="rt-TabsList rt-r-size-2"
          data-data-tabindex="0"
          data-orientation="horizontal"
          data-data-style="outline: none;"
        >
          <button
            type="button"
            role="tab"
            aria-selected="true"
            aria-controls="radix-:r22:-content-theme-colors"
            data-state="active"
            id="radix-:r22:-trigger-theme-colors"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="0"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">Theme colors</span>
            <span className="rt-TabsTriggerInnerHidden">Theme colors</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r22:-content-all-colors"
            data-state="inactive"
            id="radix-:r22:-trigger-all-colors"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">All colors</span>
            <span className="rt-TabsTriggerInnerHidden">All colors</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r22:-content-all-sizes"
            data-state="inactive"
            id="radix-:r22:-trigger-all-sizes"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">All sizes</span>
            <span className="rt-TabsTriggerInnerHidden">All sizes</span>
          </button>
        </div>
        <div
          data-state="active"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r22:-trigger-theme-colors"
          id="radix-:r22:-content-theme-colors"
          data-data-tabindex="0"
          className="rt-TabsContent"
          data-data-style=""
        >
          <div className="rt-Box rt-r-mt-6">
            <table className="playground_PlaygroundTable__RTJb6">
              <thead>
                <tr>
                  <th></th>
                  <th>Accent</th>
                  <th>Gray</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Solid</td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start rt-r-gap-4">
                      <span className="rt-Badge rt-r-size-1 rt-variant-solid">
                        New
                      </span>
                      <span className="rt-Badge rt-r-size-1 rt-variant-solid rt-high-contrast">
                        New
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start rt-r-gap-4">
                      <span
                        data-accent-color="gray"
                        className="rt-Badge rt-r-size-1 rt-variant-solid"
                      >
                        New
                      </span>
                      <span
                        data-accent-color="gray"
                        className="rt-Badge rt-r-size-1 rt-variant-solid rt-high-contrast"
                      >
                        New
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Soft</td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start rt-r-gap-4">
                      <span className="rt-Badge rt-r-size-1 rt-variant-soft">
                        New
                      </span>
                      <span className="rt-Badge rt-r-size-1 rt-variant-soft rt-high-contrast">
                        New
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start rt-r-gap-4">
                      <span
                        data-accent-color="gray"
                        className="rt-Badge rt-r-size-1 rt-variant-soft"
                      >
                        New
                      </span>
                      <span
                        data-accent-color="gray"
                        className="rt-Badge rt-r-size-1 rt-variant-soft rt-high-contrast"
                      >
                        New
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Surface</td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start rt-r-gap-4">
                      <span className="rt-Badge rt-r-size-1 rt-variant-surface">
                        New
                      </span>
                      <span className="rt-Badge rt-r-size-1 rt-variant-surface rt-high-contrast">
                        New
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start rt-r-gap-4">
                      <span
                        data-accent-color="gray"
                        className="rt-Badge rt-r-size-1 rt-variant-surface"
                      >
                        New
                      </span>
                      <span
                        data-accent-color="gray"
                        className="rt-Badge rt-r-size-1 rt-variant-surface rt-high-contrast"
                      >
                        New
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Outline</td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start rt-r-gap-4">
                      <span className="rt-Badge rt-r-size-1 rt-variant-outline">
                        New
                      </span>
                      <span className="rt-Badge rt-r-size-1 rt-variant-outline rt-high-contrast">
                        New
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start rt-r-gap-4">
                      <span
                        data-accent-color="gray"
                        className="rt-Badge rt-r-size-1 rt-variant-outline"
                      >
                        New
                      </span>
                      <span
                        data-accent-color="gray"
                        className="rt-Badge rt-r-size-1 rt-variant-outline rt-high-contrast"
                      >
                        New
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          data-state="inactive"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r22:-trigger-all-colors"
          id="radix-:r22:-content-all-colors"
          data-data-tabindex="0"
          className="rt-TabsContent"
        ></div>
        <div
          data-state="inactive"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r22:-trigger-all-sizes"
          id="radix-:r22:-content-all-sizes"
          data-data-tabindex="0"
          className="rt-TabsContent"
        ></div>
      </div>
    </div>
  );
}
function Card5() {
  return (
    <div className="rt-Flex playground_PlaygroundSection__jQiIu rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-gap-5 rt-r-mb-5 sm:rt-r-mb-8">
      <div className="rt-Flex rt-r-display-flex rt-r-ai-baseline rt-r-jc-start rt-r-gap-4">
        <h1 id="blockquote" className="rt-Heading rt-r-size-6 rt-r-weight-bold">
          <a
            data-accent-color="gray"
            href="#blockquote"
            className="rt-Text rt-reset rt-Link rt-underline-hover rt-high-contrast"
          >
            Blockquote
          </a>
        </h1>
        <a
          href="/themes/docs/components/blockquote"
          className="rt-Text rt-reset rt-Link playground_PlaygroundDocsLink__iTdrz rt-underline-auto rt-r-size-2"
        >
          View in docs
        </a>
      </div>
      <div dir="ltr" data-orientation="horizontal" className="rt-TabsRoot">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="rt-TabsList rt-r-size-2"
          data-data-tabindex="0"
          data-orientation="horizontal"
          data-data-style="outline: none;"
        >
          <button
            type="button"
            role="tab"
            aria-selected="true"
            aria-controls="radix-:r26:-content-theme-colors"
            data-state="active"
            id="radix-:r26:-trigger-theme-colors"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">Theme colors</span>
            <span className="rt-TabsTriggerInnerHidden">Theme colors</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r26:-content-all-colors"
            data-state="inactive"
            id="radix-:r26:-trigger-all-colors"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">All colors</span>
            <span className="rt-TabsTriggerInnerHidden">All colors</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r26:-content-all-sizes"
            data-state="inactive"
            id="radix-:r26:-trigger-all-sizes"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">All sizes</span>
            <span className="rt-TabsTriggerInnerHidden">All sizes</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r26:-content-all-weights"
            data-state="inactive"
            id="radix-:r26:-trigger-all-weights"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">All weights</span>
            <span className="rt-TabsTriggerInnerHidden">All weights</span>
          </button>
        </div>
        <div
          data-state="active"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r26:-trigger-theme-colors"
          id="radix-:r26:-content-theme-colors"
          data-data-tabindex="0"
          className="rt-TabsContent"
          data-data-style=""
        >
          <div
            className="rt-Grid rt-r-gap-6 rt-r-mt-6"
            data-data-style="--grid-template-columns-initial: auto auto; white-space: nowrap;"
          >
            <div className="rt-Flex rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-gap-6">
              <span
                data-accent-color="gray"
                className="rt-Text rt-r-size-1 rt-r-ta-center -rt-r-mb-4"
              >
                Accent
              </span>
              <blockquote className="rt-Text rt-Blockquote rt-r-size-4">
                Perfect typography is certainly the most elusive of all arts.
                <br />
                Sculpture in stone alone comes near it in obstinacy.
              </blockquote>
              <blockquote className="rt-Text rt-Blockquote rt-r-size-3">
                Perfect typography is certainly the most elusive of all arts.
                <br />
                Sculpture in stone alone comes near it in obstinacy.
              </blockquote>
              <blockquote className="rt-Text rt-Blockquote rt-r-size-2">
                Perfect typography is certainly the most elusive of all arts.
                <br />
                Sculpture in stone alone comes near it in obstinacy.
              </blockquote>
            </div>
            <div className="rt-Flex rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-gap-6">
              <span
                data-accent-color="gray"
                className="rt-Text rt-r-size-1 rt-r-ta-center -rt-r-mb-4"
              >
                Gray
              </span>
              <blockquote
                data-accent-color="gray"
                className="rt-Text rt-Blockquote rt-r-size-4"
              >
                Perfect typography is certainly the most elusive of all arts.
                <br />
                Sculpture in stone alone comes near it in obstinacy.
              </blockquote>
              <blockquote
                data-accent-color="gray"
                className="rt-Text rt-Blockquote rt-r-size-3"
              >
                Perfect typography is certainly the most elusive of all arts.
                <br />
                Sculpture in stone alone comes near it in obstinacy.
              </blockquote>
              <blockquote
                data-accent-color="gray"
                className="rt-Text rt-Blockquote rt-r-size-2"
              >
                Perfect typography is certainly the most elusive of all arts.
                <br />
                Sculpture in stone alone comes near it in obstinacy.
              </blockquote>
            </div>
          </div>
        </div>
        <div
          data-state="inactive"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r26:-trigger-all-colors"
          id="radix-:r26:-content-all-colors"
          data-data-tabindex="0"
          className="rt-TabsContent"
        ></div>
        <div
          data-state="inactive"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r26:-trigger-all-sizes"
          id="radix-:r26:-content-all-sizes"
          data-data-tabindex="0"
          className="rt-TabsContent"
        ></div>
        <div
          data-state="inactive"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r26:-trigger-all-weights"
          id="radix-:r26:-content-all-weights"
          data-data-tabindex="0"
          className="rt-TabsContent"
        ></div>
      </div>
    </div>
  );
}
function Card6() {
  return (
    <div className="rt-Flex playground_PlaygroundSection__jQiIu rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-gap-5 rt-r-mb-5 sm:rt-r-mb-8">
      <div className="rt-Flex rt-r-display-flex rt-r-ai-baseline rt-r-jc-start rt-r-gap-4">
        <h1 id="button" className="rt-Heading rt-r-size-6 rt-r-weight-bold">
          <a
            data-accent-color="gray"
            href="#button"
            className="rt-Text rt-reset rt-Link rt-underline-hover rt-high-contrast"
          >
            Button
          </a>
        </h1>
        <a
          href="/themes/docs/components/button"
          className="rt-Text rt-reset rt-Link playground_PlaygroundDocsLink__iTdrz rt-underline-auto rt-r-size-2"
        >
          View in docs
        </a>
      </div>
      <div dir="ltr" data-orientation="horizontal" className="rt-TabsRoot">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="rt-TabsList rt-r-size-2"
          data-data-tabindex="0"
          data-orientation="horizontal"
          data-data-style="outline: none;"
        >
          <button
            type="button"
            role="tab"
            aria-selected="true"
            aria-controls="radix-:r2b:-content-theme-colors"
            data-state="active"
            id="radix-:r2b:-trigger-theme-colors"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">Theme colors</span>
            <span className="rt-TabsTriggerInnerHidden">Theme colors</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r2b:-content-all-colors"
            data-state="inactive"
            id="radix-:r2b:-trigger-all-colors"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">All colors</span>
            <span className="rt-TabsTriggerInnerHidden">All colors</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r2b:-content-all-sizes"
            data-state="inactive"
            id="radix-:r2b:-trigger-all-sizes"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">All sizes</span>
            <span className="rt-TabsTriggerInnerHidden">All sizes</span>
          </button>
        </div>
        <div
          data-state="active"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r2b:-trigger-theme-colors"
          id="radix-:r2b:-content-theme-colors"
          data-data-tabindex="0"
          className="rt-TabsContent"
          data-data-style=""
        >
          <div className="rt-Box rt-r-mt-6">
            <table className="playground_PlaygroundTable__RTJb6">
              <thead>
                <tr>
                  <th></th>
                  <th data-data-colspan="2">Accent</th>
                  <th data-data-colspan="2">Gray</th>
                  <th>Disabled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Classic</td>
                  <td>
                    <button className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-classic">
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-classic rt-high-contrast">
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      data-accent-color="gray"
                      className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-classic"
                    >
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      data-accent-color="gray"
                      className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-classic rt-high-contrast"
                    >
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      data-disabled="true"
                      disabled={false}
                      className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-classic"
                    >
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Solid</td>
                  <td>
                    <button className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-solid">
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-solid rt-high-contrast">
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      data-accent-color="gray"
                      className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-solid"
                    >
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      data-accent-color="gray"
                      className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-solid rt-high-contrast"
                    >
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      data-disabled="true"
                      disabled={false}
                      className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-solid"
                    >
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Soft</td>
                  <td>
                    <button className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-soft">
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-soft rt-high-contrast">
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      data-accent-color="gray"
                      className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-soft"
                    >
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      data-accent-color="gray"
                      className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-soft rt-high-contrast"
                    >
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      data-disabled="true"
                      disabled={false}
                      className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-soft"
                    >
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Surface</td>
                  <td>
                    <button className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-surface">
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-surface rt-high-contrast">
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      data-accent-color="gray"
                      className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-surface"
                    >
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      data-accent-color="gray"
                      className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-surface rt-high-contrast"
                    >
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      data-disabled="true"
                      disabled={false}
                      className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-surface"
                    >
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Outline</td>
                  <td>
                    <button className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-outline">
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-outline rt-high-contrast">
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      data-accent-color="gray"
                      className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-outline"
                    >
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      data-accent-color="gray"
                      className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-outline rt-high-contrast"
                    >
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      data-disabled="true"
                      disabled={false}
                      className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-outline"
                    >
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Ghost</td>
                  <td>
                    <button className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-ghost">
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-ghost rt-high-contrast">
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      data-accent-color="gray"
                      className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-ghost"
                    >
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      data-accent-color="gray"
                      className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-ghost rt-high-contrast"
                    >
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      data-disabled="true"
                      disabled={false}
                      className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-ghost"
                    >
                      Next{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          data-fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          data-state="inactive"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r2b:-trigger-all-colors"
          id="radix-:r2b:-content-all-colors"
          data-data-tabindex="0"
          className="rt-TabsContent"
        ></div>
        <div
          data-state="inactive"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r2b:-trigger-all-sizes"
          id="radix-:r2b:-content-all-sizes"
          data-data-tabindex="0"
          className="rt-TabsContent"
        ></div>
      </div>
    </div>
  );
}
function Card7() {
  return (
    <div className="rt-Flex playground_PlaygroundSection__jQiIu rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-gap-5 rt-r-mb-5 sm:rt-r-mb-8">
      <div className="rt-Flex rt-r-display-flex rt-r-ai-baseline rt-r-jc-start rt-r-gap-4">
        <h1 id="callout" className="rt-Heading rt-r-size-6 rt-r-weight-bold">
          <a
            data-accent-color="gray"
            href="#callout"
            className="rt-Text rt-reset rt-Link rt-underline-hover rt-high-contrast"
          >
            Callout
          </a>
        </h1>
        <a
          href="/themes/docs/components/callout"
          className="rt-Text rt-reset rt-Link playground_PlaygroundDocsLink__iTdrz rt-underline-auto rt-r-size-2"
        >
          View in docs
        </a>
      </div>
      <div dir="ltr" data-orientation="horizontal" className="rt-TabsRoot">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="rt-TabsList rt-r-size-2"
          data-data-tabindex="0"
          data-orientation="horizontal"
          data-data-style="outline: none;"
        >
          <button
            type="button"
            role="tab"
            aria-selected="true"
            aria-controls="radix-:r2f:-content-theme-colors"
            data-state="active"
            id="radix-:r2f:-trigger-theme-colors"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">Theme colors</span>
            <span className="rt-TabsTriggerInnerHidden">Theme colors</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r2f:-content-all-colors"
            data-state="inactive"
            id="radix-:r2f:-trigger-all-colors"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">All colors</span>
            <span className="rt-TabsTriggerInnerHidden">All colors</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r2f:-content-all-sizes"
            data-state="inactive"
            id="radix-:r2f:-trigger-all-sizes"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">All sizes</span>
            <span className="rt-TabsTriggerInnerHidden">All sizes</span>
          </button>
        </div>
        <div
          data-state="active"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r2f:-trigger-theme-colors"
          id="radix-:r2f:-content-theme-colors"
          data-data-tabindex="0"
          className="rt-TabsContent"
          data-data-style=""
        >
          <div className="rt-Box rt-r-mt-6">
            <table className="playground_PlaygroundTable__RTJb6">
              <thead>
                <tr>
                  <th></th>
                  <th>Accent</th>
                  <th>Gray</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Soft</td>
                  <td>
                    <div className="rt-CalloutRoot rt-r-size-2 rt-variant-soft">
                      <div className="rt-Text rt-r-size-2 rt-CalloutIcon">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p className="rt-Text rt-CalloutText rt-r-size-2">
                        Please{" "}
                        <a
                          href="#"
                          className="rt-Text rt-reset rt-Link rt-underline-auto"
                        >
                          upgrade
                        </a>{" "}
                        to the new version.
                      </p>
                    </div>
                    <div className="rt-CalloutRoot rt-r-size-2 rt-variant-soft rt-high-contrast rt-r-mt-4">
                      <div className="rt-Text rt-r-size-2 rt-high-contrast rt-CalloutIcon">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p className="rt-Text rt-CalloutText rt-r-size-2 rt-high-contrast">
                        Please{" "}
                        <a
                          href="#"
                          className="rt-Text rt-reset rt-Link rt-underline-auto"
                        >
                          upgrade
                        </a>{" "}
                        to the new version.
                      </p>
                    </div>
                  </td>
                  <td>
                    <div
                      data-accent-color="gray"
                      className="rt-CalloutRoot rt-r-size-2 rt-variant-soft"
                    >
                      <div
                        className="rt-Text rt-r-size-2 rt-CalloutIcon"
                        data-accent-color="gray"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p
                        data-accent-color="gray"
                        className="rt-Text rt-CalloutText rt-r-size-2"
                      >
                        Please{" "}
                        <a
                          href="#"
                          className="rt-Text rt-reset rt-Link rt-underline-auto"
                        >
                          upgrade
                        </a>{" "}
                        to the new version.
                      </p>
                    </div>
                    <div
                      data-accent-color="gray"
                      className="rt-CalloutRoot rt-r-size-2 rt-variant-soft rt-high-contrast rt-r-mt-4"
                    >
                      <div
                        className="rt-Text rt-r-size-2 rt-high-contrast rt-CalloutIcon"
                        data-accent-color="gray"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p
                        data-accent-color="gray"
                        className="rt-Text rt-CalloutText rt-r-size-2 rt-high-contrast"
                      >
                        Please{" "}
                        <a
                          href="#"
                          className="rt-Text rt-reset rt-Link rt-underline-auto"
                        >
                          upgrade
                        </a>{" "}
                        to the new version.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Surface</td>
                  <td>
                    <div className="rt-CalloutRoot rt-r-size-2 rt-variant-surface">
                      <div className="rt-Text rt-r-size-2 rt-CalloutIcon">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p className="rt-Text rt-CalloutText rt-r-size-2">
                        Please{" "}
                        <a
                          href="#"
                          className="rt-Text rt-reset rt-Link rt-underline-auto"
                        >
                          upgrade
                        </a>{" "}
                        to the new version.
                      </p>
                    </div>
                    <div className="rt-CalloutRoot rt-r-size-2 rt-variant-surface rt-high-contrast rt-r-mt-4">
                      <div className="rt-Text rt-r-size-2 rt-high-contrast rt-CalloutIcon">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p className="rt-Text rt-CalloutText rt-r-size-2 rt-high-contrast">
                        Please{" "}
                        <a
                          href="#"
                          className="rt-Text rt-reset rt-Link rt-underline-auto"
                        >
                          upgrade
                        </a>{" "}
                        to the new version.
                      </p>
                    </div>
                  </td>
                  <td>
                    <div
                      data-accent-color="gray"
                      className="rt-CalloutRoot rt-r-size-2 rt-variant-surface"
                    >
                      <div
                        className="rt-Text rt-r-size-2 rt-CalloutIcon"
                        data-accent-color="gray"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p
                        data-accent-color="gray"
                        className="rt-Text rt-CalloutText rt-r-size-2"
                      >
                        Please{" "}
                        <a
                          href="#"
                          className="rt-Text rt-reset rt-Link rt-underline-auto"
                        >
                          upgrade
                        </a>{" "}
                        to the new version.
                      </p>
                    </div>
                    <div
                      data-accent-color="gray"
                      className="rt-CalloutRoot rt-r-size-2 rt-variant-surface rt-high-contrast rt-r-mt-4"
                    >
                      <div
                        className="rt-Text rt-r-size-2 rt-high-contrast rt-CalloutIcon"
                        data-accent-color="gray"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p
                        data-accent-color="gray"
                        className="rt-Text rt-CalloutText rt-r-size-2 rt-high-contrast"
                      >
                        Please{" "}
                        <a
                          href="#"
                          className="rt-Text rt-reset rt-Link rt-underline-auto"
                        >
                          upgrade
                        </a>{" "}
                        to the new version.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Outline</td>
                  <td>
                    <div className="rt-CalloutRoot rt-r-size-2 rt-variant-outline">
                      <div className="rt-Text rt-r-size-2 rt-CalloutIcon">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p className="rt-Text rt-CalloutText rt-r-size-2">
                        Please{" "}
                        <a
                          href="#"
                          className="rt-Text rt-reset rt-Link rt-underline-auto"
                        >
                          upgrade
                        </a>{" "}
                        to the new version.
                      </p>
                    </div>
                    <div className="rt-CalloutRoot rt-r-size-2 rt-variant-outline rt-high-contrast rt-r-mt-4">
                      <div className="rt-Text rt-r-size-2 rt-high-contrast rt-CalloutIcon">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p className="rt-Text rt-CalloutText rt-r-size-2 rt-high-contrast">
                        Please{" "}
                        <a
                          href="#"
                          className="rt-Text rt-reset rt-Link rt-underline-auto"
                        >
                          upgrade
                        </a>{" "}
                        to the new version.
                      </p>
                    </div>
                  </td>
                  <td>
                    <div
                      data-accent-color="gray"
                      className="rt-CalloutRoot rt-r-size-2 rt-variant-outline"
                    >
                      <div
                        className="rt-Text rt-r-size-2 rt-CalloutIcon"
                        data-accent-color="gray"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p
                        data-accent-color="gray"
                        className="rt-Text rt-CalloutText rt-r-size-2"
                      >
                        Please{" "}
                        <a
                          href="#"
                          className="rt-Text rt-reset rt-Link rt-underline-auto"
                        >
                          upgrade
                        </a>{" "}
                        to the new version.
                      </p>
                    </div>
                    <div
                      data-accent-color="gray"
                      className="rt-CalloutRoot rt-r-size-2 rt-variant-outline rt-high-contrast rt-r-mt-4"
                    >
                      <div
                        className="rt-Text rt-r-size-2 rt-high-contrast rt-CalloutIcon"
                        data-accent-color="gray"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p
                        data-accent-color="gray"
                        className="rt-Text rt-CalloutText rt-r-size-2 rt-high-contrast"
                      >
                        Please{" "}
                        <a
                          href="#"
                          className="rt-Text rt-reset rt-Link rt-underline-auto"
                        >
                          upgrade
                        </a>{" "}
                        to the new version.
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          data-state="inactive"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r2f:-trigger-all-colors"
          id="radix-:r2f:-content-all-colors"
          data-data-tabindex="0"
          className="rt-TabsContent"
        ></div>
        <div
          data-state="inactive"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r2f:-trigger-all-sizes"
          id="radix-:r2f:-content-all-sizes"
          data-data-tabindex="0"
          className="rt-TabsContent"
        ></div>
      </div>
    </div>
  );
}
function Card8() {
  return (
    <div className="rt-Flex playground_PlaygroundSection__jQiIu rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-gap-5 rt-r-mb-5 sm:rt-r-mb-8">
      <div className="rt-Flex rt-r-display-flex rt-r-ai-baseline rt-r-jc-start rt-r-gap-4">
        <h1 id="card" className="rt-Heading rt-r-size-6 rt-r-weight-bold">
          <a
            data-accent-color="gray"
            href="#card"
            className="rt-Text rt-reset rt-Link rt-underline-hover rt-high-contrast"
          >
            Card
          </a>
        </h1>
        <a
          href="/themes/docs/components/card"
          className="rt-Text rt-reset rt-Link playground_PlaygroundDocsLink__iTdrz rt-underline-auto rt-r-size-2"
        >
          View in docs
        </a>
      </div>
      <div className="rt-Box" data-data-style="white-space: nowrap;">
        <div className="rt-Flex playground_PlaygroundHeroContainer__Z_40G rt-r-display-flex rt-r-fd-column rt-r-jc-start">
          <div className="rt-Flex playground_PlaygroundHeroContent__PV_P9 rt-r-display-flex rt-r-jc-center rt-r-position-relative">
            <div
              className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-position-absolute rt-r-inset-0"
              data-data-style="overflow: hidden;"
            >
              <svg
                width="100%"
                height="200%"
                viewBox="0 0 2560 1920"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-data-style="opacity: 0.6;"
              >
                <g>
                  <path
                    d="M-119.809 -1055.99L859.027 -684.98C915.435 -663.6 955.626 -624.994 968.519 -579.807L1129.49 -15.6245L1860.47 -241.727C1919.02 -259.836 1985.68 -257.939 2042.09 -236.559L3020.93 134.453C3124.79 173.822 3164.97 266.777 3110.66 342.073L2850.06 703.385C2827.36 734.857 2790.34 759.666 2745.28 773.604L1467.45 1168.86L1748.58 2154.16C1758.67 2189.52 1751.28 2226.32 1727.72 2258.12L1361.75 2752.01L203.258 2312.91C146.85 2291.53 106.659 2252.92 93.7664 2207.73L-67.2076 1643.55L-798.184 1869.65C-856.73 1887.76 -923.398 1885.87 -979.806 1864.48L-2138.3 1425.38L-1787.63 925.687C-1765.05 893.507 -1727.57 868.111 -1681.77 853.942L-405.167 459.07L-686.568 -527.183C-696.491 -561.961 -689.511 -598.157 -666.811 -629.629L-406.21 -990.941C-351.902 -1066.24 -223.676 -1095.36 -119.809 -1055.99Z"
                    fill="url(#paint0_radial_37_453-1)"
                  ></path>
                  <path
                    d="M885.9 -99.2158L1864.74 271.796C1921.14 293.177 1961.34 331.783 1974.23 376.97L2135.2 941.152L2866.18 715.049C2924.72 696.94 2991.39 698.837 3047.8 720.218L4026.64 1091.23C4130.5 1130.6 4170.68 1223.55 4116.37 1298.85L3855.77 1660.16C3833.07 1691.63 3796.05 1716.44 3750.99 1730.38L2473.16 2125.63L2754.29 3110.94C2764.38 3146.29 2756.99 3183.09 2733.43 3214.9L2367.46 3708.79L1208.97 3269.68C1152.56 3248.3 1112.37 3209.7 1099.48 3164.51C816.824 2173.87 747.087 1929.46 319.141 429.593C309.218 394.815 316.198 358.619 338.898 327.147L599.499 -34.1647C653.807 -109.461 782.033 -138.585 885.9 -99.2158Z"
                    fill="url(#paint1_radial_37_453-1)"
                  ></path>
                  <path
                    d="M1597.13 169.784L2575.97 540.796C2632.38 562.177 2672.57 600.783 2685.46 645.97L2846.44 1210.15L3577.41 984.049C3635.96 965.94 3702.63 967.837 3759.03 989.218L4737.87 1360.23C4841.74 1399.6 4881.91 1492.55 4827.61 1567.85L4567 1929.16C4544.3 1960.63 4507.28 1985.44 4462.22 1999.38L3184.4 2394.63L3465.53 3379.94C3475.61 3415.29 3468.23 3452.09 3444.66 3483.9L3078.69 3977.79L1920.2 3538.68C1863.79 3517.3 1823.6 3478.7 1810.71 3433.51L1649.74 2869.33L918.759 3095.43C860.213 3113.54 793.545 3111.64 737.138 3090.26L-421.356 2651.15L-70.6875 2151.46C-48.1049 2119.28 -10.63 2093.89 35.1782 2079.72L1311.78 1684.85L1030.38 698.593C1020.45 663.815 1027.43 627.619 1050.13 596.147L1310.73 234.835C1365.04 159.539 1493.27 130.415 1597.13 169.784Z"
                    fill="url(#paint2_radial_37_453-1)"
                  ></path>
                  <g filter="url(#filter0_f_37_453-1)">
                    <path
                      d="M2395.71 -658.308L3374.55 -287.296C3430.96 -265.915 3471.15 -227.309 3484.04 -182.122L3645.01 382.06L4375.99 155.958C4434.54 137.848 4501.2 139.745 4557.61 161.126L5536.45 532.138C5640.32 571.507 5680.49 664.461 5626.18 739.757L5365.58 1101.07C5342.88 1132.54 5305.86 1157.35 5260.8 1171.29L3982.97 1566.54L4264.1 2551.84C4274.19 2587.2 4266.81 2624 4243.24 2655.81L3877.27 3149.7L2718.78 2710.59C2662.37 2689.21 2622.18 2650.6 2609.29 2605.42L2448.31 2041.24L1717.34 2267.34C1658.79 2285.45 1592.12 2283.55 1535.72 2262.17L377.222 1823.06L727.891 1323.37C750.473 1291.19 787.948 1265.8 833.756 1251.63L2110.35 856.754L1828.95 -129.498C1819.03 -164.277 1826.01 -200.472 1848.71 -231.944L2109.31 -593.257C2163.62 -668.552 2291.85 -697.677 2395.71 -658.308Z"
                      fill="url(#paint3_radial_37_453-1)"
                    ></path>
                  </g>
                  <path
                    d="M3059.26 767.932L3310.25 1618.16C3324.72 1667.15 3315.74 1727.88 3285.79 1783.6L2911.89 2479.3L3514.51 2558.36C3562.77 2564.69 3599.15 2596.78 3613.62 2645.77L3864.61 3496C3891.25 3586.22 3837.41 3706.98 3744.37 3765.74L3297.91 4047.66C3259.03 4072.22 3217.48 4082.97 3180.34 4078.1L2126.89 3939.89L1473.9 5154.88C1450.47 5198.48 1415.9 5235.81 1376.24 5260.35L760.412 5641.34L463.348 4635.06C448.884 4586.06 457.863 4525.33 487.81 4469.61L861.713 3773.92L259.094 3694.86C210.828 3688.53 174.448 3656.44 159.984 3607.44L-137.08 2601.17L474.823 2206.89C514.228 2181.5 556.514 2170.3 594.278 2175.25L1646.71 2313.32L2300.33 1097.17C2323.38 1054.28 2357.22 1017.43 2396.11 992.876L2842.57 710.953C2935.61 652.202 3032.62 677.712 3059.26 767.932Z"
                    fill="url(#paint4_radial_37_453-1)"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_f_37_453-1"
                    x="213.223"
                    y="-839.851"
                    width="5601.16"
                    height="4153.55"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="82"
                      result="effect1_foregroundBlur_37_453"
                    ></feGaussianBlur>
                  </filter>
                  <radialGradient
                    id="paint0_radial_37_453-1"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(-804.109 -2036.8) rotate(64.9401) scale(6436.87 6304.81)"
                  >
                    <stop stop-color="var(--color-background)"></stop>
                    <stop
                      offset="0.0833333"
                      stop-color="var(--accent-7)"
                    ></stop>
                    <stop offset="0.364583" stop-color="var(--accent-5)"></stop>
                    <stop
                      offset="0.658041"
                      stop-color="var(--color-background)"
                    ></stop>
                    <stop offset="0.798521" stop-color="var(--accent-9)"></stop>
                    <stop
                      offset="0.942708"
                      stop-color="var(--color-background)"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="var(--color-background)"
                    ></stop>
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_37_453-1"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(201.6 -1080.02) rotate(64.9401) scale(6436.87 6304.81)"
                  >
                    <stop stop-color="var(--color-background)"></stop>
                    <stop
                      offset="0.0833333"
                      stop-color="var(--accent-2)"
                    ></stop>
                    <stop offset="0.333803" stop-color="var(--accent-1)"></stop>
                    <stop
                      offset="0.658041"
                      stop-color="var(--color-background)"
                    ></stop>
                    <stop offset="0.798521" stop-color="var(--accent-9)"></stop>
                    <stop
                      offset="0.942708"
                      stop-color="var(--color-background)"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="var(--color-background)"
                    ></stop>
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_37_453-1"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(912.834 -811.021) rotate(64.9401) scale(6436.87 6304.81)"
                  >
                    <stop stop-color="var(--color-background)"></stop>
                    <stop offset="0.140625" stop-color="var(--accent-3)"></stop>
                    <stop offset="0.333803" stop-color="var(--accent-7)"></stop>
                    <stop
                      offset="0.658041"
                      stop-color="var(--color-background)"
                    ></stop>
                    <stop offset="0.798521" stop-color="var(--accent-9)"></stop>
                    <stop
                      offset="0.942708"
                      stop-color="var(--color-background)"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="var(--color-background)"
                    ></stop>
                  </radialGradient>
                  <radialGradient
                    id="paint3_radial_37_453-1"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1711.41 -1639.11) rotate(64.9401) scale(6436.87 6304.81)"
                  >
                    <stop stop-color="var(--color-background)"></stop>
                    <stop
                      offset="0.0833333"
                      stop-color="var(--accent-7)"
                    ></stop>
                    <stop offset="0.333803" stop-color="var(--accent-1)"></stop>
                    <stop
                      offset="0.658041"
                      stop-color="var(--color-background)"
                    ></stop>
                    <stop offset="0.798521" stop-color="var(--accent-9)"></stop>
                    <stop
                      offset="0.942708"
                      stop-color="var(--color-background)"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="var(--color-background)"
                    ></stop>
                  </radialGradient>
                  <radialGradient
                    id="paint4_radial_37_453-1"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(3479.06 -623.459) rotate(113.028) scale(8332.26 4870.62)"
                  >
                    <stop stop-color="var(--color-background)"></stop>
                    <stop
                      offset="0.0833333"
                      stop-color="var(--accent-7)"
                    ></stop>
                    <stop offset="0.333803" stop-color="var(--accent-1)"></stop>
                    <stop
                      offset="0.658041"
                      stop-color="var(--color-background)"
                    ></stop>
                    <stop offset="0.798521" stop-color="var(--accent-9)"></stop>
                    <stop
                      offset="0.942708"
                      stop-color="var(--color-background)"
                    ></stop>
                    <stop
                      offset="1"
                      stop-color="var(--color-background)"
                    ></stop>
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div
              className="rt-reset rt-Card rt-r-size-4 rt-variant-surface"
              data-data-style="width: 400px;"
            >
              <div className="rt-CardInner">
                <h3 className="rt-Heading rt-r-size-6 rt-r-weight-bold rt-r-lt-start rt-r-mb-5">
                  Sign up
                </h3>
                <div className="rt-Box rt-r-mb-5">
                  <label>
                    <div className="rt-Text rt-r-size-2 rt-r-weight-medium rt-r-mb-2">
                      Email address
                    </div>
                    <div className="rt-TextFieldRoot">
                      <input
                        placeholder="Enter your email"
                        className="rt-TextFieldInput rt-r-size-2 rt-variant-surface"
                      />
                      <div className="rt-TextFieldChrome"></div>
                    </div>
                  </label>
                </div>
                <div className="rt-Box rt-r-position-relative rt-r-mb-5">
                  <div
                    className="rt-Box rt-r-position-absolute rt-r-top-0 rt-r-right-0"
                    data-data-style="margin-top: -2px;"
                  >
                    <a
                      href="#card"
                      className="rt-Text rt-reset rt-Link rt-underline-auto rt-r-size-2"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <label>
                    <div className="rt-Text rt-r-size-2 rt-r-weight-medium rt-r-mb-2">
                      Password
                    </div>
                    <div className="rt-TextFieldRoot">
                      <input
                        placeholder="Enter your password"
                        className="rt-TextFieldInput rt-r-size-2 rt-variant-surface"
                      />
                      <div className="rt-TextFieldChrome"></div>
                    </div>
                  </label>
                </div>
                <div className="rt-Flex rt-r-display-flex rt-r-jc-end rt-r-gap-3 rt-r-mt-6">
                  <button className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-soft">
                    Create an account
                  </button>
                  <button className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-solid">
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rt-Box rt-r-mt-6">
          <table className="playground_PlaygroundTable__RTJb6">
            <thead>
              <tr>
                <th></th>
                <th data-data-style="text-align: left;">Surface</th>
                <th data-data-style="text-align: left;">Classic</th>
                <th data-data-style="text-align: left;">Ghost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Size 1</td>
                <td>
                  <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                    <a
                      href="#card"
                      className="rt-reset rt-Card rt-r-size-1 rt-variant-surface rt-r-my-0 rt-r-mr-2 rt-r-ml-0"
                    >
                      <div className="rt-CardInner">
                        <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-start rt-r-gap-2">
                          <span className="rt-AvatarRoot rt-r-size-3 rt-variant-soft">
                            <img
                              className="rt-AvatarImage"
                              src="https://images.unsplash.com/photo-1533933269825-da140ad3132f?&amp;w=128&amp;h=128&amp;dpr=2&amp;q=70&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.46&amp;fp-z=1.25&amp;fit=crop"
                            />
                          </span>
                          <div className="rt-Box">
                            <div className="rt-Text rt-r-size-2 rt-r-weight-medium">
                              Emily Adams
                            </div>
                            <div
                              data-accent-color="gray"
                              className="rt-Text rt-r-size-2"
                            >
                              emily.adams@example.com
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                    <a
                      href="#card"
                      className="rt-reset rt-Card rt-r-size-1 rt-variant-classic rt-r-my-0 rt-r-mr-2 rt-r-ml-0"
                    >
                      <div className="rt-CardInner">
                        <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-start rt-r-gap-2">
                          <span className="rt-AvatarRoot rt-r-size-3 rt-variant-soft">
                            <img
                              className="rt-AvatarImage"
                              src="https://images.unsplash.com/photo-1533933269825-da140ad3132f?&amp;w=128&amp;h=128&amp;dpr=2&amp;q=70&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.46&amp;fp-z=1.25&amp;fit=crop"
                            />
                          </span>
                          <div className="rt-Box">
                            <div className="rt-Text rt-r-size-2 rt-r-weight-medium">
                              Emily Adams
                            </div>
                            <div
                              data-accent-color="gray"
                              className="rt-Text rt-r-size-2"
                            >
                              emily.adams@example.com
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                    <a
                      href="#card"
                      className="rt-reset rt-Card rt-r-size-1 rt-variant-ghost rt-r-my-4 rt-r-mr-2 rt-r-ml-3"
                    >
                      <div className="rt-CardInner">
                        <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-start rt-r-gap-2">
                          <span className="rt-AvatarRoot rt-r-size-3 rt-variant-soft">
                            <img
                              className="rt-AvatarImage"
                              src="https://images.unsplash.com/photo-1533933269825-da140ad3132f?&amp;w=128&amp;h=128&amp;dpr=2&amp;q=70&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.46&amp;fp-z=1.25&amp;fit=crop"
                            />
                          </span>
                          <div className="rt-Box">
                            <div className="rt-Text rt-r-size-2 rt-r-weight-medium">
                              Emily Adams
                            </div>
                            <div
                              data-accent-color="gray"
                              className="rt-Text rt-r-size-2"
                            >
                              emily.adams@example.com
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Size 2</td>
                <td>
                  <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                    <a
                      href="#card"
                      className="rt-reset rt-Card rt-r-size-2 rt-variant-surface rt-r-my-0 rt-r-mr-2 rt-r-ml-0"
                    >
                      <div className="rt-CardInner">
                        <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-start rt-r-gap-3">
                          <span className="rt-AvatarRoot rt-r-size-4 rt-variant-soft">
                            <img
                              className="rt-AvatarImage"
                              src="https://images.unsplash.com/photo-1533933269825-da140ad3132f?&amp;w=128&amp;h=128&amp;dpr=2&amp;q=70&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.46&amp;fp-z=1.25&amp;fit=crop"
                            />
                          </span>
                          <div className="rt-Box">
                            <div className="rt-Text rt-r-size-3 rt-r-weight-medium">
                              Emily Adams
                            </div>
                            <div
                              data-accent-color="gray"
                              className="rt-Text rt-r-size-2"
                            >
                              emily.adams@example.com
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                    <a
                      href="#card"
                      className="rt-reset rt-Card rt-r-size-2 rt-variant-classic rt-r-my-0 rt-r-mr-2 rt-r-ml-0"
                    >
                      <div className="rt-CardInner">
                        <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-start rt-r-gap-3">
                          <span className="rt-AvatarRoot rt-r-size-4 rt-variant-soft">
                            <img
                              className="rt-AvatarImage"
                              src="https://images.unsplash.com/photo-1533933269825-da140ad3132f?&amp;w=128&amp;h=128&amp;dpr=2&amp;q=70&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.46&amp;fp-z=1.25&amp;fit=crop"
                            />
                          </span>
                          <div className="rt-Box">
                            <div className="rt-Text rt-r-size-3 rt-r-weight-medium">
                              Emily Adams
                            </div>
                            <div
                              data-accent-color="gray"
                              className="rt-Text rt-r-size-2"
                            >
                              emily.adams@example.com
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                    <a
                      href="#card"
                      className="rt-reset rt-Card rt-r-size-2 rt-variant-ghost rt-r-my-4 rt-r-mr-2 rt-r-ml-3"
                    >
                      <div className="rt-CardInner">
                        <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-start rt-r-gap-3">
                          <span className="rt-AvatarRoot rt-r-size-4 rt-variant-soft">
                            <img
                              className="rt-AvatarImage"
                              src="https://images.unsplash.com/photo-1533933269825-da140ad3132f?&amp;w=128&amp;h=128&amp;dpr=2&amp;q=70&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.46&amp;fp-z=1.25&amp;fit=crop"
                            />
                          </span>
                          <div className="rt-Box">
                            <div className="rt-Text rt-r-size-3 rt-r-weight-medium">
                              Emily Adams
                            </div>
                            <div
                              data-accent-color="gray"
                              className="rt-Text rt-r-size-2"
                            >
                              emily.adams@example.com
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Size 3</td>
                <td>
                  <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                    <a
                      href="#card"
                      className="rt-reset rt-Card rt-r-size-3 rt-variant-surface rt-r-my-0 rt-r-mr-2 rt-r-ml-0"
                    >
                      <div className="rt-CardInner">
                        <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-start rt-r-gap-4">
                          <span className="rt-AvatarRoot rt-r-size-5 rt-variant-soft">
                            <img
                              className="rt-AvatarImage"
                              src="https://images.unsplash.com/photo-1533933269825-da140ad3132f?&amp;w=128&amp;h=128&amp;dpr=2&amp;q=70&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.46&amp;fp-z=1.25&amp;fit=crop"
                            />
                          </span>
                          <div className="rt-Box">
                            <div className="rt-Text rt-r-size-4 rt-r-weight-medium">
                              Emily Adams
                            </div>
                            <div
                              data-accent-color="gray"
                              className="rt-Text rt-r-size-2"
                            >
                              emily.adams@example.com
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                    <a
                      href="#card"
                      className="rt-reset rt-Card rt-r-size-3 rt-variant-classic rt-r-my-0 rt-r-mr-2 rt-r-ml-0"
                    >
                      <div className="rt-CardInner">
                        <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-start rt-r-gap-4">
                          <span className="rt-AvatarRoot rt-r-size-5 rt-variant-soft">
                            <img
                              className="rt-AvatarImage"
                              src="https://images.unsplash.com/photo-1533933269825-da140ad3132f?&amp;w=128&amp;h=128&amp;dpr=2&amp;q=70&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.46&amp;fp-z=1.25&amp;fit=crop"
                            />
                          </span>
                          <div className="rt-Box">
                            <div className="rt-Text rt-r-size-4 rt-r-weight-medium">
                              Emily Adams
                            </div>
                            <div
                              data-accent-color="gray"
                              className="rt-Text rt-r-size-2"
                            >
                              emily.adams@example.com
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                    <a
                      href="#card"
                      className="rt-reset rt-Card rt-r-size-3 rt-variant-ghost rt-r-my-4 rt-r-mr-2 rt-r-ml-3"
                    >
                      <div className="rt-CardInner">
                        <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-start rt-r-gap-4">
                          <span className="rt-AvatarRoot rt-r-size-5 rt-variant-soft">
                            <img
                              className="rt-AvatarImage"
                              src="https://images.unsplash.com/photo-1533933269825-da140ad3132f?&amp;w=128&amp;h=128&amp;dpr=2&amp;q=70&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.46&amp;fp-z=1.25&amp;fit=crop"
                            />
                          </span>
                          <div className="rt-Box">
                            <div className="rt-Text rt-r-size-4 rt-r-weight-medium">
                              Emily Adams
                            </div>
                            <div
                              data-accent-color="gray"
                              className="rt-Text rt-r-size-2"
                            >
                              emily.adams@example.com
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
function Card9() {
  return (
    <div className="rt-Flex playground_PlaygroundSection__jQiIu rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-gap-5 rt-r-mb-5 sm:rt-r-mb-8">
      <div className="rt-Flex rt-r-display-flex rt-r-ai-baseline rt-r-jc-start rt-r-gap-4">
        <h1 id="checkbox" className="rt-Heading rt-r-size-6 rt-r-weight-bold">
          <a
            data-accent-color="gray"
            href="#checkbox"
            className="rt-Text rt-reset rt-Link rt-underline-hover rt-high-contrast"
          >
            Checkbox
          </a>
        </h1>
        <a
          href="/themes/docs/components/checkbox"
          className="rt-Text rt-reset rt-Link playground_PlaygroundDocsLink__iTdrz rt-underline-auto rt-r-size-2"
        >
          View in docs
        </a>
      </div>
      <div dir="ltr" data-orientation="horizontal" className="rt-TabsRoot">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="rt-TabsList rt-r-size-2"
          data-data-tabindex="0"
          data-orientation="horizontal"
          data-data-style="outline: none;"
        >
          <button
            type="button"
            role="tab"
            aria-selected="true"
            aria-controls="radix-:r2j:-content-theme-colors"
            data-state="active"
            id="radix-:r2j:-trigger-theme-colors"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">Theme colors</span>
            <span className="rt-TabsTriggerInnerHidden">Theme colors</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r2j:-content-all-colors"
            data-state="inactive"
            id="radix-:r2j:-trigger-all-colors"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">All colors</span>
            <span className="rt-TabsTriggerInnerHidden">All colors</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r2j:-content-all-sizes"
            data-state="inactive"
            id="radix-:r2j:-trigger-all-sizes"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">All sizes</span>
            <span className="rt-TabsTriggerInnerHidden">All sizes</span>
          </button>
        </div>
        <div
          data-state="active"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r2j:-trigger-theme-colors"
          id="radix-:r2j:-content-theme-colors"
          data-data-tabindex="0"
          className="rt-TabsContent"
          data-data-style=""
        >
          <div className="rt-Box rt-r-mt-6">
            <table className="playground_PlaygroundTable__RTJb6">
              <thead>
                <tr>
                  <th></th>
                  <th data-data-colspan="2">Accent</th>
                  <th data-data-colspan="2">Gray</th>
                  <th>Disabled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Classic</td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="false"
                          data-state="unchecked"
                          value="on"
                          className="rt-reset rt-CheckboxButton rt-variant-classic"
                        ></button>
                      </span>
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="true"
                          data-state="checked"
                          value="on"
                          className="rt-reset rt-CheckboxButton rt-variant-classic"
                        >
                          <span
                            data-state="checked"
                            className="rt-CheckboxIndicator"
                            data-data-style="pointer-events: none;"
                          >
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rt-CheckboxIndicatorIcon"
                            >
                              <path
                                data-fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="true"
                          data-state="checked"
                          value="on"
                          className="rt-reset rt-CheckboxButton rt-variant-classic rt-high-contrast"
                        >
                          <span
                            data-state="checked"
                            className="rt-CheckboxIndicator"
                            data-data-style="pointer-events: none;"
                          >
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rt-CheckboxIndicatorIcon"
                            >
                              <path
                                data-fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="false"
                          data-state="unchecked"
                          value="on"
                          data-accent-color="gray"
                          className="rt-reset rt-CheckboxButton rt-variant-classic"
                        ></button>
                      </span>
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="true"
                          data-state="checked"
                          value="on"
                          data-accent-color="gray"
                          className="rt-reset rt-CheckboxButton rt-variant-classic"
                        >
                          <span
                            data-state="checked"
                            className="rt-CheckboxIndicator"
                            data-data-style="pointer-events: none;"
                          >
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rt-CheckboxIndicatorIcon"
                            >
                              <path
                                data-fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="true"
                          data-state="checked"
                          value="on"
                          data-accent-color="gray"
                          className="rt-reset rt-CheckboxButton rt-variant-classic rt-high-contrast"
                        >
                          <span
                            data-state="checked"
                            className="rt-CheckboxIndicator"
                            data-data-style="pointer-events: none;"
                          >
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rt-CheckboxIndicatorIcon"
                            >
                              <path
                                data-fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="false"
                          data-state="unchecked"
                          data-disabled={false}
                          disabled={false}
                          value="on"
                          className="rt-reset rt-CheckboxButton rt-variant-classic"
                        ></button>
                      </span>
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="true"
                          data-state="checked"
                          data-disabled={false}
                          disabled={false}
                          value="on"
                          className="rt-reset rt-CheckboxButton rt-variant-classic"
                        >
                          <span
                            data-state="checked"
                            data-disabled={false}
                            className="rt-CheckboxIndicator"
                            data-data-style="pointer-events: none;"
                          >
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rt-CheckboxIndicatorIcon"
                            >
                              <path
                                data-fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Surface</td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="false"
                          data-state="unchecked"
                          value="on"
                          className="rt-reset rt-CheckboxButton rt-variant-surface"
                        ></button>
                      </span>
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="true"
                          data-state="checked"
                          value="on"
                          className="rt-reset rt-CheckboxButton rt-variant-surface"
                        >
                          <span
                            data-state="checked"
                            className="rt-CheckboxIndicator"
                            data-data-style="pointer-events: none;"
                          >
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rt-CheckboxIndicatorIcon"
                            >
                              <path
                                data-fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="true"
                          data-state="checked"
                          value="on"
                          className="rt-reset rt-CheckboxButton rt-variant-surface rt-high-contrast"
                        >
                          <span
                            data-state="checked"
                            className="rt-CheckboxIndicator"
                            data-data-style="pointer-events: none;"
                          >
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rt-CheckboxIndicatorIcon"
                            >
                              <path
                                data-fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="false"
                          data-state="unchecked"
                          value="on"
                          data-accent-color="gray"
                          className="rt-reset rt-CheckboxButton rt-variant-surface"
                        ></button>
                      </span>
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="true"
                          data-state="checked"
                          value="on"
                          data-accent-color="gray"
                          className="rt-reset rt-CheckboxButton rt-variant-surface"
                        >
                          <span
                            data-state="checked"
                            className="rt-CheckboxIndicator"
                            data-data-style="pointer-events: none;"
                          >
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rt-CheckboxIndicatorIcon"
                            >
                              <path
                                data-fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="true"
                          data-state="checked"
                          value="on"
                          data-accent-color="gray"
                          className="rt-reset rt-CheckboxButton rt-variant-surface rt-high-contrast"
                        >
                          <span
                            data-state="checked"
                            className="rt-CheckboxIndicator"
                            data-data-style="pointer-events: none;"
                          >
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rt-CheckboxIndicatorIcon"
                            >
                              <path
                                data-fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="false"
                          data-state="unchecked"
                          data-disabled={false}
                          disabled={false}
                          value="on"
                          className="rt-reset rt-CheckboxButton rt-variant-surface"
                        ></button>
                      </span>
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="true"
                          data-state="checked"
                          data-disabled={false}
                          disabled={false}
                          value="on"
                          className="rt-reset rt-CheckboxButton rt-variant-surface"
                        >
                          <span
                            data-state="checked"
                            data-disabled={false}
                            className="rt-CheckboxIndicator"
                            data-data-style="pointer-events: none;"
                          >
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rt-CheckboxIndicatorIcon"
                            >
                              <path
                                data-fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Soft</td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="false"
                          data-state="unchecked"
                          value="on"
                          className="rt-reset rt-CheckboxButton rt-variant-soft"
                        ></button>
                      </span>
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="true"
                          data-state="checked"
                          value="on"
                          className="rt-reset rt-CheckboxButton rt-variant-soft"
                        >
                          <span
                            data-state="checked"
                            className="rt-CheckboxIndicator"
                            data-data-style="pointer-events: none;"
                          >
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rt-CheckboxIndicatorIcon"
                            >
                              <path
                                data-fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="true"
                          data-state="checked"
                          value="on"
                          className="rt-reset rt-CheckboxButton rt-variant-soft rt-high-contrast"
                        >
                          <span
                            data-state="checked"
                            className="rt-CheckboxIndicator"
                            data-data-style="pointer-events: none;"
                          >
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rt-CheckboxIndicatorIcon"
                            >
                              <path
                                data-fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="false"
                          data-state="unchecked"
                          value="on"
                          data-accent-color="gray"
                          className="rt-reset rt-CheckboxButton rt-variant-soft"
                        ></button>
                      </span>
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="true"
                          data-state="checked"
                          value="on"
                          data-accent-color="gray"
                          className="rt-reset rt-CheckboxButton rt-variant-soft"
                        >
                          <span
                            data-state="checked"
                            className="rt-CheckboxIndicator"
                            data-data-style="pointer-events: none;"
                          >
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rt-CheckboxIndicatorIcon"
                            >
                              <path
                                data-fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="true"
                          data-state="checked"
                          value="on"
                          data-accent-color="gray"
                          className="rt-reset rt-CheckboxButton rt-variant-soft rt-high-contrast"
                        >
                          <span
                            data-state="checked"
                            className="rt-CheckboxIndicator"
                            data-data-style="pointer-events: none;"
                          >
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rt-CheckboxIndicatorIcon"
                            >
                              <path
                                data-fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="false"
                          data-state="unchecked"
                          data-disabled={false}
                          disabled={false}
                          value="on"
                          className="rt-reset rt-CheckboxButton rt-variant-soft"
                        ></button>
                      </span>
                      <span className="rt-CheckboxRoot rt-r-size-2">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="true"
                          data-state="checked"
                          data-disabled={false}
                          disabled={false}
                          value="on"
                          className="rt-reset rt-CheckboxButton rt-variant-soft"
                        >
                          <span
                            data-state="checked"
                            data-disabled={false}
                            className="rt-CheckboxIndicator"
                            data-data-style="pointer-events: none;"
                          >
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              className="rt-CheckboxIndicatorIcon"
                            >
                              <path
                                data-fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          data-state="inactive"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r2j:-trigger-all-colors"
          id="radix-:r2j:-content-all-colors"
          data-data-tabindex="0"
          className="rt-TabsContent"
        ></div>
        <div
          data-state="inactive"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r2j:-trigger-all-sizes"
          id="radix-:r2j:-content-all-sizes"
          data-data-tabindex="0"
          className="rt-TabsContent"
        ></div>
      </div>
    </div>
  );
}
function Card10() {
  return (
    <div className="rt-Flex playground_PlaygroundSection__jQiIu rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-gap-5 rt-r-mb-5 sm:rt-r-mb-8">
      <div className="rt-Flex rt-r-display-flex rt-r-ai-baseline rt-r-jc-start rt-r-gap-4">
        <h1 id="code" className="rt-Heading rt-r-size-6 rt-r-weight-bold">
          <a
            data-accent-color="gray"
            href="#code"
            className="rt-Text rt-reset rt-Link rt-underline-hover rt-high-contrast"
          >
            Code
          </a>
        </h1>
        <a
          href="/themes/docs/components/code"
          className="rt-Text rt-reset rt-Link playground_PlaygroundDocsLink__iTdrz rt-underline-auto rt-r-size-2"
        >
          View in docs
        </a>
      </div>
      <div dir="ltr" data-orientation="horizontal" className="rt-TabsRoot">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="rt-TabsList rt-r-size-2"
          data-data-tabindex="0"
          data-orientation="horizontal"
          data-data-style="outline: none;"
        >
          <button
            type="button"
            role="tab"
            aria-selected="true"
            aria-controls="radix-:r2n:-content-theme-colors"
            data-state="active"
            id="radix-:r2n:-trigger-theme-colors"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">Theme colors</span>
            <span className="rt-TabsTriggerInnerHidden">Theme colors</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r2n:-content-all-colors"
            data-state="inactive"
            id="radix-:r2n:-trigger-all-colors"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">All colors</span>
            <span className="rt-TabsTriggerInnerHidden">All colors</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r2n:-content-all-sizes"
            data-state="inactive"
            id="radix-:r2n:-trigger-all-sizes"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">All sizes</span>
            <span className="rt-TabsTriggerInnerHidden">All sizes</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r2n:-content-all-weights"
            data-state="inactive"
            id="radix-:r2n:-trigger-all-weights"
            className="rt-reset rt-TabsTrigger"
            data-data-tabindex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            <span className="rt-TabsTriggerInner">All weights</span>
            <span className="rt-TabsTriggerInnerHidden">All weights</span>
          </button>
        </div>
        <div
          data-state="active"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r2n:-trigger-theme-colors"
          id="radix-:r2n:-content-theme-colors"
          data-data-tabindex="0"
          className="rt-TabsContent"
          data-data-style=""
        >
          <div className="rt-Box rt-r-mt-6">
            <table className="playground_PlaygroundTable__RTJb6">
              <thead>
                <tr>
                  <th></th>
                  <th data-data-colspan="2">Accent</th>
                  <th data-data-colspan="2">Gray</th>
                </tr>
              </thead>
              <tbody>
                <tr data-data-style="vertical-align: baseline;">
                  <td>Solid</td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                      <code className="rt-Code rt-variant-solid">
                        console.log()
                      </code>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                      <code className="rt-Code rt-variant-solid rt-high-contrast">
                        console.log()
                      </code>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                      <code
                        data-accent-color="gray"
                        className="rt-Code rt-variant-solid"
                      >
                        console.log()
                      </code>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                      <code
                        data-accent-color="gray"
                        className="rt-Code rt-variant-solid rt-high-contrast"
                      >
                        console.log()
                      </code>
                    </div>
                  </td>
                </tr>
                <tr data-data-style="vertical-align: baseline;">
                  <td>Soft</td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                      <code className="rt-Code rt-variant-soft">
                        console.log()
                      </code>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                      <code className="rt-Code rt-variant-soft rt-high-contrast">
                        console.log()
                      </code>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                      <code
                        data-accent-color="gray"
                        className="rt-Code rt-variant-soft"
                      >
                        console.log()
                      </code>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                      <code
                        data-accent-color="gray"
                        className="rt-Code rt-variant-soft rt-high-contrast"
                      >
                        console.log()
                      </code>
                    </div>
                  </td>
                </tr>
                <tr data-data-style="vertical-align: baseline;">
                  <td>Outline</td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                      <code className="rt-Code rt-variant-outline">
                        console.log()
                      </code>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                      <code className="rt-Code rt-variant-outline rt-high-contrast">
                        console.log()
                      </code>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                      <code
                        data-accent-color="gray"
                        className="rt-Code rt-variant-outline"
                      >
                        console.log()
                      </code>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                      <code
                        data-accent-color="gray"
                        className="rt-Code rt-variant-outline rt-high-contrast"
                      >
                        console.log()
                      </code>
                    </div>
                  </td>
                </tr>
                <tr data-data-style="vertical-align: baseline;">
                  <td>Ghost</td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                      <code className="rt-Code rt-variant-ghost">
                        console.log()
                      </code>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                      <code className="rt-Code rt-variant-ghost rt-high-contrast">
                        console.log()
                      </code>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                      <code
                        data-accent-color="gray"
                        className="rt-Code rt-variant-ghost"
                      >
                        console.log()
                      </code>
                    </div>
                  </td>
                  <td>
                    <div className="rt-Flex rt-r-display-flex rt-r-jc-start">
                      <code
                        data-accent-color="gray"
                        className="rt-Code rt-variant-ghost rt-high-contrast"
                      >
                        console.log()
                      </code>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          data-state="inactive"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r2n:-trigger-all-colors"
          id="radix-:r2n:-content-all-colors"
          data-data-tabindex="0"
          className="rt-TabsContent"
        ></div>
        <div
          data-state="inactive"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r2n:-trigger-all-sizes"
          id="radix-:r2n:-content-all-sizes"
          data-data-tabindex="0"
          className="rt-TabsContent"
        ></div>
        <div
          data-state="inactive"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r2n:-trigger-all-weights"
          id="radix-:r2n:-content-all-weights"
          data-data-tabindex="0"
          className="rt-TabsContent"
        ></div>
      </div>
    </div>
  );
}
function Cards11() {
  return (
    <>
      <div className="rt-Flex playground_PlaygroundSection__jQiIu rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-gap-5 rt-r-mb-5 sm:rt-r-mb-8">
        <div className="rt-Flex rt-r-display-flex rt-r-ai-baseline rt-r-jc-start rt-r-gap-4">
          <h1
            id="context-menu"
            className="rt-Heading rt-r-size-6 rt-r-weight-bold"
          >
            <a
              data-accent-color="gray"
              href="#context-menu"
              className="rt-Text rt-reset rt-Link rt-underline-hover rt-high-contrast"
            >
              Context Menu
            </a>
          </h1>
          <a
            href="/themes/docs/components/context-menu"
            className="rt-Text rt-reset rt-Link playground_PlaygroundDocsLink__iTdrz rt-underline-auto rt-r-size-2"
          >
            View in docs
          </a>
        </div>
        <div dir="ltr" data-orientation="horizontal" className="rt-TabsRoot">
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="rt-TabsList rt-r-size-2"
            data-data-tabindex="0"
            data-orientation="horizontal"
            data-data-style="outline: none;"
          >
            <button
              type="button"
              role="tab"
              aria-selected="true"
              aria-controls="radix-:r2s:-content-theme-colors"
              data-state="active"
              id="radix-:r2s:-trigger-theme-colors"
              className="rt-reset rt-TabsTrigger"
              data-data-tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              <span className="rt-TabsTriggerInner">Theme colors</span>
              <span className="rt-TabsTriggerInnerHidden">Theme colors</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r2s:-content-all-colors"
              data-state="inactive"
              id="radix-:r2s:-trigger-all-colors"
              className="rt-reset rt-TabsTrigger"
              data-data-tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              <span className="rt-TabsTriggerInner">All colors</span>
              <span className="rt-TabsTriggerInnerHidden">All colors</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r2s:-content-all-sizes"
              data-state="inactive"
              id="radix-:r2s:-trigger-all-sizes"
              className="rt-reset rt-TabsTrigger"
              data-data-tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              <span className="rt-TabsTriggerInner">All sizes</span>
              <span className="rt-TabsTriggerInnerHidden">All sizes</span>
            </button>
          </div>
          <div
            data-state="active"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r2s:-trigger-theme-colors"
            id="radix-:r2s:-content-theme-colors"
            data-data-tabindex="0"
            className="rt-TabsContent"
            data-data-style=""
          >
            <div className="rt-Box rt-r-mt-6">
              <table className="playground_PlaygroundTable__RTJb6">
                <thead>
                  <tr>
                    <th></th>
                    <th data-data-colspan="2">Accent</th>
                    <th data-data-colspan="2">Gray</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Solid</td>
                    <td>
                      <div
                        data-state="closed"
                        data-accent-color="accent"
                        className="rt-Grid rt-r-px-3 rt-r-h-8"
                        data-data-style="place-items: center; border-radius: var(--radius-3); border: 1px dashed var(--accent-7); cursor: default; white-space: nowrap;"
                      >
                        <span
                          data-accent-color="accent"
                          className="rt-Text rt-r-size-2"
                        >
                          Right-click here
                        </span>
                      </div>
                    </td>
                    <td>
                      <div
                        data-state="closed"
                        data-accent-color="accent"
                        className="rt-Grid rt-r-px-3 rt-r-h-8"
                        data-data-style="place-items: center; border-radius: var(--radius-3); border: 1px dashed var(--accent-7); cursor: default; white-space: nowrap;"
                      >
                        <span
                          data-accent-color="accent"
                          className="rt-Text rt-r-size-2 rt-high-contrast"
                        >
                          Right-click here
                        </span>
                      </div>
                    </td>
                    <td>
                      <div
                        data-state="closed"
                        data-accent-color="gray"
                        className="rt-Grid rt-r-px-3 rt-r-h-8"
                        data-data-style="place-items: center; border-radius: var(--radius-3); border: 1px dashed var(--accent-7); cursor: default; white-space: nowrap;"
                      >
                        <span
                          data-accent-color="gray"
                          className="rt-Text rt-r-size-2"
                        >
                          Right-click here
                        </span>
                      </div>
                    </td>
                    <td>
                      <div
                        data-state="closed"
                        data-accent-color="gray"
                        className="rt-Grid rt-r-px-3 rt-r-h-8"
                        data-data-style="place-items: center; border-radius: var(--radius-3); border: 1px dashed var(--accent-7); cursor: default; white-space: nowrap;"
                      >
                        <span
                          data-accent-color="gray"
                          className="rt-Text rt-r-size-2 rt-high-contrast"
                        >
                          Right-click here
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Soft</td>
                    <td>
                      <div
                        data-state="closed"
                        data-accent-color="accent"
                        className="rt-Grid rt-r-px-3 rt-r-h-8"
                        data-data-style="place-items: center; border-radius: var(--radius-3); border: 1px dashed var(--accent-7); cursor: default; white-space: nowrap; background-color: var(--accent-a2);"
                      >
                        <span
                          data-accent-color="accent"
                          className="rt-Text rt-r-size-2"
                        >
                          Right-click here
                        </span>
                      </div>
                    </td>
                    <td>
                      <div
                        data-state="closed"
                        data-accent-color="accent"
                        className="rt-Grid rt-r-px-3 rt-r-h-8"
                        data-data-style="place-items: center; border-radius: var(--radius-3); border: 1px dashed var(--accent-7); cursor: default; white-space: nowrap; background-color: var(--accent-a2);"
                      >
                        <span
                          data-accent-color="accent"
                          className="rt-Text rt-r-size-2 rt-high-contrast"
                        >
                          Right-click here
                        </span>
                      </div>
                    </td>
                    <td>
                      <div
                        data-state="closed"
                        data-accent-color="gray"
                        className="rt-Grid rt-r-px-3 rt-r-h-8"
                        data-data-style="place-items: center; border-radius: var(--radius-3); border: 1px dashed var(--accent-7); cursor: default; white-space: nowrap; background-color: var(--accent-a2);"
                      >
                        <span
                          data-accent-color="gray"
                          className="rt-Text rt-r-size-2"
                        >
                          Right-click here
                        </span>
                      </div>
                    </td>
                    <td>
                      <div
                        data-state="closed"
                        data-accent-color="gray"
                        className="rt-Grid rt-r-px-3 rt-r-h-8"
                        data-data-style="place-items: center; border-radius: var(--radius-3); border: 1px dashed var(--accent-7); cursor: default; white-space: nowrap; background-color: var(--accent-a2);"
                      >
                        <span
                          data-accent-color="gray"
                          className="rt-Text rt-r-size-2 rt-high-contrast"
                        >
                          Right-click here
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r2s:-trigger-all-colors"
            id="radix-:r2s:-content-all-colors"
            data-data-tabindex="0"
            className="rt-TabsContent"
          ></div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r2s:-trigger-all-sizes"
            id="radix-:r2s:-content-all-sizes"
            data-data-tabindex="0"
            className="rt-TabsContent"
          ></div>
        </div>
      </div>
      <div className="rt-Flex playground_PlaygroundSection__jQiIu rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-gap-5 rt-r-mb-5 sm:rt-r-mb-8">
        <div className="rt-Flex rt-r-display-flex rt-r-ai-baseline rt-r-jc-start rt-r-gap-4">
          <h1 id="dialog" className="rt-Heading rt-r-size-6 rt-r-weight-bold">
            <a
              data-accent-color="gray"
              href="#dialog"
              className="rt-Text rt-reset rt-Link rt-underline-hover rt-high-contrast"
            >
              Dialog
            </a>
          </h1>
          <a
            href="/themes/docs/components/dialog"
            className="rt-Text rt-reset rt-Link playground_PlaygroundDocsLink__iTdrz rt-underline-auto rt-r-size-2"
          >
            View in docs
          </a>
        </div>
        <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-start rt-r-gap-4">
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r30:"
            data-state="closed"
            className="rt-reset rt-BaseButton rt-Button rt-r-size-1 rt-variant-solid"
          >
            Open
          </button>
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r33:"
            data-state="closed"
            className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-solid"
          >
            Open
          </button>
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r36:"
            data-state="closed"
            className="rt-reset rt-BaseButton rt-Button rt-r-size-3 rt-variant-solid"
          >
            Open
          </button>
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r39:"
            data-state="closed"
            className="rt-reset rt-BaseButton rt-Button rt-r-size-4 rt-variant-solid"
          >
            Open
          </button>
        </div>
      </div>
      <div className="rt-Flex playground_PlaygroundSection__jQiIu rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-gap-5 rt-r-mb-5 sm:rt-r-mb-8">
        <div className="rt-Flex rt-r-display-flex rt-r-ai-baseline rt-r-jc-start rt-r-gap-4">
          <h1
            id="dropdown-menu"
            className="rt-Heading rt-r-size-6 rt-r-weight-bold"
          >
            <a
              data-accent-color="gray"
              href="#dropdown-menu"
              className="rt-Text rt-reset rt-Link rt-underline-hover rt-high-contrast"
            >
              Dropdown Menu
            </a>
          </h1>
          <a
            href="/themes/docs/components/dropdown-menu"
            className="rt-Text rt-reset rt-Link playground_PlaygroundDocsLink__iTdrz rt-underline-auto rt-r-size-2"
          >
            View in docs
          </a>
        </div>
        <div dir="ltr" data-orientation="horizontal" className="rt-TabsRoot">
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="rt-TabsList rt-r-size-2"
            data-data-tabindex="0"
            data-orientation="horizontal"
            data-data-style="outline: none;"
          >
            <button
              type="button"
              role="tab"
              aria-selected="true"
              aria-controls="radix-:r3c:-content-theme-colors"
              data-state="active"
              id="radix-:r3c:-trigger-theme-colors"
              className="rt-reset rt-TabsTrigger"
              data-data-tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              <span className="rt-TabsTriggerInner">Theme colors</span>
              <span className="rt-TabsTriggerInnerHidden">Theme colors</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r3c:-content-all-colors"
              data-state="inactive"
              id="radix-:r3c:-trigger-all-colors"
              className="rt-reset rt-TabsTrigger"
              data-data-tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              <span className="rt-TabsTriggerInner">All colors</span>
              <span className="rt-TabsTriggerInnerHidden">All colors</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r3c:-content-all-sizes"
              data-state="inactive"
              id="radix-:r3c:-trigger-all-sizes"
              className="rt-reset rt-TabsTrigger"
              data-data-tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              <span className="rt-TabsTriggerInner">All sizes</span>
              <span className="rt-TabsTriggerInnerHidden">All sizes</span>
            </button>
          </div>
          <div
            data-state="active"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r3c:-trigger-theme-colors"
            id="radix-:r3c:-content-theme-colors"
            data-data-tabindex="0"
            className="rt-TabsContent"
            data-data-style=""
          >
            <div className="rt-Box rt-r-mt-6">
              <table className="playground_PlaygroundTable__RTJb6">
                <thead>
                  <tr>
                    <th></th>
                    <th data-data-colspan="2">Accent</th>
                    <th data-data-colspan="2">Gray</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Solid</td>
                    <td>
                      <button
                        type="button"
                        id="radix-:r3g:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                        className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-solid"
                      >
                        Options
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        id="radix-:r3i:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                        className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-solid rt-high-contrast"
                      >
                        Options
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </td>
                    <td>
                      <button
                        data-accent-color="gray"
                        type="button"
                        id="radix-:r3k:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                        className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-solid"
                      >
                        Options
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </td>
                    <td>
                      <button
                        data-accent-color="gray"
                        type="button"
                        id="radix-:r3m:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                        className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-solid rt-high-contrast"
                      >
                        Options
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Soft</td>
                    <td>
                      <button
                        type="button"
                        id="radix-:r3o:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                        className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-soft"
                      >
                        Options
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        id="radix-:r3q:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                        className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-soft rt-high-contrast"
                      >
                        Options
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </td>
                    <td>
                      <button
                        data-accent-color="gray"
                        type="button"
                        id="radix-:r3s:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                        className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-soft"
                      >
                        Options
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </td>
                    <td>
                      <button
                        data-accent-color="gray"
                        type="button"
                        id="radix-:r3u:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                        className="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-soft rt-high-contrast"
                      >
                        Options
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                            fill="currentColor"
                            data-fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r3c:-trigger-all-colors"
            id="radix-:r3c:-content-all-colors"
            data-data-tabindex="0"
            className="rt-TabsContent"
          ></div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r3c:-trigger-all-sizes"
            id="radix-:r3c:-content-all-sizes"
            data-data-tabindex="0"
            className="rt-TabsContent"
          ></div>
        </div>
      </div>
      <div className="rt-Flex playground_PlaygroundSection__jQiIu rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-gap-5 rt-r-mb-5 sm:rt-r-mb-8">
        <div className="rt-Flex rt-r-display-flex rt-r-ai-baseline rt-r-jc-start rt-r-gap-4">
          <h1 id="em" className="rt-Heading rt-r-size-6 rt-r-weight-bold">
            <a
              data-accent-color="gray"
              href="#em"
              className="rt-Text rt-reset rt-Link rt-underline-hover rt-high-contrast"
            >
              Em
            </a>
          </h1>
          <a
            href="/themes/docs/components/em"
            className="rt-Text rt-reset rt-Link playground_PlaygroundDocsLink__iTdrz rt-underline-auto rt-r-size-2"
          >
            View in docs
          </a>
        </div>
        <div
          className="rt-Box"
          data-data-style="width: calc(580px * var(--scaling));"
        >
          Versions of the <em className="rt-Em">Lorem ipsum</em> text have been
          used in typesetting at least since the 1960s, when it was popularized
          by advertisements for Letraset transfer sheets. It is typically a
          corrupted version of{" "}
          <em className="rt-Em">De finibus bonorum et malorum</em>,
          a&nbsp;1st-century BC text by the Roman statesman and philosopher
          Cicero, with words altered, added, and removed to make it nonsensical
          and improper Latin.
        </div>
      </div>
      <div className="rt-Flex playground_PlaygroundSection__jQiIu rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-gap-5 rt-r-mb-5 sm:rt-r-mb-8">
        <div className="rt-Flex rt-r-display-flex rt-r-ai-baseline rt-r-jc-start rt-r-gap-4">
          <h1 id="heading" className="rt-Heading rt-r-size-6 rt-r-weight-bold">
            <a
              data-accent-color="gray"
              href="#heading"
              className="rt-Text rt-reset rt-Link rt-underline-hover rt-high-contrast"
            >
              Heading
            </a>
          </h1>
          <a
            href="/themes/docs/components/heading"
            className="rt-Text rt-reset rt-Link playground_PlaygroundDocsLink__iTdrz rt-underline-auto rt-r-size-2"
          >
            View in docs
          </a>
        </div>
        <div dir="ltr" data-orientation="horizontal" className="rt-TabsRoot">
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="rt-TabsList rt-r-size-2"
            data-data-tabindex="0"
            data-orientation="horizontal"
            data-data-style="outline: none;"
          >
            <button
              type="button"
              role="tab"
              aria-selected="true"
              aria-controls="radix-:r40:-content-specimen"
              data-state="active"
              id="radix-:r40:-trigger-specimen"
              className="rt-reset rt-TabsTrigger"
              data-data-tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              <span className="rt-TabsTriggerInner">Specimen</span>
              <span className="rt-TabsTriggerInnerHidden">Specimen</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r40:-content-all-colors"
              data-state="inactive"
              id="radix-:r40:-trigger-all-colors"
              className="rt-reset rt-TabsTrigger"
              data-data-tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              <span className="rt-TabsTriggerInner">All colors</span>
              <span className="rt-TabsTriggerInnerHidden">All colors</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r40:-content-all-sizes"
              data-state="inactive"
              id="radix-:r40:-trigger-all-sizes"
              className="rt-reset rt-TabsTrigger"
              data-data-tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              <span className="rt-TabsTriggerInner">All sizes</span>
              <span className="rt-TabsTriggerInnerHidden">All sizes</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r40:-content-all-weights"
              data-state="inactive"
              id="radix-:r40:-trigger-all-weights"
              className="rt-reset rt-TabsTrigger"
              data-data-tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              <span className="rt-TabsTriggerInner">All weights</span>
              <span className="rt-TabsTriggerInnerHidden">All weights</span>
            </button>
          </div>
          <div
            data-state="active"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r40:-trigger-specimen"
            id="radix-:r40:-content-specimen"
            data-data-tabindex="0"
            className="rt-TabsContent"
            data-data-style=""
          >
            <div
              className="rt-Box rt-r-mt-6"
              data-data-style="width: calc(585px * var(--scaling));"
            >
              <h1 className="rt-Heading rt-r-size-9 rt-r-weight-bold">
                The principles of the typographic craft are difficult
                to&nbsp;master
              </h1>
            </div>
            <div
              className="rt-Grid rt-r-gap-6 rt-r-mt-6"
              data-data-style="--grid-template-columns-initial: auto auto;"
            >
              <div
                className="rt-Box rt-r-pr-4"
                data-data-style="width: calc(340px * var(--scaling));"
              >
                <h1 className="rt-Heading rt-r-size-5 rt-r-weight-bold rt-r-mb-2">
                  The principles of the typographic craft are difficult
                  to&nbsp;master
                </h1>
                <p className="rt-Text rt-r-size-3">
                  The goal of typography is to relate font size, line height,
                  and line width in a proportional way that maximizes beauty and
                  makes reading easier and more pleasant.
                </p>
              </div>
              <div
                className="rt-Box"
                data-data-style="width: calc(330px * var(--scaling));"
              >
                <h1 className="rt-Heading rt-r-size-4 rt-r-weight-bold rt-r-mb-2">
                  The principles of the typographic craft are difficult
                  to&nbsp;master
                </h1>
                <p className="rt-Text rt-r-size-3">
                  The goal of typography is to relate font size, line height,
                  and line width in a proportional way that maximizes beauty and
                  makes reading easier and more pleasant.
                </p>
              </div>
              <div
                className="rt-Box"
                data-data-style="width: calc(290px * var(--scaling));"
              >
                <h1 className="rt-Heading rt-r-size-3 rt-r-weight-bold rt-r-mb-1">
                  The principles of the typographic craft are difficult
                  to&nbsp;master
                </h1>
                <p className="rt-Text rt-r-size-2">
                  The goal of typography is to relate font size, line height,
                  and line width in a proportional way that maximizes beauty and
                  makes reading easier and more pleasant.
                </p>
              </div>
              <div
                className="rt-Box"
                data-data-style="width: calc(260px * var(--scaling));"
              >
                <h1 className="rt-Heading rt-r-size-2 rt-r-weight-bold rt-r-mb-1">
                  The principles of the typographic craft are difficult
                  to&nbsp;master
                </h1>
                <p className="rt-Text rt-r-size-1">
                  The goal of typography is to relate font size, line height,
                  and line width in a proportional way that maximizes beauty and
                  makes reading easier and more pleasant.
                </p>
              </div>
            </div>
          </div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r40:-trigger-all-colors"
            id="radix-:r40:-content-all-colors"
            data-data-tabindex="0"
            className="rt-TabsContent"
          ></div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r40:-trigger-all-sizes"
            id="radix-:r40:-content-all-sizes"
            data-data-tabindex="0"
            className="rt-TabsContent"
          ></div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r40:-trigger-all-weights"
            id="radix-:r40:-content-all-weights"
            data-data-tabindex="0"
            className="rt-TabsContent"
          ></div>
        </div>
      </div>
    </>
  );
}
function Card99() {
  return <></>;
}
function RadixTheme() {
  return (
    <PlayGround>
      <Card99 />
      <Card1 />
      <Card2 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
      <Card9 />
      <Card10 />
      <Cards11 />
      <Cards12 />
      <Cards13 />
      <Cards14 />
      <Cards15 />
      <Cards16 />
    </PlayGround>
  );
}

export default RadixTheme;
