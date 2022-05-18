function altura(lado1, lado2, base) {
    if (lado1 === lado2 && lado1 !== base) {
        const altura = Math.sqrt((lado1 ** 2) - ((base / 2) ** 2))
        console.log(`La altura es: ${altura}u.`)
    } else {
        console.log('No es un triángulo isosceles.')
    }
}

console.log(altura(2, 2, 3))