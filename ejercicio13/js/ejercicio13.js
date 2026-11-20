let imgpequena1 = document.getElementById("imgpequena1")
let imgpequena2 = document.getElementById("imgpequena2")
let imgpequena3 = document.getElementById("imgpequena3")
let imgGrande = document.getElementById("imgGrande")
let titulo = document.getElementById("titulo")

imgpequena1.addEventListener('click', function () {
    imgGrande.src = imgpequena1.src
    titulo.textContent = "Lázaro"
})

imgpequena2.addEventListener('click', function () {
    imgGrande.src = imgpequena2.src
    titulo.textContent = "Doffy"
})

imgpequena3.addEventListener('click', function () {
    imgGrande.src = imgpequena3.src
    titulo.textContent = "Paz"
})