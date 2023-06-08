import Html from "../assets/logos/HTML.png";
import Css from "../assets/logos/css.png";
import Js from "../assets/logos/JavaScript.png";
import ReactImg from "../assets/logos/React.png";
import Sass from "../assets/logos/sass.svg";
import Mysql from "../assets/logos/sql.png";
import Ps from "../assets/logos/photoshop.png";
import Figma from "../assets/logos/figma.png";
import PokemonLite from "../assets/photos/pokemonLite.png";
import Hermione from "../assets/photos/hermione.png";
import Portfolio from "../assets/photos/portfolio.png";
import makeSense from "../assets/photos/makeSense.png";

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
    img: Js,
    name: "JS",
  },
  {
    img: ReactImg,
    name: "REACT",
  },
  {
    img: Sass,
    name: "SASS",
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
    className: "card_row",
    img: makeSense,
    name: "MakeSense",
    wip: true,
    description:
      "final project for my graduation, I'm in charge of the mockup and front-end. It will be a website for interns to manage projects.",
    skill01: "React",
    skill02: "Express",
    github: "https://github.com/WildCodeSchool/0223-paris-js-p3-makesense-server",
    figma:
      "https://www.figma.com/file/nieWYZZWBCxN5xRX8nm0c2/MakeSense?type=design&node-id=43%3A80&t=rS3WkyrNrgstsVsx-1",
  },
  {
    className: "card_row_reversed",
    img: Portfolio,
    name: "My portfolio",
    description:
      "My website, where you can find out more about me. I took the opportunity to experiment with several things and try to get the code clean and readable.",
    skill01: "React",
    skill02: "SCSS",
    github: "https://github.com/Thomas-Fch/Portfolio",
    live: "https://thomas-fachinetti-webdev-portfolio.netlify.app",
  },
  {
    className: "card_row",
    img: PokemonLite,
    name: "PokemonLite",
    wip: true,
    description:
      "A Pokemon web site that allows users to experiment an easier journey in Pokemon with automatize battle.",
    skill01: "React",
    skill02: "SCSS",
    github: "",
    figma: "https://www.figma.com/file/XWKHvNo7pwO9Py0WVaeaPU/PokemonLite?type=design&t=bxIYUtNxSDs7S26K-1",
    live: "",
  },
  {
    className: "card_row_reversed",
    img: Hermione,
    name: "C.V Hermione",
    description: "Had to make a CV for a fictional character.You will know more about her, his skills and career",
    skill01: "HTML",
    skill02: "JavaScript",
    github: "https://github.com/Alexandre78R/CV-Hermione",
    figma: "https://www.figma.com/file/Oj4Mv7yG8CeWSUVMoFh3xQ/save?type=design&node-id=0%3A1&t=cev3UVoZtELMrRiB-1",
    live: "https://alexandre78r.github.io/CV-Hermione/",
  },
];

export { skillsIcons, projects };
