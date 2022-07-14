// funcion para saber si un numero es primo

var num = prompt("Introduzca un número:");

for (var i = 2; i < 3; i++) {
  if ( num % i == 0 ) {
    alert(num + " no es un número primo");
  } else {
    alert(num + " es un número primo");
  }
}