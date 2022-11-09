import {crearTarea, obtenerListaTareas, limpiarListaTareas,
        eliminarTarea} from "./docente.js";

describe("C R E A R     T A R E A S", () => {
    beforeEach(() => {
        limpiarListaTareas();
    });
   it("Se crea una tarea", () => {
       expect(crearTarea("Calculo I", "Ecuaciones cubicas", "09/11/2022")).toEqual({
            nombreMateria: "Calculo I",
            nombreTarea: "Ecuaciones cubicas",
            fecha: "09/11/2022",
       });
   });

   it("Se crean varias tareas", () => {
    crearTarea("Fisica I","Examen parcial","20/11/2022");
    crearTarea("Ingles V","Participacion oral","05/10/2022");
    let listaEsperada = [{
        nombreMateria: "Fisica I",
        nombreTarea: "Examen parcial",
        fecha: "20/11/2022",
    },
    {
        nombreMateria: "Ingles V",
        nombreTarea: "Participacion oral",
        fecha: "05/10/2022",
    }]
        expect(obtenerListaTareas()).toEqual(listaEsperada);
    });
});

describe("E L I M I N A R       T A R E A S", () => {
    beforeEach(() => {
        limpiarListaTareas();
    });
    it("Borra la tarea asignada cuando la lista tiene 1 solo elemento", () => {
        crearTarea("Calculo I", "Ecuaciones cubicas", "09/11/2022")
        expect(eliminarTarea("Calculo I")).toEqual(0);
    });
});

describe("C R E A R     M A T E R I A S", () => {

});

describe("E L I M I N A R       M A T E R I A S", () => {

});