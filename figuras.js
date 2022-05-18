// Cuadrado:
const perimetroCuadrado = (lado) => lado * 4
const areaCuadrado = (lado) => lado ** 2

// Triángulo:
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base
const areaTriangulo = (base, altura) => (base * altura) / 2

// círculo:
const diametroCirculo = (radio) => radio * 2
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI
const areaCirculo = (radio) => (radio ** 2) * PI

// Variables:
const PI = Math.PI

// Interacción con HTML
function calcularPerimetroDeCuadrado() {
    const input = document.getElementById('inputCuadrado').value
    const perimetro = perimetroCuadrado(input)
    alert(`El perímetro del cuadrado es: ${perimetro}u.`)
}

function calcularAreaDeCuadrado() {
    const input = document.getElementById('inputCuadrado').value
    const area = areaCuadrado(input)
    alert(`El área del cuadrado es: ${area}u².`)
}

//const calcularPerimetroDeCuadrado = () => alert(`El perímetro del cuadrado es: ${perimetroCuadrado(document.getElementById('inputCuadrado').value)}u.`)
//const calcularAreaDeCuadrado = () => alert(`El área del cuadrado es: ${areaCuadrado(document.getElementById('inputCuadrado').value)}u².`)

function calcularPerimetroDeTriangulo() {
    const lado1 = parseInt(document.getElementById('lado1').value)
    const lado2 = parseInt(document.getElementById('lado2').value)
    const base = parseInt(document.getElementById('base').value)
    const perimetro = perimetroTriangulo(lado1, lado2, base)
    alert(`El perímetro del triángulo es: ${perimetro}u.`)
}

function calcularAreaDeTriangulo() {
    const base = document.getElementById('base').value
    const altura = document.getElementById('altura').value
    const area = areaTriangulo(base, altura)
    alert(`El área del triángulo es: ${area}u².`)
}

function calcularAreaDeCircuo() {
    const radio = document.getElementById('radio').value
    const area = areaCirculo(radio)
    alert(`El área del círculo es: ${area}u².`)
}

function calcularPerimetroDeCirculo() {
    const radio = document.getElementById('radio').value
    const perimetro = perimetroCirculo(radio)
    alert(`El perímetro del círculo es: ${perimetro}u.`)
}

function calcularDiametroDeCirculo() {
    const radio = document.getElementById('radio').value
    const diametro = diametroCirculo(radio)
    alert(`El diámetro del círculo es: ${diametro}u.`)
}

// Consoles:
// console.group('Cuadrado')
// console.log(`Los lados del cuadrado miden ${ladoCuadrado}u.`)
// console.log(`El perímetro del cuadrado mide ${perimetroCuadrado}u.`)
// console.log(`El área del cuadrado mide ${areaCuadrado}u².`)
// console.groupEnd()

// console.group('Triángulo')
// console.log(`Los lados del Triángulo miden ${ladoTriangulo1}u, ${ladoTriangulo2}u, ${baseTriangulo}u.`)
// console.log(`La altura del Triángulo es de: ${alturaTriangulo}u.`)
// console.log(`El perímetro del Triángulo mide ${perimetroTriangulo}u.`)
// console.log(`El área del Triángulo mide ${areaTriangulo}u².`)
// console.groupEnd()

// console.group('Cículo')
// console.log(`El radio del Círculo es ${radioCirculo}u.`)
// console.log(`El diámetro del Círculo es ${diametroCirculo}u.`)
// console.log(`PI es: ${PI}.`)
// console.log(`El perímetro del Cículo mide ${perimetroCirculo}u.`)
// console.log(`El área del Cículo mide ${areaCirculo}u².`)
// console.groupEnd()