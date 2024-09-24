import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Book,
  Speech,
  Github,
  Mail,
  FileDown,
} from "lucide-react";
import { title } from "process";

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/loli-vazquez-martinez/",
    label: "Linkedin",
  },
  {
    id: 2,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/LoliVazMar?tab=repositories",
    label: "Github",
  },
  {
    id: 3,
    logo: <Mail size={30} strokeWidth={1} />,
    src: "mailto:lolyandrea@gmail.com",
    label: "Email",
  },
  {
    id: 4,
    logo: <FileDown size={30} strokeWidth={1} />,
    src: "/Loli_CV-2024.pdf",
    label: "Descarga CV",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
    label: "Inicio",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
    label: "Experiencias",
  },
  // {
  //   id: 3,
  //   title: "Book",
  //   icon: <BookText size={25} color="#fff" strokeWidth={1} />,
  //   link: "/services",
  // },
  {
    id: 4,
    title: "Proyects",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/proyects",
    label: "Proyectos",
  },
  // {
  //   id: 5,
  //   title: "Contact",
  //   icon: <Speech size={25} color="#fff" strokeWidth={1} />,
  //   link: "/contact",
  // },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    subtitle: "Life5",
    description:
      "Diseño, Maquetación y Desarrollo de Aplicación Web desde 0 para una startup, participando en todo el ciclo de vida del proyecto, desde diseño, implementación y mantenimiento. TL y especialista en Maquetación.",
    technologies:
      "React, HTML, SCSS, Tailwind, Wordpress, Twig, GitHub, Figma, Jira",
    date: "Nov 2021 Oct 2023 ",
  },
  {
    id: 2,
    title: "Frontend Developer",
    subtitle: "Plexus",
    description:
      "Desarrollo de múltiples Aplicaciones Web para distintos proyectos en una consultoría. Adaptándome a cada proyecto he trabajado con diferentes tecnologías, con equipos de diferentes tamaños y con diferentes estructuras de trabajo. Estos proyectos eran para clientes como AirEuropa, Hotusa, Sergas, Xunta de Galicia, OkCars, Hoteles Barceló, etc. TL y especialista en Maquetación.",
    technologies:
      "HTML, CSS, SCSS, SASS, LESS, Bootstrap, Stylus, Javascript, Angular, VUE, GitHub, Bitbucket, Figma, Photoshop, AdobeXD, Jira, Redmine",
    date: "Mayo 2018 Abr 2021",
  },
  {
    id: 3,
    title: "Frontend Developer",
    subtitle: "Supercomp Digital",
    description:
      "Programación .NET de página de gestión interna de los productos de la empresa. Desarrollo Web.",
    technologies: ".NET, HTML, CSS",
    date: "Sept 2017 Nov 2017",
  },
  {
    id: 4,
    title: "Software Developer",
    subtitle: "Wiretec Diamant",
    description:
      "Desarrollo de ERP para la empresa basado en odoo. Diseño, Maquetación y Desarrollo Web para diferentes empresas y clínicas locales. Soporte de Sistemas informáticos y Redes en oficina.",
    technologies: "ERP, Odoo, Java, HTML, CSS",
    date: "Sept 2016 Mayo 2017",
  },
];

