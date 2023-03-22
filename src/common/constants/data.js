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
  done: <Icon.Check />,
  clock: <Icon.Clock />,
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

export const SPANISHMONTHS = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

export const SPANISHDAYS = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

export const DATEKEYS = {
  short: "short",
  mid: "mid",
  large: "large",
};

export const PROJECT_UPDATE_TYPE = {
  project: "proyecto",
  folder: "carpeta",
  file: "archivo",
};

export const DIALOG_UPDATE_TYPE = {
  update: "actualizar",
  delete: "eliminar",
};

export const PROJECT_DELETE_TYPE = {
  project: "eliminarProyecto",
  folder: "eliminarCarpeta",
  file: "eliminarArchivo",
};

export const RECRUITER_ACTION_TYPE = {
  removeFromProcess: "removeFromProcess",
  redoRemoveFromProcess: "redoRemoveFromProcess",
  removeFromFavorite: "removeFromFavorite",
  redoRemoveFromFavorite: "redoRemoveFromFavorite",
};

export const ADMIN = {
  firstName: "Jose Armando",
  lastName: "Tavarez",
  image: "/static/img/avatars/joseArmando.jpg",
  email: "jose@gmail.com",
};

export const URLPROFILE = {
  admin: "/admin/dashboard/home",
  talent: "/talent/home",
  instructor: "/instructors/home",
  institution: "/institution/home",
  recruiter: "/recruiters/home",
};

export const PROFILES = {
  admin: "admin",
  talent: "talent",
  instructor: "instructor",
  institution: "institution",
  recruiter: "recruiter",
};

export const PERFILES = {
  admin: "Administrador",
  talent: "Talento",
  instructor: "Instructor",
  institution: "Institución",
  recruiter: "Reclutador",
};

export const RECRUITER_TOUR_STEPS = [
  {
    selector: "#recruiterHome",
    content:
      "Aqui podrás ver información relacionada a tu manejo de talentos, cantidad de talentos en proceso, contratados, entre otros 📈",
  },
  {
    selector: "#recruiterPerfil",
    content:
      "Mantener un pefil actualizado es vital como reclutador, aquí podras controlar todo acerca de tus intereses e información  👦🏾 ",
  },
  {
    selector: "#recruiterTalentList",
    content:
      "Aquí verás listas de potenciales talentos con aptitudes y actitudes que serán un ➕ para tu organización ️‍🔥",
  },
  {
    selector: "#recruiterBestScore",
    content: "Talentos con las mejores puntuaciones de su bootcamp 💯",
  },
  {
    selector: "#recruiterRecommended",
    content: "Talentos recomendados por su instructor 👨🏽‍🎓",
  },
  {
    selector: "#recruiterHighProjectCount",
    content:
      "Talentos con +10 proyectos aparte de los asignados en el bootcamp 🛠️",
  },
  {
    selector: "#recruiterProcess",
    content:
      "Aquí veras los talentos con los cuales has inicialiado un proceso ⌛",
  },
  {
    selector: "#recruiterFavorite",
    content: "Tus talentos favoritos 💖",
  },
  {
    selector: "#recruiterHistory",
    content:
      "Tu historial de contacto con los talentos contratados o aquellos que deben mejorar 📜",
  },
  {
    selector: "#recruiterChangeLog",
    content: "Talendig campus está evolucionando, aquí lo puedes ver! 📅",
  },
];

export const TALENT_TOUR_STEPS = [
  {
    selector: "#talentHome",
    content:
      "Aqui podrás ver información relacionada a tu manejo de talentos, cantidad de talentos en proceso, contratados, entre otros 📈",
  },
  {
    selector: "#talentPerfil",
    content:
      "Mantener un pefil actualizado es vital como reclutador, aquí podras controlar todo acerca de tus intereses e información  👦🏾 ",
  },
  {
    selector: "#talentBootcamps",
    content:
      "Aquí verás listas de potenciales talentos con aptitudes y actitudes que serán un ➕ para tu organización ️‍🔥",
  },
  {
    selector: "#talentCurrentBootcamp",
    content: "Talentos con las mejores puntuaciones de su bootcamp 💯",
  },
  {
    selector: "#talentOtherBootcamps",
    content: "Talentos recomendados por su instructor 👨🏽‍🎓",
  },
  {
    selector: "#talentProjects",
    content:
      "Talentos con +10 proyectos aparte de los asignados en el bootcamp 🛠️",
  },
  {
    selector: "#talentCurriculum",
    content:
      "Aquí veras los talentos con los cuales has inicialiado un proceso ⌛",
  },
  {
    selector: "#talentRoadmap",
    content: "Tus talentos favoritos 💖",
  },
  {
    selector: "#talentRecruiters",
    content:
      "Tu historial de contacto con los talentos contratados o aquellos que deben mejorar 📜",
  },
  {
    selector: "#talentChangelog",
    content: "Talendig campus está evolucionando, aquí lo puedes ver! 📅",
  },
];

