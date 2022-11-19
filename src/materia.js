import Tarea from "./tarea.js"

class Materia {
    constructor() {
        this.nombreMateria = "";
        this.docente = "";
    }
    crearMateria(siglaynombre,docente){
        this.nombreMateria = siglaynombre;
        this.docente = docente;
    }

    obtenerNombre(){
        return this.nombreMateria;
    }

    obtenerDocente(){
        return this.docente;
    }

    obtenerTodosLosDatos(){
        let cadenaDatos = "<p> Materia:" + this.obtenerNombre() + "<p>" +
                    "<p> Docente:"+ this.obtenerDocente() + "<p>" +
                    "</p>";

        return cadenaDatos;

    }

    eliminar(){
        this.nombreMateria = "";
        this.docente = "";
    }

}

export default Materia;