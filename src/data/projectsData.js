// src/data/projectsData.js
import portfolioImage from "../assets/projects/portfolio-photo.jpg";
import todoListImage from "../assets/projects/todo-list.jpg";
import hubImage from "../assets/projects/hub.jpg";
import loginForm from "../assets/projects/loginForm.jpg";
import radioProImage from "../assets/projects/radio-pro.jpg";
import weatherImage from "../assets/projects/weather-image.jpg";
import calculatorImage from "../assets/projects/calculator-image.jpg";

const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React showcasing my work and skills.",
    githubLink: "https://omarmonib.github.io/Portfolio-Website/",
    image: portfolioImage,
  },
  {
    title: "Todo List App",
    description:
      "A simple Todo List app created with React for managing daily tasks.",
    githubLink: "https://omarmonib.github.io/TodoListApp/",
    image: todoListImage,
  },
  {
    title: "Omar's Development Hub",
    description:
      "Omar's Development Hub is a React app with interactive projects to show programming concepts.",
    githubLink: "https://omarmonib.github.io/omars-development-hub/",
    image: hubImage,
  },
  {
    title: "Login Form",
    description:
      "Simple React login form with Ant Design to enter username and password. Shows data on Sign in.",
    githubLink: "https://omarmonib.github.io/LoginForm/",
    image: loginForm,
  },
  {
    title: "Radio Pro",
    description:
      "The app is a website that allows users to log in, post content, and view topics and services.",
    githubLink: "https://omarmonib.github.io/radio-pro/",
    image: radioProImage,
  },
  {
    title: "Weather App",
    description:
      "An application to check weather conditions using OpenWeather API.",
    githubLink: "https://omarmonib.github.io/weather-app/",
    image: weatherImage,
  },
  {
    title: "Calculator App",
    description:
      "A simple calculator built with React for basic mathematical operations.",
    githubLink: "https://omarmonib.github.io/calculator-app/",
    image: calculatorImage,
  },
];

export default projectsData;
