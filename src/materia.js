class Materia {
    constructor() {
        this.nombreMateria = "";
    }
    crearMateria(siglaynombre){
        this.nombreMateria = siglaynombre;
    }
    obtenerNombre(){
        return this.nombreMateria;
    }
}

export default Materia;