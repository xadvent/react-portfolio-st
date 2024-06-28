import React, { useState, useEffect } from 'react';

const logotext = "PIERCE S.";
const meta = {
    title: "Pierce Strutt",
    description: "I’m Pierce Strutt, data analyst & front end developer, currently working in Calgary.",
};

const imgUrls = [
    "https://images.unsplash.com/photo-1603903918933-b4db92870a0e?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1527519135413-1e146b552e10?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?q=80&w=4074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518352724948-729151797553?q=80&w=3748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1500885168199-dc1fde1d8177?q=80&w=4176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imgUrls.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return imgUrls[currentIndex];
};

const introdata = {
    title: "Hi, I'm Pierce Strutt",
    animated: {
        first: "Data Analyst - BBA",
        second: "Self-Taught Developer",
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
    img: "https://picsum.photos/400/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/800/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/?grayscale",
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
    img: "https://picsum.photos/400/700/?grayscale",
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
    Slideshow
};
