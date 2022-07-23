/*
localStorage and sessionStorage
https://es.javascript.info/localstorage

son como espacios en memoria permanentes dentro del navegador
como si el navegador tubiera un aUSB para guardar informacion
*/


let someVar = "foo"

console.log( someVar )

/* console
foo
let someVar = "Otra Cosa"
undefined
console.log( someVar )
Otra Cosa
undefined

si se refresca regresa y se realiza nuevamente el console.log regresa al valor inicial de "foo"

esto me impide hacer un loggin, por que yo esperaria que si ya me logguie una vez cuando refresque mi pagina pues siga logueado 
*/

/* local Storage: me va servir para guardar un dato en el navegador y se queda ahi hasta que yo lo borre.
    Session Storage: me va servir para guardar un dato en el navegador que solo vivira ahi mientras que la secion este abierta, es decir la pestaña siga abierta
*/

//guardar una variable en localStorage
//localStorage.setItem("nombre de la variable", "valor de la variable" )
localStorage.setItem("username", "Jonathan" )

//f12/pestaña"Aplication"/Izquierda"LocalStorage"/"AlmacenamientoLocal"(key:"username", Value:"Jonathan")

// Acceder al valor
//localStorage.getItem("nombre de la variable a extraer")
let username = localStorage.getItem("username")
console.log(username)

// Esto se hace en la consola pero antes se comenta la variable "foo"
// Cambiar el valor de esa variable, la sobreescribe
localStorage.setItem("username", "Raziel Iqui Balam" )
let username2 = localStorage.getItem("username")
console.log(username2)

// Eliminar el valor de esa variable

localStorage.removeItem("username", "Raziel Iqui Balam" )
let username3 = localStorage.getItem("username")
console.log(username3)

// si yo no estoy logueado deberia ver el formilario de login
// si sí estoy logeado deberia de ver la vienvenida con los datos

