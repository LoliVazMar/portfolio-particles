import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Youtube size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/loli-vazquez-martinez/",
  },
  {
    id: 3,
    logo: <Twitter size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 4,
    logo: <Rss size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 5,
    logo: <Twitch size={30} strokeWidth={1} />,
    src: "#!",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Home",
    icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    link: "/testimonials",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    subtitle: "Life5",
    description:
      "Diseño, Maquetación y Desarrollo de Aplicación Web desde 0 para una startup. TL y especialista en Maquetación.",
    technologies:
      "React, HTML, SCSS, Tailwind, Wordpress, Twig, GitHub, Figma, Jira",
    date: "Nov 2021 Oct 2023 ",
  },
  {
    id: 2,
    title: "Frontend Developer",
    subtitle: "Plexus",
    description:
      "Desarrollo de múltiples Aplicaciones Web para distintos proyectos en una consultoría. Adaptándome a cada proyecto he trabajado con diferentes tecnologías, con equipos de diferentes tamaños y con diferentes estructuras de trabajo. Dichos proyectos eran de empresas como AirEuropa, Hotusa, Sergas, Xunta de Galicia, OkCars, Hoteles Barceló, etc. TL y especialista en Maquetación.",
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

export const serviceData = [
  {
    icon: <Crop />,
    title: "Branding",
    description:
      "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
  },
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: <Book />,
    title: "Copywriting",
    description:
      "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
  },
  {
    icon: <Rocket />,
    title: "SEO",
    description:
      "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Web Pro",
    image: "/image-1.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 2,
    title: "Desarrollo Web Ágil",
    image: "/image-2.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "Estrategias Web",
    image: "/image-3.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 4,
    title: "Ideas Creativas",
    image: "/image-4.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 5,
    title: "Webs Impactantes",
    image: "/image-5.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 6,
    title: "Web Dinámica",
    image: "/image-6.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 7,
    title: "Dark Web ",
    image: "/image-7.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 8,
    title: "E-commerce web",
    image: "/image-8.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
];
