import Tareas from "./tareas.js"



describe("Crear una tarea", () => {
    let tareas = new Tareas;
    it("Creara una tarea con detalles simples", () => {
        expect(tareas.crear('diagramas', 'detalles', 'sis info', '05/2022')).toEqual("tareaCreada")
    });

    it("Mostrar una tarea con detalles simples", () => {
        expect(tareas.mostrar()).toEqual("titulo:diagramas, descripcion:detalles, materia:sis info, fecha:05/2022")
    });

});



/*describe("Guardar una tarea", () => {
    it("Creara una tarea con detalles simples", () => {
        expect(tareas.crear('diagramas', 'detalles', 'sis info', '05/2022'))
    });
});*/

