class Tarea{
    constructor(){
        this.titulo = "";
        this.descripcion = "";
        this.materia = "";
        this.fecha = "";
        this.estado = "pendiente";

    }


    crear(title, desc, mat, date){
        this.titulo = title;
        this.descripcion = desc;
        this.materia = mat;
        this.fecha = date;
    }

    datosToHTML(){
        let cadenaDatos = "<p> tarea:" + this.titulo + " , " +
        " descripcion:" + this.materia + " , " +
        " fecha:" + this.fecha +"</p>";
        return cadenaDatos;    
    }


/** 
    isFromSubject(materia)
    {
        if (materia == this.materia)
        {
            return true;
        }
    }
    */
}

export default Tarea

