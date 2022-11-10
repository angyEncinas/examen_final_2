import Materia from "./materia.js";

describe("CREAR MATERIA", () => {
    let materia = new Materia();
    it("Deberia devolver la sigla de la materia y el nombre", () => {
    materia.crearMateria("LEN-5 Ingles V");
    expect(materia.obtenerNombre()).toEqual("LEN-5 Ingles V");
  });
});