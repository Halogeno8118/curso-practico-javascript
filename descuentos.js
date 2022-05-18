function calcularPrecioConDescuento (precio, descuento) {
    const precioDescuento = (descuento * precio) / 100
    const precioFinal = precio - precioDescuento
    return precioFinal
}
//const calcularPrecioConDescuento = (precio, descuento) => precio - ((descuento * precio) / 100)

function calcular() {
    const inputPrecio = document.getElementById('precio').value
    const inputDescuento = document.getElementById('descuento').value
    const resultado = calcularPrecioConDescuento(inputPrecio, inputDescuento)
    
    const output = document.getElementById('resultado')
    output.innerText = `El precio con descuento es: $${resultado} pesos.`
}