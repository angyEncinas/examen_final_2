class Materia {
    constructor() {
        this.nombreMateria = "";
        this.descripcion = "";
    }
    crearMateria(siglaynombre,descripcion){
        this.nombreMateria = siglaynombre;
        this.descripcion = descripcion;
    }
    obtenerNombre(){
        return this.nombreMateria;
    }
    obtenerDescripcion(){
        return this.descripcion;
    }
}

export default Materia;