export const INSTRUCTOR_TOUR_STEPS = [
  {
    selector: "#instructorHome",
    content:
      "Aqui podrás ver información relacionada a tu manejo de talentos, cantidad de talentos en proceso, contratados, entre otros 📈",
  },
  {
    selector: "#instructorPerfil",
    content:
      "Mantener un pefil actualizado es vital como reclutador, aquí podras controlar todo acerca de tus intereses e información  👦🏾 ",
  },
  {
    selector: "#instructorTalentList",
    content:
      "Aquí verás listas de potenciales talentos con aptitudes y actitudes que serán un ➕ para tu organización ️‍🔥",
  },
  {
    selector: "#instructorBootcamps",
    content: "Talentos con las mejores puntuaciones de su bootcamp 💯",
  },
  {
    selector: "#instructorTalentPortfolio",
    content: "Talentos recomendados por su instructor 👨🏽‍🎓",
  },
  {
    selector: "#instructorChangeLog",
    content: "Talendig campus está evolucionando, aquí lo puedes ver! 📅",
  },
];

export const INSTITUTION_TOUR_STEPS = [
  {
    selector: "#institutionHome",
    content:
      "Aqui podrás ver información relacionada a tu manejo de talentos, cantidad de talentos en proceso, contratados, entre otros 📈",
  },
  {
    selector: "#institutionBootcampsList",
    content:
      "Mantener un pefil actualizado es vital como reclutador, aquí podras controlar todo acerca de tus intereses e información  👦🏾 ",
  },
  {
    selector: "#institutionBootcampDetails",
    content:
      "Aquí verás listas de potenciales talentos con aptitudes y actitudes que serán un ➕ para tu organización ️‍🔥",
  },
  {
    selector: "#institutionMyBootcamps",
    content: "Talentos con las mejores puntuaciones de su bootcamp 💯",
  },
  {
    selector: "#institutionRecruitmentOptions",
    content: "Talentos recomendados por su instructor 👨🏽‍🎓",
  },
  {
    selector: "#institutionRecruitInstructors",
    content:
      "Talentos con +10 proyectos aparte de los asignados en el bootcamp 🛠️",
  },
  {
    selector: "#institutionRecruitTalents",
    content:
      "Aquí veras los talentos con los cuales has inicialiado un proceso ⌛",
  },
  {
    selector: "#institutionPerfil",
    content: "Tus talentos favoritos 💖",
  },
  {
    selector: "#institutionTalents",
    content:
      "Tu historial de contacto con los talentos contratados o aquellos que deben mejorar 📜",
  },
  {
    selector: "#institutionEvents",
    content:
      "Tu historial de contacto con los talentos contratados o aquellos que deben mejorar 📜",
  },
  {
    selector: "#institutionChangelog",
    content: "Talendig campus está evolucionando, aquí lo puedes ver! 📅",
  },
];

export const ADMIN_TOUR_STEPS = [
  {
    selector: "#adminHome",
    content:
      "Aqui podrás ver información relacionada a tu manejo de talentos, cantidad de talentos en proceso, contratados, entre otros 📈",
  },
  {
    selector: "#adminUsers",
    content:
      "Mantener un pefil actualizado es vital como reclutador, aquí podras controlar todo acerca de tus intereses e información  👦🏾 ",
  },
  {
    selector: "#adminTalents",
    content:
      "Aquí verás listas de potenciales talentos con aptitudes y actitudes que serán un ➕ para tu organización ️‍🔥",
  },
  {
    selector: "#adminInstructors",
    content: "Talentos con las mejores puntuaciones de su bootcamp 💯",
  },
  {
    selector: "#adminRecruiters",
    content: "Talentos recomendados por su instructor 👨🏽‍🎓",
  },
  {
    selector: "#adminInstitutions",
    content:
      "Talentos con +10 proyectos aparte de los asignados en el bootcamp 🛠️",
  },
  {
    selector: "#adminBootcamps",
    content:
      "Aquí veras los talentos con los cuales has inicialiado un proceso ⌛",
  },
  {
    selector: "#adminProjects",
    content: "Tus talentos favoritos 💖",
  },
  {
    selector: "#adminPortfolios",
    content:
      "Tu historial de contacto con los talentos contratados o aquellos que deben mejorar 📜",
  },
  {
    selector: "#adminChangelog",
    content: "Talendig campus está evolucionando, aquí lo puedes ver! 📅",
  },
];
