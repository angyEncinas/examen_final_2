import Tarea from "./tarea.js"


describe("Crear una tarea", () => {
    let tarea = new Tarea;

    
    it("Creara una tarea con detalles simples", () => {
        tarea.crear('ejercicio', 'diagramas', 'sis info', '05/2022');


        expect(tarea.datosToHTML()).toEqual( "<p> tarea:" + tarea.titulo + " , " +
        " descripcion:" + tarea.descripcion + " , " +
        " materia:" + tarea.materia + " , " +
        " fecha:" + tarea.fecha +"</p>"  )
    });

    it("Deberia devolver el titulo de la tarea", () => {
        tarea.crear('practica', 'ejercicios', 'calculo', '05/2022');
        expect(tarea.obtenerTitulo()).toEqual(tarea.titulo);
    });
    it("Deberia devolver descripcion de la tarea", () => {
        tarea.crear('practica', 'ejercicios', 'calculo', '05/2022');
        expect(tarea.obtenerDescripcion()).toEqual(tarea.descripcion);
    });
    it("Deberia devolver la fecha de la tarea", () => {
        tarea.crear('practica', 'ejercicios', 'calculo', '05/2022');
        expect(tarea.obtenerFecha()).toEqual(tarea.fecha);
    });
    it("Deberia devolver la materia de la tarea", () => {
        tarea.crear('practica', 'ejercicios', 'calculo', '05/2022');
        expect(tarea.obtenerMateria()).toEqual(tarea.materia);
    });




});


describe("ELIMINAR tarea", () => {
    let tarea = new Tarea;
    tarea.crear('ejercicio', 'diagramas', 'sis info', '05/2022');

    it("la tarea debe estar eliminada", () => {
        tarea.eliminar();""
        expect(tarea.obtenerTitulo()).toEqual("");
        expect(tarea.obtenerDescripcion()).toEqual("");
        expect(tarea.obtenerEstado()).toEqual("");
        expect(tarea.obtenerMateria()).toEqual("");
        expect(tarea.obtenerFecha()).toEqual("");


    });

    /* 
    it("Deberia modificar la tarea", () => {
        materia.editarTarea();
        expect(materia.obtenerDocente()).toEqual("");
    });
    */
});

