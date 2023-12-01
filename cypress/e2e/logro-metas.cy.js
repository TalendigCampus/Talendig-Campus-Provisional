/* eslint-disable no-undef */
import { logroMetasElements } from "./helpers";

const { btnNext, btnPrev, page1, page2, page3 } = logroMetasElements;
beforeEach(() => {
  cy.viewport(1100, 600);
  cy.visit("http://localhost:3000/forms/FormularioLogroMetasResultados");
});

describe("Logro Metas E2E Test", () => {
  it("the tets should be rendered on the DOM", () => {
    cy.get('[cy-data-title="logroMetasTitle"]')
      .should("exist")
      .should("have.text", "Logro de Metas y Resultados");
  });

  it("the data should remain in the input", () => {
    // cy.get(page1.input1)
    //   .should("exist")
    //   .select("Talendig")
    //   .should("have.value", "Talendig");
    cy.get(page1.imput2).should("exist").type("Punto fuerte 2");
    cy.get(page1.imput3).should("exist").type("area mejora 1");
    cy.get(page1.imput4).should("exist").type("area mejora 2");
    cy.get(page1.imput5).should("exist").type("area mejora 2");
    cy.get(page1.imput6).should("exist").type("area mejora 2");
    // cy.get(btnPrev).should("not.exist");  // todo: Should be not exist
    cy.get(btnNext).click();
    cy.get(btnPrev).click();

    // cy.get(page1.input1).should("exist").should("have.value", "Talendig");
    cy.get(page1.imput2).should("exist").should("have.value", "Punto fuerte 2");
    cy.get(page1.imput3).should("exist").should("have.value", "area mejora 1");
    cy.get(page1.imput4).should("exist").should("have.value", "area mejora 2");
    cy.get(page1.imput5).should("exist").should("have.value", "area mejora 2");
    cy.get(page1.imput6).should("exist").should("have.value", "area mejora 2");
  });

  it("the user type data in the form", () => {
    // cy.get(page1.input1)
    //   .should("exist")
    //   .select("Talendig")
    //   .should("have.value", "Talendig");
    cy.get(page1.imput2).should("exist").type("Punto fuerte 2");
    cy.get(page1.imput3).should("exist").type("area mejora 1");
    cy.get(page1.imput4).should("exist").type("area mejora 2");
    cy.get(page1.imput5).should("exist").type("area mejora 2");
    cy.get(page1.imput6).should("exist").type("area mejora 2");
    // cy.get(btnPrev).should("not.exist");  // todo: Should be not exist
    cy.get(btnNext).click();

    cy.get(page2.input1).should("exist").type("Formacion 1");
    cy.get(page2.imput2).should("exist").type("Formacion 2");
    cy.get(page2.imput3).should("exist").type(65);
    cy.get(btnNext).click();

    cy.get(page3.input1).should("exist").type(30);
    cy.get(page3.input2).should("exist").type("mas recomendacion");
    cy.get(page3.input3).should("exist").type("Mas motivacion");
    cy.get(btnNext).click();

    // cy.get(page4.input1).should("exist").type("otra recomendacion");
    // cy.get(page4.radio).should("exist").click();
    cy.get('[cy-data-btn="signature"]').click({ multiple: true });
    cy.contains("Enviar").click();
  });

  it("Should be recive an error when user don't write in the inputs", () => {
    cy.get(page1.input1).should("exist");
    cy.get(page1.imput2).should("exist").type("Punto fuerte 2");
    cy.get(page1.imput3).should("exist").type("area mejora 1");
    cy.get(page1.imput4).should("exist").type("area mejora 2");
    cy.get(btnNext).click();
    cy.get(btnNext).click();
    cy.get(btnNext).click();
    cy.contains("Enviar").click();
  });
});
