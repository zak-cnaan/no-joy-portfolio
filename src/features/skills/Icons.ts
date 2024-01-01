// general
import cssIcon from "../../assets/developer-icons/icons/CSS.svg";
import htmlIcon from "../../assets/developer-icons/icons/HTML.svg";
import jsIcon from "../../assets/developer-icons/icons/JavaScript.svg";

// CSS
import sassIcon from "../../assets/developer-icons/icons/Sass.svg";
import emotionIcon from "../../assets/developer-icons/icons/Emotion-Dark.svg";
import bsIcon from "../../assets/developer-icons/icons/Bootstrap.svg";
import styledComponentsIcon from "../../assets/developer-icons/icons/StyledComponents.svg";
import tailwindIcon from "../../assets/developer-icons/icons/TailwindCSS-Dark.svg";
import lessIcon from "../../assets/developer-icons/icons/LESS_Logo.svg";
import cssModulesIcon from "../../assets/developer-icons/icons/css-modules-logo-Dark.png";

// React js ecosystem
import reactIcon from "../../assets/developer-icons/icons/React-Dark.svg";
import reduxIcon from "../../assets/developer-icons/icons/Redux.svg";
import tsIcon from "../../assets/developer-icons/icons/TypeScript.svg";


// Backend
// import cSharpIcon from "../../assets/developer-icons/icons/CS.svg";
// import dotNetIcon from "../../assets/developer-icons/icons/DotNet.svg";
// import expressIcon from "../../assets/developer-icons/icons/ExpressJS-Dark.svg";
// import firebaseIcon from "../../assets/developer-icons/icons/Firebase-Dark.svg";
// import mongoIcon from "../../assets/developer-icons/icons/MongoDB.svg";
// import mySQLIcon from "../../assets/developer-icons/icons/MySQL-Dark.svg";
// import phpIcon from "../../assets/developer-icons/icons/PHP-Dark.svg";
// import postgressIcon from "../../assets/developer-icons/icons/PostgreSQL-Dark.svg";
// import wordPressIcon from "../../assets/developer-icons/icons/Wordpress.svg";

// Frontend
// import angularIcon from "../../assets/developer-icons/icons/Angular-Dark.svg";
// import vueIcon from "../../assets/developer-icons/icons/VueJS-Dark.svg";

// packaging
// import gulpIcon from "../../assets/developer-icons/icons/Gulp.svg";
// import viteIcon from "../../assets/developer-icons/icons/Vite-Dark.svg";
// import webpackIcon from "../../assets/developer-icons/icons/Webpack-Dark.svg";

// design
import figmaIcon from "../../assets/developer-icons/icons/Figma-Dark.svg";
import photoShopIcon from "../../assets/developer-icons/icons/Photoshop.svg";

// Testing
import jestIcon from "../../assets/developer-icons/icons/Jest.svg";
import cypressIcon from "../../assets/developer-icons/icons/Cypress_Logomark_White-Color.svg"; //  Dark ??

// import gitIcon from "../../assets/developer-icons/icons/Git.svg";
import jqueryIcon from "../../assets/developer-icons/icons/JQuery.svg";

import nodejsIcon from "../../assets/developer-icons/icons/NodeJS-Dark.svg";
// import postmanIcon from "../../assets/developer-icons/icons/Postman.svg";



// more tools

const Icons = [
  {
    icon: jestIcon,
    name: "jestIcon",
    text: "jestIcon",
  },
  {
    icon: reactIcon,
    name: "reactIcon",
    text: "reactIcon",
  },
  {
    icon: reduxIcon,
    name: "reduxIcon",
  },
  {
    icon: tsIcon,
    name: "tsIcon",
  },
  {
    icon: cssIcon,
    name: "css",
    text: "css icon",
  },
  {
    icon: htmlIcon,
    name: "html",
  },
  {
    icon: jsIcon,
    name: "js",
    text: "javascript",
  },
  {
    icon: sassIcon,
    name: "sassIcon",
  },
  {
    icon: emotionIcon,
    name: "emotionIcon",
  },
  {
    icon: bsIcon,
    name: "bsIcon",
  },
  {
    icon: styledComponentsIcon,
    name: "styledComponentsIcon",
  },
  {
    icon: tailwindIcon,
    name: "tailwindIcon",
  },
  {
    icon: lessIcon,
    name: "lessIcon",
  },
  {
    icon: cssModulesIcon,
    name: "cssModulesIcon",
  },
];

export const getIconByName = (name: string) => Icons.find((x) => x.name === name)
export default Icons;
