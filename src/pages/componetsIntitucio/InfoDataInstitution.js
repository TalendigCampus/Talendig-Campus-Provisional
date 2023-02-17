import React from "react";

function createData(
  institution,
  institutionEmail,
  institutionAvatar,
  registrationDate,
  address,
  phoneNumber,
  id
) {
  return {
    institution,
    institutionEmail,
    institutionAvatar,
    registrationDate,
    address,
    phoneNumber,
    id,
  };
}

const Rows = [
  createData(
    "Claro Dominicana",
    "claro@gmail.com",
    "C",
    "2023-1-5",
    "Av. Luperon ezquina 27 de Febrero #1023",
    "8290983454",
    "1"
  ),
  createData(
    "GBH",
    "gbh@gmail.com",
    "G",
    "2022-12-5",
    "Av. Lincoln ezquina Sarasota #200",
    "8292342343",
    "2"
  ),
  createData(
    "Instituto Politécnico Loyola",
    "loyola@gmail.com",
    "I",
    "2020-3-9",
    "P. Ángel Arias, San Cristóbal",
    "8293244645",
    "3"
  ),
  createData(
    "Instituto Tecnologico de Las Americas",
    "itla@gmail.com",
    "I",
    "2021-7-9",
    "Las Américas, Km. 27, La Caleta, Calle 27, 11606",
    "8292342343",
    "4"
  ),
];

export default Rows;
