const verdeElemento = document.getElementById("verde")
const amaElemento = document.querySelector(".warning")
const rojoElemento = document.getElementById("rojo")
const p1 = document.getElementById("p1")

function verde() {
    verdeElemento.classList.toggle('bg-success');
    amaElemento.classList.remove('bg-warning')
    rojoElemento.classList.remove('bg-danger')
    p1.textContent = "Puede pasar"
    p1.style.color = "green"
}

function amarillo() {
    amaElemento.classList.toggle('bg-warning');
    verdeElemento.classList.remove('bg-success');
    rojoElemento.classList.remove('bg-danger')
    p1.textContent = `Alerta`
    p1.style.color = "yellow"
}


rojoElemento.addEventListener('click', function () {
    rojoElemento.classList.toggle('bg-danger')
    verdeElemento.classList.remove('bg-success');
    amaElemento.classList.remove('bg-warning')
    p1.textContent = "Espere"
    p1.style.color = "red"
})