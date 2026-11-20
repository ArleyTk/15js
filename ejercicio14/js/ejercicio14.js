
let lista = []

function gasto() {

    let presupuesto = parseInt(document.getElementById("presupuesto").value)
    let presupuestoinput = document.getElementById("presupuesto")
    let nombree = document.getElementById("nombre")
    let valorr = document.getElementById("valor")
    let p1 = document.getElementById("p1")
    let p2 = document.getElementById("p2")

    presupuestoinput.setAttribute("disabled", "")

    lista.push({
        nombre: nombree.value,
        valor: parseInt(valorr.value)
    })

    p2.innerHTML = "";
    let totalGastado = 0
    let total = 0

    for (let i = 0; i < lista.length; i++) {
        p2.innerHTML += `Producto: ${lista[i].nombre} Valor: ${lista[i].valor} <br> <hr>`
        totalGastado += lista[i].valor
        total = (presupuesto - totalGastado)
        if (totalGastado < presupuesto) {
            p1.innerHTML = `RESUMEN: <br>  Presupuesto Inicial: ${presupuesto} <br> Compró: ${lista[i].nombre} <br> Costó: ${lista[i].valor} <br> Total de presupuesto: ${total}`

        } else {
            p1.innerHTML = `RESUMEN: <br>  Presupuesto Inicial: ${presupuesto} <br> Compró: ${lista[i].nombre} <br> Costó: ${lista[i].valor} <br> Total de presupuesto: ${total} <br> Has superado tu presupuesto.`

            p1.style.color = "red"
            boton.setAttribute("disabled", "")
        }


    }

    nombree.value = ""
    valorr.value = ""
}
