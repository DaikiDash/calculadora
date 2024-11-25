
var numero = 0;
const getNum = document.getElementById('txt');
const res = document.getElementById('Result');
const porCeroNO = document.getElementById('titulo');

function sumar(){
   let valor = Number(getNum.value);
   numero += valor;
   res.textContent = `Resultado: ${numero}`;
}

function restar(){
   let valor = Number(getNum.value);
   numero -= valor;
   res.textContent = `Resultado: ${numero}`;
}

function multiplicar(){
   let valor = Number(getNum.value);
   numero *= valor;
   res.textContent = `Resultado: ${numero}`;
}

function dividir(){
   let valor = Number(getNum.value);
   if (valor > 0){
   numero /= valor;
   res.textContent = `Resultado: ${numero}`;
}
else{
alert("¿Sos tremendo boluda o me queres explotar el programa?, gracias a Odin puse esta linea de codigo, sino me explota la compu cada vez que dividen por 0");
porCeroNO.textContent = "¿¡QUE HACES!?☠️"
}
}
function borrar(){
   res.textContent = `Resultado: ${0}`;
}