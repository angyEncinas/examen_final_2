import {crearTarea, obtenerListaTareas, limpiarListaTareas} from "./docente.js";

describe("TAREA", () => {
    beforeEach(() => {
        limpiarListaTareas();
    });
   it("Se crea una tarea", () => {
       expect(crearTarea("Calculo I", "Ecuaciones cubicas", "09/11/2022", "10/11/2022")).toEqual({
            nombreMateria: "Calculo I",
            nombreTarea: "Ecuaciones cubicas",
            fechaInicio: "09/11/2022",
            fechaFin: "10/11/2022",
       });
   });

   it("Se crean varias tareas", () => {
    crearTarea("Fisica I","Examen parcial","20/11/2022","20/11/2022");
    crearTarea("Ingles V","Participacion oral","05/10/2022","10/10/2022");
    let listaEsperada = [{
        nombreMateria: "Fisica I",
        nombreTarea: "Examen parcial",
        fechaInicio: "20/11/2022",
        fechaFin: "20/11/2022",
    },
    {
        nombreMateria: "Ingles V",
        nombreTarea: "Participacion oral",
        fechaInicio: "05/10/2022",
        fechaFin: "10/10/2022",
    }]
        expect(obtenerListaTareas()).toEqual(listaEsperada);
    });
});