const aspectoMejoraElements = {
  btnNext: '[cy-data-btn="btn next page"]',
  btnPrev: '[cy-data-btn="btn prev page"]',
  page1: {
    input1: '[cy-data-input="punto fuerte 1"]',
    imput2: '[cy-data-input="punto fuerte 2"]',
    imput3: '[cy-data-input="area mejora 1"]',
    imput4: '[cy-data-input="area mejora 2"]',
  },

  page2: {
    input1: '[cy-data-input="recomendacion 1"]',
    imput2: '[cy-data-input="recomendacion 2"]',
    imput3: '[cy-data-input="class 1"]',
    imput4: '[cy-data-input="class 2"]',
  },
  page3: {
    input1: '[cy-data-input="recomendacion 1"]',
    input2: '[cy-data-input="recomendacion 2"]',
    input3: '[cy-data-input="recomendacion 3"]',
    input4: '[cy-data-input="recomendacion 4"]',
  },

  page4: {
    input1: '[cy-data-input="comentario"]',
    radio: '[cy-data-input="bool calificacion"]',
  },

  titles: '[cy-data-title="Page"]',
};

const logroMetasElements = {
  btnNext: '[cy-data-btn="btn next page"]',
  btnPrev: '[cy-data-btn="btn prev page"]',
  page1: {
    input1: '[cy-data-input="institucion"]',
    imput2: '[cy-data-input="periodoEvaluacion"]',
    imput3: '[cy-data-input="sepervisor"]',
    imput4: '[cy-data-input="cargo"]',
    imput5: '[cy-data-input="unidadOrganizativa"]',
    imput6: '[cy-data-input="supervisor2"]',
  },

  page2: {
    input1: '[id="metas_a_lograr"]',
    imput2: '[id="cuanto_tengo_que_lograr"]',
    imput3: '[id="ponderacion_de_metas"]',
  },
  page3: {
    input1: '[id="calificacion_otorgada"]',
    input2: '[id="medios_de_verificacion_y_evidencias"]',
    input3: '[id="cuando_tengo_que_lograr"]',
  },

  page4: {
    input1: '[cy-data-input="comentario"]',
    radio: '[cy-data-input="bool calificacion"]',
  },
};

export { aspectoMejoraElements, logroMetasElements };
