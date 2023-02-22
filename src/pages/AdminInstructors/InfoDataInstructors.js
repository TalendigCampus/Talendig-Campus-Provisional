import React from "react";

function createData(
  instructors,
  instructorsEmail,
  instructorsAvatar,
  idCard,
  profile,
  birth,
  bootcamp,
  tecnology,
  id
) {
  return {
    instructors,
    instructorsEmail,
    instructorsAvatar,
    idCard,
    profile,
    birth,
    bootcamp,
    tecnology,
    id,
  };
}

const TableData = [
  createData(
    "Luis Soto",
    "soto@gmail.com",
    "L",
    "109-3013214-3",
    "Instructor",
    "1990-01-23",
    "MERN",
    "React, Express, Javascript",
    "001"
  ),
  createData(
    "Miguel Ramirez",
    "miguel@gmail.com",
    "M",
    "111-2152993-0",
    "Instructor",
    "1992-08-10",
    "MEAN",
    "Angular, Nodejs, Javascript",
    "002"
  ),
  createData(
    "Juan Santana",
    "juan@gmail.com",
    "J",
    "302-084544-0",
    "Instructor",
    "1985-09-04",
    "ASP.NET",
    "C#, Java, Python",
    "003"
  ),
  createData(
    "Ana Sanchez",
    "ana@gmail.com",
    "A",
    "302-605315-8 ",
    "Instructor",
    "1980-10-12",
    "MERN",
    "Nodejs, React, Javascript",
    "004"
  ),
];

export default TableData;
