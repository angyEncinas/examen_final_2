import Tarea from "./tarea.js"
let tareas = new Tarea;

describe("CREAR UNA TAREA", () => {
    it("Deberia devolver el titulo de la tarea", () => {
        materia.crearTarea("Proyectos de grados");
        expect(materia.mostrarTarea()).toEqual("Proyectos de grados");
    });

    it("Deberia devolver la descripcion de la tarea", () => {
        materia.crearTarea("Investigar metodologias agiles");
        expect(materia.mostrarTarea()).toEqual("Investigar metodologias agiles");
    });

    it("Deberia devolver el nombre de la materia de la tarea", () => {
        materia.crearTarea("Taller de desarrollo");
        expect(materia.mostrarTarea()).toEqual("Taller de desarrollo");
    });

    it("Deberia devolver la fecha de la tarea", () => {
        materia.crearTarea("16/11/2022");
        expect(materia.mostrarTarea()).toEqual("16/11/2022");
    });

    it("Crear una tarea con detalles simples", () => {
        expect(tareas.crearTarea('diagramas', 'detalles', 'sis info', '05/2022')).toEqual("Creada con exito!.")
    });

    it("Mostrar una tarea con detalles simples", () => {
        expect(tareas.mostrarTarea()).toEqual("titulo:diagramas, descripcion:detalles, materia:sis info, fecha:05/2022")
    });
});

describe("GUARDAR TAREAS", () => {
    let tarea = new Tarea();
    it("Crear una tarea", () => {
        expect(tarea.crearTarea('diagramas', 'detalles', 'sis info', '05/2022')).toEqual("Creada con exito!.");
    });

    it("Sobreescribir una tarea", () => {
        expect(tarea.crearTarea('diagramas2', 'detalles2', 'sis info2', '05/20222')).toEqual("Creada con exito!.");
    });
});
