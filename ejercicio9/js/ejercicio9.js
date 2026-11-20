let target = document.getElementById("target")
let nombre = document.getElementById("nombre")
let profesion = document.getElementById("profesion")
let imagen = document.getElementById("imagen")
let img = document.getElementById("img")

function actualizar() {
    p1.innerHTML = `Nombre: ${nombre.value}<br>Profesión: ${profesion.value}<br>`
    img.src = imagen.value

}

nombre.addEventListener("input", actualizar)
profesion.addEventListener("input", actualizar)
imagen.addEventListener("input", actualizar)

