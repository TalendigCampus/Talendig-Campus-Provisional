import React, { useState } from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import EntrevistaFirma from "../pages/components/Entrevista-Firma";
import EntrevistaHabilidades from "../pages/components/Entrevista-Habilidades";
import EntrevistaRecomendacion1 from "../pages/components/Entrevista-Recomendacion1";
import EntrevistaRecomendacion2 from "../pages/components/Entrevista-Recomendacion2";
import EntrevistaEvaluacion from "../pages/forms/EntrevistaDeEvaluacion";

describe("Testing features Aspecto Mejora", () => {
  test("render content aspecto mejora", () => {
    const [data, setData] = useState({
      userId: "6536fae2c23512d9403dfbf6",
      instructorId: "6539d3a4e0a976bef1bf5758",
      puntos_fuertes: ["", ""],
      areas_mejora: ["", ""],
      recomendaciones: ["", "", "", ""],
      condicion_trabajo: ["", "", "", ""],
      comentarios: [""],
      calificacion_plan_mejora: true,
      firmaEvaluador: "",
      firmaServidor: "",
    });
    const component = render(
      <EntrevistaHabilidades data={data} setData={setData} />
    );
    console.log(component);
  });
});
