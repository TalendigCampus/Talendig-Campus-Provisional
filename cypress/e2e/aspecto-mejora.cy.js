/* eslint-disable no-undef */
import { aspectoMejoraElements } from "./helpers";
const { btnNext, page1, page2, page3, page4, titles } = aspectoMejoraElements;
beforeEach(() => {
  cy.viewport(1100, 600);
  cy.visit("http://localhost:3000/forms/Entreviste-De-Evaluacion");
});

describe("Aspecto Meora test E2E", () => {
  it("the tets should be rendered on the DOM", () => {
    cy.get('[cy-data-title="aspectoMejoraTitle"]')
      .should("exist")
      .should(
        "have.text",
        "Aspectos a considerar durante la entrevista de evaluacion"
      );
    cy.get(titles)
      .should("exist")
      .should("have.text", "Puntos Fuertes y De Mejora");
  });

  it("ohter components title should be rended only when the user clicks the buttom siguiente", () => {
    cy.get(btnNext).click();
    cy.get(titles).should("exist").should("have.text", "Recomendacion");
    cy.get(btnNext).click();
    cy.get(titles).should("exist").should("have.text", "II - Recomendacion");
    cy.get(btnNext).click();
    cy.get(titles).should("exist").should("have.text", "Firma");
    cy.contains("Someter");
  });

  it("the user type data in the form", () => {
    cy.get(page1.input1).should("exist").type("Punto fuerte 1");
    cy.get(page1.imput2).should("exist").type("Punto fuerte 2");
    cy.get(page1.imput3).should("exist").type("area mejora 1");
    cy.get(page1.imput4).should("exist").type("area mejora 2");
    cy.get(btnNext).click();

    cy.get(page2.input1).should("exist").type("Formacion 1");
    cy.get(page2.imput2).should("exist").type("Formacion 2");
    cy.get(page2.imput3).should("exist").type("clase 1");
    cy.get(page2.imput4).should("exist").type("clase 2");
    cy.get(btnNext).click();

    cy.get(page3.input1).should("exist").type("otra recomendacion");
    cy.get(page3.input2).should("exist").type("mas recomendacion");
    cy.get(page3.input3).should("exist").type("Mas motivacion");
    cy.get(page3.input4).should("exist").type("otra motivacion");
    cy.get(btnNext).click();

    cy.get(page4.input1).should("exist").type("otra recomendacion");
    cy.get(page4.radio).should("exist").click();
    cy.get('[cy-data-btn="signature"]').click({ multiple: true });
    cy.contains("Someter").click();
  });

  it("Should be recive an error when user don't write in the inputs", () => {
    cy.get(page1.input1).should("exist").type("Punto fuerte 1");
    cy.get(page1.imput2).should("exist").type("Punto fuerte 2");
    cy.get(page1.imput3).should("exist").type("area mejora 1");
    cy.get(page1.imput4).should("exist").type("area mejora 2");
    cy.get(btnNext).click();
    cy.get(btnNext).click();
    cy.get(btnNext).click();
    cy.contains("Someter").click();
  });
});
