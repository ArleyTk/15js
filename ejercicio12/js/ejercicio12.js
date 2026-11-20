const p1 = document.getElementById("p1")
const numero = document.getElementById("numero")
function tabla() {
    let valorNumero = numero.value
    p1.innerHTML = " "
    for (let i = 0; i <= 10; i++) {
        let resultado = (valorNumero * i)
        p1.innerHTML += `${valorNumero}x ${i} = ${resultado} <br>`

    }

}