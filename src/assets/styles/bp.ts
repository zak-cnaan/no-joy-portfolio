const pre = "--bp-";
const breakingPoints = ["xs", "sm", "md", "lg", "xl"];

function getCssVar(name: string):string{
    return getComputedStyle(document.documentElement)
    .getPropertyValue(name); // #999999
}

const responsiveDesign = new Map();

breakingPoints.forEach((item) => {
    const cssVar = getCssVar(`${pre}${item}`) + "px";
    const mediaUp = `@media (min-width: ${cssVar})`;

    responsiveDesign.set(item,cssVar);
    responsiveDesign.set(item+"-up",mediaUp);
})


// const tabletStartWidth = 600;
// const desktopStartWidth = 768;
// const extraLargeStartWidth = 1300;

// const responsiveDesign = {
//   tablet: `@media (min-width: ${tabletStartWidth}px) and (max-width: ${desktopStartWidth - 1}px)`,
//   desktop: `@media (min-width: ${desktopStartWidth}px) and (max-width: ${extraLargeStartWidth - 1}px)`,
//   extraLarge: `@media (min-width: ${extraLargeStartWidth}px)`,
// };

// const dfgdfg = {
//     xs: `@media (min-width: ${getCssVar('xs')}px)`
// }

export default responsiveDesign