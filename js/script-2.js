// ¡¡¡Control de Flujos Y Condicionales!!!

// ¡¡Se ejecutara el alert porque color = rojo!!
// ¡El valor booleano sera true = ejecutable!

/* let color = "rojo"

if (color == "rojo") {
    alert("se ejecuta la operacion (alert) por que color es = rojo")
}

// ¡Condicional con datos del usuario ingresados en un prompt!

let edadAcceso = prompt("Ingrese su edad")

if (edadAcceso > 18) {
    alert("Bienvenido (:")
}

// ¡¡ if + else !!
// ¡Si no se cumple x condicion (if) -> ejecutar esto otro (else) ->!

let comprar = prompt("Ingrese 'si' para cpmprar/n Irese 'no' para salir")

if (comprar == "si") {
    alert("gracias por su compra")
}
else {
    alert("vuelva pronto")
}

// ¡¡Condicionales Anidados!!

let rangoDePack = prompt ("Ingrse Monto del Pack")

if (rangoDePack < 10){
    alert ("Pack Bronce")
}
else if (rangoDePack < 50){
    alert ("Pack Plata")
}
else if (rangoDePack < 80){
    alert ("Pack Gold")
}

else {
    alert ("Pack PLATINUM")
}

console.log ("Compra realizada", rangoDePack)

// ¡¡Condicionales Compuestos + Operadores relacionales!!
// ¡Operador "&&" 

let nombreIngresado = prompt ("Ingrse su nombre")
let apellidoIngresado = prompt ("Ingrese su apellido")

if ((nombreIngresado != "") && (apellidoIngresado != "")){
    alert("¡Bienvenido!")
}
else{
    alert ("Error, porfavor ingrese nombre y apellido")
}
 */
// ¡Operador "&&" + Operador "||"

let ingreseNombre = prompt("Ingresar Nombre")

if ((ingreseNombre != "") && ((ingreseNombre == "EMA") || (ingreseNombre == "ema"))) {
    alert("Bienvenida Ema")
}
else {
    alert("Error: Ingrese nombre valido")
}