describe("Crear Tarea", () => {
  it("Muestra campos para llenar una materia", () => {
    cy.visit('/');
    cy.get("#materias-items").type("Ingles");
    cy.get("#tarea-item").type("Iniciar practica evaluativa");
    cy.get("#fecha-item").type("08/11/2022");
    cy.get("#crear-button").click();
  });
});
