import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Qui sommes-nous ?",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Nos services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Site vitrine et E-Commerce",
        path: "/services/site-vitrine-et-e-commerce",
        newTab: false,
      },
      {
        id: 32,
        title: "Application personnalisé",
        path: "/services/application-personnalise",
        newTab: false,
      },
      {
        id: 33,
        title: "Web Factory TMA",
        path: "/services/web-factory-tma",
        newTab: false,
      },
      {
        id: 34,
        title: "Ingénierie d’infrastructure",
        path: "/services/ingenierie-dinfrastructure",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Innovation",
    newTab: false,
    path: "#/innovation",
  },
  {
    id: 5,
    title: "Actualités",
    path: "/blogs",
    newTab: false,
  },
];
export default menuData;
