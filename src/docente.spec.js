import {crearTarea} from "./docente.js";

describe("TAREA", () => {
   it("Se crea una tarea", () => {
       expect(crearTarea("Calculo I", "Ecuaciones cubicas", "09/11/2022", "10/11/2022")).toEqual({
            nombreMateria: "Calculo I",
            nombreTarea: "Ecuaciones cubicas",
            fechaInicio: "09/11/2022",
            fechaFin: "10/11/2022",
       });
   });
});