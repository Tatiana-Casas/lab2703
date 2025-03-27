const prompt = require("prompt-sync")();

let precio = Number(prompt("El precio de su comida sin propina es: "))
let porcentaje = Number(prompt("Que porcentaje le gustaría dar de propina: "))

function calculadorapropina(precio, porcentaje){
    const propinaaplicada = precio * (porcentaje / 100);
    const preciofull = precio + propinaaplicada;
    return preciofull;
}
const total = calculadorapropina(precio, porcentaje);
console.log(`Total a pagar es: $${total}`);