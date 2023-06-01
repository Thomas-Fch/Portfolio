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
    img: PokemonLite,
    name: "PokemonLite",
    description:
      "A Pokemon web site that allows users to experiment an easier journey in Pokemon with automatize battle.",
    skill01: "React",
    skill02: "SCSS",
    github: "https://github.com/Alexandre78R/CV-Hermione",
    figma: "https://www.figma.com/file/Oj4Mv7yG8CeWSUVMoFh3xQ/save?type=design&node-id=0%3A1&t=cev3UVoZtELMrRiB-1",
    live: "",
  },
  {
    className: "card_row_reversed",
    img: Hermione,
    name: "C.V Hermione",
    description: "Had to make a CV for a fictional character.You will know more about her, his skills and career",
    skill01: "HTML",
    skill02: "JS",
    github: "https://github.com/Alexandre78R/CV-Hermione",
    figma: "https://www.figma.com/file/Oj4Mv7yG8CeWSUVMoFh3xQ/save?type=design&node-id=0%3A1&t=cev3UVoZtELMrRiB-1",
    live: "https://alexandre78r.github.io/CV-Hermione/",
  },
];

export { skillsIcons, projects };
