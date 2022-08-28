var titulo = document.querySelector(".titulo");
titulo.textContent = "Cida Nutricionista";


  var paciente = document.querySelector("#primeiro-paciente");
  var tdPeso   = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = document.querySelector(".info-imc");

  var pesoEhValido = true;
  var alturaEhvalida = true;

  if(peso <= 0 || peso >= 1000 ){
    console.log("peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
  }

  if(altura <= 0 || altura >= 3.00 ){
    console.log("Altura inválida");
    alturaEhvalida = false;
    tdImc.textContent = "Altura inválida!";
  }
if( alturaEhvalida && pesoEhValido){
  var IMC = peso / (altura * altura);
  tdImc.textContent = IMC;
  console.log(IMC);
}
