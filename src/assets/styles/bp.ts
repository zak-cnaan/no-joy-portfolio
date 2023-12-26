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

export default responsiveDesign