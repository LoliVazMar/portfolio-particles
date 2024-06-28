import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Rss,
  Twitch,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
  Github,
  Mail,
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
  },
  {
    id: 2,
    title: "Hoteles Eurostars",
    description:
      "Mantenimiento de todas las webs del grupo hotelero Hotusa, realizando correcciones y actualizaciones para las webs de los hoteles Eurostars a nivel mundial",
    image: "/eurostars.jpg",
    url: "https://www.eurostarshotels.com/eurostars-madrid-tower.html",
    textButton: "Go Live",
  },
  {
    id: 3,
    title: "AirEuropa",
    description:
      "Participación en el proyecto de migración, mantenimiento y actualizacion de la web de AirEuropa.",
    image: "/aireuropa.jpg",
    url: "https://www.aireuropa.com/es/es/home",
    textButton: "Go Live",
  },
  // {
  //   id: 4,
  //   title: "Ideas Creativas",
  //   description: "",
  //   image: "/image-4.jpg",
  //   url: "#!",
  //   textButton: "Demo",
  // },
  // {
  //   id: 5,
  //   title: "Webs Impactantes",
  //   description: "",
  //   image: "/image-5.jpg",
  //   url: "#!",
  //   textButton: "Demo",
  // },
  // {
  //   id: 6,
  //   title: "Web Dinámica",
  //   description: "",
  //   image: "/image-6.jpg",
  //   url: "#!",
  //   textButton: "Demo",
  // },
];
