// Media, Media Aritmética o Promedio
function calcularPromedio(lista) {
    const suma = lista.reduce((acc, cur) => acc + cur, 0)
    const promedio = suma / lista.length
    return promedio
}

// Mediana
const comparar = (a, b) => a - b
const esPar = (numero) => numero % 2 === 0

function calcularMediana(lista) {
    const sortedArray = lista.sort(comparar)
    const mitad = parseInt(sortedArray.length / 2)
    const elemento1 = sortedArray[mitad - 1]
    const elemento2 = sortedArray[mitad]
    let mediana

    esPar(sortedArray.length)
        ? mediana = calcularPromedio([elemento1, elemento2])
        : mediana = elemento2

    return mediana
}

// Moda
function calcularModa(lista) {
    const listaConteo = {}

    lista.map((e) => listaConteo[e] ? listaConteo[e] += 1 : listaConteo[e] = 1)
    const listaArreglo = Object.entries(listaConteo).sort((a, b) => a[1] - b[1])
    const moda = listaArreglo[listaArreglo.length - 1]

    return moda
}