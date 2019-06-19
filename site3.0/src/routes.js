import AboutMe from "views/AboutMe.jsx";
import Skills from "views/Skills.jsx";
import SocialMedias from "views/SocialMedias.jsx";

const dashboardRoutes = [
  {
    path: "/AboutMe",
    name: "About Me",
    icon: "pe-7s-id",
    component: AboutMe,
    layout: "/admin"
  },
  {
    path: "/Skills",
    name: "Skills",
    icon: "pe-7s-magic-wand",
    component: Skills,
    layout: "/admin"
  },
  {
    path: "/SocialMedias",
    name: "Social Medias",
    icon: "pe-7s-home",
    component: SocialMedias,
    layout: "/admin"
   }
];

export default dashboardRoutes;
