import BattleShip from "./assets/images/BattleShip.png";
import BattleShipGif from "./assets/gifs/BattleShip.gif";
import Calc from "./assets/images/calc.png";
import CalcGif from "./assets/gifs/calc.gif";
import Chess from "./assets/images/chess.png";
import ChessGif from "./assets/gifs/chess.gif";
import Cover from "./assets/images/cv.png";
import CoverGif from "./assets/gifs/cover.gif";
import Deps from "./assets/images/deps.png";
import Sign from "./assets/images/sign.png";
import SignGif from "./assets/gifs/sign.gif";
import TicTac from "./assets/images/tictac.png";
import TicTacGif from "./assets/gifs/tictac.gif";
import ToDo from "./assets/images/todo.png";
import ToDoGif from "./assets/gifs/todo.gif";
import Weather from "./assets/images/weather.png";
import WeatherGif from "./assets/gifs/weather.gif";

const logotext = "PIERCE S.";
const meta = {
  title: "Pierce Strutt",
  description:
    "I’m Pierce Strutt, data analyst & front end developer, currently working in Calgary.",
};

const introdata = {
  title: "Hi, I'm Pierce Strutt",
  animated: {
    first: "Data Analyst - BBA.",
    second: "Self-Taught Developer.",
    third: "Life-Long Learner.",
  },
  description:
    "Front End Developer and Data Analyst currently working out of Calgary.",
};

const dataabout = {
  title: "About Me",
  aboutme: `Hi, I'm Pierce! I have a Bachelor of Business Administration with a double major in Data Analytics and Marketing, but my real passion is software development! I'm currently looking for any work opportunities to grow, develop, and prove my skills.`,
};
const worktimeline = [
  {
    jobtitle: "Deps.edn Updater for Clojure",
    where: "Calgary",
    date: "2024",
  },
  {
    jobtitle: "Open Source Developer",
    where: "GitHub",
    date: "2023-Present",
  },
  {
    jobtitle:
      "Bachelors of Business Admin - Major in Data Analytics / Business Intelligence",
    where: "Ambrose University, AB",
    date: "2024",
  },
];

const skills = [
  {
    name: "JavaScript",
    value: 90,
  },
  {
    name: "React",
    value: 85,
  },
  {
    name: "CSS",
    value: 70,
  },
  {
    name: "Clojure",
    value: 50,
  },
  {
    name: "Python",
    value: 50,
  },
  {
    name: "Rust",
    value: "30",
  },
];

const services = [
  {
    title: "Front End Development",
    description: "Website Developement using React or SquareSpace",
  },
  {
    title: "UI / UX Design",
    description:
      "I will help you decide how your website should look and feel in order to reach your customers best.",
  },
];

const dataportfolio = [
  {
    img: BattleShip,
    gif: BattleShipGif,
    git: "https://github.com/xadvent/battleship",
    description: "Interactive BattleShip game on your web browser!",
    link: "https://xadvent.github.io/battleship/",
  },
  {
    img: ToDo,
    gif: ToDoGif,
    git: "https://github.com/xadvent/toDoList",
    description: "To-Do List Web Application",
    link: "https://xadvent.github.io/toDoList/",
  },
  {
    img: Weather,
    gif: WeatherGif,
    git: "https://github.com/xadvent/weatherApp/deployments",
    description: "Weather Application",
    link: "https://xadvent.github.io/weatherApp/",
  },
  {
    img: Cover,
    gif: CoverGif,
    git: "https://github.com/xadvent/cv-application",
    description: "Resume/CV creator using React",
    link: "https://resume-creator-ps.netlify.app/",
  },
  {
    img: TicTac,
    gif: TicTacGif,
    git: "https://github.com/xadvent/ticTacToe",
    description: "Tic Tac Toe",
    link: "https://xadvent.github.io/ticTacToe/",
  },
  {
    img: Deps,
    gif: "",
    git: "https://github.com/jaxank/DepsUpdater",
    description: "Dependencies Updater for Clojure",
    link: "https://github.com/jaxank/DepsUpdater",
  },
  {
    img: Calc,
    gif: CalcGif,
    git: "https://github.com/xadvent/calculatorWebpage",
    description: "Calculator Website",
    link: "https://xadvent.github.io/calculatorWebpage/",
  },
  {
    img: Chess,
    gif: ChessGif,
    git: "https://github.com/xadvent/knightsTravails/",
    description: "Knight Pathfinder - Breadth First Search Algorithm",
    link: "https://xadvent.github.io/knightsTravails/",
  },
  {
    img: Sign,
    gif: SignGif,
    git: "https://github.com/xadvent/sign-upForm",
    description: "Sign-in page",
    link: "https://xadvent.github.io/sign-upForm/",
  },
];

const contactConfig = {
  YOUR_EMAIL: "piercestrutt@gmail.com",
  YOUR_FONE: "(778)873-3000",
  description: "Feel free to get in contact with me at any time!",
  YOUR_SERVICE_ID: "service_incvszl",
  YOUR_TEMPLATE_ID: "template_d2442oa",
  YOUR_USER_ID: "C4eMQAZrsTg7OJzEI",
};

const socialprofils = {
  github: "https://github.com/xadvent",
  facebook: "https://facebook.com/pierce.strutt",
  linkedin: "https://linkedin.com/in/piercestrutt",
};

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
