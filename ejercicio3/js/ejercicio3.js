let input = document.getElementById("evento")
let parrafo = document.getElementById("parrafo")

input.addEventListener("input", function () {
    parrafo.textContent = input.value
})