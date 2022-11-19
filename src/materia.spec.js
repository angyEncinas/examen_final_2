import Materia from "./materia.js";
let materia = new Materia();
describe("CREAR MATERIA", () => {
    
    it("Deberia devolver la sigla de la materia y el nombre", () => {
        materia.crearMateria("LEN-5 Ingles V", "Susan");
        expect(materia.obtenerNombre()).toEqual("LEN-5 Ingles V");
    });
    
    it("Deberia devolver el docente encargado de la materia", () => {
        materia.crearMateria("LEN-5 Ingles V", "Susan");
        expect(materia.obtenerDocente()).toEqual("Susan");
    });
    it("Deberia mostrar todos los datos de la materia en un formato", () => {
        materia.crearMateria("LEN-5 Ingles V", "Susan");
        expect(materia.obtenerTodosLosDatos()).toEqual("<p> Materia:" + materia.obtenerNombre() + "<p>" +
        "<p> Docente:"+ materia.obtenerDocente() + "<p>" +
        "</p>");
    });
});

describe("MODIFICAR MATERIA", () => {
    it("Deberia eliminar una materia", () => {
        materia.eliminar();
        expect(materia.obtenerNombre()).toEqual("");
        expect(materia.obtenerDocente()).toEqual("");

    });


});
