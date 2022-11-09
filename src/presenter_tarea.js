// V I S T A  D E   T A R E A S \\
const materia = document.querySelector("#materia-items");
const tarea = document.querySelector("#tarea-item");
const fecha = document.querySelector("#fecha-item");
const noEnteros = document.querySelectorAll(".noNumberField")

const crear = document.querySelector("#crear-form");

const vista = document.querySelector("#vista-div");

crear.addEventListener("submit", (event) => {
  event.preventDefault();

  const MateriaList = materia.value;
  const TareaText = tarea.value;
  const FechaText = fecha.value;

  //Mensaje
  alert("Tarea creada con exito!.")

  vista.innerHTML = "<p> Materia: " + MateriaList + "<p>" +
                    "<p> Tarea: " + TareaText + "<p>" +
                    "<p> Fecha: "+ FechaText + "<p>" +
                    "</p>";
});

// Se prohibe numeros enteros en los campos \\
noEnteros.forEach(noNumberField=>
  {
    noNumberField.addEventListener("input", (event) => {
      event.preventDefault();
      let currentLength = String(noNumberField.value).length-1
      if (isNaN(noNumberField.value[currentLength]) == false)
      {
        noNumberField.value = noNumberField.value.slice(0, currentLength-1)
      }
    });
  })