function agregar() {
    let text = document.getElementById("text")
    let lista = document.getElementById("lista")

    lista.innerHTML += `<ul>${text.value}</ul>`
    text.value = ""
}