export const technologies = [
  {
    id: 1,
    title: "React",
    image: "/icons-react-color.png",
  },
  {
    id: 2,
    title: "Angular",
    image: "/icons-angular-color.png",
  },
  {
    id: 3,
    title: "VUE",
    image: "/icons-vue-color.png",
  },
  {
    id: 4,
    title: "JavaScript",
    image: "/icons-js-color.png",
  },
  {
    id: 5,
    title: "HTML5",
    image: "/icons-html-color.png",
  },
  {
    id: 6,
    title: "CSS3",
    image: "/icons-css-color.png",
  },
  {
    id: 7,
    title: "Tailwind",
    image: "/icons-tailwind-color.png",
  },
  {
    id: 8,
    title: "Bootstrap",
    image: "/icon-bootstrap-color.png",
  },
  {
    id: 9,
    title: "Sass",
    image: "/icons-sass-color.png",
  },
  {
    id: 10,
    title: "Less",
    image: "/icon-less-color.png",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 8,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 20,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 40,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 10,
    text: "Diseños creados",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const dataProyects = [
  {
    id: 1,
    title: "Getlife",
    description:
      "Diseño, Maquetación y Desarrollo de Aplicación Web desde 0 para una startup, participando en todo el ciclo de vida del proyecto, desde diseño, implementación y mantenimiento.",
    image: "/getlife.jpg",
    url: "https://life5.es/",
    textButton: "Go Live",
    technologies: [
      {
        id: 1,
        title: "React",
        src: "/icons-react-color.png",
      },
      {
        id: 2,
        title: "HTML",
        src: "/icons-html-color.png",
      },
      {
        id: 3,
        title: "Tailwind",
        src: "/icons-tailwind-color.png",
      },
    ],
  },
  {
    id: 2,
    title: "Hoteles Eurostars",
    description:
      "Mantenimiento de todas las webs del grupo hotelero Hotusa, realizando correcciones y actualizaciones para las webs de los hoteles Eurostars a nivel mundial.",
    image: "/eurostars.jpg",
    url: "https://www.eurostarshotels.com/eurostars-madrid-tower.html",
    textButton: "Go Live",
    technologies: [
      {
        id: 1,
        title: "HTML",
        src: "/icons-html-color.png",
      },
      {
        id: 2,
        title: "CSS",
        src: "/icons-css-color.png",
      },
      {
        id: 3,
        title: "JavaScript",
        src: "/icons-js-color.png",
      },
    ],
  },
  {
    id: 3,
    title: "AirEuropa",
    description:
      "Participación en el proyecto de migración, mantenimiento y actualizacion de la web oficial de la compañia aerea AirEuropa.",
    image: "/aireuropa.jpg",
    url: "https://www.aireuropa.com/es/es/home",
    textButton: "Go Live",
    technologies: [
      {
        id: 1,
        title: "VUE",
        src: "/icons-vue-color.png",
      },
      {
        id: 2,
        title: "HTML",
        src: "/icons-html-color.png",
      },
      {
        id: 3,
        title: "SASS",
        src: "/icons-sass-color.png",
      },
    ],
  },
  {
    id: 4,
    title: "Portfolio",
    description:
      "Este portfolio. Una carta de presentación diseñado y creado por mi, donde podrás conocerme un poco, mi formación, mis experiencias y algunos de mis proyectos.",
    image: "/portfolio.jpg",
    url: "https://scrum-board-lolidev.netlify.app/",
    urlCode: "https://github.com/LoliVazMar/portfolio-particles",
    textButton: "Demo",
    textButtonCode: "Code",
    technologies: [
      {
        id: 1,
        title: "React",
        src: "/icons-react-color.png",
      },
      {
        id: 2,
        title: "HTML",
        src: "/icons-html-color.png",
      },
      {
        id: 3,
        title: "Tailwind",
        src: "/icons-tailwind-color.png",
      },
    ],
  },
  {
    id: 5,
    title: "Scrum Board",
    description:
      "Proyecto personal creando un sencillo tablero de tareas al estilo de trello, que nos permite crear tableros con tareas y arrastrarlas a las diferentes columnas.",
    image: "/scrum-board.jpg",
    url: "https://scrum-board-lolidev.netlify.app/",
    urlCode: "https://github.com/LoliVazMar/Scrum-Board",
    textButton: "Demo",
    textButtonCode: "Code",
    technologies: [
      {
        id: 1,
        title: "VUE",
        src: "/icons-vue-color.png",
      },
      {
        id: 2,
        title: "HTML",
        src: "/icons-html-color.png",
      },
      {
        id: 3,
        title: "CSS",
        src: "/icons-css-color.png",
      },
    ],
  },
  {
    id: 6,
    title: "Only CSS Gallery",
    description:
      "Creación de una galería de imágenes con efecto 3D usando solo HTML5 y SCSS. Se incluyen varios efectos css como máscaras y 3D.",
    image: "/gallery1.png",
    url: "https://cssonlygallery3d.netlify.app/",
    urlCode: "https://github.com/LoliVazMar/onlycssgallery",
    textButton: "Demo",
    textButtonCode: "Code",
    technologies: [
      {
        id: 2,
        title: "HTML",
        src: "/icons-html-color.png",
      },
      {
        id: 3,
        title: "SASS",
        src: "/icons-sass-color.png",
      },
    ],
  },
  {
    id: 7,
    title: "Pokemons Starters",
    description:
      "Proyecto personal creado con HTML, SASS y JavaScript. Introduzco animaciones y efectos CSS, como animacion 3D y efecto Glassmorphism.",
    image: "/pokem.png",
    url: "https://pokemonstarters.netlify.app/",
    urlCode: "https://github.com/LoliVazMar/pokemonstarter",
    textButton: "Demo",
    textButtonCode: "Code",
    technologies: [
      {
        id: 2,
        title: "HTML",
        src: "/icons-html-color.png",
      },
      {
        id: 3,
        title: "SASS",
        src: "/icons-sass-color.png",
      },
      {
        id: 1,
        title: "JavaScript",
        src: "/icons-js-color.png",
      },
    ],
  },
];
