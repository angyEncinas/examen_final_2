import Materia from "./materia.js";

describe("CREAR MATERIA", () => {
    let materia = new Materia();
    it("Deberia devolver la sigla de la materia y el nombre", () => {
        materia.crearMateria("LEN-5 Ingles V","Aprende ingles");
        expect(materia.obtenerNombre()).toEqual("LEN-5 Ingles V");
    });
    
    it("Deberia devolver una corta descripcion de la materia", () => {
        materia.crearMateria("LEN-5 Ingles V","Aprende ingles");
        expect(materia.obtenerDescripcion()).toEqual("Aprende ingles");
    });
});