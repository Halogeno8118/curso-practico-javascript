
//  Helpers
const comparar = (a, b) => a - b
const esPar = (numero) => numero % 2 === 0

//  Promedio
function calcularPromedio(lista) {
    const suma = lista.reduce((acc, cur) => acc + cur, 0)
    const promedio = suma / lista.length
    return promedio
}

//  Mediana
function medianaSalarios(lista) {

    const mitad = parseInt(lista.length / 2)
    const elemento1 = lista[mitad - 1]
    const elemento2 = lista[mitad]
    let mediana

    esPar(lista.length)
        ? mediana = calcularPromedio([elemento1, elemento2])
        : mediana = elemento2
    return mediana
}

//  Mediana General
const salarios = colombia.map((persona) => persona.salary)
const salariosSorted = salarios.sort(comparar)
const medianaGeneral = medianaSalarios(salariosSorted)

//  Mediana Top 10%
const sliceStart = (salariosSorted.length * 90) / 100
const salariosTop10 = salariosSorted.slice(sliceStart)
const medianaTop10 = medianaSalarios(salariosTop10)