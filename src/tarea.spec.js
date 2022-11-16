import Tarea from "./tarea.js"
let tarea = new Tarea;

describe("CREAR UNA TAREA", () => {
    it("Deberia devolver el titulo de la tarea", () => {
        tarea.crearTarea("Proyectos de grados", "Investigar metodologias agiles", "Taller de desarrollo", "16/11/2022");
        expect(tarea.obtenerTitulo()).toEqual("Proyectos de grados");
    });

    it("Deberia devolver la descripcion de la tarea", () => {
        tarea.crearTarea("Proyectos de grados", "Investigar metodologias agiles", "Taller de desarrollo", "16/11/2022");
        expect(tarea.obtenerDescripcion()).toEqual("Investigar metodologias agiles");
    });

    it("Deberia devolver el nombre de la materia de la tarea", () => {
        tarea.crearTarea("Proyectos de grados", "Investigar metodologias agiles", "Taller de desarrollo", "16/11/2022");
        expect(tarea.obtenerMateria()).toEqual("Taller de desarrollo");
    });

    it("Deberia devolver la fecha de la tarea", () => {
        tarea.crearTarea("Proyectos de grados", "Investigar metodologias agiles", "Taller de desarrollo", "16/11/2022");
        expect(tarea.obtenerFecha()).toEqual("16/11/2022");
    });

    it("Deberia mostrar completamente una tarea con datos ingresados", () => {
        tarea.crearTarea("Funciones algebraicas", "Resolver los 10 ejercicios", "Calculo I", "01/12/2022");
        expect(tarea.mostrarTarea()).toEqual("titulo:Funciones algebraicas, descripcion:Resolver los 10 ejercicios, materia:Calculo I, fecha:01/12/2022")
    });

    it("Crear una tarea con detalles simples", () => {
        expect(tarea.crearTarea('diagramas', 'detalles', 'sis info', '05/08/2022')).toEqual("Creada con exito!.")
    });
});

describe("GUARDAR TAREAS", () => {
    it("Crear una tarea", () => {
        expect(tarea.crearTarea('diagramas', 'detalles', 'sis info', '05/2022')).toEqual("Creada con exito!.");
    });

    it("Sobreescribir una tarea", () => {
        expect(tarea.crearTarea('diagramas2', 'detalles2', 'sis info2', '05/20222')).toEqual("Creada con exito!.");
    });
});

describe("ELIMINAR TAREAS", () => {
    it("Deberia eliminar el titulo de la tarea", () => {
        tarea.eliminarMateria();
        expect(tarea.obtenerNombre()).toEqual("");
    });

    it("Deberia eliminar la descripcion de la tarea", () => {
        tarea.eliminarMateria();
        expect(tarea.obtenerNombre()).toEqual("");
    });

    it("Deberia eliminar el nombre de la tarea", () => {
        tarea.eliminarMateria();
        expect(tarea.obtenerNombre()).toEqual("");
    });

    it("Deberia eliminar la fecha de la tarea", () => {
        tarea.eliminarMateria();
        expect(tarea.obtenerNombre()).toEqual("");
    });
});