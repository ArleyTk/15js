let boton = document.getElementById("boton")
let lista = []
let prioridad = document.getElementById("prioridad")
let tarea = document.getElementById("tarea")
let espacio = document.getElementById("espacio")

function agregar() {



    lista.push({
        prioridad: prioridad.value,
        tarea: tarea.value
    })


    espacio.innerHTML = ""
    for (let i = 0; i < lista.length; i++) {
        espacio.innerHTML += `
        <div class= "container">
         <div class= "row">
          <div class= "col">
           <div class="target mt-5">
             <span class="badge text-bg-info w-100">${lista[i].prioridad}</span>
             ${lista[i].tarea}<br>
            <div/>
          </div>
         </div>
        </div>
`

    }


    prioridad.value = "baja"
    tarea.value = ""

}