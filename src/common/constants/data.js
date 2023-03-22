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
      "Aqui podrás ver información relacionada a tu manejo de talentos, cantidad de talentos en proceso, reclutados, entre otros 📈",
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
      "Tu historial de contacto con los talentos reclutados o aquellos que deben mejorar 📜",
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
      "Aqui podrás ver información relacionada a tu panel y manejo de bootcamps 📈",
  },
  {
    selector: "#talentPerfil",
    content:
      "Mantener un pefil actualizado es vital para ti y reclutadores, aquí podras controlar todo acerca de tus intereses e información  👦🏾 ",
  },
  {
    selector: "#talentBootcamps",
    content:
      "Aquí verás la listas de tus bootcamps y de otros bootcamps que te ayudarán a alcanzar tu siguiente nivel 🔥",
  },
  {
    selector: "#talentCurrentBootcamp",
    content: "Tus bootcamps 💖",
  },
  {
    selector: "#talentOtherBootcamps",
    content: "Bootcamps que te pueden interesar 💯",
  },
  {
    selector: "#talentProjects",
    content: "Tu portafolio y lista de proyectos 🛠️",
  },
  {
    selector: "#talentCurriculum",
    content: "Aquí podrás ver tu curriculum 📜",
  },
  {
    selector: "#talentRoadmap",
    content: "Tu roadmap a completar 🚩",
  },
  {
    selector: "#talentRecruiters",
    content:
      "Aquí podrás ver los reclutadores a los que les pareces fabuloso 💼",
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
      "Aqui podrás ver información relacionada al manejo de los bootcamps que impartes 📈",
  },
  {
    selector: "#instructorPerfil",
    content:
      "Mantener un pefil actualizado es vital como instructor, aquí podras controlar todo acerca de tus intereses e información  👦🏾 ",
  },
  {
    selector: "#instructorTalentList",
    content: "Aquí verás la listas de los talentos a los cuales entrenas 🥋",
  },
  {
    selector: "#instructorBootcamps",
    content: "Los bootcamps que impartes 💯",
  },
  {
    selector: "#instructorTalentPortfolio",
    content: "Portafolio de tus talentos 🛠️",
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
      "Aqui podrás ver información relacionada a los bootcamps y cursos destacados con la mas alta vanguardia en tecnologias 📈",
  },
  {
    selector: "#institutionBootcampsList",
    content:
      "Aquí verás la listas de los bootcamps que ayudarán a tu institutción a alcanzar el siguiente nivel 🔥 ",
  },
  {
    selector: "#institutionBootcampDetails",
    content: "Bootcamps que te pueden interesar 💯",
  },
  {
    selector: "#institutionMyBootcamps",
    content: "Tus bootcamps 💖",
  },
  {
    selector: "#institutionRecruitmentOptions",
    content:
      "Aquí verás listas de potenciales talentos e instructores con aptitudes y actitudes que serán un ➕ para tu organización ️👨🏽‍🎓",
  },
  {
    selector: "#institutionRecruitInstructors",
    content: "Lista de Instructores 🥋",
  },
  {
    selector: "#institutionRecruitTalents",
    content: "Lista de Talentos 🎓",
  },
  {
    selector: "#institutionPerfil",
    content:
      "Mantener un pefil actualizado es vital como institución, aquí podras controlar todo acerca de tus intereses e información 🏨",
  },
  {
    selector: "#institutionTalents",
    content: "Tus estudiantes en Talendig 👣",
  },
  {
    selector: "#institutionEvents",
    content:
      "Los eventos son parte importante de Talendig, no te lo pierdas! 📜",
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
      "Aqui podrás ver información relacionada a tu manejo de talentos, instructores, reclutadores e instituciones 📈",
  },
  {
    selector: "#adminUsers",
    content: "Aqui podrás ver y administrar a tus usuarios 👨‍👩‍👧‍👧",
  },
  {
    selector: "#adminTalents",
    content:
      "Aquí verás listas de potenciales talentos con aptitudes y actitudes que serán un ➕ para cualquier organización ️‍🔥",
  },
  {
    selector: "#adminInstructors",
    content:
      "En está parte administrarás a los intructores, para llevar un registro de su desempeño 🥋",
  },
  {
    selector: "#adminRecruiters",
    content: " Aquí podrás ver la lista de reclutadores y lo más activos 💼",
  },
  {
    selector: "#adminInstitutions",
    content: "Manejo de instituciones 🏨",
  },
  {
    selector: "#adminBootcamps",
    content: "Administra tus bootcamp 👩‍🏫",
  },
  {
    selector: "#adminProjects",
    content: "En está parte administrarás a los proyectos 🛠️",
  },
  {
    selector: "#adminPortfolios",
    content:
      "Los portafolios demuestran el interés y avance de los talentos, echale un vistazo 📜",
  },
  {
    selector: "#adminChangelog",
    content: "Talendig campus está evolucionando, aquí lo puedes ver! 📅",
  },
];
