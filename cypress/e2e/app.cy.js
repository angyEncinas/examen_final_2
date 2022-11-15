describe("Crear materia", () => {
    it("Muestra campos para llenar una materia", () => {
      cy.visit("http://localhost:1234/htmls/materia.html");
      cy.get("#nombre-materia-items").type("Ing. Software");
      cy.get("#docente-item").type("Israel Antezana");
      cy.get("#crear-button").click();
      cy.get("#vista-div").should("contain", "creada con exito !!!");
    });
  });