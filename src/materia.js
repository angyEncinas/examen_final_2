class Materia {
    constructor() {
        this.nombreMateria = "";
        this.descripcion = "";
        this.docente = "";
    }
    crearMateria(siglaynombre,descripcion,docente){
        this.nombreMateria = siglaynombre;
        this.descripcion = descripcion;
        this.docente = docente;
    }
    obtenerNombre(){
        return this.nombreMateria;
    }
    obtenerDescripcion(){
        return this.descripcion;
    }
    obtenerDocente(){
        return this.docente;
    }
    obtenerTodosLosDatos(){
        let cadenaDatos = "<p> Materia:" + this.obtenerNombre() + "<p>" +
                    "<p> Tarea:" + this.obtenerDescripcion() + "<p>" +
                    "<p> Fecha:"+ this.obtenerDocente() + "<p>" +
                    "</p>";
        return cadenaDatos;

    }
}

export default Materia;