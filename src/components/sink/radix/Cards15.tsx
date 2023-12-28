function Cards15() {
  return (
    <>
      <div className="rt-Flex playground_PlaygroundSection__jQiIu rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-gap-5 rt-r-mb-5 sm:rt-r-mb-8">
        <div className="rt-Flex rt-r-display-flex rt-r-ai-baseline rt-r-jc-start rt-r-gap-4">
          <h1 id="switch" className="rt-Heading rt-r-size-6 rt-r-weight-bold">
            <a
              data-accent-color="gray"
              href="#switch"
              className="rt-Text rt-reset rt-Link rt-underline-hover rt-high-contrast"
            >
              Switch
            </a>
          </h1>
          <a
            href="/themes/docs/components/switch"
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
            data-tabindex="0"
            data-orientation="horizontal"
            data-style="outline: none;"
          >
            <button
              type="button"
              role="tab"
              aria-selected="true"
              aria-controls="radix-:r69:-content-theme-colors"
              data-state="active"
              id="radix-:r69:-trigger-theme-colors"
              className="rt-reset rt-TabsTrigger"
              data-tabindex="-1"
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
              aria-controls="radix-:r69:-content-all-colors"
              data-state="inactive"
              id="radix-:r69:-trigger-all-colors"
              className="rt-reset rt-TabsTrigger"
              data-tabindex="-1"
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
              aria-controls="radix-:r69:-content-all-sizes"
              data-state="inactive"
              id="radix-:r69:-trigger-all-sizes"
              className="rt-reset rt-TabsTrigger"
              data-tabindex="-1"
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
            aria-labelledby="radix-:r69:-trigger-theme-colors"
            id="radix-:r69:-content-theme-colors"
            data-tabindex="0"
            className="rt-TabsContent"
            data-style=""
          >
            <div className="rt-Box rt-r-mt-6">
              <table className="playground_PlaygroundTable__RTJb6">
                <thead>
                  <tr>
                    <th></th>
                    <th data-colspan="2">Accent</th>
                    <th data-colspan="2">Gray</th>
                    <th>Disabled</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Classic</td>
                    <td>
                      <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-classic">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="false"
                            data-state="unchecked"
                            value="on"
                            className="rt-reset rt-SwitchButton"
                          >
                            <span
                              data-state="unchecked"
                              className="rt-SwitchThumb"
                            ></span>
                          </button>
                        </span>
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-classic">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="true"
                            data-state="checked"
                            value="on"
                            className="rt-reset rt-SwitchButton"
                          >
                            <span
                              data-state="checked"
                              className="rt-SwitchThumb"
                            ></span>
                          </button>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-classic rt-high-contrast">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="true"
                            data-state="checked"
                            value="on"
                            className="rt-reset rt-SwitchButton rt-high-contrast"
                          >
                            <span
                              data-state="checked"
                              className="rt-SwitchThumb rt-high-contrast"
                            ></span>
                          </button>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-classic">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="false"
                            data-state="unchecked"
                            value="on"
                            data-accent-color="gray"
                            className="rt-reset rt-SwitchButton"
                          >
                            <span
                              data-state="unchecked"
                              className="rt-SwitchThumb"
                            ></span>
                          </button>
                        </span>
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-classic">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="true"
                            data-state="checked"
                            value="on"
                            data-accent-color="gray"
                            className="rt-reset rt-SwitchButton"
                          >
                            <span
                              data-state="checked"
                              className="rt-SwitchThumb"
                            ></span>
                          </button>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-classic rt-high-contrast">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="true"
                            data-state="checked"
                            value="on"
                            data-accent-color="gray"
                            className="rt-reset rt-SwitchButton rt-high-contrast"
                          >
                            <span
                              data-state="checked"
                              className="rt-SwitchThumb rt-high-contrast"
                            ></span>
                          </button>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-classic">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="false"
                            data-state="unchecked"
                            data-disabled={false}
                            disabled={false}
                            value="on"
                            className="rt-reset rt-SwitchButton"
                          >
                            <span
                              data-state="unchecked"
                              data-disabled={false}
                              className="rt-SwitchThumb"
                            ></span>
                          </button>
                        </span>
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-classic">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="true"
                            data-state="checked"
                            data-disabled={false}
                            disabled={false}
                            value="on"
                            className="rt-reset rt-SwitchButton"
                          >
                            <span
                              data-state="checked"
                              data-disabled={false}
                              className="rt-SwitchThumb"
                            ></span>
                          </button>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Surface</td>
                    <td>
                      <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-surface">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="false"
                            data-state="unchecked"
                            value="on"
                            className="rt-reset rt-SwitchButton"
                          >
                            <span
                              data-state="unchecked"
                              className="rt-SwitchThumb"
                            ></span>
                          </button>
                        </span>
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-surface">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="true"
                            data-state="checked"
                            value="on"
                            className="rt-reset rt-SwitchButton"
                          >
                            <span
                              data-state="checked"
                              className="rt-SwitchThumb"
                            ></span>
                          </button>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-surface rt-high-contrast">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="true"
                            data-state="checked"
                            value="on"
                            className="rt-reset rt-SwitchButton rt-high-contrast"
                          >
                            <span
                              data-state="checked"
                              className="rt-SwitchThumb rt-high-contrast"
                            ></span>
                          </button>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-surface">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="false"
                            data-state="unchecked"
                            value="on"
                            data-accent-color="gray"
                            className="rt-reset rt-SwitchButton"
                          >
                            <span
                              data-state="unchecked"
                              className="rt-SwitchThumb"
                            ></span>
                          </button>
                        </span>
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-surface">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="true"
                            data-state="checked"
                            value="on"
                            data-accent-color="gray"
                            className="rt-reset rt-SwitchButton"
                          >
                            <span
                              data-state="checked"
                              className="rt-SwitchThumb"
                            ></span>
                          </button>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-surface rt-high-contrast">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="true"
                            data-state="checked"
                            value="on"
                            data-accent-color="gray"
                            className="rt-reset rt-SwitchButton rt-high-contrast"
                          >
                            <span
                              data-state="checked"
                              className="rt-SwitchThumb rt-high-contrast"
                            ></span>
                          </button>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-surface">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="false"
                            data-state="unchecked"
                            data-disabled={false}
                            disabled={false}
                            value="on"
                            className="rt-reset rt-SwitchButton"
                          >
                            <span
                              data-state="unchecked"
                              data-disabled={false}
                              className="rt-SwitchThumb"
                            ></span>
                          </button>
                        </span>
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-surface">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="true"
                            data-state="checked"
                            data-disabled={false}
                            disabled={false}
                            value="on"
                            className="rt-reset rt-SwitchButton"
                          >
                            <span
                              data-state="checked"
                              data-disabled={false}
                              className="rt-SwitchThumb"
                            ></span>
                          </button>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Soft</td>
                    <td>
                      <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-soft">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="false"
                            data-state="unchecked"
                            value="on"
                            className="rt-reset rt-SwitchButton"
                          >
                            <span
                              data-state="unchecked"
                              className="rt-SwitchThumb"
                            ></span>
                          </button>
                        </span>
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-soft">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="true"
                            data-state="checked"
                            value="on"
                            className="rt-reset rt-SwitchButton"
                          >
                            <span
                              data-state="checked"
                              className="rt-SwitchThumb"
                            ></span>
                          </button>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-soft rt-high-contrast">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="true"
                            data-state="checked"
                            value="on"
                            className="rt-reset rt-SwitchButton rt-high-contrast"
                          >
                            <span
                              data-state="checked"
                              className="rt-SwitchThumb rt-high-contrast"
                            ></span>
                          </button>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-soft">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="false"
                            data-state="unchecked"
                            value="on"
                            data-accent-color="gray"
                            className="rt-reset rt-SwitchButton"
                          >
                            <span
                              data-state="unchecked"
                              className="rt-SwitchThumb"
                            ></span>
                          </button>
                        </span>
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-soft">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="true"
                            data-state="checked"
                            value="on"
                            data-accent-color="gray"
                            className="rt-reset rt-SwitchButton"
                          >
                            <span
                              data-state="checked"
                              className="rt-SwitchThumb"
                            ></span>
                          </button>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-soft rt-high-contrast">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="true"
                            data-state="checked"
                            value="on"
                            data-accent-color="gray"
                            className="rt-reset rt-SwitchButton rt-high-contrast"
                          >
                            <span
                              data-state="checked"
                              className="rt-SwitchThumb rt-high-contrast"
                            ></span>
                          </button>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-gap-4">
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-soft">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="false"
                            data-state="unchecked"
                            data-disabled={false}
                            disabled={false}
                            value="on"
                            className="rt-reset rt-SwitchButton"
                          >
                            <span
                              data-state="unchecked"
                              data-disabled={false}
                              className="rt-SwitchThumb"
                            ></span>
                          </button>
                        </span>
                        <span className="rt-SwitchRoot rt-r-size-2 rt-variant-soft">
                          <button
                            type="button"
                            role="switch"
                            aria-checked="true"
                            data-state="checked"
                            data-disabled={false}
                            disabled={false}
                            value="on"
                            className="rt-reset rt-SwitchButton"
                          >
                            <span
                              data-state="checked"
                              data-disabled={false}
                              className="rt-SwitchThumb"
                            ></span>
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
            aria-labelledby="radix-:r69:-trigger-all-colors"
            id="radix-:r69:-content-all-colors"
            data-tabindex="0"
            className="rt-TabsContent"
          ></div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r69:-trigger-all-sizes"
            id="radix-:r69:-content-all-sizes"
            data-tabindex="0"
            className="rt-TabsContent"
          ></div>
        </div>
      </div>
      <div className="rt-Flex playground_PlaygroundSection__jQiIu rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-gap-5 rt-r-mb-5 sm:rt-r-mb-8">
        <div className="rt-Flex rt-r-display-flex rt-r-ai-baseline rt-r-jc-start rt-r-gap-4">
          <h1 id="table" className="rt-Heading rt-r-size-6 rt-r-weight-bold">
            <a
              data-accent-color="gray"
              href="#table"
              className="rt-Text rt-reset rt-Link rt-underline-hover rt-high-contrast"
            >
              Table
            </a>
          </h1>
          <a
            href="/themes/docs/components/table"
            className="rt-Text rt-reset rt-Link playground_PlaygroundDocsLink__iTdrz rt-underline-auto rt-r-size-2"
          >
            View in docs
          </a>
        </div>
        <div className="rt-Box -rt-r-mb-6" data-style="white-space: nowrap;">
          <div className="rt-Flex playground_PlaygroundHeroContainer__Z_40G rt-r-display-flex rt-r-fd-column rt-r-jc-start rt-r-mb-6">
            <div className="rt-Flex playground_PlaygroundHeroContent__PV_P9 rt-r-display-flex rt-r-jc-center rt-r-position-relative">
              <div
                className="rt-Flex rt-r-display-flex rt-r-ai-center rt-r-jc-center rt-r-position-absolute rt-r-inset-0"
                data-style="overflow: hidden;"
              >
                <svg
                  width="100%"
                  height="200%"
                  viewBox="0 0 2560 1920"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-style="opacity: 0.6;"
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
                      <stop
                        offset="0.364583"
                        stop-color="var(--accent-5)"
                      ></stop>
                      <stop
                        offset="0.658041"
                        stop-color="var(--color-background)"
                      ></stop>
                      <stop
                        offset="0.798521"
                        stop-color="var(--accent-9)"
                      ></stop>
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
                      <stop
                        offset="0.333803"
                        stop-color="var(--accent-1)"
                      ></stop>
                      <stop
                        offset="0.658041"
                        stop-color="var(--color-background)"
                      ></stop>
                      <stop
                        offset="0.798521"
                        stop-color="var(--accent-9)"
                      ></stop>
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
                      <stop
                        offset="0.140625"
                        stop-color="var(--accent-3)"
                      ></stop>
                      <stop
                        offset="0.333803"
                        stop-color="var(--accent-7)"
                      ></stop>
                      <stop
                        offset="0.658041"
                        stop-color="var(--color-background)"
                      ></stop>
                      <stop
                        offset="0.798521"
                        stop-color="var(--accent-9)"
                      ></stop>
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
                      <stop
                        offset="0.333803"
                        stop-color="var(--accent-1)"
                      ></stop>
                      <stop
                        offset="0.658041"
                        stop-color="var(--color-background)"
                      ></stop>
                      <stop
                        offset="0.798521"
                        stop-color="var(--accent-9)"
                      ></stop>
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
                      <stop
                        offset="0.333803"
                        stop-color="var(--accent-1)"
                      ></stop>
                      <stop
                        offset="0.658041"
                        stop-color="var(--color-background)"
                      ></stop>
                      <stop
                        offset="0.798521"
                        stop-color="var(--accent-9)"
                      ></stop>
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
              <div className="rt-TableRoot rt-variant-surface rt-r-size-1 sm:rt-r-size-2">
                <div
                  dir="ltr"
                  className="rt-ScrollAreaRoot"
                  data-style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
                >
                  <div
                    data-radix-scroll-area-viewport=""
                    className="rt-ScrollAreaViewport"
                    data-style="overflow: scroll;"
                  >
                    <div data-style="min-width: 100%; display: table;">
                      <table className="rt-TableRootTable">
                        <thead className="rt-TableHeader">
                          <tr className="rt-TableRow">
                            <th
                              scope="col"
                              className="rt-TableCell rt-TableColumnHeaderCell"
                            >
                              Full name
                            </th>
                            <th
                              scope="col"
                              className="rt-TableCell rt-TableColumnHeaderCell"
                            >
                              Email
                            </th>
                            <th
                              scope="col"
                              className="rt-TableCell rt-TableColumnHeaderCell"
                            >
                              Group
                            </th>
                          </tr>
                        </thead>
                        <tbody className="rt-TableBody">
                          <tr className="rt-TableRow">
                            <th
                              scope="row"
                              className="rt-TableCell rt-TableRowHeaderCell"
                            >
                              Danilo Sousa
                            </th>
                            <td className="rt-TableCell">danilo@example.com</td>
                            <td className="rt-TableCell">Developer</td>
                          </tr>
                          <tr className="rt-TableRow">
                            <th
                              scope="row"
                              className="rt-TableCell rt-TableRowHeaderCell"
                            >
                              Zahra Ambessa
                            </th>
                            <td className="rt-TableCell">zahra@example.com</td>
                            <td className="rt-TableCell">Admin</td>
                          </tr>
                          <tr className="rt-TableRow">
                            <th
                              scope="row"
                              className="rt-TableCell rt-TableRowHeaderCell"
                            >
                              Jasper Eriksson
                            </th>
                            <td className="rt-TableCell">jasper@example.com</td>
                            <td className="rt-TableCell">Developer</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="rt-ScrollAreaViewportFocusRing"></div>
                </div>
              </div>
            </div>
          </div>
          <table className="playground_PlaygroundTable__RTJb6">
            <thead>
              <tr>
                <th></th>
                <th data-style="padding-right: var(--space-8); padding-bottom: var(--space-5);">
                  Surface
                </th>
                <th data-style="padding-right: var(--space-8); padding-bottom: var(--space-5);">
                  Ghost
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Size 1</td>
                <td data-style="padding-right: var(--space-8); padding-bottom: var(--space-8);">
                  <div className="rt-TableRoot rt-variant-surface rt-r-size-1">
                    <div
                      dir="ltr"
                      className="rt-ScrollAreaRoot"
                      data-style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
                    >
                      <div
                        data-radix-scroll-area-viewport=""
                        className="rt-ScrollAreaViewport"
                        data-style="overflow: scroll;"
                      >
                        <div data-style="min-width: 100%; display: table;">
                          <table className="rt-TableRootTable">
                            <thead className="rt-TableHeader">
                              <tr className="rt-TableRow">
                                <th
                                  scope="col"
                                  className="rt-TableCell rt-TableColumnHeaderCell"
                                >
                                  Full name
                                </th>
                                <th
                                  scope="col"
                                  className="rt-TableCell rt-TableColumnHeaderCell"
                                >
                                  Email
                                </th>
                                <th
                                  scope="col"
                                  className="rt-TableCell rt-TableColumnHeaderCell"
                                >
                                  Group
                                </th>
                              </tr>
                            </thead>
                            <tbody className="rt-TableBody">
                              <tr className="rt-TableRow">
                                <th
                                  scope="row"
                                  className="rt-TableCell rt-TableRowHeaderCell"
                                >
                                  Danilo Sousa
                                </th>
                                <td className="rt-TableCell">
                                  danilo@example.com
                                </td>
                                <td className="rt-TableCell">Developer</td>
                              </tr>
                              <tr className="rt-TableRow">
                                <th
                                  scope="row"
                                  className="rt-TableCell rt-TableRowHeaderCell"
                                >
                                  Zahra Ambessa
                                </th>
                                <td className="rt-TableCell">
                                  zahra@example.com
                                </td>
                                <td className="rt-TableCell">Admin</td>
                              </tr>
                              <tr className="rt-TableRow">
                                <th
                                  scope="row"
                                  className="rt-TableCell rt-TableRowHeaderCell"
                                >
                                  Jasper Eriksson
                                </th>
                                <td className="rt-TableCell">
                                  jasper@example.com
                                </td>
                                <td className="rt-TableCell">Developer</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rt-ScrollAreaViewportFocusRing"></div>
                    </div>
                  </div>
                </td>
                <td data-style="padding-right: var(--space-8); padding-bottom: var(--space-8);">
                  <div className="rt-TableRoot rt-variant-ghost rt-r-size-1">
                    <div
                      dir="ltr"
                      className="rt-ScrollAreaRoot"
                      data-style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
                    >
                      <div
                        data-radix-scroll-area-viewport=""
                        className="rt-ScrollAreaViewport"
                        data-style="overflow: scroll;"
                      >
                        <div data-style="min-width: 100%; display: table;">
                          <table className="rt-TableRootTable">
                            <thead className="rt-TableHeader">
                              <tr className="rt-TableRow">
                                <th
                                  scope="col"
                                  className="rt-TableCell rt-TableColumnHeaderCell"
                                >
                                  Full name
                                </th>
                                <th
                                  scope="col"
                                  className="rt-TableCell rt-TableColumnHeaderCell"
                                >
                                  Email
                                </th>
                                <th
                                  scope="col"
                                  className="rt-TableCell rt-TableColumnHeaderCell"
                                >
                                  Group
                                </th>
                              </tr>
                            </thead>
                            <tbody className="rt-TableBody">
                              <tr className="rt-TableRow">
                                <th
                                  scope="row"
                                  className="rt-TableCell rt-TableRowHeaderCell"
                                >
                                  Danilo Sousa
                                </th>
                                <td className="rt-TableCell">
                                  danilo@example.com
                                </td>
                                <td className="rt-TableCell">Developer</td>
                              </tr>
                              <tr className="rt-TableRow">
                                <th
                                  scope="row"
                                  className="rt-TableCell rt-TableRowHeaderCell"
                                >
                                  Zahra Ambessa
                                </th>
                                <td className="rt-TableCell">
                                  zahra@example.com
                                </td>
                                <td className="rt-TableCell">Admin</td>
                              </tr>
                              <tr className="rt-TableRow">
                                <th
                                  scope="row"
                                  className="rt-TableCell rt-TableRowHeaderCell"
                                >
                                  Jasper Eriksson
                                </th>
                                <td className="rt-TableCell">
                                  jasper@example.com
                                </td>
                                <td className="rt-TableCell">Developer</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rt-ScrollAreaViewportFocusRing"></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Size 2</td>
                <td data-style="padding-right: var(--space-8); padding-bottom: var(--space-8);">
                  <div className="rt-TableRoot rt-variant-surface rt-r-size-2">
                    <div
                      dir="ltr"
                      className="rt-ScrollAreaRoot"
                      data-style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
                    >
                      <div
                        data-radix-scroll-area-viewport=""
                        className="rt-ScrollAreaViewport"
                        data-style="overflow: scroll;"
                      >
                        <div data-style="min-width: 100%; display: table;">
                          <table className="rt-TableRootTable">
                            <thead className="rt-TableHeader">
                              <tr className="rt-TableRow">
                                <th
                                  scope="col"
                                  className="rt-TableCell rt-TableColumnHeaderCell"
                                >
                                  Full name
                                </th>
                                <th
                                  scope="col"
                                  className="rt-TableCell rt-TableColumnHeaderCell"
                                >
                                  Email
                                </th>
                                <th
                                  scope="col"
                                  className="rt-TableCell rt-TableColumnHeaderCell"
                                >
                                  Group
                                </th>
                              </tr>
                            </thead>
                            <tbody className="rt-TableBody">
                              <tr className="rt-TableRow">
                                <th
                                  scope="row"
                                  className="rt-TableCell rt-TableRowHeaderCell"
                                >
                                  Danilo Sousa
                                </th>
                                <td className="rt-TableCell">
                                  danilo@example.com
                                </td>
                                <td className="rt-TableCell">Developer</td>
                              </tr>
                              <tr className="rt-TableRow">
                                <th
                                  scope="row"
                                  className="rt-TableCell rt-TableRowHeaderCell"
                                >
                                  Zahra Ambessa
                                </th>
                                <td className="rt-TableCell">
                                  zahra@example.com
                                </td>
                                <td className="rt-TableCell">Admin</td>
                              </tr>
                              <tr className="rt-TableRow">
                                <th
                                  scope="row"
                                  className="rt-TableCell rt-TableRowHeaderCell"
                                >
                                  Jasper Eriksson
                                </th>
                                <td className="rt-TableCell">
                                  jasper@example.com
                                </td>
                                <td className="rt-TableCell">Developer</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rt-ScrollAreaViewportFocusRing"></div>
                    </div>
                  </div>
                </td>
                <td data-style="padding-right: var(--space-8); padding-bottom: var(--space-8);">
                  <div className="rt-TableRoot rt-variant-ghost rt-r-size-2">
                    <div
                      dir="ltr"
                      className="rt-ScrollAreaRoot"
                      data-style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
                    >
                      <div
                        data-radix-scroll-area-viewport=""
                        className="rt-ScrollAreaViewport"
                        data-style="overflow: scroll;"
                      >
                        <div data-style="min-width: 100%; display: table;">
                          <table className="rt-TableRootTable">
                            <thead className="rt-TableHeader">
                              <tr className="rt-TableRow">
                                <th
                                  scope="col"
                                  className="rt-TableCell rt-TableColumnHeaderCell"
                                >
                                  Full name
                                </th>
                                <th
                                  scope="col"
                                  className="rt-TableCell rt-TableColumnHeaderCell"
                                >
                                  Email
                                </th>
                                <th
                                  scope="col"
                                  className="rt-TableCell rt-TableColumnHeaderCell"
                                >
                                  Group
                                </th>
                              </tr>
                            </thead>
                            <tbody className="rt-TableBody">
                              <tr className="rt-TableRow">
                                <th
                                  scope="row"
                                  className="rt-TableCell rt-TableRowHeaderCell"
                                >
                                  Danilo Sousa
                                </th>
                                <td className="rt-TableCell">
                                  danilo@example.com
                                </td>
                                <td className="rt-TableCell">Developer</td>
                              </tr>
                              <tr className="rt-TableRow">
                                <th
                                  scope="row"
                                  className="rt-TableCell rt-TableRowHeaderCell"
                                >
                                  Zahra Ambessa
                                </th>
                                <td className="rt-TableCell">
                                  zahra@example.com
                                </td>
                                <td className="rt-TableCell">Admin</td>
                              </tr>
                              <tr className="rt-TableRow">
                                <th
                                  scope="row"
                                  className="rt-TableCell rt-TableRowHeaderCell"
                                >
                                  Jasper Eriksson
                                </th>
                                <td className="rt-TableCell">
                                  jasper@example.com
                                </td>
                                <td className="rt-TableCell">Developer</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rt-ScrollAreaViewportFocusRing"></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Size 3</td>
                <td data-style="padding-right: var(--space-8); padding-bottom: var(--space-8);">
                  <div className="rt-TableRoot rt-variant-surface rt-r-size-3">
                    <div
                      dir="ltr"
                      className="rt-ScrollAreaRoot"
                      data-style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
                    >
                      <div
                        data-radix-scroll-area-viewport=""
                        className="rt-ScrollAreaViewport"
                        data-style="overflow: scroll;"
                      >
                        <div data-style="min-width: 100%; display: table;">
                          <table className="rt-TableRootTable">
                            <thead className="rt-TableHeader">
                              <tr className="rt-TableRow">
                                <th
                                  scope="col"
                                  className="rt-TableCell rt-TableColumnHeaderCell"
                                >
                                  Full name
                                </th>
                                <th
                                  scope="col"
                                  className="rt-TableCell rt-TableColumnHeaderCell"
                                >
                                  Email
                                </th>
                                <th
                                  scope="col"
                                  className="rt-TableCell rt-TableColumnHeaderCell"
                                >
                                  Group
                                </th>
                              </tr>
                            </thead>
                            <tbody className="rt-TableBody">
                              <tr className="rt-TableRow">
                                <th
                                  scope="row"
                                  className="rt-TableCell rt-TableRowHeaderCell"
                                >
                                  Danilo Sousa
                                </th>
                                <td className="rt-TableCell">
                                  danilo@example.com
                                </td>
                                <td className="rt-TableCell">Developer</td>
                              </tr>
                              <tr className="rt-TableRow">
                                <th
                                  scope="row"
                                  className="rt-TableCell rt-TableRowHeaderCell"
                                >
                                  Zahra Ambessa
                                </th>
                                <td className="rt-TableCell">
                                  zahra@example.com
                                </td>
                                <td className="rt-TableCell">Admin</td>
                              </tr>
                              <tr className="rt-TableRow">
                                <th
                                  scope="row"
                                  className="rt-TableCell rt-TableRowHeaderCell"
                                >
                                  Jasper Eriksson
                                </th>
                                <td className="rt-TableCell">
                                  jasper@example.com
                                </td>
                                <td className="rt-TableCell">Developer</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rt-ScrollAreaViewportFocusRing"></div>
                    </div>
                  </div>
                </td>
                <td data-style="padding-right: var(--space-8); padding-bottom: var(--space-8);">
                  <div className="rt-TableRoot rt-variant-ghost rt-r-size-3">
                    <div
                      dir="ltr"
                      className="rt-ScrollAreaRoot"
                      data-style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
                    >
                      <div
                        data-radix-scroll-area-viewport=""
                        className="rt-ScrollAreaViewport"
                        data-style="overflow: scroll;"
                      >
                        <div data-style="min-width: 100%; display: table;">
                          <table className="rt-TableRootTable">
                            <thead className="rt-TableHeader">
                              <tr className="rt-TableRow">
                                <th
                                  scope="col"
                                  className="rt-TableCell rt-TableColumnHeaderCell"
                                >
                                  Full name
                                </th>
                                <th
                                  scope="col"
                                  className="rt-TableCell rt-TableColumnHeaderCell"
                                >
                                  Email
                                </th>
                                <th
                                  scope="col"
                                  className="rt-TableCell rt-TableColumnHeaderCell"
                                >
                                  Group
                                </th>
                              </tr>
                            </thead>
                            <tbody className="rt-TableBody">
                              <tr className="rt-TableRow">
                                <th
                                  scope="row"
                                  className="rt-TableCell rt-TableRowHeaderCell"
                                >
                                  Danilo Sousa
                                </th>
                                <td className="rt-TableCell">
                                  danilo@example.com
                                </td>
                                <td className="rt-TableCell">Developer</td>
                              </tr>
                              <tr className="rt-TableRow">
                                <th
                                  scope="row"
                                  className="rt-TableCell rt-TableRowHeaderCell"
                                >
                                  Zahra Ambessa
                                </th>
                                <td className="rt-TableCell">
                                  zahra@example.com
                                </td>
                                <td className="rt-TableCell">Admin</td>
                              </tr>
                              <tr className="rt-TableRow">
                                <th
                                  scope="row"
                                  className="rt-TableCell rt-TableRowHeaderCell"
                                >
                                  Jasper Eriksson
                                </th>
                                <td className="rt-TableCell">
                                  jasper@example.com
                                </td>
                                <td className="rt-TableCell">Developer</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rt-ScrollAreaViewportFocusRing"></div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Cards15;
