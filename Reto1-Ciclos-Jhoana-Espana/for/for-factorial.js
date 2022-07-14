// Ciclo para obtener el factorial de un numero

let num = parseInt(prompt("Por favor, ingrese un número"));

let total = 1;

for(let i = 1; i <= num; i++){
  total = total * i;
}

alert("El factorial de: " + num + " es: " + total);