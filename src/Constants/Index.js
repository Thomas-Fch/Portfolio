import Html from "../assets/logos/HTML.png";
import Css from "../assets/logos/css.png";
import Js from "../assets/logos/JavaScript.png";
import ReactImg from "../assets/logos/React.png";
import Sass from "../assets/logos/sass.svg";
import Mysql from "../assets/logos/sql.png";
import Ps from "../assets/logos/photoshop.png";
import Figma from "../assets/logos/figma.png";
// import Tailwind from "../assets/logos/Tailwind_CSS_Logo.svg.png";
import TypeScript from "../assets/logos/typescript-2.svg";
import Hermione from "../assets/photos/hermione.png";
// import PokemonLite from "../assets/photos/pokemonLite.png";
import Portfolio from "../assets/photos/portfolio.png";
import makeSense from "../assets/photos/makeSense.png";
import emmaus from "../assets/photos/emmaus.png";

const skillsIcons = [
  {
    img: Html,
    name: "HTML",
  },
  {
    img: Css,
    name: "CSS",
  },
  {
    img: Sass,
    name: "SASS",
  },
  // {
  //   img: Tailwind,
  //   name: "Tailwind",
  // },
  {
    img: Js,
    name: "JS",
  },
  {
    img: TypeScript,
    name: "TypeScript",
  },
  {
    img: ReactImg,
    name: "REACT",
  },
  {
    img: Mysql,
    name: "MYSQL",
  },
  {
    img: Ps,
    name: "PS",
  },
  {
    img: Figma,
    name: "FIGMA",
  },
];
const projects = [
  {
    className: "card_row_reversed",
    img: makeSense,
    name: "MakeSense",
    wip: true,
    description: "An intranet to promote projects within the company, subject to employee votes",
    skills: ["React", "Redux", "Express"],
    github: "https://github.com/WildCodeSchool/0223-paris-js-p3-makesense-client/tree/projectview",
    figma:
      "https://www.figma.com/file/nieWYZZWBCxN5xRX8nm0c2/MakeSense?type=design&node-id=43%3A80&t=rS3WkyrNrgstsVsx-1",
  },
  {
    className: "card_row",
    img: emmaus,
    name: "Emmaüs Connect",
    wip: true,
    description:
      " A website that offers to donate your old smartphones and offer them for sale at low prices for those who have little means",
    skills: ["React", "Express"],
    figma:
      "https://www.figma.com/file/yBb3xKzOCypM0HGgHCb1bx/Emmaus-Connect?type=design&mode=design&t=0o2O3BrGEflm4g5v-1",
    github: "https://github.com/Thomas-Fch/Emmaus_connect/tree/main",
    live: "https://emmaus-connect.netlify.app",
  },
  {
    className: "card_row_reversed",
    img: Portfolio,
    name: "My portfolio",
    description:
      "My website, where you can find out more about me. I took the opportunity to experiment with several things and try to get the code clean and readable.",
    skills: ["React", "Scss"],
    github: "https://github.com/Thomas-Fch/Portfolio",
    live: "https://thomas-fachinetti-webdev-portfolio.netlify.app",
  },
  // {
  //   className: "card_row",
  //   img: PokemonLite,
  //   name: "PokemonLite",
  //   wip: true,
  //   description:
  //     "A Pokemon web site that allows users to experiment an easier journey in Pokemon with automatize battle.",
  //   skill01: "React",
  //   skill02: "SCSS",
  //   github: "",
  //   figma: "https://www.figma.com/file/XWKHvNo7pwO9Py0WVaeaPU/PokemonLite?type=design&t=bxIYUtNxSDs7S26K-1",
  //   live: "",
  // },
  {
    className: "card_row",
    img: Hermione,
    name: "C.V Hermione",
    description: "Had to make a CV for a fictional character.You will know more about her, his skills and career",
    skills: ["HTML", "JavaScript"],
    github: "https://github.com/Alexandre78R/CV-Hermione",
    figma: "https://www.figma.com/file/Oj4Mv7yG8CeWSUVMoFh3xQ/save?type=design&node-id=0%3A1&t=cev3UVoZtELMrRiB-1",
    live: "https://alexandre78r.github.io/CV-Hermione/",
  },
];

export { skillsIcons, projects };
