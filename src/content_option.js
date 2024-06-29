import Calc from "./assets/images/calc.png"
import CalcGif from "./assets/gifs/calc.gif"
import Cover from "./assets/images/cv.png"
import CoverGif from "./assets/gifs/cover.gif"
import BattleShip from "./assets/images/BattleShip.png"
import BattleShipGif from "./assets/gifs/BattleShip.gif"
import TicTac from "./assets/images/tictac.png"
import TicTacGif from "./assets/gifs/tictac.gif"
import ToDo from "./assets/images/todo.png"
import ToDoGif from "./assets/gifs/todo.gif"

const logotext = "PIERCE S.";
const meta = {
    title: "Pierce Strutt",
    description: "I’m Pierce Strutt, data analyst & front end developer, currently working in Calgary.",
};

const introdata = {
    title: "Hi, I'm Pierce Strutt",
    animated: {
        first: "Data Analyst - BBA.",
        second: "Self-Taught Developer.",
        third: "Life-Long Learner.",
    },
    description: "Front End Developer and Data Analyst currently working out of Calgary.",
};

const dataabout = {
    title: "About Me",
    aboutme: "Lorem ipsum idk",
};
const worktimeline = [{
    jobtitle: "Deps.edn Updater for Clojure",
    where: "Calgary",
    date: "2024",
},
{
    jobtitle: "ScotiaBank",
    where: "Jamalya",
    date: "2019",
},
{
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
},
];

const skills = [{
    name: "JavaScript",
    value: 90,
},
{
    name: "React",
    value: 85,
},
{
    name: "CSS, HTML",
    value: 90,
},
{
    name: "Python",
    value: 60,
},
{
    name: "Rest API's",
    value: 85,
},
];

const services = [
    {
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
    img: BattleShip,
    gif: BattleShipGif,
    git: "",
    description: "Interactive BattleShip game on your web browser!",
    link: "#",
},
{
    img: ToDo,
    gif: ToDoGif,
    git: "",
    description: "To-Do List Web Application",
    link: "https://xadvent.github.io/toDoList/",
},
{
    img: Calc,
    gif: CalcGif,
    git: "",
    description: "Calculator Website",
    link: "https://xadvent.github.io/calculatorWebpage/",
},
{
    img: TicTac,
    gif: TicTacGif,
    git: "",
    description: "Tic Tac Toe",
    link: "https://xadvent.github.io/ticTacToe/",
},
{
    img: Cover,
    gif: CoverGif,
    git: "",
    description: "Resume/CV creator using React",
    link: "#",
},
{
    img: "https://picsum.photos/400/700/?grayscale",
    gif: "",
    git: "",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},

{
    img: "https://picsum.photos/400/600/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/300/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/550/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/700/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
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
