import { FireIcon } from "@heroicons/react/24/solid";

const dataPortfolio = {
  header: {
    title: "Un vistazo de nuestro trabajo",
    description:
      "Potencia tus emprendimientos y proyectos con diseños personalizados a tu medida.",
  },
  actions: {
    title: "Ver más trabajos",
    icon: <FireIcon width="24px" height="24px" />,
    href: "https://dribbble.com/jorgesoriax",
  },
  projects: [
    {
      heading: "name",
      body: "Lorem Ipsum",
      tag: "Logotipos",
      cover: "./static/images/portfolio/project-01.jpg",
      alt: "Logo de diferentees proyectos",
    },
    {
      heading: "name",
      body: "Lorem Ipsum",
      tag: "Tarjeta",
      cover: "./static/images/portfolio/project-02.jpg",
      alt: "Tarjetas de presentación",
    },
    {
      heading: "name",
      body: "Lorem Ipsum",
      tag: "IG Reels",
      cover: "./static/images/portfolio/project-03.jpg",
      alt: "Historias de Instagram",
    },
    {
      heading: "name",
      body: "Lorem Ipsum",
      tag: "Perfiles de Instagram",
      cover: "./static/images/portfolio/project-04.jpg",
      alt: "Perfiles de Instagram",
    },
    {
      heading: "Serestech",
      body: "Retail de laptops",
      tag: "Identidad",
      cover: "./static/images/portfolio/serestech.jpg",
      alt: "",
    },
  ],
};

export default dataPortfolio;
