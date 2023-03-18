import React from "react";

function createData(
  institution,
  institutionEmail,
  institutionAvatar,
  registrationDate,
  address,
  phoneNumber,
  id,
  dateCreateAccount,
  lastConection,
  newPassword,
  confirmPassword,
  date
) {
  return {
    institution,
    institutionEmail,
    institutionAvatar,
    registrationDate,
    address,
    phoneNumber,
    id,
    dateCreateAccount,
    lastConection,
    newPassword,
    confirmPassword,
    date,
  };
}

const Rows = [
  createData(
    "Claro Dominicana",
    "claro@gmail.com",
    "/static/img/Institutions/institucion1.jpg",
    "2023-1-5",
    "Av. Luperon ezquina 27 de Febrero #1023",
    "8290983454",
    "1",
    "Usuario desde: 05-12-2022",
    "Última conexión: 05-12-2022 10:00 AM",
    "adfWFAEF",
    "adfWFAEF",
    "05-25-2022"
  ),
  createData(
    "GBH",
    "gbh@gmail.com",
    "/static/img/Institutions/institucion2.jpg",
    "2022-12-5",
    "Av. Lincoln ezquina Sarasota #200",
    "8292342343",
    "2",
    "Usuario desde: 05-12-2022",
    "Última conexión: 05-12-2022 10:00 AM",
    "adfWFAEF",
    "adfWFAEF",
    "05-25-2022"
  ),
  createData(
    "Instituto Politécnico Loyola",
    "loyola@gmail.com",
    "/static/img/Institutions/institucion5.jpg",
    "2020-3-9",
    "P. Ángel Arias, San Cristóbal",
    "8293244645",
    "3",
    "Usuario desde: 05-12-2022",
    "Última conexión: 05-12-2022 10:00 AM",
    "adfWFAEF",
    "adfWFAEF",
    "05-25-2022"
  ),
  createData(
    "Instituto Tecnologico de Las Americas",
    "itla@gmail.com",
    "/static/img/Institutions/institucion4.jpg",
    "2021-7-9",
    "Las Américas, Km. 27, La Caleta, Calle 27, 11606",
    "8292342343",
    "4",
    "Usuario desde: 05-12-2022",
    "Última conexión: 05-12-2022 10:00 AM",
    "adfWFAEF",
    "adfWFAEF",
    "05-25-2022"
  ),
];

export default Rows;
