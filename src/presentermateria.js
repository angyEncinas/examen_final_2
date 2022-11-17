import Materia from "./materia";
import materias from "./materias.js"

const materiadada = document.querySelector("#nombre-materia-items");
const docente = document.querySelector("#docente-item");

const crear = document.querySelector("#crear-form");

const vista = document.querySelector("#vista-div");

const mensaje = "creada con exito !!!";
const divMaterias = document.querySelector("#lista-materias-div");

let nuevasMaterias = []


crear.addEventListener("submit", (event) => {
  event.preventDefault();
  const materia_nombre = materiadada.value;
  const docente_text = docente.value;

  let materia = new Materia();
  materia.crearMateria(materia_nombre,docente_text);
  nuevasMaterias.push(materia);

  vista.innerHTML = "<p>" + mensaje + "<p>" +
                    "</p>";

  let stringMaterias = "";
  for(i=0;i<nuevasMaterias.length;i++){
    stringMaterias = stringMaterias + nuevasMaterias[i].obtenerTodosLosDatos();
  }
  divMaterias.innerHTML = stringMaterias;

                    
});

