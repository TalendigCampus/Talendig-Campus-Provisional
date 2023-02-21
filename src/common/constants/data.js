import * as Icon from "react-feather";

export const JSXICONS = {
  user: <Icon.User />,
  bootcamp: <Icon.BookOpen />,
  conected: <Icon.Cloud />,
  curriculum: <Icon.List />,
  code: <Icon.Code />,
  project: <Icon.Folder />,
  portfolio: <Icon.HardDrive />,
  talent: <Icon.UserCheck />,
  post: <Icon.AlignLeft />,
  notification: <Icon.Mail />,
  group: <Icon.Users />,
  tecnology: <Icon.Codesandbox />,
  campionship: <Icon.Star />,
};

export const NORMALICONS = {
  user: Icon.User,
  bootcamp: Icon.BookOpen,
  conected: Icon.Cloud,
  curriculum: Icon.List,
  code: Icon.Code,
  project: Icon.Folder,
  portfolio: Icon.HardDrive,
  talent: Icon.UserCheck,
  post: Icon.AlignLeft,
  notification: Icon.Mail,
  group: Icon.Users,
  tecnology: Icon.Codesandbox,
  campionship: Icon.Star,
};

export const STATSQUANTITYBYPAGINATION = 4;

export const STATSDATA = [
  { id: 1, name: "Usuarios registrados", stat: "200", icon: JSXICONS["user"] },
  { id: 2, name: "Bootcamps", stat: "10", icon: JSXICONS["bootcamp"] },
  {
    id: 3,
    name: "Usuarios conectados",
    stat: "50",
    icon: JSXICONS["conected"],
  },
  {
    id: 4,
    name: "Curriculums generados",
    stat: "12",
    icon: JSXICONS["curriculum"],
  },
  { id: 5, name: "Códigos subidos", stat: "29", icon: JSXICONS["code"] },
  { id: 6, name: "Proyectos creados", stat: "19", icon: JSXICONS["project"] },
  {
    id: 7,
    name: "Portafolios +5 proyectos",
    stat: "22",
    icon: JSXICONS["portfolio"],
  },
  { id: 8, name: "Campeonatos", stat: "4", icon: JSXICONS["campionship"] },
  {
    id: 9,
    name: "Talentos valoración +7",
    stat: "18",
    icon: JSXICONS["campionship"],
  },
  {
    id: 10,
    name: "Talentos roadmap 70%",
    stat: "12",
    icon: JSXICONS["talent"],
  },
  { id: 11, name: "Post creados", stat: "25", icon: JSXICONS["post"] },
  {
    id: 12,
    name: "Notifiaciones enviadas",
    stat: "148",
    icon: JSXICONS["notification"],
  },
  { id: 13, name: "Grupos", stat: "56", icon: JSXICONS["group"] },
  { id: 14, name: "Tecnologías", stat: "27", icon: JSXICONS["tecnology"] },
];
