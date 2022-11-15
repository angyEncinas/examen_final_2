class Tarea{
    constructor(){
        this.titulo = "";
        this.descripcion = "";
        this.materia = "";
        this.fecha = "";
    }

    mostrar(){
        return `titulo:${this.titulo}, descripcion:${this.descripcion}, materia:${this.materia}, fecha:${this.fecha} `;
    }

    crear(title, desc, mat, date){
        this.titulo = title;
        this.descripcion = desc;
        this.materia = mat;
        this.fecha = date;
        return "Creada con exito!.";
    }
}

export default Tarea

