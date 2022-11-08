describe("Crear Tarea", () => {
  it("Muestra campos para llenar una materia", () => {
    cy.visit("/");
    cy.get("#materias-items").should("contain", "Ingles");
    cy.get("#tarea-item").should("contain", "Iniciar practica evaluativa");
    cy.get("#fecha-item").should("contain", "08/11/2022");
    cy.get("#crear-button").click();
    cy.get("#vista-div").should("contain", "Tarea Creada !!!");
  });
});
