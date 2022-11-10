
describe("Crear una tarea", () => {
    it("Creara una tarea con detalles simples", () => {
        expect(tareas.crear('diagramas', 'detalles', 'sis info', '05/2022').toEqual("tareaCreada"))
    });
});


/*describe("Guardar una tarea", () => {
    it("Creara una tarea con detalles simples", () => {
        expect(tareas.crear('diagramas', 'detalles', 'sis info', '05/2022'))
    });
});*/

