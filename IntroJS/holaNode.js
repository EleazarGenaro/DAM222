console.log("Hola, Node.js!");
let edad1 = 23;
let edad2 = 30;

console.log("Edad Promedio: " + (edad1 + edad2) / 2);

/* Medir tiempo de un proceso */
console.time("miProceso");
for(let i=0; i<100000000; i++){}
console.timeEnd("miProceso");