import { DATEKEYS, SPANISHDAYS, SPANISHMONTHS } from "../common/constants/data";

export const getSpanishDate = (type) => {
  const date = new Date();
  let response = "";
  const defaultDate =
    date.getDate() +
    " de " +
    SPANISHMONTHS[date.getMonth()] +
    " de " +
    date.getUTCFullYear();

  switch (type) {
    case DATEKEYS.short:
      response =
        SPANISHMONTHS[date.getMonth()][0].toUpperCase() +
        SPANISHMONTHS[date.getMonth()].slice(1) +
        " " +
        date.getUTCFullYear();
      break;
    case DATEKEYS.mid:
      response = defaultDate;
      break;
    case DATEKEYS.large:
    default:
      const day =
        SPANISHDAYS[date.getDay()][0].toUpperCase() +
        SPANISHDAYS[date.getDay()].slice(1);
      response = day + ", " + defaultDate;
      break;
  }

  return response;
};
