const $agregar = document.querySelector("#agregar");
const $quitar = document.querySelector("#quitar");
const $calcular = document.querySelector("#calcular");

$agregar.onclick = function(){
	agregar();
	return false;
}

$quitar.onclick = function(){
	quitar();
	return false;
}

$calcular.onclick = function(){
	calcularMayorSalarioAnual();
	calcularMenorSalarioAnual();
	calcularPromedioAnual();
	calcularPromedioMensual();
	mostrarResultados();
	return false;
}

function agregar(){
	const $div = document.querySelector("#familiares");

	const $label = document.createElement("label");
	$label.textContent = "Salario anual";
	$label.className = "labelSalario";

	const $input = document.createElement("input");
	$input.type="number";
	$input.className = "inputSalario";

	const $break = document.createElement("br");
	$break.className = "breakSalario";
	

	$div.appendChild($label);
	$div.appendChild($input);
	$div.appendChild($break);
}

function quitar(){
	const $div = document.querySelector("#familiares");

	const $label = document.querySelector(".labelSalario");

	const $input = document.querySelector(".inputSalario");

	const $break = document.querySelector(".breakSalario");

	$div.removeChild($label);
	$div.removeChild($input);
	$div.removeChild($break);
}

function calcularMayorSalarioAnual(){
	const $input = document.querySelectorAll(".inputSalario");

	let newArray = [];

	for (i=0; i<$input.length; i++){
		newArray.push(Number($input[i].value));
	}

	let mayorSalarioAnual = Math.max(...newArray);

	$mayor = document.querySelector("#mayor");
	$mayor.textContent = (mayorSalarioAnual);
}

function calcularMenorSalarioAnual(){
	const $input = document.querySelectorAll(".inputSalario");

	let newArray = [];

	for (i=0; i<$input.length; i++){
		newArray.push(Number($input[i].value));
	}

	let menorSalarioAnual = Math.min(...newArray);

	$menor = document.querySelector("#menor");
	$menor.textContent = (menorSalarioAnual);

}

function calcularPromedioAnual(){
	const $input = document.querySelectorAll(".inputSalario");

	let newArray = [];
	let sumArray = 0;

	for (i=0; i<$input.length; i++){
		newArray.push(Number($input[i].value));
	}

	for (i=0; i<newArray.length; i++){
		sumArray += Number(newArray[i]);
	}

	let promedio = parseInt(sumArray / newArray.length);

	$promedio = document.querySelector("#promedioAnual");

	$promedio.textContent = (promedio);

	console.log(newArray,sumArray);
}

function calcularPromedioMensual(){
	const $input = document.querySelectorAll(".inputSalario");

	let newArray = [];
	let sumArray = 0;

	for (i=0; i<$input.length; i++){
		newArray.push(Number($input[i].value));
	}

	for (i=0; i<newArray.length; i++){
		sumArray += newArray[i];
	}

	promedioMensual = parseInt(sumArray / 12);

	document.querySelector("#promedioMensual").textContent = (promedioMensual);
}

function mostrarResultados(){
	$resultados = document.querySelector("#calculos");
	$resultados.className = "";
}