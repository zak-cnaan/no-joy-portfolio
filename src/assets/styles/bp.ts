const pre = "--bp-";
const breakingPoints = ["xs", "sm", "md", "lg", "xl"];

function getCssVar(name: string):string{
        return getComputedStyle(document.documentElement)
        .getPropertyValue(name);
}

const responsiveDesign = new Map();

breakingPoints.forEach((item) => {
    const cssVar = getCssVar(`${pre}${item}`);
    const mediaUp = `@media (min-width: ${cssVar})`;

    // responsiveDesign.set(item,cssVar);
    responsiveDesign.set(item+"-up",mediaUp);
})


const mediaString = "@media (min-width: ";
export const responsive = {
    min_xs:mediaString + "0px)",
    min_sm:mediaString + "576px)",
    min_md:mediaString + "768px)",
    min_lg:mediaString + "992px)",
    min_xl:mediaString + "1200px)",
    min_xxl:mediaString + "1400px)",
    min_xxxl:mediaString + "1536px)",
}

export default responsiveDesign